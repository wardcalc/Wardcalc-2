'use strict';
window.onerror = function(m, u, l) { alert("🚨 MATH ERROR: " + m + " line " + l); };

// Safe value fetcher (returns 0 if not selected)
function gv(g){ var e = document.querySelector('[data-g="' + g + '"].on'); return e ? parseFloat(e.getAttribute('data-v')) : 0; }

// --- 1. GCS ---
window.calc_gcs = function(){
    var e = gv('ge'), v = gv('gv'), m = gv('gm');
    var s = e + v + m; if(s < 3) s = 3;
    var sev = s >= 13 ? 'lo' : s >= 9 ? 'md' : 'hi';
    var interp = window.t(s >= 13 ? 'r_gcs_mild' : s >= 9 ? 'r_gcs_mod' : 'r_gcs_sev');
    window.showResult(s, '/15', sev, interp, "Monitor neuro status hourly.", "Thiamine 100mg IV.");
};

// --- 2. APGAR ---
window.calc_apgar = function(){
    var s = gv('aa')+gv('ap')+gv('ag')+gv('ac')+gv('ar');
    var sev = s >= 7 ? 'lo' : s >= 4 ? 'md' : 'hi';
    window.showResult(s, '/10', sev, window.t('r_apgar_norm'), "Routine neonatal care.", "Vitamin K 1mg IM.");
};

// --- 3. WELLS DVT ---
window.calc_wellsdvt = window.calc_dvt = function(){
    var s = 0; ['d1','d2','d3','d4','d5','d6','d7','d8','d9'].forEach(function(k){ s += gv(k); });
    var sev = s >= 3 ? 'hi' : s >= 1 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_dvt_hi'), "Consider Doppler Ultrasound.", "Apixaban 10mg BD.");
};

// --- 4. WELLS PE ---
window.calc_wellspe = window.calc_pe = function(){
    var s = 0; ['p1','p2','p3','p4','p5','p6','p7'].forEach(function(k){ s += gv(k); });
    var sev = s > 4 ? 'hi' : s >= 2 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_pe_hi'), "Urgent CTPA required.", "Enoxaparin 1.5mg/kg.");
};

// --- 5. CURB-65 ---
window.calc_curb65 = function(){
    var s = 0; ['c1','c2','c3','c4','c5'].forEach(function(k){ s += gv(k); });
    var sev = s >= 3 ? 'hi' : s === 2 ? 'md' : 'lo';
    var interp = s >= 3 ? window.t('r_curb_hi') : s === 2 ? window.t('r_curb_md') : window.t('r_curb_lo');
    window.showResult(s, '/5', sev, interp, "Follow CAP protocol.", "Co-amoxiclav + Clarithromycin.");
};

// --- 6. CHA2DS2-VASc ---
window.calc_chads2 = function() {
    var s = 0; ['ch_c','ch_h','ch_a2','ch_d','ch_s2','ch_v','ch_a1','ch_sex'].forEach(function(k){ s += gv(k); });
    var sev = (s >= 2) ? 'hi' : (s === 1) ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_chads_' + sev), "Anticoagulation recommended.", "Apixaban 5mg BD.");
};

// --- 7. CHILD-PUGH ---
window.calc_childpugh = function(){
    var s = gv('cb')+gv('ca')+gv('cp')+gv('casc')+gv('ce');
    var cls = s <= 6 ? 'A' : s <= 9 ? 'B' : 'C';
    var sev = s <= 6 ? 'lo' : s <= 9 ? 'md' : 'hi';
    window.showResult(s, 'pts (Class ' + cls + ')', sev, window.t('r_cp_a'), "Evaluate for transplant.", "Lactulose 30ml TDS.");
};

// --- 8. BMI ---
window.calc_bmi = function(){
    var w = parseFloat(document.getElementById('bw').value), h = parseFloat(document.getElementById('bh').value)/100;
    if(!w || !h) return alert(window.t('alert_msg'));
    var b = (w/(h*h)).toFixed(1);
    var sev = b >= 30 ? 'hi' : b >= 25 ? 'md' : 'lo';
    window.showResult(b, 'kg/m²', sev, window.t('r_bmi_norm'), "Lifestyle optimization.", "Consider Orlistat.");
};

// --- 9. EGFR (CKD-EPI 2021) ---
window.calc_egfr = function(){
    var cr = parseFloat(document.getElementById('ecr').value), age = parseFloat(document.getElementById('eage').value), sex = gv('esex');
    if(!cr || !age || !sex) return alert(window.t('alert_msg'));
    var crMg = cr/88.4, k = (sex === 1.012) ? 0.7 : 0.9, a = (sex === 1.012) ? -0.241 : -0.302;
    var eg = Math.round(142 * Math.pow(Math.min(crMg/k, 1), a) * Math.pow(Math.max(crMg/k, 1), -1.200) * Math.pow(0.9938, age) * sex);
    var sev = eg < 30 ? 'hi' : eg < 60 ? 'md' : 'lo';
    window.showResult(eg, 'mL/min', sev, window.t('r_egfr_g1'), "Review nephrotoxic meds.", "ACE Inhibitor.");
};

// --- 10. MEWS ---
window.calc_mews = function(){
    var s = gv('mrr')+gv('mbp')+gv('mhr')+gv('mtemp')+gv('mavpu');
    var sev = s >= 5 ? 'hi' : s >= 3 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_mews_hi'), "Escalate to Senior Doctor.", "IV Fluids 500ml Bolus.");
};

// --- 11. CENTOR ---
window.calc_centor = function(){
    var s = gv('cen1')+gv('cen2')+gv('cen3')+gv('cen4')+gv('cenage');
    var sev = s >= 4 ? 'hi' : s >= 2 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_centor_lo'), "Consider Rapid Strep Test.", "Penicillin V 500mg.");
};

// --- 12. NIHSS ---
window.calc_nihss = function(){
    var s = parseInt(document.getElementById('nihss_s').value);
    if(isNaN(s)) return alert(window.t('alert_msg'));
    var sev = s > 15 ? 'hi' : s > 5 ? 'md' : 'lo';
    window.showResult(s, '/42', sev, window.t('r_nihss_mod'), "Contact Stroke Team.", "Aspirin 300mg.");
};

// --- 13. SOFA ---
window.calc_sofa = function(){
    var s = gv('sr')+gv('sc')+gv('sl')+gv('scv')+gv('sn')+gv('sk');
    var sev = s >= 10 ? 'hi' : s >= 5 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_sofa_hi'), "ICU admission likely.", "Norepinephrine.");
};

// --- 14. RANSON ---
window.calc_ranson = function(){
    var s = 0; ['rn1','rn2','rn3','rn4','rn5','rn6','rn7','rn8','rn9','rn10'].forEach(function(k){ s += gv(k); });
    var sev = s >= 5 ? 'hi' : s >= 3 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_ranson_hi'), "Aggressive hydration.", "Pethidine for pain.");
};

// --- 15. PSI/PORT ---
window.calc_psi = function(){
    var age = parseFloat(document.getElementById('psi_age').value), sex = gv('psi_sex');
    if(!age || sex === null) return alert(window.t('alert_msg'));
    var s = age + sex;
    ['psi_nh','psi_neo','psi_liv','psi_chf','psi_cvd','psi_ren','psi_ams','psi_rr','psi_sbp','psi_temp','psi_pulse','psi_ph','psi_bun','psi_na','psi_gluc','psi_hct','psi_pao2','psi_eff'].forEach(function(k){ s += gv(k); });
    var cls = s <= 50 ? 1 : s <= 70 ? 2 : s <= 90 ? 3 : s <= 130 ? 4 : 5;
    var sev = cls >= 4 ? 'hi' : cls === 3 ? 'md' : 'lo';
    window.showResult('Class '+cls, '('+s+' pts)', sev, window.t('r_psi_1'), "Consider inpatient care.", "IV Ceftriaxone.");
};
