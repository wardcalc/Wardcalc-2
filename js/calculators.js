'use strict';

// 1. HELPERS
function gv(g){
    var e = document.querySelector('[data-g="' + g + '"].on');
    return e ? parseFloat(e.getAttribute('data-v')) : null;
}

// Logic helper for yes/no tools (returns 0 if null)
function gv0(g){ var v = gv(g); return v !== null ? v : 0; }

function rowS(num, text) {
    if (!text || text === 'undefined') return '';
    return '<div style="margin-bottom:12px; display:flex; gap:10px;"><span style="color:#d4af37; font-weight:bold;">' + num + '.</span> <span>' + text + '</span></div>';
}

function rowD(title, desc) {
    return '<div style="margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.05);"><strong style="color:#fff; font-size:15px; display:block; margin-bottom:4px;">' + title + '</strong><span style="color:rgba(255,255,255,0.6); font-size:13px; line-height:1.5;">' + desc + '</span></div>';
}

// --- 2. THE 15 CALCULATORS ---

// 1. GCS
window.calc_gcs = function(){
    var e = gv('ge'), v = gv('gv'), m = gv('gm');
    if(e===null || v===null || m===null) return alert("Select all fields");
    var s = e + v + m;
    var sev = s >= 13 ? 'lo' : s >= 9 ? 'md' : 'hi';
    window.showResult(s, '/15', sev, window.t('r_gcs_mild'), rowS(1, window.t('r_gcs_mild_1')), rowD('Thiamine','100mg IV'));
};

// 2. APGAR
window.calc_apgar = function(){
    var s = gv('aa')+gv('ap')+gv('ag')+gv('ac')+gv('ar');
    var sev = s >= 7 ? 'lo' : s >= 4 ? 'md' : 'hi';
    window.showResult(s, '/10', sev, window.t('r_apgar_norm'), rowS(1, window.t('r_apgar_norm_1')), rowD('Vitamin K','1mg IM'));
};

// 3. WELLS DVT
window.calc_wellsdvt = window.calc_dvt = function(){
    var s = 0; ['d1','d2','d3','d4','d5','d6','d7','d8','d9'].forEach(function(k){ s += gv0(k); });
    var sev = s >= 3 ? 'hi' : s >= 1 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_dvt_hi'), rowS(1, "Proximal Vein Ultrasound"), rowD('Apixaban','10mg BD for 7 days'));
};

// 4. WELLS PE
window.calc_wellspe = window.calc_pe = function(){
    var s = 0; ['p1','p2','p3','p4','p5','p6','p7'].forEach(function(k){ s += gv0(k); });
    var sev = s > 4 ? 'hi' : s >= 2 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_pe_hi'), rowS(1, "Urgent CTPA Imaging"), rowD('Enoxaparin','1.5mg/kg OD'));
};

// 5. CURB-65
window.calc_curb65 = function(){
    var s = 0; ['c1','c2','c3','c4','c5'].forEach(function(k){ s += gv0(k); });
    var sev = s >= 3 ? 'hi' : s === 2 ? 'md' : 'lo';
    window.showResult(s, '/5', sev, window.t('r_curb_hi'), rowS(1, "Inpatient Admission"), rowD('Amoxicillin','500mg - 1g TDS'));
};

// 6. CHA2DS2-VASc
window.calc_chads2 = function(){
    var s = 0; ['ch_c','ch_h','ch_a2','ch_d','ch_s2','ch_v','ch_a1','ch_sex'].forEach(function(k){ s += gv0(k); });
    var sev = s >= 2 ? 'hi' : s === 1 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_chads_hi'), rowS(1, "Oral Anticoagulation"), rowD('Apixaban','5mg BD'));
};

// 7. CHILD-PUGH
window.calc_childpugh = function(){
    var s = gv('cb')+gv('ca')+gv('cp')+gv('casc')+gv('ce');
    var cls = s <= 6 ? 'A' : s <= 9 ? 'B' : 'C';
    var sev = s <= 6 ? 'lo' : s <= 9 ? 'md' : 'hi';
    window.showResult(s, 'pts (Class ' + cls + ')', sev, window.t('r_cp_a'), rowS(1, "Hepatology Review"), rowD('Lactulose','30ml TDS'));
};

// 8. BMI
window.calc_bmi = function(){
    var w = parseFloat(document.getElementById('bw').value), h = parseFloat(document.getElementById('bh').value)/100;
    if(!w || !h) return alert("Enter weight/height");
    var b = (w/(h*h)).toFixed(1);
    var sev = b >= 30 ? 'hi' : b >= 25 ? 'md' : 'lo';
    window.showResult(b, 'kg/m²', sev, window.t('r_bmi_norm'), rowS(1, "Lifestyle Optimization"), "");
};

// 9. EGFR (CKD-EPI 2021)
window.calc_egfr = function(){
    var cr = parseFloat(document.getElementById('ecr').value), age = parseFloat(document.getElementById('eage').value), sex = gv('esex');
    if(!cr || !age || !sex) return alert("Fill all fields");
    var crMg = cr/88.4, k = (sex === 1.012) ? 0.7 : 0.9, a = (sex === 1.012) ? -0.241 : -0.302;
    var eg = Math.round(142 * Math.pow(Math.min(crMg/k, 1), a) * Math.pow(Math.max(crMg/k, 1), -1.200) * Math.pow(0.9938, age) * sex);
    var sev = eg < 60 ? 'md' : 'lo';
    window.showResult(eg, 'mL/min', sev, "CKD stage evaluated", rowS(1, "Review renal dosing"), rowD('ACE Inhibitor','Ramipril 2.5mg'));
};

// 10. MEWS
window.calc_mews = function(){
    var s = gv('mrr')+gv('mbp')+gv('mhr')+gv('mtemp')+gv('mavpu');
    var sev = s >= 5 ? 'hi' : s >= 3 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_mews_hi'), rowS(1, "Immediate Medical Review"), rowD('Oxygen','Titrate to 94-98%'));
};

// 11. CENTOR
window.calc_centor = function(){
    var s = gv0('cen1')+gv0('cen2')+gv0('cen3')+gv0('cen4')+gv0('cenage');
    var sev = s >= 4 ? 'hi' : s >= 2 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_centor_hi'), rowS(1, "Consider Rapid Strep Test"), rowD('Penicillin V','500mg QDS'));
};

// 12. NIHSS
window.calc_nihss = function(){
    var s = parseInt(document.getElementById('nihss_s').value);
    if(isNaN(s)) return alert("Enter score");
    var sev = s > 15 ? 'hi' : s > 5 ? 'md' : 'lo';
    window.showResult(s, '/42', sev, window.t('r_nihss_mod'), rowS(1, "Stroke Team Activation"), rowD('Aspirin','300mg Stat'));
};

// 13. SOFA
window.calc_sofa = function(){
    var s = gv0('sr')+gv0('sc')+gv0('sl')+gv0('scv')+gv0('sn')+gv0('sk');
    var sev = s >= 10 ? 'hi' : s >= 5 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_sofa_hi'), rowS(1, "Critical Care Evaluation"), rowD('Norepinephrine','Titrate to MAP >65'));
};

// 14. RANSON
window.calc_ranson = function(){
    var s = 0; ['rn1','rn2','rn3','rn4','rn5','rn6','rn7','rn8','rn9','rn10'].forEach(function(k){ s += gv0(k); });
    var sev = s >= 5 ? 'hi' : s >= 3 ? 'md' : 'lo';
    window.showResult(s, 'pts', sev, window.t('r_ranson_hi'), rowS(1, "Aggressive Fluid Resuscitation"), rowD('IV Fluids','Hartmann\'s 250ml/hr'));
};

// 15. PSI/PORT
window.calc_psi = function(){
    var age = parseFloat(document.getElementById('psi_age').value), sex = gv('psi_sex');
    if(!age || sex === null) return alert("Enter age/sex");
    var s = age + sex;
    ['psi_nh','psi_neo','psi_liv','psi_chf','psi_cvd','psi_ren','psi_ams','psi_rr','psi_sbp','psi_temp','psi_pulse','psi_ph','psi_bun','psi_na','psi_gluc','psi_hct','psi_pao2','psi_eff'].forEach(function(k){ s += gv0(k); });
    var cls = s <= 50 ? 1 : s <= 70 ? 2 : s <= 90 ? 3 : s <= 130 ? 4 : 5;
    var sev = cls >= 4 ? 'hi' : 'lo';
    window.showResult('Class '+cls, '('+s+' pts)', sev, "Pneumonia Severity Index", rowS(1, "Assess for hospitalization"), rowD('Ceftriaxone','1g IV OD'));
};
