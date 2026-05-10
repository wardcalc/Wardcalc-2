'use strict';

// --- 1. LOCAL HELPERS ---
function gv(g){ 
    const e = document.querySelector(`[data-g="${g}"].on`); 
    return e ? parseFloat(e.getAttribute('data-v')) : null; 
}

function allSet(gs){ 
    return gs.every(g => gv(g) !== null); 
}

function alertMsg() {
    const msg = (typeof t === 'function') ? t('alert_msg') : 'Please complete all required fields.';
    alert(msg || 'Please complete all required fields.');
}

const S = (num, text) => {
    if (!text || text === 'undefined') return '';
    return `<div style="margin-bottom:12px; display:flex; gap:10px;"><span style="color:var(--gold); font-weight:bold;">${num}.</span> <span style="line-height:1.5;">${text}</span></div>`;
};

const D = (title, desc) => {
    if (!title || title === 'undefined') return '';
    return `<div style="margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.05);"><strong style="color:var(--white); font-size:15px; display:block; margin-bottom:4px;">${title}</strong><span style="color:var(--w60); font-size:13px; line-height:1.5;">${desc}</span></div>`;
};

const safeRX = new Proxy({}, {
    get: function(target, prop) {
        if (typeof RX !== 'undefined' && RX && typeof RX[prop] === 'function') return RX[prop];
        return () => D(prop.replace(/_/g, ' ').toUpperCase(), 'Consult institutional guidelines for dosage.');
    }
});

// 1. GLASGOW COMA SCALE
function calc_gcs(){
  const e = gv('ge'), v = gv('gv'), m = gv('gm');
  if(e === null || v === null || m === null){ alertMsg(); return; }
  const s = e + v + m;
  if(s >= 13) showResult(s, '/15', 'lo', t('r_gcs_mild'), S(1,t('r_gcs_mild_1'))+S(2,t('r_gcs_mild_2'))+S(3,t('r_gcs_mild_3')), safeRX.thiamine()+safeRX.dex());
  else if(s >= 9) showResult(s, '/15', 'md', t('r_gcs_mod'), S(1,t('r_gcs_mod_1'))+S(2,t('r_gcs_mod_2'))+S(3,t('r_gcs_mod_3'))+S(4,t('r_gcs_mod_4')), safeRX.manni()+safeRX.leve2());
  else showResult(s, '/15', 'hi', t('r_gcs_sev'), S(1,t('r_gcs_sev_1'))+S(2,t('r_gcs_sev_2'))+S(3,t('r_gcs_sev_3'))+S(4,t('r_gcs_sev_4')), safeRX.ketam()+safeRX.suxam());
}

// 2. APGAR SCORE
function calc_apgar(){
  const ks = ['aa','ap','ag','ac','ar'];
  if(!allSet(ks)){ alertMsg(); return; }
  const s = ks.reduce((a,k) => a + gv(k), 0);
  if(s >= 7) showResult(s, '/10', 'lo', t('r_apgar_norm'), S(1,t('r_apgar_norm_1'))+S(2,t('r_apgar_norm_2'))+S(3,t('r_apgar_norm_3')), safeRX.vitk()+safeRX.dex());
  else if(s >= 4) showResult(s, '/10', 'md', t('r_apgar_mod'), S(1,t('r_apgar_mod_1'))+S(2,t('r_apgar_mod_2'))+S(3,t('r_apgar_mod_3'))+S(4,t('r_apgar_mod_4')), safeRX.o2()+safeRX.glucose10());
  else showResult(s, '/10', 'hi', t('r_apgar_crit'), S(1,t('r_apgar_crit_1'))+S(2,t('r_apgar_crit_2'))+S(3,t('r_apgar_crit_3'))+S(4,t('r_apgar_crit_4')), safeRX.adren_ap()+safeRX.bicarb());
}

// 3. WELLS DVT
function calc_wellsdvt(){
  const ks = ['d1','d2','d3','d4','d5','d6','d7','d8','d9'];
  let s = 0;
  ks.forEach(k => { s += (gv(k) || 0); });
  if(s >= 3) showResult(s, 'pts', 'hi', t('r_dvt_hi'), S(1,t('r_dvt_hi_1'))+S(2,t('r_dvt_hi_2'))+S(3,t('r_dvt_hi_3')), safeRX.apix_dvt()+safeRX.riva_dvt());
  else if(s >= 1) showResult(s, 'pts', 'md', t('r_dvt_md'), S(1,t('r_dvt_md_1'))+S(2,t('r_dvt_md_2')), D(t('r_dvt_md_d') || 'Consider D-dimer',''));
  else showResult(s, 'pts', 'lo', t('r_dvt_lo'), S(1,t('r_dvt_lo_1'))+S(2,t('r_dvt_lo_2')), D(t('r_dvt_lo_d') || 'No empirical anticoagulation',''));
}
function calc_dvt() { calc_wellsdvt(); }

// 4. WELLS PE
function calc_wellspe(){
  const ks = ['p1','p2','p3','p4','p5','p6','p7'];
  let s = 0;
  ks.forEach(k => { s += (gv(k) || 0); });
  if(s > 4) showResult(s, 'pts', 'hi', t('r_pe_hi'), S(1,t('r_pe_hi_1'))+S(2,t('r_pe_hi_2'))+S(3,t('r_pe_hi_3')), safeRX.apix_pe()+safeRX.altep_pe());
  else if(s >= 2) showResult(s, 'pts', 'md', t('r_pe_md'), S(1,t('r_pe_md_1'))+S(2,t('r_pe_md_2')), safeRX.riva_dvt()+safeRX.enox());
  else showResult(s, 'pts', 'lo', t('r_pe_lo'), S(1,t('r_pe_lo_1'))+S(2,t('r_pe_lo_2')), D(t('r_pe_lo_d') || 'No empirical anticoagulation',''));
}
function calc_pe() { calc_wellspe(); }

// 5. CURB-65
function calc_curb65(){
  const ks = ['c1','c2','c3','c4','c5'];
  let s = 0;
  ks.forEach(k => { s += (gv(k) || 0); });
  if(s <= 1) showResult(s, '/5', 'lo', t('r_curb_lo'), S(1,t('r_curb_lo_1'))+S(2,t('r_curb_lo_2'))+S(3,t('r_curb_lo_3')), safeRX.amox_curb());
  else if(s === 2) showResult(s, '/5', 'md', t('r_curb_md'), S(1,t('r_curb_md_1'))+S(2,t('r_curb_md_2'))+S(3,t('r_curb_md_3')), safeRX.coamox());
  else showResult(s, '/5', 'hi', t('r_curb_hi'), S(1,t('r_curb_hi_1'))+S(2,t('r_curb_hi_2'))+S(3,t('r_curb_hi_3')), safeRX.coamoxlev()+safeRX.pip_taz());
}

// 6. CHA2DS2-VASc
function calc_chads2(){
  let s = 0;
  ['ch_c','ch_h','ch_d','ch_s2','ch_v','ch_sex'].forEach(k => { s += (gv(k) || 0); });
  const a2 = gv('ch_a2') || 0;
  const a1 = gv('ch_a1') || 0;
  if (a2 > 0) s += 2;
  else if (a1 > 0) s += 1;
  
  if(s === 0) showResult(s, '/9', 'lo', t('r_chads_lo'), S(1,t('r_chads_lo_1'))+S(2,t('r_chads_lo_2')), safeRX.aspirin_af());
  else if(s === 1) showResult(s, '/9', 'md', t('r_chads_md'), S(1,t('r_chads_md_1'))+S(2,t('r_chads_md_2')), safeRX.apix_af()+safeRX.riva_af());
  else showResult(s, '/9', 'hi', t('r_chads_hi'), S(1,t('r_chads_hi_1'))+S(2,t('r_chads_hi_2'))+S(3,t('r_chads_hi_3')), safeRX.apix_af()+safeRX.riva_af());
}

// 7. CHILD-PUGH
function calc_childpugh(){
  const ks = ['cb','ca','cp','casc','ce'];
  if(!allSet(ks)){ alertMsg(); return; }
  const s = ks.reduce((a,k) => a + gv(k), 0);
  const cls = s <= 6 ? 'A' : s <= 9 ? 'B' : 'C';
  const sev = s <= 6 ? 'lo' : s <= 9 ? 'md' : 'hi';
  showResult(s, `(Class ${cls})`, sev, t(s <= 6 ? 'r_cp_a' : s <= 9 ? 'r_cp_b' : 'r_cp_c'), s <= 6 ? S(1,t('r_cp_a_1'))+S(2,t('r_cp_a_2')) : s <= 9 ? S(1,t('r_cp_b_1'))+S(2,t('r_cp_b_2')) : S(1,t('r_cp_c_1'))+S(2,t('r_cp_c_2')), s <= 6 ? safeRX.prop() : s <= 9 ? safeRX.spiro()+safeRX.lact() : safeRX.norflo()+safeRX.terlip());
}

// 8. BMI
function calc_bmi(){
  const w = parseFloat(document.getElementById('bw').value);
  const h = parseFloat(document.getElementById('bh').value)/100;
  if(!w || !h || isNaN(w) || isNaN(h)){ alertMsg(); return; }
  const b = (w/(h*h)).toFixed(1);
  if(b < 18.5) showResult(b, 'kg/m²', 'md', t('r_bmi_under'), S(1,t('r_bmi_under_1'))+S(2,t('r_bmi_under_2')), safeRX.hicalnor()+safeRX.thiamine());
  else if(b < 25) showResult(b, 'kg/m²', 'lo', t('r_bmi_norm'), S(1,t('r_bmi_norm_1')), D(t('r_bmi_norm_d') || 'No medications indicated',''));
  else if(b < 30) showResult(b, 'kg/m²', 'md', t('r_bmi_over'), S(1,t('r_bmi_over_1'))+S(2,t('r_bmi_over_2')), D(t('r_bmi_over_d') || 'Lifestyle optimization',''));
  else if(b < 35) showResult(b, 'kg/m²', 'hi', t('r_bmi_ob1'), S(1,t('r_bmi_ob1_1'))+S(2,t('r_bmi_ob1_2')), safeRX.sema()+safeRX.orli());
  else showResult(b, 'kg/m²', 'hi', t('r_bmi_ob2'), S(1,t('r_bmi_ob2_1'))+S(2,t('r_bmi_ob2_2')), safeRX.sema()+safeRX.bariatric());
}

// 9. EGFR
function calc_egfr(){
  const cr = parseFloat(document.getElementById('ecr').value);
  const age = parseFloat(document.getElementById('eage').value);
  const sx = document.querySelector('[data-g="esex"].on');
  if(!cr || !age || !sx){ alertMsg(); return; }
  const sex = sx.getAttribute('data-v');
  const crMg = cr/88.4, kappa = sex === 'F' ? 0.7 : 0.9, alpha = sex === 'F' ? -0.241 : -0.302, sf = sex === 'F' ? 1.012 : 1;
  const eg = Math.round(142 * Math.pow(Math.min(crMg/kappa,1),alpha) * Math.pow(Math.max(crMg/kappa,1),-1.200) * Math.pow(0.9938,age) * sf);
  if(eg >= 90) showResult(eg, 'mL/min', 'lo', t('r_egfr_g1'), S(1,t('r_egfr_g1_1'))+S(2,t('r_egfr_g1_2')), safeRX.acei()+safeRX.sglt2());
  else if(eg >= 60) showResult(eg, 'mL/min', 'lo', t('r_egfr_g2'), S(1,t('r_egfr_g2_1'))+S(2,t('r_egfr_g2_2')), safeRX.acei());
  else if(eg >= 45) showResult(eg, 'mL/min', 'md', t('r_egfr_g3a'), S(1,t('r_egfr_g3a_1'))+S(2,t('r_egfr_g3a_2')), safeRX.sglt2());
  else if(eg >= 30) showResult(eg, 'mL/min', 'md', t('r_egfr_g3b'), S(1,t('r_egfr_g3b_1'))+S(2,t('r_egfr_g3b_2')), safeRX.stopmeta()+safeRX.esa());
  else if(eg >= 15) showResult(eg, 'mL/min', 'hi', t('r_egfr_g4'), S(1,t('r_egfr_g4_1'))+S(2,t('r_egfr_g4_2')), safeRX.phosbind()+safeRX.alfacal());
  else showResult(eg, 'mL/min', 'hi', t('r_egfr_g5'), S(1,t('r_egfr_g5_1'))+S(2,t('r_egfr_g5_2')), D('Dialysis / Transplant','Consult Nephrology'));
}

// 10. MEWS
function calc_mews(){
  const ks = ['mrr','mbp','mhr','mtemp','mavpu'];
  if(!allSet(ks)){ alertMsg(); return; }
  const s = ks.reduce((a,k) => a + gv(k), 0);
  if(s <= 2) showResult(s, '/14', 'lo', t('r_mews_lo'), S(1,t('r_mews_lo_1'))+S(2,t('r_mews_lo_2')), D(t('r_mews_lo_d') || 'Routine observation',''));
  else if(s <= 4) showResult(s, '/14', 'md', t('r_mews_md'), S(1,t('r_mews_md_1'))+S(2,t('r_mews_md_2'))+S(3,t('r_mews_md_3')), safeRX.iv_fluid()+safeRX.o2());
  else showResult(s, '/14', 'hi', t('r_mews_hi'), S(1,t('r_mews_hi_1'))+S(2,t('r_mews_hi_2'))+S(3,t('r_mews_hi_3')), safeRX.iv_fluid()+safeRX.nora());
}

// 11. CENTOR
function calc_centor(){
  let s = 0;
  ['cen1','cen2','cen3','cen4'].forEach(k => { s += (gv(k) || 0); });
  const age = gv('cenage');
  if(age === null) { alertMsg(); return; }
  s += age;
  if(s <= 1) showResult(s, '/5', 'lo', t('r_centor_lo'), S(1,t('r_centor_lo_1'))+S(2,t('r_centor_lo_2')), safeRX.noab()+safeRX.paracib());
  else if(s <= 3) showResult(s, '/5', 'md', t('r_centor_md'), S(1,t('r_centor_md_1'))+S(2,t('r_centor_md_2')), D(t('r_centor_md_d') || 'Treat upon confirmation',''));
  else showResult(s, '/5', 'hi', t('r_centor_hi'), S(1,t('r_centor_hi_1'))+S(2,t('r_centor_hi_2')), safeRX.penV()+safeRX.clari_strep());
}

// 12. NIHSS
function calc_nihss(){
  const s = parseInt(document.getElementById('nihss_s').value);
  if(isNaN(s) || s < 0 || s > 42){ alertMsg(); return; }
  if(s === 0) showResult(s, '/42', 'lo', t('r_nihss_none'), S(1,t('r_nihss_none_1'))+S(2,t('r_nihss_none_2')), safeRX.aspirin_tia());
  else if(s <= 4) showResult(s, '/42', 'lo', t('r_nihss_minor'), S(1,t('r_nihss_minor_1'))+S(2,t('r_nihss_minor_2'))+S(3,t('r_nihss_minor_3')), safeRX.altep_str()+safeRX.aspirin_tia());
  else if(s <= 15) showResult(s, '/42', 'md', t('r_nihss_mod'), S(1,t('r_nihss_mod_1'))+S(2,t('r_nihss_mod_2'))+S(3,t('r_nihss_mod_3')), safeRX.altep_str()+safeRX.thrombect());
  else if(s <= 20) showResult(s, '/42', 'hi', t('r_nihss_modsev'), S(1,t('r_nihss_modsev_1'))+S(2,t('r_nihss_modsev_2'))+S(3,t('r_nihss_modsev_3')), safeRX.thrombect());
  else showResult(s, '/42', 'hi', t('r_nihss_sev'), S(1,t('r_nihss_sev_1'))+S(2,t('r_nihss_sev_2'))+S(3,t('r_nihss_sev_3')), safeRX.thrombect()+safeRX.leve());
}

// 13. SOFA
function calc_sofa(){
  const ks = ['sr','sc','sl','scv','sn','sk'];
  if(!allSet(ks)){ alertMsg(); return; }
  const s = ks.reduce((a,k) => a + gv(k), 0);
  if(s <= 6) showResult(s, '/24', 'lo', t('r_sofa_lo'), S(1,t('r_sofa_lo_1'))+S(2,t('r_sofa_lo_2'))+S(3,t('r_sofa_lo_3')), safeRX.pip_sep()+safeRX.iv_fluid());
  else if(s <= 12) showResult(s, '/24', 'md', t('r_sofa_md'), S(1,t('r_sofa_md_1'))+S(2,t('r_sofa_md_2'))+S(3,t('r_sofa_md_3')), safeRX.nora()+safeRX.hc());
  else showResult(s, '/24', 'hi', t('r_sofa_hi'), S(1,t('r_sofa_hi_1'))+S(2,t('r_sofa_hi_2'))+S(3,t('r_sofa_hi_3')), safeRX.vaso()+safeRX.crrt());
}

// 14. RANSON'S
function calc_ranson(){
  const ks = ['rn1','rn2','rn3','rn4','rn5','rn6','rn7','rn8','rn9','rn10'];
  let s = 0;
  ks.forEach(k => { s += (gv(k) || 0); });
  if(s <= 2) showResult(s, '/11', 'lo', t('r_ranson_lo'), S(1,t('r_ranson_lo_1'))+S(2,t('r_ranson_lo_2'))+S(3,t('r_ranson_lo_3')), safeRX.hart()+safeRX.morph());
  else if(s <= 4) showResult(s, '/11', 'md', t('r_ranson_md'), S(1,t('r_ranson_md_1'))+S(2,t('r_ranson_md_2'))+S(3,t('r_ranson_md_3')), D(t('r_ranson_md_d') || 'Close observation','')+safeRX.nnj());
  else showResult(s, '/11', 'hi', t('r_ranson_hi'), S(1,t('r_ranson_hi_1'))+S(2,t('r_ranson_hi_2'))+S(3,t('r_ranson_hi_3')), safeRX.mero()+safeRX.pn());
}

// 15. PSI/PORT
function calc_psi(){
  const age = parseFloat(document.getElementById('psi_age').value);
  const sex = gv('psi_sex'); 
  const ks = ['psi_nh','psi_neo','psi_liv','psi_chf','psi_cvd','psi_ren','psi_ams','psi_rr','psi_sbp','psi_temp','psi_pulse','psi_ph','psi_bun','psi_na','psi_gluc','psi_hct','psi_pao2','psi_eff'];
  if(isNaN(age) || sex === null) { alertMsg(); return; }
  
  let score = age + sex;
  ks.forEach(k => { score += (gv(k) || 0); }); 
  
  let cls = score <= 50 ? 1 : score <= 70 ? 2 : score <= 90 ? 3 : score <= 130 ? 4 : 5;
  const map = {
    1:['lo','r_psi_1','r_psi_1_1','r_psi_1_2', ()=>safeRX.amox_curb()],
    2:['lo','r_psi_2','r_psi_2_1','r_psi_2_2', ()=>safeRX.amox_curb()],
    3:['md','r_psi_3','r_psi_3_1','r_psi_3_2', ()=>D('IV Co-amoxiclav', t('r_psi_3_d') || 'Consider short admission')],
    4:['hi','r_psi_4','r_psi_4_1','r_psi_4_2', ()=>safeRX.coamoxlev()],
    5:['hi','r_psi_5','r_psi_5_1','r_psi_5_2', ()=>safeRX.coamoxlev()+safeRX.levo_psi()]
  };
  
  const [sev,ik,a1k,a2k, dFn] = map[cls];
  showResult(['Class I','Class II','Class III','Class IV','Class V'][cls-1], '(' + score + ' pts)', sev, t(ik), S(1,t(a1k))+S(2,t(a2k)), dFn());
}
