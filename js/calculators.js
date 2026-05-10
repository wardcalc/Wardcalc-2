'use strict';

// 1. SAFETY & HELPERS
window.t = window.t || function(k) { return k; };
function gv(g){ var e = document.querySelector('[data-g="' + g + '"].on'); return e ? parseFloat(e.getAttribute('data-v')) : null; }
function gv0(g){ var v = gv(g); return v !== null ? v : 0; }
function rS(txt) { return txt && txt !== 'undefined' ? '<div style="margin-bottom:12px; line-height:1.6; color:rgba(255,255,255,0.85);">' + txt + '</div>' : ''; }
function rD(ttl, dsc) { return ttl && ttl !== 'undefined' ? '<div style="margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.05);"><strong style="color:#d4af37; font-size:15px; display:block; margin-bottom:4px;">' + ttl + '</strong><span style="color:rgba(255,255,255,0.7); font-size:14px; line-height:1.6;">' + dsc + '</span></div>' : ''; }

// 2. CALCULATORS
window.calc_gcs = function(){
    var e=gv('ge'),v=gv('gv'),m=gv('gm'); if(e===null||v===null||m===null) return alert(window.t('alert_msg'));
    var s=e+v+m; if(s<3) s=3; var sev=s>=13?'lo':s>=9?'md':'hi', l=s>=13?'mi':s>=9?'mo':'se';
    window.showResult(s, '/15', sev, window.t('r_gcs_'+l), rS(window.t('a_gcs_'+l)), rD(window.t('rx_gcs_'+l+'_n'), window.t('rx_gcs_'+l+'_d')));
};

window.calc_apgar = function(){
    var s=0, ks=['aa','ap','ag','ac','ar']; for(var i=0;i<ks.length;i++){var v=gv(ks[i]); if(v===null) return alert(window.t('alert_msg')); s+=v;}
    var sev=s>=7?'lo':s>=4?'md':'hi', l=s>=7?'no':s>=4?'mo':'cr';
    window.showResult(s, '/10', sev, window.t('r_apgar_'+l), rS(window.t('a_apgar_'+l)), rD(window.t('rx_apgar_'+l+'_n'), window.t('rx_apgar_'+l+'_d')));
};

window.calc_wellsdvt = window.calc_dvt = function(){
    var s=0; ['d1','d2','d3','d4','d5','d6','d7','d8','d9'].forEach(function(k){ s+=gv0(k); });
    var sev=s>=3?'hi':s>=1?'md':'lo', l=s>=3?'hi':s>=1?'md':'lo';
    window.showResult(s, 'pts', sev, window.t('r_dvt_'+l), rS(window.t('a_dvt_'+l)), rD(window.t('rx_dvt_'+l+'_n'), window.t('rx_dvt_'+l+'_d')));
};

window.calc_wellspe = window.calc_pe = function(){
    var s=0; ['p1','p2','p3','p4','p5','p6','p7'].forEach(function(k){ s+=gv0(k); });
    var sev=s>4?'hi':s>=2?'md':'lo', l=s>4?'hi':s>=2?'md':'lo';
    window.showResult(s, 'pts', sev, window.t('r_pe_'+l), rS(window.t('a_pe_'+l)), rD(window.t('rx_pe_'+l+'_n'), window.t('rx_pe_'+l+'_d')));
};

window.calc_curb65 = function(){
    var s=0; ['c1','c2','c3','c4','c5'].forEach(function(k){ s+=gv0(k); });
    var sev=s>=3?'hi':s===2?'md':'lo', l=s>=3?'hi':s===2?'md':'lo';
    window.showResult(s, '/5', sev, window.t('r_curb_'+l), rS(window.t('a_curb_'+l)), rD(window.t('rx_curb_'+l+'_n'), window.t('rx_curb_'+l+'_d')));
};

window.calc_chads2 = function(){
    var s=0; ['ch_c','ch_h','ch_a2','ch_d','ch_s2','ch_v','ch_a1','ch_sex'].forEach(function(k){ s+=gv0(k); });
    var sev=s>=2?'hi':s===1?'md':'lo', l=s>=2?'hi':s===1?'md':'lo';
    window.showResult(s, 'pts', sev, window.t('r_chads_'+l), rS(window.t('a_chads_'+l)), rD(window.t('rx_chads_'+l+'_n'), window.t('rx_chads_'+l+'_d')));
};

window.calc_childpugh = function(){
    var s=0, ks=['cb','ca','cp','casc','ce']; for(var i=0;i<ks.length;i++){var v=gv(ks[i]); if(v===null) return alert(window.t('alert_msg')); s+=v;}
    var cls=s<=6?'A':s<=9?'B':'C', sev=s<=6?'lo':s<=9?'md':'hi', l=s<=6?'a':s<=9?'b':'c';
    window.showResult(s, 'Class '+cls, sev, window.t('r_cp_'+l), rS(window.t('a_cp_'+l)), rD(window.t('rx_cp_'+l+'_n'), window.t('rx_cp_'+l+'_d')));
};

window.calc_bmi = function(){
    var w=parseFloat(document.getElementById('bw').value), h=parseFloat(document.getElementById('bh').value)/100; if(!w||!h) return alert(window.t('alert_msg'));
    var b=(w/(h*h)).toFixed(1), sev=b>=30?'hi':b>=25?'md':'lo', l=b<18.5?'un':b<25?'no':b<30?'ov':b<35?'ob1':'ob2';
    window.showResult(b, 'kg/m²', sev, window.t('r_bmi_'+l), rS(window.t('a_bmi_'+l)), rD(window.t('rx_bmi_'+l+'_n'), window.t('rx_bmi_'+l+'_d')));
};

window.calc_egfr = function(){
    var cr=parseFloat(document.getElementById('ecr').value), age=parseFloat(document.getElementById('eage').value), sex=gv('esex'); if(!cr||!age||!sex) return alert(window.t('alert_msg'));
    var crMg=cr/88.4, k=(sex===1.012)?0.7:0.9, a=(sex===1.012)?-0.241:-0.302;
    var eg=Math.round(142*Math.pow(Math.min(crMg/k,1),a)*Math.pow(Math.max(crMg/k,1),-1.2)*Math.pow(0.9938,age)*sex);
    var sev=eg<60?'hi':'lo', l=eg>=60?'no':eg>=30?'md':'se';
    window.showResult(eg, 'mL/min', sev, window.t('r_egfr_'+l), rS(window.t('a_egfr_'+l)), rD(window.t('rx_egfr_'+l+'_n'), window.t('rx_egfr_'+l+'_d')));
};

window.calc_mews = function(){
    var s=gv0('mrr')+gv0('mbp')+gv0('mhr')+gv0('mtemp')+gv0('mavpu');
    var sev=s>=5?'hi':s>=3?'md':'lo', l=s>=5?'hi':s>=3?'md':'lo';
    window.showResult(s, 'pts', sev, window.t('r_mews_'+l), rS(window.t('a_mews_'+l)), rD(window.t('rx_mews_'+l+'_n'), window.t('rx_mews_'+l+'_d')));
};

window.calc_centor = function(){
    var s=gv0('cen1')+gv0('cen2')+gv0('cen3')+gv0('cen4')+gv0('cenage');
    var sev=s>=4?'hi':s>=2?'md':'lo', l=s>=4?'hi':s>=2?'md':'lo';
    window.showResult(s, 'pts', sev, window.t('r_centor_'+l), rS(window.t('a_centor_'+l)), rD(window.t('rx_centor_'+l+'_n'), window.t('rx_centor_'+l+'_d')));
};

window.calc_nihss = function(){
    var ks = ['n1a','n1b','n1c','n2','n3','n4','n5a','n5b','n6a','n6b','n7','n8','n9','n10','n11'];
    var s = 0;
    for(var i=0; i<ks.length; i++){
        var v = gv(ks[i]); 
        if(v === null) return alert(window.t('alert_msg')); 
        s += v;
    }
    var sev=s>15?'hi':s>5?'md':'lo', l=s>20?'se':s>15?'ms':s>5?'mo':'mi';
    window.showResult(s, '/42', sev, window.t('r_nihss_'+l), rS(window.t('a_nihss_'+l)), rD(window.t('rx_nihss_'+l+'_n'), window.t('rx_nihss_'+l+'_d')));
};

window.calc_sofa = function(){
    var s=gv0('sr')+gv0('sc')+gv0('sl')+gv0('scv')+gv0('sn')+gv0('sk');
    var sev=s>=10?'hi':s>=5?'md':'lo', l=s>=10?'hi':s>=5?'md':'lo';
    window.showResult(s, 'pts', sev, window.t('r_sofa_'+l), rS(window.t('a_sofa_'+l)), rD(window.t('rx_sofa_'+l+'_n'), window.t('rx_sofa_'+l+'_d')));
};

window.calc_ranson = function(){
    var s=0; ['rn1','rn2','rn3','rn4','rn5','rn6','rn7','rn8','rn9','rn10'].forEach(function(k){ s+=gv0(k); });
    var sev=s>=5?'hi':s>=3?'md':'lo', l=s>=5?'hi':s>=3?'md':'lo';
    window.showResult(s, 'pts', sev, window.t('r_ranson_'+l), rS(window.t('a_ranson_'+l)), rD(window.t('rx_ranson_'+l+'_n'), window.t('rx_ranson_'+l+'_d')));
};

window.calc_psi = function(){
    var age=parseFloat(document.getElementById('psi_age').value), sex=gv('psi_sex'); if(isNaN(age)||sex===null) return alert(window.t('alert_msg'));
    var s=age+sex; ['psi_nh','psi_neo','psi_liv','psi_chf','psi_cvd','psi_ren','psi_ams','psi_rr','psi_sbp','psi_temp','psi_pulse','psi_ph','psi_bun','psi_na','psi_gluc','psi_hct','psi_pao2','psi_eff'].forEach(function(k){ s+=gv0(k); });
    var cls=s<=50?1:s<=70?2:s<=90?3:s<=130?4:5, sev=cls>=4?'hi':cls===3?'md':'lo', l=cls;
    window.showResult('Class '+cls, '('+s+' pts)', sev, window.t('r_psi_'+l), rS(window.t('a_psi_'+l)), rD(window.t('rx_psi_'+l+'_n'), window.t('rx_psi_'+l+'_d')));
};
