'use strict';

/**
 * WARDCALC MASTER DICTIONARY
 * Developer: Muhammad Sabir Ali, Final year student at Bukhara State Medical Institute.
 */

window.T = {
en:{
  // --- UI & GENERAL ---
  badge: 'CLINICAL DECISION TOOLS', h1a: 'Ward', h1b: 'Calc', sub: 'Evidence-based medical calculators.',
  all_label: 'ALL CALCULATORS', search_ph: 'Search tools (e.g. GCS, BMI)...', alert_msg: 'Please select all fields.', 
  btn: 'Calculate', tab_i: 'Logic', tab_a: 'Action', tab_d: 'Rx',
  sp_neuro: 'Neurology', sp_ped: 'Pediatrics', sp_gen: 'General', sp_resp: 'Respiratory', sp_cardio: 'Cardiology', sp_gastro: 'Gastro', sp_id: 'Infectious Dis.',
  sev_lo: 'LOW RISK', sev_md: 'MODERATE RISK', sev_hi: 'HIGH RISK',

  // --- 1. GCS ---
  r_gcs_mild: 'Mild Injury (GCS 13-15)', r_gcs_mod: 'Moderate Injury (GCS 9-12)', r_gcs_sev: 'Severe Injury (GCS 3-8)',
  r_gcs_mild_1: 'Routine neurological observation.', r_gcs_mod_1: 'Urgent CT head scan indicated.', r_gcs_sev_1: 'Secure airway; Intubation threshold.',

  // --- 2. APGAR ---
  r_apgar_norm: 'Normal Neonatal Transition', r_apgar_mod: 'Moderately Depressed', r_apgar_crit: 'Critically Low',
  r_apgar_norm_1: 'Routine postnatal care.',

  // --- 3. WELLS DVT ---
  r_dvt_hi: 'DVT Likely', r_dvt_md: 'Moderate Risk', r_dvt_lo: 'DVT Unlikely',
  r_dvt_hi_1: 'Urgent venous ultrasound required.',

  // --- 4. WELLS PE ---
  r_pe_hi: 'PE Likely', r_pe_md: 'Moderate Risk', r_pe_lo: 'PE Unlikely',
  r_pe_hi_1: 'Urgent CTPA imaging required.',

  // --- 5. CURB-65 ---
  r_curb_hi: 'Severe Pneumonia', r_curb_md: 'Moderate Pneumonia', r_curb_lo: 'Mild Pneumonia',
  r_curb_hi_1: 'Urgent admission; consider ICU.',

  // --- 6. CHADS-VASC ---
  r_chads_hi: 'High Stroke Risk', r_chads_md: 'Intermediate Risk', r_chads_lo: 'Low Stroke Risk',
  r_chads_hi_1: 'Long-term oral anticoagulation recommended.',

  // --- 7. CHILD-PUGH ---
  r_cp_a: 'Class A: Compensated', r_cp_b: 'Class B: Significant', r_cp_c: 'Class C: Decompensated',
  r_cp_c_1: 'Hepatology and transplant evaluation.',

  // --- 8. BMI ---
  r_bmi_under: 'Underweight', r_bmi_norm: 'Normal Weight', r_bmi_over: 'Overweight', r_bmi_ob1: 'Obesity Class I', r_bmi_ob2: 'Obesity Class II+',
  r_bmi_norm_1: 'Maintain healthy lifestyle habits.',

  // --- 9. EGFR ---
  r_egfr_g1: 'Normal/High GFR', r_egfr_g1_1: 'Monitor renal function progression.',

  // --- 10. MEWS ---
  r_mews_hi: 'Critical Deterioration', r_mews_md: 'Potential Instability', r_mews_lo: 'Physiologically Stable',
  r_mews_hi_1: 'Immediate medical review; Call RRT.',

  // --- 11. CENTOR ---
  r_centor_hi: 'Strep Highly Likely', r_centor_md: 'Possible Strep', r_centor_lo: 'Viral Pharyngitis likely',
  r_centor_hi_1: 'Empirical antibiotics may be justified.',

  // --- 12. NIHSS ---
  r_nihss_sev: 'Severe Stroke', r_nihss_modsev: 'Moderate-Severe', r_nihss_mod: 'Moderate Stroke', r_nihss_minor: 'Minor Stroke',
  r_nihss_mod_1: 'Activate stroke/thrombolysis protocol.',

  // --- 13. SOFA ---
  r_sofa_hi: 'High Sepsis Mortality', r_sofa_md: 'Moderate Sepsis Risk', r_sofa_lo: 'Low Sepsis Risk',
  r_sofa_hi_1: 'Aggressive ICU management needed.',

  // --- 14. RANSON ---
  r_ranson_hi: 'Severe Pancreatitis', r_ranson_md: 'Moderate Pancreatitis', r_ranson_lo: 'Mild Pancreatitis',
  r_ranson_hi_1: 'Intensive fluid resuscitation required.',

  // --- 15. PSI/PORT ---
  r_psi_1: 'Class I: Low Risk', r_psi_2: 'Class II: Low Risk', r_psi_3: 'Class III: Moderate', r_psi_4: 'Class IV: High Risk', r_psi_5: 'Class V: Very High',
  r_psi_1_1: 'Suitable for outpatient management.'
},

ru:{
  // --- UI & GENERAL ---
  badge: 'КЛИНИЧЕСКИЕ ИНСТРУМЕНТЫ', h1a: 'Ward', h1b: 'Calc', sub: 'Медицинские калькуляторы на основе доказательств.',
  all_label: 'ВСЕ КАЛЬКУЛЯТОРЫ', search_ph: 'Поиск (ШКГ, ИМТ)...', alert_msg: 'Пожалуйста, выберите все поля.', 
  btn: 'Рассчитать', tab_i: 'Логика', tab_a: 'Действие', tab_d: 'Лечение',
  sp_neuro: 'Неврология', sp_ped: 'Педиатрия', sp_gen: 'Общие', sp_resp: 'Пульмонология', sp_cardio: 'Кардиология', sp_gastro: 'Гастро', sp_id: 'Инф. болезни',
  sev_lo: 'НИЗКИЙ РИСК', sev_md: 'СРЕДНИЙ РИСК', sev_hi: 'ВЫСОКИЙ РИСК',

  // --- 1. GCS ---
  r_gcs_mild: 'Легкая ЧМТ (ШКГ 13-15)', r_gcs_mod: 'Средняя ЧМТ (ШКГ 9-12)', r_gcs_sev: 'Тяжелая ЧМТ (ШКГ 3-8)',
  r_gcs_mild_1: 'Плановое неврологическое наблюдение.', r_gcs_mod_1: 'Срочное КТ головы.', r_gcs_sev_1: 'Интубация; защита дыхательных путей.',

  // --- 2. APGAR ---
  r_apgar_norm: 'Нормальная адаптация', r_apgar_mod: 'Умеренная депрессия', r_apgar_crit: 'Критическое состояние',
  r_apgar_norm_1: 'Стандартный послеродовой уход.',

  // --- 3. WELLS DVT ---
  r_dvt_hi: 'ТГВ вероятен', r_dvt_md: 'Средний риск', r_dvt_lo: 'ТГВ маловероятен',
  r_dvt_hi_1: 'Срочное УЗИ вен нижних конечностей.',

  // --- 4. WELLS PE ---
  r_pe_hi: 'ТЭЛА вероятна', r_pe_md: 'Средний риск', r_pe_lo: 'ТЭЛА маловероятна',
  r_pe_hi_1: 'Срочное выполнение КТ-ангиографии.',

  // --- 5. CURB-65 ---
  r_curb_hi: 'Тяжелая пневмония', r_curb_md: 'Средняя пневмония', r_curb_lo: 'Легкая пневмония',
  r_curb_hi_1: 'Срочная госпитализация; рассмотреть ОРИТ.',

  // --- 6. CHADS-VASC ---
  r_chads_hi: 'Высокий риск инсульта', r_chads_md: 'Умеренный риск', r_chads_lo: 'Низкий риск инсульта',
  r_chads_hi_1: 'Рекомендованы пероральные антикоагулянты.',

  // --- 7. CHILD-PUGH ---
  r_cp_a: 'Класс A: Компенсированный', r_cp_b: 'Класс B: Существенный', r_cp_c: 'Класс C: Декомпенсированный',
  r_cp_c_1: 'Консультация гепатолога и оценка для трансплантации.',

  // --- 8. BMI ---
  r_bmi_under: 'Дефицит веса', r_bmi_norm: 'Нормальный вес', r_bmi_over: 'Избыточный вес', r_bmi_ob1: 'Ожирение I', r_bmi_ob2: 'Ожирение II+',
  r_bmi_norm_1: 'Поддерживайте здоровый образ жизни.',

  // --- 10. MEWS ---
  r_mews_hi: 'Критическое ухудшение', r_mews_md: 'Возможная нестабильность', r_mews_lo: 'Стабильное состояние',
  r_mews_hi_1: 'Срочный осмотр врачом; вызов реаниматолога.',

  // --- 12. NIHSS ---
  r_nihss_sev: 'Тяжелый инсульт', r_nihss_modsev: 'Средне-тяжелый', r_nihss_mod: 'Средний инсульт', r_nihss_minor: 'Легкий инсульт',
  r_nihss_mod_1: 'Активация протокола лечения инсульта.'
},

uz:{
  // --- UI & GENERAL ---
  badge: 'KLINIK VOSITALAR', h1a: 'Ward', h1b: 'Calc', sub: 'Isbotlangan tibbiy kalkulyatorlar.',
  all_label: 'BARCHA KALKULYATORLAR', search_ph: 'Qidiruv (GCS, TVI)...', alert_msg: 'Barcha maydonlarni tanlang.', 
  btn: 'Hisoblash', tab_i: 'Mantiq', tab_a: 'Harakat', tab_d: 'Davolash',
  sp_neuro: 'Nevrologiya', sp_ped: 'Pediatriya', sp_gen: 'Umumiy', sp_resp: 'Nafas tizimi', sp_cardio: 'Kardiologiya', sp_gastro: 'Gastro', sp_id: 'Yuqumli kasal.',
  sev_lo: 'PAST XAVF', sev_md: 'O’RTACHA XAVF', sev_hi: 'YUQORI XAVF',

  // --- 1. GCS ---
  r_gcs_mild: 'Yengil jarohat (GCS 13-15)', r_gcs_mod: 'O’rtacha jarohat (GCS 9-12)', r_gcs_sev: 'Og’ir jarohat (GCS 3-8)',
  r_gcs_mild_1: 'Nevrologik kuzatuv o\'tkazilsin.', r_gcs_mod_1: 'Zudlik bilan bosh KT qilish lozim.', r_gcs_sev_1: 'Nafas yo\'llarini himoyalash; Intubatsiya.',

  // --- 2. APGAR ---
  r_apgar_norm: 'Normal holat', r_apgar_mod: 'O’rtacha depressiya', r_apgar_crit: 'Kritik holat',
  r_apgar_norm_1: 'Doimiy tug\'ruqdan keyingi parvarish.',

  // --- 3. WELLS DVT ---
  r_dvt_hi: 'TVT ehtimoli yuqori', r_dvt_md: 'O\'rtacha xavf', r_dvt_lo: 'TVT ehtimoli past',
  r_dvt_hi_1: 'Zudlik bilan tomirlar UTT tekshiruvi.',

  // --- 4. WELLS PE ---
  r_pe_hi: 'O’ATE ehtimoli yuqori', r_pe_md: 'O\'rtacha xavf', r_pe_lo: 'O’ATE ehtimoli past',
  r_pe_hi_1: 'Zudlik bilan KT-angiografiya tekshiruvi.',

  // --- 5. CURB-65 ---
  r_curb_hi: 'Og’ir pnevmoniya', r_curb_md: 'O\'rtacha pnevmoniya', r_curb_lo: 'Yengil pnevmoniya',
  r_curb_hi_1: 'Zudlik bilan kasalxonaga yotqizish; ORIT.',

  // --- 6. CHADS-VASC ---
  r_chads_hi: 'Insult xavfi yuqori', r_chads_md: 'O\'rtacha xavf', r_chads_lo: 'Insult xavfi past',
  r_chads_hi_1: 'Uzoq muddatli antikoagulyantlar tavsiya etiladi.',

  // --- 7. CHILD-PUGH ---
  r_cp_a: 'A sinf: Kompensatsiyalangan', r_cp_b: 'B sinf: Sezilarli buzilish', r_cp_c: 'C sinf: Dekompensatsiyalangan',
  r_cp_c_1: 'Gepatolog ko\'rigi va transplantatsiya baholash.',

  // --- 8. BMI ---
  r_bmi_under: 'Vazn kam', r_bmi_norm: 'Normal vazn', r_bmi_over: 'Semizlik oldi', r_bmi_ob1: 'I darajali semizlik', r_bmi_ob2: 'II+ darajali semizlik',
  r_bmi_norm_1: 'Sog’lom turmush tarzini davom ettiring.',

  // --- 10. MEWS ---
  r_mews_hi: 'Kritik yomonlashuv', r_mews_md: 'Ehtimoliy beqarorlik', r_mews_lo: 'Fiziologik stabil',
  r_mews_hi_1: 'Zudlik bilan shifokor ko\'rigi; RRT chaqiruv.',

  // --- 12. NIHSS ---
  r_nihss_sev: 'Og\'ir insult', r_nihss_modsev: 'O\'rta-og\'ir', r_nihss_mod: 'O\'rtacha insult', r_nihss_minor: 'Yengil insult',
  r_nihss_mod_1: 'Insultni davolash bayonnomasini faollashtirish.'
}
};

// --- GLOBAL HANDLER ---
window.t = function(key) {
    var lang = localStorage.getItem('wardcalc_lang') || 'en';
    var dict = (window.T && window.T[lang]) ? window.T[lang] : (window.T ? window.T.en : {});
    return dict[key] || (window.T.en ? window.T.en[key] : key) || key;
};
