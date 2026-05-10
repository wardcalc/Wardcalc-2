'use strict';
window.onerror = function(msg, url, line) { alert("🚨 MATH ERROR: " + msg + " line " + line); };

// --- 1. HELPERS ---
function gv(g){
    var e = document.querySelector('[data-g="' + g + '"].on');
    return e ? parseFloat(e.getAttribute('data-v')) : null;
}

function rowS(num, text) {
    if (!text || text === 'undefined') return '';
    return '<div style="margin-bottom:12px; display:flex; gap:10px;"><span style="color:var(--gold); font-weight:bold;">' + num + '.</span> <span>' + text + '</span></div>';
}

function rowD(title, desc) {
    if (!title) return '';
    return '<div style="margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.05);"><strong style="color:var(--white); font-size:15px; display:block; margin-bottom:4px;">' + title + '</strong><span style="color:var(--w60); font-size:13px; line-height:1.5;">' + desc + '</span></div>';
}

// Drug Safety Proxy: Prevents crash if drugs.js is missing a function
var Rx = function(drugName) {
    if (typeof window.RX !== 'undefined' && window.RX && typeof window.RX[drugName] === 'function') {
        return window.RX[drugName]();
    }
    return rowD(drugName.replace(/_/g, ' ').toUpperCase(), 'Consult institutional guidelines for dosage.');
};

// --- 2. CALCULATORS ---

// 1. GCS
window.calc_gcs = function(){
    var e = gv('ge'), v = gv('gv'), m = gv('gm');
    if(e===null || v===null || m===null) return alert("Select all fields");
    var s = e + v + m;
    var sev = s >= 13 ? 'lo' : s >= 9 ? 'md' : 'hi';
    var plan = s >= 13 ? rowS(1, window.t('r_gcs_mild_1'))+rowS(2, window.t('r_gcs_mild_2')) : s >= 9 ? rowS(1, window.t('r_gcs_mod_1'))+rowS(2, window.t('r_gcs_mod_2')) : rowS(1, window.t('r_gcs_sev_1'))+rowS(2, window.t('r_gcs_sev_2'));
    window.showResult(s, '/15', sev, window.t(s >= 13 ? 'r_gcs_mild' : s >= 9 ? 'r_gcs_mod' : 'r_gcs_sev'), plan, Rx('thiamine')+Rx('manni'));
};

// 2. APGAR
window.calc_apgar = function(){
    var ks = ['aa','ap','ag','ac','ar'];
    var s = 0;
    for(var i=0; i<ks.length; i++){
        var val = gv(ks[i]); if(val===null) return alert("Select all fields");
        s += val;
    }
    var sev = s >= 7 ? 'lo' : s >= 4 ? 'md' : 'hi';
    window.showResult(s, '/10', sev, window.t(s >= 7 ? 'r_apgar_norm' : s >= 4 ? 'r_apgar_mod' : 'r_apgar_crit'), rowS(1, window.t(s >= 7 ? 'r_apgar_norm_1' : s >= 4 ? 'r_apgar_mod_1' : 'r_apgar_crit_1')), Rx('vitk'));
};

// 3. WELLS DVT
window.calc_wellsdvt = window.calc_dvt = function(){
    var ks = ['d1','d2','d3','d4','d5','d6','d7','d8','d9'];
    var s = 0; ks.forEach(function(k) { s += (gv(k) || 0); });
    var sev = s >= 3 ? 'hi' : s >= 1 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t(s >= 3 ? 'r_dvt_hi' : s >= 1 ? 'r_dvt_md' : 'r_dvt_lo'), rowS(1, window.t(s >= 3 ? 'r_dvt_hi_1' : s >= 1 ? 'r_dvt_md_1' : 'r_dvt_lo_1')), Rx('apix_dvt'));
};

// 4. WELLS PE
window.calc_wellspe = window.calc_pe = function(){
    var ks = ['p1','p2','p3','p4','p5','p6','p7'];
    var s = 0; ks.forEach(function(k) { s += (gv(k) || 0); });
    var sev = s > 4 ? 'hi' : s >= 2 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t(s > 4 ? 'r_pe_hi' : s >= 2 ? 'r_pe_md' : 'r_pe_lo'), rowS(1, window.t(s > 4 ? 'r_pe_hi_1' : s >= 2 ? 'r_pe_md_1' : 'r_pe_lo_1')), Rx('enox'));
};

// 5. CURB-65
window.calc_curb65 = function(){
    var ks = ['c1','c2','c3','c4','c5'];
    var s = 0; ks.forEach(function(k) { s += (gv(k) || 0); });
    var sev = s >= 3 ? 'hi' : s === 2 ? 'md' : 'lo';
    window.showResult(s, '/5', sev, window.t(s >= 3 ? 'r_curb_hi' : s === 2 ? 'r_curb_md' : 'r_curb_lo'), rowS(1, window.t(s >= 3 ? 'r_curb_hi_1' : 'r_curb_lo_1')), Rx('amox_curb'));
};

// 6. CHADS-VASc
window.calc_chads2 = function(){
    var ks = ['ch_c','ch_h','ch_a2','ch_d','ch_s2','ch_v','ch_a1','ch_sex'];
    var s = 0; ks.forEach(function(k) { s += (gv(k) || 0); });
    var sev = s >= 2 ? 'hi' : s === 1 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t(s >= 2 ? 'r_chads_hi' : s === 1 ? 'r_chads_md' : 'r_chads_lo'), rowS(1, window.t('r_chads_hi_1')), Rx('apix_af'));
};

// 7. CHILD-PUGH
window.calc_childpugh = function(){
    var ks = ['cb','ca','cp','casc','ce'];
    var s = 0;
    for(var i=0; i<ks.length; i++){
        var val = gv(ks[i]); if(val===null) return alert("Select all fields");
        s += val;
    }
    var sev = s >= 10 ? 'hi' : s >= 7 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t(s >= 10 ? 'r_cp_c' : s >= 7 ? 'r_cp_b' : 'r_cp_a'), rowS(1, window.t('r_cp_c_1')), Rx('lact')+Rx('spiro'));
};

// 8. BMI
window.calc_bmi = function(){
    var w = parseFloat(document.getElementById('bw').value);
    var h = parseFloat(document.getElementById('bh').value)/100;
    if(isNaN(w) || isNaN(h)) return alert("Enter weight and height");
    var b = (w/(h*h)).toFixed(1);
    var sev = b >= 30 ? 'hi' : b >= 25 ? 'md' : 'lo';
    var interp = b < 18.5 ? 'r_bmi_under' : b < 25 ? 'r_bmi_norm' : b < 30 ? 'r_bmi_over' : b < 35 ? 'r_bmi_ob1' : 'r_bmi_ob2';
    window.showResult(b, 'kg/m²', sev, window.t(interp), rowS(1, window.t(interp+'_1')), '');
};

// 9. EGFR (CKD-EPI 2021 Formula)
window.calc_egfr = function(){
    var cr = parseFloat(document.getElementById('ecr').value);
    var age = parseFloat(document.getElementById('eage').value);
    var sex = gv('esex'); 
    if(isNaN(cr) || isNaN(age) || sex === null) return alert("Fill all fields");
    var crMg = cr/88.4;
    var k = (sex === 1.012) ? 0.7 : 0.9;
    var a = (sex === 1.012) ? -0.241 : -0.302;
    var egfr = Math.round(142 * Math.pow(Math.min(crMg/k, 1), a) * Math.pow(Math.max(crMg/k, 1), -1.200) * Math.pow(0.9938, age) * sex);
    var sev = egfr < 30 ? 'hi' : egfr < 60 ? 'md' : 'lo';
    window.showResult(egfr, 'mL/min', sev, "Renal Function Assessed", rowS(1, "Review renally cleared medications."), Rx('acei'));
};

// 10. MEWS
window.calc_mews = function(){
    var ks = ['mrr','mbp','mhr','mtemp','mavpu'];
    var s = 0;
    for(var i=0; i<ks.length; i++){
        var val = gv(ks[i]); if(val===null) return alert("Select all fields");
        s += val;
    }
    var sev = s >= 5 ? 'hi' : s >= 3 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t(s >= 5 ? 'r_mews_hi' : s >= 3 ? 'r_mews_md' : 'r_mews_lo'), rowS(1, window.t('r_mews_hi_1')), Rx('iv_fluid'));
};

// 11. CENTOR
window.calc_centor = function(){
    var ks = ['cen1','cen2','cen3','cen4','cenage'];
    var s = 0; ks.forEach(function(k) { s += (gv(k) || 0); });
    var sev = s >= 4 ? 'hi' : s >= 2 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t(s >= 4 ? 'r_centor_hi' : s >= 2 ? 'r_centor_md' : 'r_centor_lo'), rowS(1, window.t('r_centor_hi_1')), Rx('penV'));
};

// 12. NIHSS
window.calc_nihss = function(){
    var el = document.getElementById('nihss_s');
    if(!el || el.value === "") return alert("Enter score");
    var s = parseInt(el.value);
    var sev = s > 15 ? 'hi' : s > 5 ? 'md' : 'lo';
    window.showResult(s, '/42', sev, window.t(s > 20 ? 'r_nihss_sev' : s > 15 ? 'r_nihss_modsev' : 'r_nihss_minor'), rowS(1, window.t('r_nihss_mod_1')), Rx('altep_str'));
};

// 13. SOFA
window.calc_sofa = function(){
    var ks = ['sr','sc','sl','scv','sn','sk'];
    var s = 0; ks.forEach(function(k) { s += (gv(k) || 0); });
    var sev = s >= 12 ? 'hi' : s >= 7 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t(s >= 12 ? 'r_sofa_hi' : s >= 7 ? 'r_sofa_md' : 'r_sofa_lo'), rowS(1, window.t('r_sofa_hi_1')), Rx('nora'));
};

// 14. RANSON
window.calc_ranson = function(){
    var ks = ['rn1','rn2','rn3','rn4','rn5','rn6','rn7','rn8','rn9','rn10'];
    var s = 0; ks.forEach(function(k) { s += (gv(k) || 0); });
    var sev = s >= 5 ? 'hi' : s >= 3 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t(s >= 5 ? 'r_ranson_hi' : s >= 3 ? 'r_ranson_md' : 'r_ranson_lo'), rowS(1, window.t('r_ranson_hi_1')), Rx('hart'));
};

// 15. PSI/PORT
window.calc_psi = function(){
    var age = parseFloat(document.getElementById('psi_age').value);
    var sex = gv('psi_sex');
    if(isNaN(age) || sex === null) return alert("Fill age and sex");
    var s = age + sex;
    var ks = ['psi_nh','psi_neo','psi_liv','psi_chf','psi_cvd','psi_ren','psi_ams','psi_rr','psi_sbp','psi_temp','psi_pulse','psi_ph','psi_bun','psi_na','psi_gluc','psi_hct','psi_pao2','psi_eff'];
    ks.forEach(function(k) { s += (gv(k) || 0); });
    var cls = s <= 50 ? 1 : s <= 70 ? 2 : s <= 90 ? 3 : s <= 130 ? 4 : 5;
    var sev = cls >= 4 ? 'hi' : cls === 3 ? 'md' : 'lo';
    window.showResult('Class ' + cls, '(' + s + ' pts)', sev, window.t('r_psi_' + cls), rowS(1, window.t('r_psi_' + cls + '_1')), Rx('amox_curb'));
};
