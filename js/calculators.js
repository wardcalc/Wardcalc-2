/* ── CALCULATION LOGIC FOR ALL 15 TOOLS ── */

function calc_gcs(){
  try {
      const e=gv('ge'),v=gv('gv'),m=gv('gm');
      if(e===null||v===null||m===null){
          alertMsg();
          return;
      }
      const s=e+v+m;
      if(s>=13) showResult(s,'/15','lo',t('r_gcs_mild'), S(1,t('r_gcs_mild_1'))+S(2,t('r_gcs_mild_2'))+S(3,t('r_gcs_mild_3')), RX.thiamine()+RX.dex());
      else if(s>=9) showResult(s,'/15','md',t('r_gcs_mod'), S(1,t('r_gcs_mod_1'))+S(2,t('r_gcs_mod_2'))+S(3,t('r_gcs_mod_3'))+S(4,t('r_gcs_mod_4')), RX.manni()+RX.leve2());
      else showResult(s,'/15','hi',t('r_gcs_sev'), S(1,t('r_gcs_sev_1'))+S(2,t('r_gcs_sev_2'))+S(3,t('r_gcs_sev_3'))+S(4,t('r_gcs_sev_4')), RX.ketam()+RX.suxam());
  } catch (err) {
      alert("Bug Caught! Error: " + err.message + "\n(This means UI or Drugs file didn't load!)");
  }
}

function calc_apgar(){
  const ks=['aa','ap','ag','ac','ar'];
  if(!allSet(ks)){alertMsg();return;}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s>=7) showResult(s,'/10','lo',t('r_apgar_norm'), S(1,t('r_apgar_norm_1'))+S(2,t('r_apgar_norm_2'))+S(3,t('r_apgar_norm_3')), RX.vitk()+RX.dex());
  else if(s>=4) showResult(s,'/10','md',t('r_apgar_mod'), S(1,t('r_apgar_mod_1'))+S(2,t('r_apgar_mod_2'))+S(3,t('r_apgar_mod_3'))+S(4,t('r_apgar_mod_4')), RX.o2()+RX.glucose10());
  else showResult(s,'/10','hi',t('r_apgar_crit'), S(1,t('r_apgar_crit_1'))+S(2,t('r_apgar_crit_2'))+S(3,t('r_apgar_crit_3'))+S(4,t('r_apgar_crit_4')), RX.adren_ap()+RX.bicarb());
}

function calc_dvt(){
  const ks=['d1','d2','d3','d4','d5','d6','d7','d8','d9'];
  if(!allSet(ks)){alertMsg();return;}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s>=3) showResult(s,'pts','hi',t('r_dvt_hi'), S(1,t('r_dvt_hi_1'))+S(2,t('r_dvt_hi_2'))+S(3,t('r_dvt_hi_3')), RX.apix_dvt()+RX.riva_dvt());
  else if(s>=1) showResult(s,'pts','md',t('r_dvt_md'), S(1,t('r_dvt_md_1'))+S(2,t('r_dvt_md_2')), D('Anticoagulation only if USS confirms DVT',''));
  else showResult(s,'pts','lo',t('r_dvt_lo'), S(1,t('r_dvt_lo_1'))+S(2,t('r_dvt_lo_2')), D('No empirical anticoagulation',''));
}

function calc_pe(){
  const ks=['p1','p2','p3','p4','p5','p6','p7'];
  if(!allSet(ks)){alertMsg();return;}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s>4) showResult(s,'pts','hi',t('r_pe_hi'), S(1,t('r_pe_hi_1'))+S(2,t('r_pe_hi_2'))+S(3,t('r_pe_hi_3')), RX.apix_pe()+RX.altep_pe());
  else if(s>=2) showResult(s,'pts','md',t('r_pe_md'), S(1,t('r_pe_md_1'))+S(2,t('r_pe_md_2')), RX.riva_dvt()+RX.enox());
  else showResult(s,'pts','lo',t('r_pe_lo'), S(1,t('r_pe_lo_1'))+S(2,t('r_pe_lo_2')), D('No empirical anticoagulation',''));
}

function calc_curb65(){
  const ks=['c1','c2','c3','c4','c5'];
  if(!allSet(ks)){alertMsg();return;}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s<=1) showResult(s,'/5','lo',t('r_curb_lo'), S(1,t('r_curb_lo_1'))+S(2,t('r_curb_lo_2'))+S(3,t('r_curb_lo_3')), RX.amox_curb());
  else if(s===2) showResult(s,'/5','md',t('r_curb_md'), S(1,t('r_curb_md_1'))+S(2,t('r_curb_md_2'))+S(3,t('r_curb_md_3')), RX.coamox());
  else showResult(s,'/5','hi',t('r_curb_hi'), S(1,t('r_curb_hi_1'))+S(2,t('r_curb_hi_2'))+S(3,t('r_curb_hi_3')), RX.coamoxlev()+RX.pip_taz());
}

function calc_chads2(){
  const ks=['h1','h2','h3','h4','h5','h6','h7','h8'];
  if(!allSet(ks)){alertMsg();return;}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s===0) showResult(s,'/9','lo',t('r_chads_lo'), S(1,t('r_chads_lo_1'))+S(2,t('r_chads_lo_2')), RX.aspirin_af());
  else if(s<=1) showResult(s,'/9','md',t('r_chads_md'), S(1,t('r_chads_md_1'))+S(2,t('r_chads_md_2')), RX.apix_af()+RX.riva_af());
  else showResult(s,'/9','hi',t('r_chads_hi'), S(1,t('r_chads_hi_1'))+S(2,t('r_chads_hi_2'))+S(3,t('r_chads_hi_3')), RX.apix_af()+RX.riva_af());
}

function calc_childpugh(){
  const ks=['cb','ca','cp','casc','ce'];
  if(!allSet(ks)){alertMsg();return;}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  const cls=s<=6?'A':s<=9?'B':'C';
  const sev=s<=6?'lo':s<=9?'md':'hi';
  showResult(s,`(Class ${cls})`,sev,t(s<=6?'r_cp_a':s<=9?'r_cp_b':'r_cp_c'), s<=6?S(1,t('r_cp_a_1'))+S(2,t('r_cp_a_2')):s<=9?S(1,t('r_cp_b_1'))+S(2,t('r_cp_b_2')):S(1,t('r_cp_c_1'))+S(2,t('r_cp_c_2')), s<=6?RX.prop():s<=9?RX.spiro()+RX.lact():RX.norflo()+RX.terlip());
}

function calc_bmi(){
  const w=parseFloat(document.getElementById('bw').value);
  const h=parseFloat(document.getElementById('bh').value)/100;
  if(!w||!h||isNaN(w)||isNaN(h)){alertMsg();return;}
  const b=(w/(h*h)).toFixed(1);
  if(b<18.5) showResult(b,'kg/m²','md',t('r_bmi_under'), S(1,t('r_bmi_under_1'))+S(2,t('r_bmi_under_2')), RX.hicalnor()+RX.thiamine());
  else if(b<25) showResult(b,'kg/m²','lo',t('r_bmi_norm'), S(1,t('r_bmi_norm_1')), D('No pharmacological intervention',''));
  else if(b<30) showResult(b,'kg/m²','md',t('r_bmi_over'), S(1,t('r_bmi_over_1'))+S(2,t('r_bmi_over_2')), D('No medication at this BMI',''));
  else if(b<35) showResult(b,'kg/m²','hi',t('r_bmi_ob1'), S(1,t('r_bmi_ob1_1'))+S(2,t('r_bmi_ob1_2')), RX.sema()+RX.orli());
  else showResult(b,'kg/m²','hi',t('r_bmi_ob2'), S(1,t('r_bmi_ob2_1'))+S(2,t('r_bmi_ob2_2')), RX.sema()+RX.bariatric());
}

function calc_egfr(){
  const cr=parseFloat(document.getElementById('ecr').value);
  const age=parseFloat(document.getElementById('eage').value);
  const sx=document.querySelector('[data-g="esex"].on');
  if(!cr||!age||!sx){alertMsg();return;}
  const sex=sx.dataset.v;
  const crMg=cr/88.4,kappa=sex==='F'?0.7:0.9,alpha=sex==='F'?-0.241:-0.302,sf=sex==='F'?1.012:1;
  const eg=Math.round(142*Math.pow(Math.min(crMg/kappa,1),alpha)*Math.pow(Math.max(crMg/kappa,1),-1.200)*Math.pow(0.9938,age)*sf);
  if(eg>=90) showResult(eg,'mL/min','lo',t('r_egfr_g1'), S(1,t('r_egfr_g1_1'))+S(2,t('r_egfr_g1_2')), RX.acei()+RX.sglt2());
  else if(eg>=60) showResult(eg,'mL/min','lo',t('r_egfr_g2'), S(1,t('r_egfr_g2_1'))+S(2,t('r_egfr_g2_2')), RX.acei());
  else if(eg>=45) showResult(eg,'mL/min','md',t('r_egfr_g3a'), S(1,t('r_egfr_g3a_1'))+S(2,t('r_egfr_g3a_2')), RX.sglt2());
  else if(eg>=30) showResult(eg,'mL/min','md',t('r_egfr_g3b'), S(1,t('r_egfr_g3b_1'))+S(2,t('r_egfr_g3b_2')), RX.stopmeta()+RX.esa());
  else if(eg>=15) showResult(eg,'mL/min','hi',t('r_egfr_g4'), S(1,t('r_egfr_g4_1'))+S(2,t('r_egfr_g4_2')), RX.phosbind()+RX.alfacal());
  else showResult(eg,'mL/min','hi',t('r_egfr_g5'), S(1,t('r_egfr_g5_1'))+S(2,t('r_egfr_g5_2')), D('Haemodialysis / Peritoneal Dialysis',''));
}

function calc_mews(){
  const ks=['mrr','mbp','mhr','mtemp','mavpu'];
  if(!allSet(ks)){alertMsg();return;}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s<=2) showResult(s,'/14','lo',t('r_mews_lo'), S(1,t('r_mews_lo_1'))+S(2,t('r_mews_lo_2')), D('No specific pharmacological intervention',''));
  else if(s<=4) showResult(s,'/14','md',t('r_mews_md'), S(1,t('r_mews_md_1'))+S(2,t('r_mews_md_2'))+S(3,t('r_mews_md_3')), RX.iv_fluid()+RX.o2());
  else showResult(s,'/14','hi',t('r_mews_hi'), S(1,t('r_mews_hi_1'))+S(2,t('r_mews_hi_2'))+S(3,t('r_mews_hi_3')), RX.iv_fluid()+RX.nora());
}

function calc_centor(){
  const ks=['cen1','cen2','cen3','cen4','cenage'];
  if(!allSet(ks)){alertMsg();return;}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s<=1) showResult(s,'/5','lo',t('r_centor_lo'), S(1,t('r_centor_lo_1'))+S(2,t('r_centor_lo_2')), RX.noab()+RX.paracib());
  else if(s<=3) showResult(s,'/5','md',t('r_centor_md'), S(1,t('r_centor_md_1'))+S(2,t('r_centor_md_2')), D('Antibiotics only if Strep A confirmed',''));
  else showResult(s,'/5','hi',t('r_centor_hi'), S(1,t('r_centor_hi_1'))+S(2,t('r_centor_hi_2')), RX.penV()+RX.clari_strep());
}

function calc_nihss(){
  const s=parseInt(document.getElementById('nihss_s').value);
  if(isNaN(s)||s<0||s>42){alertMsg();return;}
  if(s===0) showResult(s,'/42','lo',t('r_nihss_none'), S(1,t('r_nihss_none_1'))+S(2,t('r_nihss_none_2')), RX.aspirin_tia());
  else if(s<=4) showResult(s,'/42','lo',t('r_nihss_minor'), S(1,t('r_nihss_minor_1'))+S(2,t('r_nihss_minor_2'))+S(3,t('r_nihss_minor_3')), RX.altep_str()+RX.aspirin_tia());
  else if(s<=15) showResult(s,'/42','md',t('r_nihss_mod'), S(1,t('r_nihss_mod_1'))+S(2,t('r_nihss_mod_2'))+S(3,t('r_nihss_mod_3')), RX.altep_str()+RX.thrombect());
  else if(s<=20) showResult(s,'/42','hi',t('r_nihss_modsev'), S(1,t('r_nihss_modsev_1'))+S(2,t('r_nihss_modsev_2'))+S(3,t('r_nihss_modsev_3')), RX.thrombect());
  else showResult(s,'/42','hi',t('r_nihss_sev'), S(1,t('r_nihss_sev_1'))+S(2,t('r_nihss_sev_2'))+S(3,t('r_nihss_sev_3')), RX.thrombect()+RX.leve());
}

function calc_sofa(){
  const ks=['sr','sc','sl','scv','sn','sk'];
  if(!allSet(ks)){alertMsg();return;}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s<=6) showResult(s,'/24','lo',t('r_sofa_lo'), S(1,t('r_sofa_lo_1'))+S(2,t('r_sofa_lo_2'))+S(3,t('r_sofa_lo_3')), RX.pip_sep()+RX.iv_fluid());
  else if(s<=12) showResult(s,'/24','md',t('r_sofa_md'), S(1,t('r_sofa_md_1'))+S(2,t('r_sofa_md_2'))+S(3,t('r_sofa_md_3')), RX.nora()+RX.hc());
  else showResult(s,'/24','hi',t('r_sofa_hi'), S(1,t('r_sofa_hi_1'))+S(2,t('r_sofa_hi_2'))+S(3,t('r_sofa_hi_3')), RX.vaso()+RX.crrt());
}

function calc_ranson(){
  const ks=['rn1','rn2','rn3','rn4','rn5','rn6','rn7','rn8','rn9','rn10'];
  if(!allSet(ks)){alertMsg();return;}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s<=2) showResult(s,'/11','lo',t('r_ranson_lo'), S(1,t('r_ranson_lo_1'))+S(2,t('r_ranson_lo_2'))+S(3,t('r_ranson_lo_3')), RX.hart()+RX.morph());
  else if(s<=4) showResult(s,'/11','md',t('r_ranson_md'), S(1,t('r_ranson_md_1'))+S(2,t('r_ranson_md_2'))+S(3,t('r_ranson_md_3')), D("Hartmann's solution preferred", '')+RX.nnj());
  else showResult(s,'/11','hi',t('r_ranson_hi'), S(1,t('r_ranson_hi_1'))+S(2,t('r_ranson_hi_2'))+S(3,t('r_ranson_hi_3')), RX.mero()+RX.pn());
}

function calc_psi(){
  const age = parseFloat(document.getElementById('psi_age').value);
  const sex = gv('psi_sex'); 
  
  const nursing_home = gv('psi_nh'); 
  const neoplastic = gv('psi_neo'); 
  const liver = gv('psi_liv'); 
  const chf = gv('psi_chf'); 
  const cerebro = gv('psi_cvd'); 
  const renal = gv('psi_ren'); 
  
  const ams = gv('psi_ams'); 
  const rr = gv('psi_rr'); 
  const sbp = gv('psi_sbp'); 
  const temp = gv('psi_temp'); 
  const pulse = gv('psi_pulse'); 
  
  const ph = gv('psi_ph'); 
  const bun = gv('psi_bun'); 
  const na = gv('psi_na'); 
  const gluc = gv('psi_gluc'); 
  const hct = gv('psi_hct'); 
  const pao2 = gv('psi_pao2'); 
  const effusion = gv('psi_eff');
  
  if(isNaN(age) || sex===null) { alertMsg(); return; }
  
  let score = age + sex + 
             (nursing_home||0) + (neoplastic||0) + (liver||0) + (chf||0) + (cerebro||0) + (renal||0) + 
             (ams||0) + (rr||0) + (sbp||0) + (temp||0) + (pulse||0) +
             (ph||0) + (bun||0) + (na||0) + (gluc||0) + (hct||0) + (pao2||0) + (effusion||0);
  
  let cls = score <= 50 ? 1 : score <= 70 ? 2 : score <= 90 ? 3 : score <= 130 ? 4 : 5;
  const map = {
    1:['lo','r_psi_1','r_psi_1_1','r_psi_1_2', ()=>RX.amox_curb()],
    2:['lo','r_psi_2','r_psi_2_1','r_psi_2_2', ()=>RX.amox_curb()],
    3:['md','r_psi_3','r_psi_3_1','r_psi_3_2', ()=>D('IV Co-amoxiclav','Switch oral at 24–48h if improving')],
    4:['hi','r_psi_4','r_psi_4_1','r_psi_4_2', ()=>RX.coamoxlev()],
    5:['hi','r_psi_5','r_psi_5_1','r_psi_5_2', ()=>RX.coamoxlev()+RX.levo_psi()],
  };
  const [sev,ik,a1k,a2k, dFn] = map[cls];
  showResult(['Class I','Class II','Class III','Class IV','Class V'][cls-1], '(' + score + ' pts)', sev, t(ik), S(1,t(a1k))+S(2,t(a2k)), dFn());
}
