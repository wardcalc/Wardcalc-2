'use strict';

/* ══════════════════════════════════════
   TRANSLATION DICTIONARY
══════════════════════════════════════ */
const T = {
en:{
  badge:'Built by a Medical Student · For Medical Students',
  h1a:'Clinical Tools', h1b:'for Ward Rounds',
  sub:'15 evidence-based calculators with mnemonics in 3 languages. Fast, free, mobile-first.',
  kpi1:'Calculators', kpi2:'Languages', kpi3:'Free',
  all_label:'All Calculators',
  disclaimer:'For educational purposes only. WardCalc does not replace clinical judgement, direct patient examination or current guidelines. Always consult your supervising physician before acting on any calculated score.',
  footer:'Built by a medical student, for medical students',
  btn:'Calculate',
  no:'No', yes:'Yes', male:'Male', female:'Female',
  sev_lo:'Low Risk', sev_md:'Moderate Risk', sev_hi:'High Risk',
  tab_i:'Interpretation', tab_a:'Action Plan', tab_d:'First-Line Rx',
  sp_neuro:'Neurology', sp_cardio:'Cardiology', sp_resp:'Respiratory',
  sp_renal:'Renal', sp_ped:'Pediatrics', sp_hep:'Hepatology',
  sp_vasc:'Vascular', sp_icu:'ICU / Ward', sp_inf:'Infectious', sp_gen:'General', sp_surg:'Surgery',
  
  nav_about: 'About Us', nav_contact: 'Contact', nav_privacy: 'Privacy Policy', nav_terms: 'Terms', nav_disc: 'Disclaimer',

  d_gcs:'Assess consciousness level in any patient. The score every doctor demands first on a trauma call.',
  d_apgar:'Newborn assessment at 1 and 5 minutes. Guides resuscitation decisions in every delivery room.',
  d_wellsdvt:'Pre-test probability of DVT. Does this leg need ultrasound or just a D-dimer? Answer in 60 seconds.',
  d_wellspe:'Pre-test probability of PE. Go straight to CTPA or D-dimer first? This decides it.',
  d_curb65:'Pneumonia severity. Home, ward or ICU? Five criteria, one confident decision.',
  d_chads2:'Stroke risk in atrial fibrillation. The score that decides anticoagulation worldwide.',
  d_childpugh:'Chronic liver disease prognosis. Class A, B or C — determines surgery risk and drug dosing.',
  d_bmi:'Body Mass Index with full WHO classification and clinical action plan.',
  d_egfr:'Kidney function using CKD-EPI. Critical for safe drug prescribing in every patient.',
  d_mews:'Detect patient deterioration before cardiac arrest. Every ward, every shift.',
  d_centor:'Streptococcal pharyngitis probability. Evidence-based answer to "prescribe antibiotics?"',
  d_nihss:'Quantify stroke severity. Guides thrombolysis and thrombectomy. Time is brain.',
  d_sofa:'Sequential Organ Failure Assessment. Defines sepsis (Sepsis-3). Daily ICU calculation.',
  d_ranson:'Pancreatitis severity at admission and 48 hours. Predicts mortality risk.',
  d_psi:'Pneumonia Severity Index (PORT Score). Uses 20 variables to accurately stratify mortality risk and guide admission.',
  
  f_eye:'Eye Opening', f_verbal:'Verbal Response', f_motor:'Motor Response',
  f_appear:'Appearance (Skin Colour)', f_pulse:'Pulse (Heart Rate)',
  f_grimace:'Grimace (Reflex Irritability)', f_activity:'Activity (Muscle Tone)', f_resp_a:'Respiration',
  f_cancer:'Active cancer (treatment within 6 months)',
  f_paralysis:'Paralysis, paresis or immobilisation of lower limb',
  f_bedridden:'Bedridden > 3 days or major surgery within 12 weeks',
  f_tenderness:'Localised tenderness along deep venous system',
  f_legswollen:'Entire leg swollen',
  f_calfswelling:'Calf swelling > 3 cm vs asymptomatic side',
  f_pitting:'Pitting oedema in symptomatic leg only',
  f_collateral:'Collateral superficial veins (non-varicose)',
  f_alt_dvt:'Alternative diagnosis at least as likely as DVT (−2 pts)',
  f_dvt_signs:'Clinical signs/symptoms of DVT',
  f_pe_no1:'PE is #1 diagnosis OR equally likely',
  f_hr100:'Heart rate > 100 bpm',
  f_immob:'Immobilisation ≥ 3 days or surgery in previous 4 weeks',
  f_prev_pe:'Previous DVT or PE',
  f_haemoptysis:'Haemoptysis',
  f_malignancy:'Active malignancy (treatment within 6 months)',
  f_confusion:'New confusion (AMTS ≤ 8 or new disorientation)',
  f_urea:'Urea > 7 mmol/L (BUN > 19 mg/dL)',
  f_rr30:'Respiratory rate ≥ 30 /min',
  f_bp_low:'BP: Systolic < 90 OR Diastolic ≤ 60 mmHg',
  f_age65:'Age ≥ 65 years',
  f_chf:'Congestive heart failure (or LVEF < 40%)',
  f_htn:'Hypertension (BP > 140/90 or on antihypertensives)',
  f_age75:'Age ≥ 75 years — scores 2 points',
  f_dm:'Diabetes mellitus',
  f_stroke_h:'Stroke / TIA / thromboembolism history — scores 2 points',
  f_vasc_d:'Vascular disease (MI, peripheral arterial disease or aortic plaque)',
  f_age6574:'Age 65–74 years',
  f_female:'Female sex',
  f_bilirubin:'Bilirubin (μmol/L)', f_albumin:'Albumin (g/L)',
  f_pt:'PT prolongation / INR', f_ascites:'Ascites', f_enceph:'Hepatic Encephalopathy',
  f_weight:'Weight (kg)', f_height:'Height (cm)',
  f_creat:'Serum Creatinine (μmol/L)', f_age:'Age (years)', f_sex:'Sex',
  f_rr:'Respiratory Rate (/min)', f_sbp:'Systolic BP (mmHg)',
  f_hr:'Heart Rate (/min)', f_temp:'Temperature (°C)', f_avpu:'Consciousness (AVPU)',
  f_cough_a:'Absence of cough', f_exudates:'Tonsillar exudates or swelling',
  f_lymph:'Tender anterior cervical lymphadenopathy', f_temp38:'Temperature > 38°C',
  f_c_age:'Age group', f_nihss:'Total NIHSS Score (0–42)',
  f_pao2:'Respiration — PaO₂/FiO₂ (mmHg)', f_plat:'Coagulation — Platelets (×10³/μL)',
  f_bili_s:'Liver — Bilirubin (μmol/L)', f_cardio_s:'Cardiovascular — MAP / Vasopressors',
  f_gcs_s:'CNS — Glasgow Coma Scale', f_creat_s:'Renal — Creatinine (μmol/L)',
  f_glucose:'Glucose > 11 mmol/L (> 200 mg/dL)', f_age55:'Age > 55 years',
  f_ldh:'LDH > 350 IU/L', f_ast:'AST > 250 IU/L', f_wbc:'WBC > 16 × 10⁹/L',
  f_hct:'Haematocrit drop > 10% (48 h)', f_bun:'BUN rise > 1.8 mmol/L (48 h)',
  f_ca:'Calcium < 2 mmol/L (48 h)', f_pao2_r:'PaO₂ < 60 mmHg (48 h)',
  f_fluid:'Fluid sequestration > 6 litres (48 h)', f_psi_cls:'PSI Risk Class',
  at_adm:'At Admission', at_48h:'At 48 Hours',
  mnem_all:'Memory Aid — All 3 Languages',

  // BUTTON TRANSLATIONS (GCS)
  g_e4: 'Spontaneous (4)', g_e3: 'To voice (3)', g_e2: 'To pain (2)', g_e1: 'None (1)',
  g_v5: 'Oriented (5)', g_v4: 'Confused (4)', g_v3: 'Words (3)', g_v2: 'Sounds (2)', g_v1: 'None (1)',
  g_m6: 'Obeys (6)', g_m5: 'Localizes (5)', g_m4: 'Withdrawal (4)', g_m3: 'Flexion (3)', g_m2: 'Extension (2)', g_m1: 'None (1)',

  // BUTTON TRANSLATIONS (APGAR)
  a_a2: 'Pink all over (2)', a_a1: 'Blue extremities (1)', a_a0: 'Blue/pale all over (0)',
  a_p2: '≥ 100 bpm (2)', a_p1: '< 100 bpm (1)', a_p0: 'Absent (0)',
  a_g2: 'Cry/Cough (2)', a_g1: 'Grimace only (1)', a_g0: 'None (0)',
  a_c2: 'Active motion (2)', a_c1: 'Some flexion (1)', a_c0: 'Limp (0)',
  a_r2: 'Strong cry (2)', a_r1: 'Weak/irregular (1)', a_r0: 'Absent (0)',

  r_gcs_mild:'Mild impairment / Normal or mild TBI', r_gcs_mild_1:'Full neurological assessment — pupil responses, limb power, coordination.', r_gcs_mild_2:'Neurological observations every 30–60 minutes.', r_gcs_mild_3:'CT head if mechanism of injury, focal deficit, or any deterioration.',
  r_gcs_mod:'Moderate brain injury', r_gcs_mod_1:'⚠ Urgent CT head — do not delay.', r_gcs_mod_2:'Neurosurgery referral immediately.', r_gcs_mod_3:'Position 30° head elevation. IV access. Bloods.', r_gcs_mod_4:'Reassess GCS every 15 minutes — escalate if deterioration.',
  r_gcs_sev:'Severe brain injury — airway at immediate risk', r_gcs_sev_1:'⚠ GCS ≤ 8 = intubation threshold. Call anaesthetics/intensivist immediately.', r_gcs_sev_2:'Rapid Sequence Intubation (RSI). In-line cervical immobilisation if trauma.', r_gcs_sev_3:'Urgent CT head + spine. Neurosurgery on call.', r_gcs_sev_4:'ICU admission. Document capacity assessment.',
  r_apgar_norm:'Normal — Reassuring', r_apgar_norm_1:'Warm, dry and stimulate the newborn.', r_apgar_norm_2:'Routine newborn care — skin to skin.', r_apgar_norm_3:'Repeat APGAR at 5 minutes.',
  r_apgar_mod:'Moderate concern — requires intervention', r_apgar_mod_1:'Stimulate: rub back, flick soles.', r_apgar_mod_2:'Supplemental oxygen via mask.', r_apgar_mod_3:'Call paediatrician immediately.', r_apgar_mod_4:'Prepare bag-mask ventilation equipment.',
  r_apgar_crit:'Critical — Immediate full resuscitation', r_apgar_crit_1:'⚠ Call NICU team immediately.', r_apgar_crit_2:'Positive pressure ventilation at 40–60 breaths/min.', r_apgar_crit_3:'Chest compressions if no improvement (3:1 ratio).', r_apgar_crit_4:'Umbilical venous catheter access.',
  r_dvt_hi:'High probability of DVT', r_dvt_hi_1:'Proximal leg ultrasound urgently — same day if possible.', r_dvt_hi_2:'If USS positive → start anticoagulation immediately.', r_dvt_hi_3:'If USS negative but high suspicion → repeat USS in 1 week.',
  r_dvt_md:'Moderate probability of DVT', r_dvt_md_1:'D-dimer blood test — if negative, DVT effectively excluded.', r_dvt_md_2:'If D-dimer positive → proximal leg USS.', r_dvt_md_d:'Anticoagulation ONLY if USS confirms DVT — do not treat empirically.',
  r_dvt_lo:'Low probability of DVT', r_dvt_lo_1:'D-dimer — if negative, DVT excluded.', r_dvt_lo_2:"Explore alternative diagnoses: cellulitis, Baker's cyst, muscle haematoma.", r_dvt_lo_d:'No empirical anticoagulation — treat underlying alternative diagnosis.',
  r_pe_hi:'High probability of PE', r_pe_hi_1:'⚠ Proceed directly to CTPA — skip D-dimer.', r_pe_hi_2:'If CTPA delayed >4h → start empirical anticoagulation.', r_pe_hi_3:'12-lead ECG. ABG. Troponin. Echo if haemodynamically unstable.',
  r_pe_md:'Moderate probability of PE', r_pe_md_1:'D-dimer. If elevated → CTPA urgently.', r_pe_md_2:'Supplemental O₂ if SpO₂ < 94%.',
  r_pe_lo:'Low probability of PE', r_pe_lo_1:'Apply PERC rule — if all 8 negative, PE excluded without D-dimer.', r_pe_lo_2:'If any PERC positive → D-dimer → CTPA if elevated.', r_pe_lo_d:'No empirical anticoagulation — confirm with imaging first.',
  r_curb_lo:'Low severity pneumonia — suitable for home treatment', r_curb_lo_1:'Suitable for home treatment.', r_curb_lo_2:'Safety net: return if worsening or no improvement in 48h.', r_curb_lo_3:'Follow-up CXR at 6 weeks to confirm resolution.',
  r_curb_md:'Moderate severity — consider hospital admission', r_curb_md_1:'Assess individually — some suitable for enhanced community care.', r_curb_md_2:'If admitted: IV access, bloods, blood cultures × 2, CXR.', r_curb_md_3:'SpO₂ monitoring, O₂ if <94%.',
  r_curb_hi:'High severity — hospital admission required', r_curb_hi_1:'⚠ Score 4–5 → consider ICU/HDU.', r_curb_hi_2:'Blood cultures × 2, Legionella/pneumococcal antigen, sputum.', r_curb_hi_3:'Sepsis 6 bundle if septic.',
  r_chads_lo:'Low stroke risk — no anticoagulation required', r_chads_lo_1:'No anticoagulation required. Reassess annually.', r_chads_lo_2:'Rate control and symptom management.', r_chads_lo_d:'Aspirin NOT recommended in AF for stroke prevention.',
  r_chads_md:'Moderate risk — shared decision-making', r_chads_md_1:'Shared decision-making — annual stroke vs bleeding risk discussion.', r_chads_md_2:'Calculate HAS-BLED for bleeding risk.',
  r_chads_hi:'High risk — anticoagulation recommended', r_chads_hi_1:'Start DOAC — preferred over warfarin.', r_chads_hi_2:'Check eGFR and LFTs before starting.', r_chads_hi_3:'Address modifiable HAS-BLED risk factors.',
  r_cp_a:'Class A — Well-compensated liver disease', r_cp_a_1:'Hepatology review every 6 months.', r_cp_a_2:'6-monthly USS + AFP for HCC surveillance.', r_cp_a_3:'Upper GI endoscopy for varices if not done.',
  r_cp_b:'Class B — Significant functional compromise', r_cp_b_1:'Hepatology referral — transplant assessment.', r_cp_b_2:'3–6 monthly USS + AFP.', r_cp_b_3:'Manage ascites (diuretics), encephalopathy (lactulose).',
  r_cp_c:'Class C — Decompensated — urgent hepatology', r_cp_c_1:'⚠ Urgent hepatology — priority transplant listing.', r_cp_c_2:'SBP prophylaxis, hepatorenal syndrome management.', r_cp_c_3:'Advance care planning discussion.',
  r_bmi_under:'Underweight (BMI < 18.5)', r_bmi_under_1:'MUST nutritional screening.', r_bmi_under_2:'Investigate: malabsorption, eating disorder, hyperthyroidism.',
  r_bmi_norm:'Normal weight (18.5–24.9)', r_bmi_norm_1:'Healthy range. Maintenance through balanced diet and exercise.',
  r_bmi_over:'Overweight (25–29.9)', r_bmi_over_1:'500–1000 kcal deficit targets 0.5–1 kg/week loss.', r_bmi_over_2:'Screen: fasting glucose, lipids, BP, waist circumference.',
  r_bmi_ob1:'Obese Class I (30–34.9)', r_bmi_ob1_1:'Screen: T2DM, hypertension, OSA, NAFLD.', r_bmi_ob1_2:'Structured weight management programme.',
  r_bmi_ob2:'Obese Class II–III (BMI ≥ 35)', r_bmi_ob2_1:'Specialist bariatric referral.', r_bmi_ob2_2:'GLP-1 agonist first-line pharmacotherapy.',
  r_egfr_g1:'G1 — Normal kidney function (≥ 90)', r_egfr_g1_1:'Annual monitoring if DM/HTN/CVD.', r_egfr_g1_2:'BP target < 130/80 mmHg.',
  r_egfr_g2:'G2 — Mildly decreased (60–89)', r_egfr_g2_1:'Annual eGFR, ACR, BP.', r_egfr_g2_2:'Avoid NSAIDs, aminoglycosides.',
  r_egfr_g3a:'G3a — Mild-moderate decrease (45–59)', r_egfr_g3a_1:'6-monthly monitoring.', r_egfr_g3a_2:'Dose-adjust metformin, digoxin, antibiotics.',
  r_egfr_g3b:'G3b — Moderate-severe decrease (30–44)', r_egfr_g3b_1:'3-monthly monitoring. Nephrology referral.', r_egfr_g3b_2:'STOP metformin (eGFR <30), avoid NSAIDs.',
  r_egfr_g4:'G4 — Severely decreased (15–29)', r_egfr_g4_1:'⚠ Urgent nephrology. Renal replacement therapy planning.', r_egfr_g4_2:'AV fistula creation — takes 3–6 months.',
  r_egfr_g5:'G5 — Kidney failure (< 15 mL/min)', r_egfr_g5_1:'Dialysis initiation or pre-emptive transplant.', r_egfr_g5_2:'All medications reviewed by nephrologist.',
  r_mews_lo:'Low risk — routine monitoring', r_mews_lo_1:'Routine monitoring per ward protocol.', r_mews_lo_2:'Escalate if clinical deterioration regardless of MEWS.',
  r_mews_md:'Medium risk — increase monitoring frequency', r_mews_md_1:'Increase obs frequency to 30–60 minutes.', r_mews_md_2:'Inform nurse and junior doctor.', r_mews_md_3:'Review fluid balance, urine output, glucose.',
  r_mews_hi:'High risk — urgent medical review required', r_mews_hi_1:'⚠ Immediate doctor review.', r_mews_hi_2:'Full A-E assessment.', r_mews_hi_3:'IV access × 2. Bloods: FBC, U&E, CRP, lactate, blood cultures.',
  r_centor_lo:'Low probability — viral aetiology most likely', r_centor_lo_1:'No antibiotics — viral aetiology most likely.', r_centor_lo_2:'Paracetamol 1g QDS + Ibuprofen 400mg TDS alternating.',
  r_centor_md:'Moderate probability — test before treating', r_centor_md_1:'Rapid Strep A antigen test or throat swab.', r_centor_md_2:'Prescribe antibiotics only if test positive.', r_centor_md_d:'Antibiotics only if Strep A confirmed.',
  r_centor_hi:'High probability of streptococcal pharyngitis', r_centor_hi_1:'Prescribe antibiotics — score 4+ sufficient for clinical diagnosis.', r_centor_hi_2:'Full 10-day course — reduces rheumatic fever risk.',
  r_nihss_none:'No neurological deficit — consider TIA', r_nihss_none_1:'Consider TIA — urgent TIA clinic (ABCD² score).', r_nihss_none_2:'DWI MRI within 24 hours. Vascular imaging.',
  r_nihss_minor:'Minor stroke (NIHSS 1–4)', r_nihss_minor_1:'Admit to acute stroke unit.', r_nihss_minor_2:'Non-contrast CT head urgently.', r_nihss_minor_3:'Thrombolysis assessment if ≤4.5h from onset.',
  r_nihss_mod:'Moderate stroke (NIHSS 5–15)', r_nihss_mod_1:'⚠ CT head immediately — exclude haemorrhage.', r_nihss_mod_2:'Door-to-needle target < 60 minutes.', r_nihss_mod_3:'CT angiography — LVO → thrombectomy referral.',
  r_nihss_modsev:'Moderate-severe stroke (NIHSS 16–20)', r_nihss_modsev_1:'⚠ CT + CTA urgently. Thrombectomy referral if LVO.', r_nihss_modsev_2:'Airway assessment — may need critical care.', r_nihss_modsev_3:'Decompressive craniectomy if malignant MCA.',
  r_nihss_sev:'Severe stroke (NIHSS > 20)', r_nihss_sev_1:'⚠ ICU care. Thrombectomy if LVO on CTA.', r_nihss_sev_2:'Family meeting — prognosis, advance care planning.', r_nihss_sev_3:'NGT feeding if swallowing unsafe.',
  r_sofa_lo:'Mild organ dysfunction', r_sofa_lo_1:'Monitor closely. Treat underlying cause.', r_sofa_lo_2:'Reassess SOFA daily.', r_sofa_lo_3:'30 mL/kg IV crystalloid if sepsis suspected.',
  r_sofa_md:'Moderate multi-organ dysfunction', r_sofa_md_1:'⚠ ICU consideration immediately.', r_sofa_md_2:'Source control: drain, remove lines, surgery if indicated.', r_sofa_md_3:'Organ-specific support: ventilation, vasopressors.',
  r_sofa_hi:'Severe multi-organ failure', r_sofa_hi_1:'⚠ ICU immediately. Full organ support.', r_sofa_hi_2:'Invasive monitoring: arterial line, CVC, cardiac output.', r_sofa_hi_3:'Renal replacement if AKI persists.',
  r_ranson_lo:'Mild pancreatitis (< 5% mortality)', r_ranson_lo_1:'IV fluid resuscitation: 250–500 mL/hr crystalloid.', r_ranson_lo_2:'Nil by mouth → clear fluids as tolerated.', r_ranson_lo_3:'Analgesia + antiemetics. Monitor Ca²⁺ and glucose.',
  r_ranson_md:'Moderate pancreatitis', r_ranson_md_1:'HDU monitoring.', r_ranson_md_2:'CT abdomen with contrast at 72–96h if not improving.', r_ranson_md_3:'Early nasojejunal feeding within 24–48h.',
  r_ranson_hi:'Severe pancreatitis (> 50% mortality if score > 6)', r_ranson_hi_1:"⚠ ICU admission. Aggressive Hartmann's 500 mL/hr.", r_ranson_hi_2:'HPB surgery referral. Infected necrosis → intervention.', r_ranson_hi_3:'Arterial line, CVC, hourly fluid balance.',
  r_psi_1:'Class I — Very low risk (< 0.1% mortality)', r_psi_2:'Class II — Low risk (~0.6% mortality)', r_psi_3:'Class III — Low-moderate risk (~2.8% mortality)', r_psi_4:'Class IV — Moderate-high risk (~8.2% mortality)', r_psi_5:'Class V — High risk (~29% mortality)',
  r_psi_1_1:'Outpatient treatment appropriate.', r_psi_1_2:'Amoxicillin 500mg TDS × 5 days.', r_psi_2_1:'Outpatient appropriate for most.', r_psi_2_2:'Same oral antibiotics as Class I.', r_psi_3_1:'Brief admission or 24h observation.', r_psi_3_2:'IV antibiotics if not tolerating oral.', r_psi_4_1:'Hospital admission required.', r_psi_4_2:'Dual IV antibiotics.', r_psi_5_1:'⚠ Admit. ICU/HDU if severe features.', r_psi_5_2:'Full pneumonia care bundle.',
},

ru:{
  badge:'Создано студентом-медиком · Для студентов-медиков',
  h1a:'Клинические инструменты', h1b:'для обходов',
  sub:'15 клинических калькуляторов с мнемониками на 3 языках. Быстро, бесплатно, мобильно.',
  kpi1:'Калькуляторы', kpi2:'Языка', kpi3:'Бесплатно',
  all_label:'Все калькуляторы',
  disclaimer:'Только в образовательных целях. WardCalc не заменяет клиническое суждение и действующие рекомендации. Всегда консультируйтесь с лечащим врачом.',
  footer:'Создано студентом-медиком для студентов-медиков',
  btn:'Рассчитать',
  no:'Нет', yes:'Да', male:'Мужской', female:'Женский',
  sev_lo:'Низкий риск', sev_md:'Умеренный риск', sev_hi:'Высокий риск',
  tab_i:'Интерпретация', tab_a:'План действий', tab_d:'Лечение',
  sp_neuro:'Неврология', sp_cardio:'Кардиология', sp_resp:'Пульмонология',
  sp_renal:'Нефрология', sp_ped:'Педиатрия', sp_hep:'Гепатология',
  sp_vasc:'Сосуды', sp_icu:'ОРИТ / Отделение', sp_inf:'Инфекции', sp_gen:'Общее', sp_surg:'Хирургия',
  
  nav_about: 'О нас', nav_contact: 'Контакты', nav_privacy: 'Конфиденциальность', nav_terms: 'Условия', nav_disc: 'Отказ от ответственности',

  d_gcs:'Оценка уровня сознания. Первое, что спрашивают при каждом тяжёлом случае.',
  d_apgar:'Оценка новорождённого на 1-й и 5-й минутах. Определяет тактику реанимации.',
  d_wellsdvt:'Вероятность тромбоза глубоких вен. УЗИ или Д-димер? Ответ за 60 секунд.',
  d_wellspe:'Вероятность ТЭЛА. КТ-ангиография или Д-димер? Этот калькулятор решает.',
  d_curb65:'Тяжесть пневмонии. Дом, стационар или ОРИТ? Пять критериев, одно решение.',
  d_chads2:'Риск инсульта при фибрилляции предсердий. Определяет антикоагуляцию в кардиологии.',
  d_childpugh:'Прогноз хронической болезни печени. Класс А, В или С — риск операции.',
  d_bmi:'Индекс массы тела с классификацией ВОЗ и планом действий.',
  d_egfr:'Функция почек по CKD-EPI. Необходима для безопасного назначения препаратов.',
  d_mews:'Раннее выявление ухудшения пациента до остановки сердца. Каждая смена.',
  d_centor:'Вероятность стрептококкового фарингита. Научный ответ на «назначать антибиотики?»',
  d_nihss:'Тяжесть инсульта. Определяет тромболизис и тромбэктомию. Время — мозг.',
  d_sofa:'Оценка органной недостаточности. Определяет сепсис-3. Ежедневно в ОРИТ.',
  d_ranson:'Тяжесть панкреатита при поступлении и через 48 ч. Прогноз смертности.',
  d_psi:'Индекс тяжести пневмонии. 20 переменных для точной стратификации риска смертности.',
  
  f_eye:'Открывание глаз', f_verbal:'Речевой ответ', f_motor:'Двигательный ответ',
  f_appear:'Внешний вид (цвет кожи)', f_pulse:'Пульс (ЧСС)',
  f_grimace:'Гримаса (рефлексы)', f_activity:'Активность (мышечный тонус)', f_resp_a:'Дыхание',
  f_cancer:'Активный рак (лечение в последние 6 мес.)',
  f_paralysis:'Паралич, парез или гипсовая иммобилизация нижних конечностей',
  f_bedridden:'Постельный режим > 3 дней или операция в последние 12 недель',
  f_tenderness:'Локальная болезненность по ходу глубоких вен',
  f_legswollen:'Отёк всей ноги', f_calfswelling:'Отёк голени > 3 см (противоположная сторона)',
  f_pitting:'Ямочный отёк на поражённой ноге', f_collateral:'Коллатеральные поверхностные вены (не варикоз)',
  f_alt_dvt:'Альтернативный диагноз не менее вероятен (−2 балла)',
  f_dvt_signs:'Клинические признаки ТГВ', f_pe_no1:'ТЭЛА — первый диагноз или равновероятна',
  f_hr100:'ЧСС > 100 уд/мин', f_immob:'Иммобилизация ≥ 3 дней или операция за 4 недели',
  f_prev_pe:'ТГВ или ТЭЛА в анамнезе', f_haemoptysis:'Кровохарканье',
  f_malignancy:'Злокачественная опухоль (лечение за 6 мес.)',
  f_confusion:'Спутанность сознания (новая дезориентация)', f_urea:'Мочевина > 7 ммоль/л',
  f_rr30:'ЧД ≥ 30/мин', f_bp_low:'АД: систолическое < 90 или диастолическое ≤ 60 мм рт.ст.',
  f_age65:'Возраст ≥ 65 лет', f_chf:'Сердечная недостаточность (или ФВ ЛЖ < 40%)',
  f_htn:'Гипертония (АД > 140/90 или приём гипотензивных)', f_age75:'Возраст ≥ 75 лет — 2 балла',
  f_dm:'Сахарный диабет', f_stroke_h:'Инсульт/ТИА/тромбоэмболия в анамнезе — 2 балла',
  f_vasc_d:'Сосудистые заболевания (ИМ, ЗПА или аортальная бляшка)', f_age6574:'Возраст 65–74 года',
  f_female:'Женский пол', f_bilirubin:'Билирубин (мкмоль/л)', f_albumin:'Альбумин (г/л)',
  f_pt:'Удлинение ПВ / МНО', f_ascites:'Асцит', f_enceph:'Печёночная энцефалопатия',
  f_weight:'Вес (кг)', f_height:'Рост (см)', f_creat:'Сывороточный креатинин (мкмоль/л)',
  f_age:'Возраст (лет)', f_sex:'Пол', f_rr:'ЧД (/мин)', f_sbp:'Систолическое АД (мм рт.ст.)',
  f_hr:'ЧСС (/мин)', f_temp:'Температура (°C)', f_avpu:'Сознание (AVPU)',
  f_cough_a:'Отсутствие кашля', f_exudates:'Экссудат или увеличение миндалин',
  f_lymph:'Болезненные переднешейные лимфоузлы', f_temp38:'Температура > 38°C',
  f_c_age:'Возрастная группа', f_nihss:'Общий балл NIHSS (0–42)',
  f_pao2:'Дыхание — PaO₂/FiO₂ (мм рт.ст.)', f_plat:'Коагуляция — Тромбоциты (×10³/мкл)',
  f_bili_s:'Печень — Билирубин (мкмоль/л)', f_cardio_s:'ССС — СрАД / Вазопрессоры',
  f_gcs_s:'ЦНС — Шкала Глазго', f_creat_s:'Почки — Креатинин (мкмоль/л)',
  f_glucose:'Глюкоза > 11 ммоль/л', f_age55:'Возраст > 55 лет',
  f_ldh:'ЛДГ > 350 МЕ/л', f_ast:'АСТ > 250 МЕ/л', f_wbc:'Лейкоциты > 16 × 10⁹/л',
  f_hct:'Снижение гематокрита > 10% (48 ч)', f_bun:'Рост АМК > 1,8 ммоль/л (48 ч)',
  f_ca:'Кальций < 2 ммоль/л (48 ч)', f_pao2_r:'PaO₂ < 60 мм рт.ст. (48 ч)',
  f_fluid:'Секвестрация жидкости > 6 л (48 ч)', f_psi_cls:'Класс риска PSI',
  at_adm:'При поступлении', at_48h:'Через 48 часов',
  mnem_all:'Мнемоника — На 3 языках',

  // BUTTON TRANSLATIONS (GCS)
  g_e4: 'Самопроизвольно (4)', g_e3: 'На голос (3)', g_e2: 'На боль (2)', g_e1: 'Нет (1)',
  g_v5: 'Ориентирован (5)', g_v4: 'Спутанная (4)', g_v3: 'Слова (3)', g_v2: 'Звуки (2)', g_v1: 'Нет (1)',
  g_m6: 'Выполняет (6)', g_m5: 'Локализует (5)', g_m4: 'Отдёргивание (4)', g_m3: 'Сгибание (3)', g_m2: 'Разгибание (2)', g_m1: 'Нет (1)',

  // BUTTON TRANSLATIONS (APGAR)
  a_a2: 'Розовый везде (2)', a_a1: 'Акроцианоз (1)', a_a0: 'Синий/бледный (0)',
  a_p2: '≥ 100 уд/мин (2)', a_p1: '< 100 уд/мин (1)', a_p0: 'Отсутствует (0)',
  a_g2: 'Кашель/плач (2)', a_g1: 'Только гримаса (1)', a_g0: 'Нет (0)',
  a_c2: 'Активные движения (2)', a_c1: 'Сгибание (1)', a_c0: 'Вялый (0)',
  a_r2: 'Громкий плач (2)', a_r1: 'Слабое/нерег (1)', a_r0: 'Нет (0)',

  r_gcs_mild:'Лёгкое нарушение сознания / Лёгкая ЧМТ', r_gcs_mild_1:'Полный неврологический осмотр: зрачки, сила конечностей, координация.', r_gcs_mild_2:'Неврологические наблюдения каждые 30–60 мин.', r_gcs_mild_3:'КТ головы при механизме травмы, очаговом дефиците или ухудшении.',
  r_gcs_mod:'Умеренная черепно-мозговая травма', r_gcs_mod_1:'⚠ Срочная КТ головы — без промедлений.', r_gcs_mod_2:'Немедленная консультация нейрохирурга.', r_gcs_mod_3:'Положение 30° — голова приподнята. Венозный доступ. Анализы.', r_gcs_mod_4:'Пересматривайте ШКГ каждые 15 мин — эскалируйте при ухудшении.',
  r_gcs_sev:'Тяжёлая ЧМТ — немедленный риск для дыхательных путей', r_gcs_sev_1:'⚠ ШКГ ≤ 8 = порог интубации. Немедленно вызвать анестезиолога/реаниматолога.', r_gcs_sev_2:'БСИ (быстрая последовательная интубация). Иммобилизация шейного отдела при травме.', r_gcs_sev_3:'Срочная КТ головы + позвоночника. Нейрохирург на связи.', r_gcs_sev_4:'Госпитализация в ОРИТ. Оценка дееспособности.',
  r_apgar_norm:'Норма — удовлетворительное состояние', r_apgar_norm_1:'Согреть, обсушить и стимулировать новорождённого.', r_apgar_norm_2:'Рутинный уход — контакт кожа к коже.', r_apgar_norm_3:'Повторить оценку по Апгар через 5 минут.',
  r_apgar_mod:'Умеренное нарушение — требуется вмешательство', r_apgar_mod_1:'Стимуляция: растирание спины, щелчок по стопе.', r_apgar_mod_2:'Дополнительный кислород через маску.', r_apgar_mod_3:'Немедленно вызвать педиатра.', r_apgar_mod_4:'Подготовить оборудование для масочной вентиляции.',
  r_apgar_crit:'Критическое состояние — немедленная реанимация', r_apgar_crit_1:'⚠ Немедленно вызвать реанимационную бригаду (ОРИТ новорождённых).', r_apgar_crit_2:'ИВЛ под положительным давлением 40–60 вдохов/мин.', r_apgar_crit_3:'Компрессии грудной клетки при отсутствии эффекта (соотношение 3:1).', r_apgar_crit_4:'Доступ через пупочную вену.',
  r_dvt_hi:'Высокая вероятность тромбоза глубоких вен', r_dvt_hi_1:'Срочное УЗИ проксимальных вен ноги — в тот же день, если возможно.', r_dvt_hi_2:'Если УЗИ положительное → немедленно начать антикоагуляцию.', r_dvt_hi_3:'Если УЗИ отрицательное при высоком подозрении → повторить через неделю.',
  r_dvt_md:'Умеренная вероятность тромбоза глубоких вен', r_dvt_md_1:'Анализ Д-димера — если отрицательный, ТГВ исключён.', r_dvt_md_2:'Если Д-димер положительный → УЗИ проксимальных вен.', r_dvt_md_d:'Антикоагуляция только при подтверждении ТГВ по УЗИ — не лечить эмпирически.',
  r_dvt_lo:'Низкая вероятность тромбоза глубоких вен', r_dvt_lo_1:'Д-димер — если отрицательный, ТГВ исключён.', r_dvt_lo_2:'Искать альтернативный диагноз: целлюлит, киста Бейкера, мышечная гематома.', r_dvt_lo_d:'Эмпирическая антикоагуляция не показана — лечить основной диагноз.',
  r_pe_hi:'Высокая вероятность тромбоэмболии лёгочной артерии', r_pe_hi_1:'⚠ Сразу на КТ-ангиографию — Д-димер не нужен.', r_pe_hi_2:'Если КТ задерживается >4 ч → начать эмпирическую антикоагуляцию.', r_pe_hi_3:'ЭКГ 12 отведений. КЩС. Тропонин. ЭхоКГ при гемодинамической нестабильности.',
  r_pe_md:'Умеренная вероятность ТЭЛА', r_pe_md_1:'Д-димер. Если повышен → срочная КТ-ангиография.', r_pe_md_2:'Дополнительный O₂ при SpO₂ < 94%.',
  r_pe_lo:'Низкая вероятность ТЭЛА', r_pe_lo_1:'Применить критерии PERC — если все 8 отрицательны, ТЭЛА исключена без Д-димера.', r_pe_lo_2:'При положительном критерии PERC → Д-димер → КТ при повышении.', r_pe_lo_d:'Эмпирическая антикоагуляция не показана — сначала подтвердить визуализацией.',
  r_curb_lo:'Лёгкая пневмония — лечение на дому', r_curb_lo_1:'Подходит для лечения на дому.', r_curb_lo_2:'Контрольный визит: вернуться при ухудшении или отсутствии улучшения через 48 ч.', r_curb_lo_3:'Контрольная рентгенография через 6 недель для подтверждения разрешения.',
  r_curb_md:'Умеренная тяжесть — рассмотреть госпитализацию', r_curb_md_1:'Индивидуальная оценка — некоторые подходят для лечения в амбулаторных условиях.', r_curb_md_2:'При госпитализации: венозный доступ, анализы, посевы крови × 2, рентгенография.', r_curb_md_3:'Мониторинг SpO₂, O₂ при снижении <94%.',
  r_curb_hi:'Высокая тяжесть — госпитализация обязательна', r_curb_hi_1:'⚠ Балл 4–5 → рассмотреть ОРИТ/ПМСН.', r_curb_hi_2:'Посевы крови × 2, антигены легионеллы/пневмококка, мокрота.', r_curb_hi_3:'Протокол «Сепсис 6» при признаках сепсиса.',
  r_chads_lo:'Низкий риск инсульта — антикоагуляция не требуется', r_chads_lo_1:'Антикоагуляция не требуется. Пересматривать ежегодно.', r_chads_lo_2:'Контроль ЧСС и симптоматическое лечение.', r_chads_lo_d:'Аспирин при ФП для профилактики инсульта НЕ рекомендован.',
  r_chads_md:'Умеренный риск — совместное принятие решений', r_chads_md_1:'Совместное обсуждение: риск инсульта vs риск кровотечения (ежегодно).', r_chads_md_2:'Рассчитать HAS-BLED для оценки риска кровотечения.',
  r_chads_hi:'Высокий риск — антикоагулянты рекомендованы', r_chads_hi_1:'Начать ПОАК — предпочтительнее варфарина.', r_chads_hi_2:'Проверить СКФ и функцию печени перед началом терапии.', r_chads_hi_3:'Устранить модифицируемые факторы риска по шкале HAS-BLED.',
  r_cp_a:'Класс A — Компенсированный цирроз', r_cp_a_1:'Наблюдение у гепатолога каждые 6 месяцев.', r_cp_a_2:'УЗИ + АФП каждые 6 месяцев (скрининг ГЦК).', r_cp_a_3:'ЭГДС для оценки варикоза, если ранее не проводилась.',
  r_cp_b:'Класс B — Выраженное нарушение функции', r_cp_b_1:'Направление к гепатологу — оценка для трансплантации.', r_cp_b_2:'УЗИ + АФП каждые 3–6 месяцев.', r_cp_b_3:'Лечение асцита (диуретики), энцефалопатии (лактулоза).',
  r_cp_c:'Класс C — Декомпенсированный цирроз — срочно к гепатологу', r_cp_c_1:'⚠ Срочно к гепатологу — приоритетное включение в лист ожидания трансплантации.', r_cp_c_2:'Профилактика СБП, лечение гепаторенального синдрома.', r_cp_c_3:'Обсуждение плана паллиативной помощи.',
  r_bmi_under:'Дефицит массы тела (ИМТ < 18,5)', r_bmi_under_1:'Скрининг нутритивного статуса (MUST).', r_bmi_under_2:'Выяснить причину: мальабсорбция, расстройство пищевого поведения, гипертиреоз.',
  r_bmi_norm:'Нормальная масса тела (18,5–24,9)', r_bmi_norm_1:'Норма. Поддерживать сбалансированное питание и физическую активность.',
  r_bmi_over:'Избыточная масса тела (25–29,9)', r_bmi_over_1:'Дефицит 500–1000 ккал/сут обеспечивает снижение на 0,5–1 кг/нед.', r_bmi_over_2:'Скрининг: гликемия натощак, липиды, АД, окружность талии.',
  r_bmi_ob1:'Ожирение I степени (30–34,9)', r_bmi_ob1_1:'Скрининг: СД 2 типа, гипертония, СОАС, НАЖБП.', r_bmi_ob1_2:'Структурированная программа снижения веса.',
  r_bmi_ob2:'Ожирение II–III степени (ИМТ ≥ 35)', r_bmi_ob2_1:'Направление к бариатрическому хирургу.', r_bmi_ob2_2:'Агонисты ГПП-1 — препараты первой линии.',
  r_egfr_g1:'G1 — Нормальная функция почек (≥ 90)', r_egfr_g1_1:'Ежегодный мониторинг при СД, АГ, ССЗ.', r_egfr_g1_2:'Целевое АД < 130/80 мм рт.ст.',
  r_egfr_g2:'G2 — Незначительное снижение (60–89)', r_egfr_g2_1:'СКФ, АКМ, АД — ежегодно.', r_egfr_g2_2:'Избегать НПВП и аминогликозидов.',
  r_egfr_g3a:'G3a — Умеренное снижение (45–59)', r_egfr_g3a_1:'Мониторинг каждые 6 месяцев.', r_egfr_g3a_2:'Коррекция доз метформина, дигоксина, антибиотиков.',
  r_egfr_g3b:'G3b — Умеренно-выраженное снижение (30–44)', r_egfr_g3b_1:'Мониторинг каждые 3 месяца. Направление к нефрологу.', r_egfr_g3b_2:'ОТМЕНИТЬ метформин (СКФ <30), избегать НПВП.',
  r_egfr_g4:'G4 — Выраженное снижение (15–29)', r_egfr_g4_1:'⚠ Срочно к нефрологу. Планирование заместительной терапии.', r_egfr_g4_2:'Формирование АВ-фистулы — занимает 3–6 месяцев.',
  r_egfr_g5:'G5 — Почечная недостаточность (< 15 мл/мин)', r_egfr_g5_1:'Начало диализа или превентивная трансплантация.', r_egfr_g5_2:'Все препараты пересматриваются нефрологом.',
  r_mews_lo:'Низкий риск — рутинное наблюдение', r_mews_lo_1:'Рутинный мониторинг по протоколу отделения.', r_mews_lo_2:'Эскалировать при клиническом ухудшении независимо от MEWS.',
  r_mews_md:'Средний риск — увеличить частоту наблюдений', r_mews_md_1:'Увеличить частоту измерений до каждых 30–60 мин.', r_mews_md_2:'Информировать медсестру и лечащего врача.', r_mews_md_3:'Контроль водного баланса, диуреза, гликемии.',
  r_mews_hi:'Высокий риск — срочный врачебный осмотр', r_mews_hi_1:'⚠ Немедленный осмотр врача.', r_mews_hi_2:'Оценка по схеме А–Е.', r_mews_hi_3:'Венозный доступ × 2. Анализы: ОАК, электролиты, СРБ, лактат, посевы крови.',
  r_centor_lo:'Низкая вероятность — вероятна вирусная этиология', r_centor_lo_1:'Антибиотики не показаны — наиболее вероятна вирусная инфекция.', r_centor_lo_2:'Парацетамол 1 г 4 р/сут + ибупрофен 400 мг 3 р/сут в чередовании.',
  r_centor_md:'Умеренная вероятность — сначала провести тест', r_centor_md_1:'Экспресс-тест на стрептококк группы A или мазок из горла.', r_centor_md_2:'Назначить антибиотики только при положительном тесте.', r_centor_md_d:'Антибиотики — только при подтверждении стрептококка группы A.',
  r_centor_hi:'Высокая вероятность стрептококкового фарингита', r_centor_hi_1:'Назначить антибиотики — балл 4+ достаточен для клинического диагноза.', r_centor_hi_2:'Полный 10-дневный курс — снижает риск ревматической лихорадки.',
  r_nihss_none:'Неврологический дефицит отсутствует — исключить ТИА', r_nihss_none_1:'Исключить ТИА — срочное направление в TIA-клинику (шкала ABCD²).', r_nihss_none_2:'МРТ DWI в течение 24 часов. Сосудистая визуализация.',
  r_nihss_minor:'Малый инсульт (NIHSS 1–4)', r_nihss_minor_1:'Госпитализация в острое инсультное отделение.', r_nihss_minor_2:'Бесконтрастная КТ головы — срочно.', r_nihss_minor_3:'Оценка возможности тромболизиса при давности ≤ 4,5 ч.',
  r_nihss_mod:'Умеренный инсульт (NIHSS 5–15)', r_nihss_mod_1:'⚠ КТ головы немедленно — исключить геморрагию.', r_nihss_mod_2:'Целевое время «дверь–игла» < 60 минут.', r_nihss_mod_3:'КТ-ангиография — при ОЛО → направление на тромбэктомию.',
  r_nihss_modsev:'Умеренно-тяжёлый инсульт (NIHSS 16–20)', r_nihss_modsev_1:'⚠ КТ + КТА срочно. Направление на тромбэктомию при ОЛО.', r_nihss_modsev_2:'Оценка дыхательных путей — может потребоваться реанимация.', r_nihss_modsev_3:'Декомпрессивная краниэктомия при злокачественном инфаркте СМА.',
  r_nihss_sev:'Тяжёлый инсульт (NIHSS > 20)', r_nihss_sev_1:'⚠ ОРИТ. Тромбэктомия при ОЛО на КТА.', r_nihss_sev_2:'Беседа с семьёй — прогноз, планирование паллиативной помощи.', r_nihss_sev_3:'НГЗ при нарушении глотания.',
  r_sofa_lo:'Лёгкая органная дисфункция', r_sofa_lo_1:'Тщательный мониторинг. Лечение первопричины.', r_sofa_lo_2:'Переоценка SOFA ежедневно.', r_sofa_lo_3:'30 мл/кг кристаллоидов при подозрении на сепсис.',
  r_sofa_md:'Умеренная полиорганная дисфункция', r_sofa_md_1:'⚠ Немедленная оценка необходимости перевода в ОРИТ.', r_sofa_md_2:'Контроль источника инфекции: дренирование, удаление катетеров, хирургия.', r_sofa_md_3:'Органоспецифическая поддержка: ИВЛ, вазопрессоры.',
  r_sofa_hi:'Тяжёлая полиорганная недостаточность', r_sofa_hi_1:'⚠ Немедленно в ОРИТ. Полная органная поддержка.', r_sofa_hi_2:'Инвазивный мониторинг: артериальная линия, ЦВК, сердечный выброс.', r_sofa_hi_3:'Заместительная почечная терапия при сохраняющемся ОПП.',
  r_ranson_lo:'Лёгкий панкреатит (летальность < 5%)', r_ranson_lo_1:'Инфузионная терапия: кристаллоиды 250–500 мл/ч.', r_ranson_lo_2:'Голод → прозрачные жидкости по мере переносимости.', r_ranson_lo_3:'Обезболивание + противорвотные. Контроль Ca²⁺ и гликемии.',
  r_ranson_md:'Умеренно-тяжёлый панкреатит', r_ranson_md_1:'Мониторинг в ПМСН.', r_ranson_md_2:'КТ брюшной полости с контрастом через 72–96 ч при отсутствии улучшения.', r_ranson_md_3:'Раннее назоеюнальное питание в течение 24–48 ч.',
  r_ranson_hi:'Тяжёлый панкреатит (летальность > 50% при балле > 6)', r_ranson_hi_1:"⚠ Госпитализация в ОРИТ. Агрессивная инфузия раствора Хартмана 500 мл/ч.", r_ranson_hi_2:'Консультация гепатобилиарного хирурга. Инфицированный некроз → вмешательство.', r_ranson_hi_3:'Артериальная линия, ЦВК, почасовой контроль водного баланса.',
  r_psi_1:'Класс I — Очень низкий риск (летальность < 0,1%)', r_psi_2:'Класс II — Низкий риск (летальность ~0,6%)', r_psi_3:'Класс III — Умеренный риск (летальность ~2,8%)', r_psi_4:'Класс IV — Умеренно-высокий риск (летальность ~8,2%)', r_psi_5:'Класс V — Высокий риск (летальность ~29%)',
  r_psi_1_1:'Амбулаторное лечение.', r_psi_1_2:'Амоксициллин 500 мг 3 р/сут × 5 дней.', r_psi_2_1:'Амбулаторно для большинства.', r_psi_2_2:'Те же пероральные антибиотики, что и при классе I.', r_psi_3_1:'Краткая госпитализация или наблюдение 24 часа.', r_psi_3_2:'Внутривенные антибиотики при невозможности перорального приёма.', r_psi_4_1:'Госпитализация обязательна.', r_psi_4_2:'Двойная внутривенная антибактериальная терапия.', r_psi_5_1:'⚠ Госпитализация. ОРИТ/ПМСН при тяжёлых признаках.', r_psi_5_2:'Полный протокол ведения пневмонии.',
},

uz:{
  badge:"Tibbiyot talabasi tomonidan · Tibbiyot talabalari uchun",
  h1a:'Klinik Asboblar', h1b:'Ward uchun',
  sub:"3 tilda mnemonikalar bilan 15 ta klinik kalkulyator. Tez, bepul, mobil.",
  kpi1:'Kalkulyatorlar', kpi2:'Til', kpi3:'Bepul',
  all_label:'Barcha kalkulyatorlar',
  disclaimer:"Faqat ta'lim maqsadida. WardCalc klinik mulohaza va joriy qo'llanmalarni almashtirolmaydi. Har doim nazoratchi shifokoringiz bilan maslahatlashing.",
  footer:"Tibbiyot talabasi tomonidan, tibbiyot talabalari uchun",
  btn:'Hisoblash',
  no:"Yo'q", yes:'Ha', male:'Erkak', female:'Ayol',
  sev_lo:'Past xavf', sev_md:"O'rtacha xavf", sev_hi:'Yuqori xavf',
  tab_i:'Talqin', tab_a:'Harakat Rejasi', tab_d:'Birinchi Davolash',
  sp_neuro:'Nevrologiya', sp_cardio:'Kardiologiya', sp_resp:'Pulmonologiya',
  sp_renal:'Nefrologiya', sp_ped:'Pediatriya', sp_hep:'Gepatologiya',
  sp_vasc:"Qon tomir", sp_icu:"ORIT / Bo'lim", sp_inf:'Yuqumli kasallik', sp_gen:'Umumiy', sp_surg:'Jarrohlik',
  
  nav_about: 'Biz haqimizda', nav_contact: 'Aloqa', nav_privacy: 'Maxfiylik siyosati', nav_terms: 'Shartlar', nav_disc: 'Ogohlantirish',

  d_gcs:"Ong darajasini baholash. Har bir og'ir holatda birinchi so'raladigan ball.",
  d_apgar:"1 va 5 daqiqada yangi tug'ilganni baholash. Reanimatsiya qarorini belgilaydi.",
  d_wellsdvt:"DVT ehtimoli. Bu oyoqqa ultrases kerakmi yoki D-dimer? 60 soniyada javob.",
  d_wellspe:"O'pka emboliyasi ehtimoli. CTPA yoki D-dimer? Bu kalkulyator qaror beradi.",
  d_curb65:"Pnevmoniya og'irligi. Uy, kasalxona yoki ORIT? Besh mezon, bir qaror.",
  d_chads2:"AF da insult xavfi. Barcha kardiologiya bo'limlarida antikoagulyatsiyani belgilovchi ball.",
  d_childpugh:"Surunkali jigar kasalligi prognozi. A, B yoki C sinf — operatsiya xavfi.",
  d_bmi:"WHO tasnifi bilan tana vazni indeksi. Har bir bemorni baholashda ishlatiladi.",
  d_egfr:"CKD-EPI formulasi bo'yicha buyrak funktsiyasi. Dori buyurish xavfsizligi uchun muhim.",
  d_mews:"Bemorning yomonlashuvini yurak to'xtashidan oldin aniqlash. Har bir smenada.",
  d_centor:"Streptokokk faringiti ehtimoli. 'Antibiotik buyurish kerakmi?' ga ilmiy javob.",
  d_nihss:"Insult og'irligini aniqlash. Tromboliz va trombektomiyani yo'naltiradi. Vaqt — miya.",
  d_sofa:"Organ yetishmovchiligini baholash. Sepsit-3 ni belgilaydi. ORIT da kunlik hisob.",
  d_ranson:"Qabulda va 48 soatda pankreatit og'irligi. O'lim xavfini bashorat qiladi.",
  d_psi:"Pnevmoniya og'irligi indeksi. 20 ta o'zgaruvchidan foydalanib o'lim xavfini aniqlaydi.",
  
  f_eye:"Ko'z ochilishi", f_verbal:"Og'zaki javob", f_motor:'Harakat javobi',
  f_appear:"Ko'rinish (teri rangi)", f_pulse:'Puls (yurak urishi)',
  f_grimace:'Grimasa (reflekslar)', f_activity:'Faollik (mushak tonusi)', f_resp_a:'Nafas olish',
  f_cancer:"Faol saraton (6 oy ichida davolangan)",
  f_paralysis:"Pastki oyoq falaji, parezi yoki gipsi",
  f_bedridden:"3 kundan ko'p to'shakda yoki 12 haftada katta operatsiya",
  f_tenderness:"Chuqur vena bo'ylab lokal og'riq",
  f_legswollen:'Butun oyoq shishi', f_calfswelling:'Boldir > 3 sm shish (boshqa tomonga nisbatan)',
  f_pitting:'Simptomli oyoqda bosimli shish', f_collateral:"Kollateral yuzaki venalar (varikoz emas)",
  f_alt_dvt:"Muqobil tashxis DVT bilan teng ehtimollik (−2 ball)",
  f_dvt_signs:'DVT klinik belgilari', f_pe_no1:"O'pka emboliyasi 1-tashxis yoki teng ehtimollik",
  f_hr100:'Yurak urishi > 100/daqiqa', f_immob:"≥ 3 kun immobilizatsiya yoki 4 haftada operatsiya",
  f_prev_pe:"Avval DVT yoki o'pka emboliyasi", f_haemoptysis:'Qon tupurish',
  f_malignancy:"Saraton (6 oy ichida davolangan)", f_confusion:'Yangi chalkashlik (dezorientatsiya)',
  f_urea:'Siydik kislotasi > 7 mmol/L', f_rr30:'Nafas olish ≥ 30/daqiqa',
  f_bp_low:'Qon bosimi: sistolik < 90 yoki diastolik ≤ 60 mmHg', f_age65:"Yosh ≥ 65 yil",
  f_chf:"Yurak yetishmovchiligi (yoki FV < 40%)", f_htn:"Gipertenziya (> 140/90 yoki antihipertenziv)",
  f_age75:'Yosh ≥ 75 — 2 ball', f_dm:'Qandli diabet',
  f_stroke_h:"Insult/TIA/tromboemboliya tarixi — 2 ball",
  f_vasc_d:"Qon tomir kasalligi (MI, periferik arteriya)", f_age6574:'Yosh 65–74',
  f_female:'Ayol jinsi', f_bilirubin:'Bilirubin (μmol/L)', f_albumin:'Albumin (g/L)',
  f_pt:'PT uzayishi / INR', f_ascites:'Assit', f_enceph:'Jigar ensefalopatiyasi',
  f_weight:"Vazn (kg)", f_height:"Bo'y (sm)", f_creat:'Zardob kreatinini (μmol/L)',
  f_age:'Yosh (yil)', f_sex:'Jins', f_rr:'Nafas olish (/daqiqa)', f_sbp:'Sistolik qon bosimi (mmHg)',
  f_hr:'Yurak urishi (/daqiqa)', f_temp:"Harorat (°C)", f_avpu:'Ong holati (AVPU)',
  f_cough_a:"Yo'tal yo'q", f_exudates:'Tonsil eksudat yoki shishi',
  f_lymph:"Oldingi bo'yin limfa tugunlari og'rig'i", f_temp38:"Harorat > 38°C",
  f_c_age:'Yosh guruhi', f_nihss:'NIHSS jami bali (0–42)',
  f_pao2:"Nafas — PaO₂/FiO₂ (mmHg)", f_plat:"Koagulyatsiya — Trombotsitlar (×10³/μL)",
  f_bili_s:'Jigar — Bilirubin (μmol/L)', f_cardio_s:"Qon tomir — MAP / Vazopresorlar",
  f_gcs_s:'MNS — Glazgo shkalasi (GCS)', f_creat_s:"Buyrak — Kreatinin (μmol/L)",
  f_glucose:"Glyukoza > 11 mmol/L", f_age55:"Yosh > 55 yil",
  f_ldh:'LDG > 350 IU/L', f_ast:'AST > 250 IU/L', f_wbc:"Leykositlar > 16 × 10⁹/L",
  f_hct:'Gematokrit tushishi > 10% (48 soat)', f_bun:"BUN ko'tarilishi > 1.8 mmol/L (48 soat)",
  f_ca:'Kaltsiy < 2 mmol/L (48 soat)', f_pao2_r:"PaO₂ < 60 mmHg (48 soat)",
  f_fluid:"Suyuqlik sekvestratsiyasi > 6 litr (48 soat)", f_psi_cls:'PSI xavf sinfi',
  at_adm:'Qabulda', at_48h:'48 soatda', mnem_all:"Mnemonika — 3 tilda",

  // BUTTON TRANSLATIONS (GCS)
  g_e4: 'O\'z-o\'zidan (4)', g_e3: 'Ovozga (3)', g_e2: 'Og\'riqqa (2)', g_e1: 'Yo\'q (1)',
  g_v5: 'Mo\'ljallangan (5)', g_v4: 'Chalkash (4)', g_v3: 'So\'zlar (3)', g_v2: 'Tovushlar (2)', g_v1: 'Yo\'q (1)',
  g_m6: 'Bajaradi (6)', g_m5: 'Lokalizatsiya (5)', g_m4: 'Tortib olish (4)', g_m3: 'Bukilish (3)', g_m2: 'Yozilish (2)', g_m1: 'Yo\'q (1)',

  // BUTTON TRANSLATIONS (APGAR)
  a_a2: 'Hamma joyi pushti (2)', a_a1: 'Akrotsianoz (1)', a_a0: 'Ko\'k/oq (0)',
  a_p2: '≥ 100/daqiqa (2)', a_p1: '< 100/daqiqa (1)', a_p0: 'Yo\'q (0)',
  a_g2: 'Yig\'lash (2)', a_g1: 'Faqat grimasa (1)', a_g0: 'Yo\'q (0)',
  a_c2: 'Faol harakat (2)', a_c1: 'Biroz bukilish (1)', a_c0: 'Bo\'sh (0)',
  a_r2: 'Baland yig\'lash (2)', a_r1: 'Zaif (1)', a_r0: 'Yo\'q (0)',

  r_gcs_mild:"Engil buzilish / Yengil bosh-miya jarohati", r_gcs_mild_1:"To'liq nevrologik tekshiruv: ko'z qorachig'i, oyoq-qo'l kuchi, koordinatsiya.", r_gcs_mild_2:"Har 30–60 daqiqada nevrologik kuzatuv.", r_gcs_mild_3:"Jarohat mexanizmi, fokal defitsit yoki yomonlashish bo'lsa KT.",
  r_gcs_mod:"O'rtacha bosh-miya jarohati", r_gcs_mod_1:"⚠ Shoshilinch bosh KT — kechiktirmang.", r_gcs_mod_2:"Neyrojarroh bilan darhol maslahatlashing.", r_gcs_mod_3:"Bosh 30° ko'tarilgan holat. Venoz kirish. Qon tahlillari.", r_gcs_mod_4:"Har 15 daqiqada GCS qayta baholash — yomonlashsa tezlashtiring.",
  r_gcs_sev:"Og'ir bosh-miya jarohati — nafas yo'li xavf ostida", r_gcs_sev_1:"⚠ GCS ≤ 8 = intubatsiya chegarasi. Darhol anesteziolog/reanimatolog chaqiring.", r_gcs_sev_2:"Tez ketma-ket intubatsiya (RSI). Jarohatda bo'yin imobolizatsiyasi.", r_gcs_sev_3:"Shoshilinch bosh + umurtqa KT. Neyrojarroh tayyor bo'lsin.", r_gcs_sev_4:"ORIT ga yotqizish. Huquqiy layoqatni baholash.",
  r_apgar_norm:"Normal — qoniqarli holat", r_apgar_norm_1:"Yangi tug'ilganni isiting, quritib rag'batlantiring.", r_apgar_norm_2:"Oddiy parvarish — teri-teri kontakti.", r_apgar_norm_3:"5 daqiqada APGAR ni qayta baholang.",
  r_apgar_mod:"O'rtacha buzilish — aralashuv kerak", r_apgar_mod_1:"Rag'batlantirish: orqasini ishqalash, oyoq tagini chertish.", r_apgar_mod_2:"Maska orqali qo'shimcha kislorod.", r_apgar_mod_3:"Darhol pediatr chaqiring.", r_apgar_mod_4:"Qop-niqob ventilyatsiya asbobini tayyorlang.",
  r_apgar_crit:"Kritik holat — darhol to'liq reanimatsiya", r_apgar_crit_1:"⚠ Darhol ORIT (yangi tug'ilganlar) jamoasini chaqiring.", r_apgar_crit_2:"Ijobiy bosimli ventilyatsiya 40–60 nafas/daqiqa.", r_apgar_crit_3:"Effekt bo'lmasa ko'krak siqish (3:1 nisbat).", r_apgar_crit_4:"Kindik venasi orqali venoz kirish.",
  r_dvt_hi:"DVT yuqori ehtimoli", r_dvt_hi_1:"Shoshilinch proksimal oyoq ultrasonografiyasi — imkon bo'lsa shu kuni.", r_dvt_hi_2:"USS musbat → darhol antikoagulyatsiya boshlang.", r_dvt_hi_3:"USS manfiy lekin shubha kuchli → 1 haftadan keyin takrorlang.",
  r_dvt_md:"DVT o'rtacha ehtimoli", r_dvt_md_1:"D-dimer tahlili — manfiy bo'lsa DVT istisno qilinadi.", r_dvt_md_2:"D-dimer musbat bo'lsa → proksimal oyoq USS.", r_dvt_md_d:"Antikoagulyatsiya faqat USS DVT ni tasdiqlasa — empirik davolamang.",
  r_dvt_lo:"DVT past ehtimoli", r_dvt_lo_1:"D-dimer — manfiy bo'lsa DVT istisno.", r_dvt_lo_2:"Muqobil tashxislar: sellyulit, Beyker kistasi, mushak gematomasi.", r_dvt_lo_d:"Empirik antikoagulyatsiya yo'q — asosiy tashxisni davolang.",
  r_pe_hi:"O'pka emboliyasi yuqori ehtimoli", r_pe_hi_1:"⚠ To'g'ridan-to'g'ri CTPA ga yuboring — D-dimer shart emas.", r_pe_hi_2:"CTPA 4 soatdan kech bo'lsa → empirik antikoagulyatsiya boshlang.", r_pe_hi_3:"12 ta elektrodli EKG. ABG. Troponin. Gemodinamik beqaror bo'lsa EXoKG.",
  r_pe_md:"O'pka emboliyasi o'rtacha ehtimoli", r_pe_md_1:"D-dimer. Ko'tarilgan bo'lsa → shoshilinch CTPA.", r_pe_md_2:"SpO₂ < 94% bo'lsa qo'shimcha O₂.",
  r_pe_lo:"O'pka emboliyasi past ehtimoli", r_pe_lo_1:"PERC qoidasini qo'llang — barcha 8 ta manfiy bo'lsa D-dimersiz OE istisno.", r_pe_lo_2:"Har qanday PERC musbat bo'lsa → D-dimer → ko'tarilsa CTPA.", r_pe_lo_d:"Empirik antikoagulyatsiya yo'q — avval tasvirlash bilan tasdiqlang.",
  r_curb_lo:"Yengil pnevmoniya — uyda davolash mumkin", r_curb_lo_1:"Uyda davolash uchun mos.", r_curb_lo_2:"Xavfsizlik to'ri: yomonlashsa yoki 48 soatda yaxshilanmasa qaytish.", r_curb_lo_3:"Hal bo'lganini tasdiqlash uchun 6 haftada nazorat rentgenografiyasi.",
  r_curb_md:"O'rtacha og'irlik — kasalxonaga yotqizishni ko'rib chiqing", r_curb_md_1:"Individual baho — ba'zilari kengaytirilgan ambulatoriya davolashga mos.", r_curb_md_2:"Yotqizilsa: venoz kirish, tahlillar, qon ekinlari × 2, rentgenografiya.", r_curb_md_3:"SpO₂ monitoring, <94% da O₂.",
  r_curb_hi:"Yuqori og'irlik — kasalxona majburiy", r_curb_hi_1:"⚠ Ball 4–5 → ORIT/PMSP ko'rib chiqilsin.", r_curb_hi_2:"Qon ekinlari × 2, legiella/pnevmokokk antigeni, balg'am.", r_curb_hi_3:"Sepsis belgisi bo'lsa 'Sepsis 6' protokoli.",
  r_chads_lo:"Past insult xavfi — antikoagulyatsiya shart emas", r_chads_lo_1:"Antikoagulyatsiya kerak emas. Har yili qayta baholang.", r_chads_lo_2:"Yurak urishi nazorati va simptomatik davolash.", r_chads_lo_d:"AF da insult profilaktikasi uchun Aspirin TAVSIYA ETILMAYDI.",
  r_chads_md:"O'rtacha xavf — birgalikda qaror qabul qilish", r_chads_md_1:"Birgalikda muhokama: insult vs qon ketish xavfi (har yili).", r_chads_md_2:"Qon ketish xavfi uchun HAS-BLED hisoblang.",
  r_chads_hi:"Yuqori xavf — antikoagulyant tavsiya etiladi", r_chads_hi_1:"DOAC boshlang — varfarindan afzal.", r_chads_hi_2:"Boshlanishidan oldin GFR va jigar funktsiyasini tekshiring.", r_chads_hi_3:"HAS-BLED o'zgartirilishi mumkin bo'lgan xavf omillarini bartaraf eting.",
  r_cp_a:"A sinf — Kompensatsiyalangan jigar kasalligi", r_cp_a_1:"Har 6 oyda gepatolog ko'rigi.", r_cp_a_2:"GGK skriningi uchun har 6 oyda USS + AFP.", r_cp_a_3:"Avval qilinmagan bo'lsa varikoz uchun yuqori GI endoskopiya.",
  r_cp_b:"B sinf — Sezilarli funksional buzilish", r_cp_b_1:"Gepatolog yo'llanmasi — transplantatsiya bahosi.", r_cp_b_2:"Har 3–6 oyda USS + AFP.", r_cp_b_3:"Assitni (diuretiklar), ensefalopatiyani (laktuloza) davolash.",
  r_cp_c:"C sinf — Dekompensatsiyalangan — shoshilinch gepatolog", r_cp_c_1:"⚠ Shoshilinch gepatolog — transplantatsiya navbat listiga ustuvor kiritish.", r_cp_c_2:"SBP profilaktikasi, gepatorental sindrom davolash.", r_cp_c_3:"Kelajakdagi tibbiy rejalar muhokamasi.",
  r_bmi_under:"Vazn yetishmovchiligi (TVI < 18,5)", r_bmi_under_1:"Oziqlanish skriningi (MUST).", r_bmi_under_2:"Sababni aniqlash: malabsorbsiya, ovqatlanish buzilishi, gipertireoz.",
  r_bmi_norm:"Normal vazn (18,5–24,9)", r_bmi_norm_1:"Normal. Muvozanatli ovqatlanish va jismoniy faollik orqali ushlab turing.",
  r_bmi_over:"Ortiqcha vazn (25–29,9)", r_bmi_over_1:"Kuniga 500–1000 kkal kamaytirilsa haftada 0,5–1 kg yo'qoladi.", r_bmi_over_2:"Skrining: och qorin glyukozasi, lipidlar, qon bosimi, bel aylanasi.",
  r_bmi_ob1:"Semizlik I daraja (30–34,9)", r_bmi_ob1_1:"Skrining: QD 2 turi, gipertenziya, OSA, NAFLD.", r_bmi_ob1_2:"Tuzilgan vazn pasaytirish dasturi.",
  r_bmi_ob2:"Semizlik II–III daraja (TVI ≥ 35)", r_bmi_ob2_1:"Bariatrik jarroh yo'llanmasi.", r_bmi_ob2_2:"GLP-1 agonistlari — birinchi qator farmakoterapiya.",
  r_egfr_g1:"G1 — Normal buyrak funktsiyasi (≥ 90)", r_egfr_g1_1:"QD/AG/YQK bo'lsa yillik monitoring.", r_egfr_g1_2:"Maqsad qon bosimi < 130/80 mmHg.",
  r_egfr_g2:"G2 — Biroz pasaygan (60–89)", r_egfr_g2_1:"Yillik GFR, ACR, qon bosimi.", r_egfr_g2_2:"NSAID va aminoglikozidlardan saqlaning.",
  r_egfr_g3a:"G3a — O'rtacha pasaygan (45–59)", r_egfr_g3a_1:"Har 6 oyda monitoring.", r_egfr_g3a_2:"Metformin, digoksin, antibiotiklar dozasini sozlang.",
  r_egfr_g3b:"G3b — O'rtacha-sezilarli pasaygan (30–44)", r_egfr_g3b_1:"Har 3 oyda monitoring. Nefrolog yo'llanmasi.", r_egfr_g3b_2:"Metforminni TO'XTATING (GFR <30), NSAIDdan saqlaning.",
  r_egfr_g4:"G4 — Sezilarli pasaygan (15–29)", r_egfr_g4_1:"⚠ Shoshilinch nefrolog. Buyrak almashtirish terapiyasini rejalashtirish.", r_egfr_g4_2:"AV fistula yaratish — 3–6 oy talab etadi.",
  r_egfr_g5:"G5 — Buyrak yetishmovchiligi (< 15 mL/daqiqa)", r_egfr_g5_1:"Dializ boshlash yoki profilaktik transplantatsiya.", r_egfr_g5_2:"Barcha dorilarni nefrolog ko'rib chiqadi.",
  r_mews_lo:"Past xavf — oddiy monitoring", r_mews_lo_1:"Bo'lim protokoli bo'yicha odatiy monitoring.", r_mews_lo_2:"MEWS dan qat'iy nazar klinik yomonlashsa tezlashtiring.",
  r_mews_md:"O'rtacha xavf — monitoring chastotasini oshiring", r_mews_md_1:"Har 30–60 daqiqada ko'rsatkichlarni o'lchash.", r_mews_md_2:"Hamshira va kichik shifokorni xabardor qiling.", r_mews_md_3:"Suyuqlik balansi, siydik chiqishi, glyukozani nazorat qiling.",
  r_mews_hi:"Yuqori xavf — shoshilinch tibbiy ko'rik", r_mews_hi_1:"⚠ Darhol shifokor ko'rigi.", r_mews_hi_2:"A-E sxema bo'yicha baholash.", r_mews_hi_3:"Venoz kirish × 2. Tahlillar: OQT, elektrolitlar, CRP, laktat, qon ekinlari.",
  r_centor_lo:"Past ehtimol — viral etiology ko'proq", r_centor_lo_1:"Antibiotik kerak emas — viral etiologiya ko'proq ehtimol.", r_centor_lo_2:"Parasetamol 1 g 4 marta/kun + Ibuprofen 400 mg 3 marta/kun navbatma-navbat.",
  r_centor_md:"O'rtacha ehtimol — davolashdan oldin test", r_centor_md_1:"Tez A guruhi streptokokk antigeni testi yoki bo'g'iz surtmasi.", r_centor_md_2:"Faqat test musbat bo'lsa antibiotik buyuring.", r_centor_md_d:"Antibiotik faqat A guruhi streptokokk tasdiqlanganda.",
  r_centor_hi:"Streptokokk faringitining yuqori ehtimoli", r_centor_hi_1:"Antibiotik buyuring — ball 4+ klinik tashxis uchun yetarli.", r_centor_hi_2:"To'liq 10 kunlik kurs — revmatik isitmani kamaytiradi.",
  r_nihss_none:"Nevrologik defitsit yo'q — TIA ni istisno qiling", r_nihss_none_1:"TIA — shoshilinch TIA klinikasi (ABCD² ball).", r_nihss_none_2:"24 soat ichida DWI MRT. Qon tomir tasvirlash.",
  r_nihss_minor:"Kichik insult (NIHSS 1–4)", r_nihss_minor_1:"O'tkir insult bo'limiga yotqizing.", r_nihss_minor_2:"Kontrastsiz bosh KT — shoshilinch.", r_nihss_minor_3:"Boshlanishdan ≤ 4,5 soat bo'lsa tromboliz bahosi.",
  r_nihss_mod:"O'rtacha insult (NIHSS 5–15)", r_nihss_mod_1:"⚠ Darhol bosh KT — gemorragiyani istisno qiling.", r_nihss_mod_2:"'Eshik-igna' vaqt maqsadi < 60 daqiqa.", r_nihss_mod_3:"KT-angiografiya — OBO bo'lsa trombektomiya yo'llanmasi.",
  r_nihss_modsev:"O'rtacha-og'ir insult (NIHSS 16–20)", r_nihss_modsev_1:"⚠ Shoshilinch KT + KTA. OBO bo'lsa trombektomiya yo'llanmasi.", r_nihss_modsev_2:"Nafas yo'lini baholash — reanimatsiya kerak bo'lishi mumkin.", r_nihss_modsev_3:"Yomon MCA infarkti bo'lsa dekompressiv kraniyektomiya.",
  r_nihss_sev:"Og'ir insult (NIHSS > 20)", r_nihss_sev_1:"⚠ ORIT. KTA da OBO bo'lsa trombektomiya.", r_nihss_sev_2:"Oila bilan suhbat — prognoz, palliativ tibbiy rejalashtirish.", r_nihss_sev_3:"Yutish xavfsiz bo'lmasa NGZ orqali ovqatlantirish.",
  r_sofa_lo:"Yengil organ disfunktsiyasi", r_sofa_lo_1:"Kuzatuvni kuchaytiring. Asosiy sababni davolang.", r_sofa_lo_2:"SOFA ni har kuni qayta baholang.", r_sofa_lo_3:"Sepsis shubhali bo'lsa 30 mL/kg IV kristalloid.",
  r_sofa_md:"O'rtacha ko'p organ disfunktsiyasi", r_sofa_md_1:"⚠ Darhol ORIT ni ko'rib chiqing.", r_sofa_md_2:"Manba nazorati: drenaj, kateter olib tashlash, jarrohlik.", r_sofa_md_3:"Organ-spetsifik qo'llab-quvvatlash: ventilyatsiya, vazopresorlar.",
  r_sofa_hi:"Og'ir ko'p organ yetishmovchiligi", r_sofa_hi_1:"⚠ Darhol ORIT. To'liq organ qo'llab-quvvatlash.", r_sofa_hi_2:"Invaziv monitoring: arterial liniya, MVO, yurak debiti.", r_sofa_hi_3:"O'tkir buyrak yetishmovchiligi davom etsa buyrak almashtirish terapiyasi.",
  r_ranson_lo:"Yengil pankreatit (o'lim < 5%)", r_ranson_lo_1:"IV suyuqlik: kristalloid 250–500 mL/soat.", r_ranson_lo_2:"Og'iz orqali ovqatlanishni to'xtating → toqat qilsa shaffof suyuqlik.", r_ranson_lo_3:"Og'riq qoldiruvchi + antiemetik. Ca²⁺ va glyukozani nazorat qiling.",
  r_ranson_md:"O'rtacha og'ir pankreatit", r_ranson_md_1:"PMSP monitoringi.", r_ranson_md_2:"Yaxshilanmasa 72–96 soatda kontrastli qorin KT.", r_ranson_md_3:"24–48 soat ichida erta nazoyeyunal ovqatlantirish.",
  r_ranson_hi:"Og'ir pankreatit (ball > 6 da o'lim > 50%)", r_ranson_hi_1:"⚠ ORIT ga yotqizish. Agressiv Hartman eritmasi 500 mL/soat.", r_ranson_hi_2:"Gepatobiliaria jarrohi yo'llanmasi. Infitsiyalangan nekroz → aralashuv.", r_ranson_hi_3:"Arterial liniya, MVO, soatlik suyuqlik balansi.",
  r_psi_1:"I sinf — Juda past xavf (o'lim < 0,1%)", r_psi_2:"II sinf — Past xavf (o'lim ~0,6%)", r_psi_3:"III sinf — O'rtacha xavf (o'lim ~2,8%)", r_psi_4:"IV sinf — O'rtacha-yuqori xavf (o'lim ~8,2%)", r_psi_5:"V sinf — Yuqori xavf (o'lim ~29%)",
  r_psi_1_1:"Ambulatoriya davolash mos.", r_psi_1_2:"Amoksitsillin 500 mg 3 marta/kun × 5 kun.", r_psi_2_1:"Ko'pchilik uchun ambulatoriya mos.", r_psi_2_2:"I sinfdagi kabi og'iz orqali antibiotiklar.", r_psi_3_1:"Qisqa muddatli kasalxona yoki 24 soat kuzatuv.", r_psi_3_2:"Og'iz orqali qabul qilib bo'lmasa IV antibiotiklar.", r_psi_4_1:"Kasalxonaga yotqizish majburiy.", r_psi_4_2:"Ikki tomonlama IV antibiotik terapiyasi.", r_psi_5_1:"⚠ Kasalxona. Og'ir belgilar bo'lsa ORIT/PMSP.", r_psi_5_2:"To'liq pnevmoniya parvarish protokoli.",
}
};

let LANG = 'en';
const t = k => (T[LANG]||T.en)[k] || T.en[k] || k;

/* ── UI HELPERS ── */
function updateUI(){
  document.querySelectorAll('[data-k]').forEach(el => {
    if (el.tagName === 'INPUT' && el.type === 'search') {
      el.placeholder = t(el.dataset.k);
    } else {
      el.innerHTML = t(el.dataset.k);
    }
  });
}

function setLang(l, btn){
  LANG = l;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  updateUI();
  if(document.getElementById('calcGrid')) renderGrid();
}

/* ── CALCULATOR DATA ── */
const CARDS = [
  {id:'gcs',      spec:'sp_neuro', icon:'🧠', descKey:'d_gcs',      name:'Glasgow Coma Scale'},
  {id:'apgar',    spec:'sp_ped',   icon:'👶', descKey:'d_apgar',    name:'APGAR Score'},
  {id:'wellsdvt', spec:'sp_vasc',  icon:'🩸', descKey:'d_wellsdvt', name:'Wells Score — DVT'},
  {id:'wellspe',  spec:'sp_vasc',  icon:'🫀', descKey:'d_wellspe',  name:'Wells Score — PE'},
  {id:'curb65',   spec:'sp_resp',  icon:'🫁', descKey:'d_curb65',   name:'CURB-65'},
  {id:'chads2',   spec:'sp_cardio',icon:'❤️', descKey:'d_chads2',   name:'CHA₂DS₂-VASc'},
  {id:'childpugh',spec:'sp_hep',   icon:'🍂', descKey:'d_childpugh',name:'Child-Pugh Score'},
  {id:'bmi',      spec:'sp_gen',   icon:'⚖️', descKey:'d_bmi',      name:'BMI Calculator'},
  {id:'egfr',     spec:'sp_renal', icon:'🫘', descKey:'d_egfr',     name:'eGFR — CKD-EPI'},
  {id:'mews',     spec:'sp_icu',   icon:'📊', descKey:'d_mews',     name:'MEWS Score'},
  {id:'centor',   spec:'sp_inf',   icon:'🦠', descKey:'d_centor',   name:'Centor Score'},
  {id:'nihss',    spec:'sp_neuro', icon:'⚡', descKey:'d_nihss',    name:'NIHSS Stroke Scale'},
  {id:'sofa',     spec:'sp_icu',   icon:'🏥', descKey:'d_sofa',     name:'SOFA Score'},
  {id:'ranson',   spec:'sp_surg',  icon:'🔬', descKey:'d_ranson',   name:'Ranson\'s Criteria'},
  {id:'psi',      spec:'sp_resp',  icon:'💨', descKey:'d_psi',      name:'PSI / PORT Score'}
];

/* ── GRID RENDERER ── */
function renderGrid(){
  const grid = document.getElementById('calcGrid');
  if(!grid) return;
  grid.innerHTML = '';
  CARDS.forEach(c => {
    const el = document.createElement('a'); 
    el.className = 'calc-card';
    el.href = `calculators/${c.id}.html`; 
    el.style.textDecoration = 'none';
    el.innerHTML = `
      <div class="card-accent-dot"></div>
      <div class="card-top">
        <div class="card-icon">${c.icon}</div>
        <div><div class="card-spec">${t(c.spec)}</div></div>
      </div>
      <div class="card-name">${c.name}</div>
      <div class="card-desc">${t(c.descKey)}</div>
    `;
    grid.appendChild(el);
  });
}

/* ── FORM & RESULT HELPERS ── */
function pickChip(btn){
  document.querySelectorAll(`[data-g="${btn.dataset.g}"]`).forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
}
function gv(g){ 
  const e=document.querySelector(`[data-g="${g}"].on`); 
  return e ? parseFloat(e.dataset.v) : null; 
}
function allSet(gs){ 
  return gs.every(g=>gv(g)!==null); 
}
function alertMsg(){ 
  alert(LANG==='ru'?'Пожалуйста, заполните все поля.':LANG==='uz'?"Barcha maydonlarni to'ldiring.":'Please complete all fields.'); 
}

function switchTab(i){
  document.querySelectorAll('.result-tab').forEach((t,j)=>t.classList.toggle('on',j===i));
  document.querySelectorAll('.result-panel').forEach((p,j)=>p.classList.toggle('on',j===i));
}

function showResult(score, unit, sev, interp, actions, drugs){
  const box = document.getElementById('R'); if(!box) return;
  box.className = `result-box visible`;
  box.innerHTML = `
    <div class="result-hero" style="background:var(--bg3); padding:30px; border-bottom:1px solid var(--border);">
      <div style="display:flex; align-items:center; gap:10px;">
        <div class="result-number" style="color: ${sev==='hi'?'var(--rose)':sev==='md'?'var(--amber)':'var(--emerald)'}; font-size:48px; font-weight:800; line-height:1;">${score}</div>
        <span style="color:var(--w40); font-family:var(--mono); font-size:12px;">${unit}</span>
      </div>
      <div style="color:var(--white); font-weight:600; font-size:16px; margin-top:10px; font-style:italic;">${interp}</div>
    </div>
    <div class="result-tabs" style="display:flex; background:var(--bg2);">
      <button class="result-tab on" onclick="switchTab(0)" style="flex:1; padding:15px; background:none; border:none; border-bottom:2px solid var(--gold); color:var(--gold); cursor:pointer;">${t('tab_a')}</button>
      <button class="result-tab" onclick="switchTab(1)" style="flex:1; padding:15px; background:none; border:none; border-bottom:2px solid transparent; color:var(--w40); cursor:pointer;">${t('tab_d')}</button>
    </div>
    <div class="result-panels" style="background:var(--bg2);">
      <div class="result-panel on" style="padding:24px;">${actions}</div>
      <div class="result-panel" style="padding:24px; display:none;">${drugs}</div>
    </div>`;
}

const S = (n,txt) => `<div class="action-step" style="display:flex; gap:10px; margin-bottom:10px; padding:15px; background:var(--bg3); border-radius:10px;"><div style="color:var(--gold); font-weight:bold;">${n}.</div><div style="color:var(--w80); font-size:14px;">${txt}</div></div>`;
const D = (name,detail) => `<div class="drug-card" style="margin-bottom:10px; padding:15px; background:var(--bg3); border-left:3px solid var(--gold); border-radius:10px;"><div style="color:var(--white); font-weight:bold; font-size:15px; margin-bottom:5px;">${name}</div><div style="color:var(--w60); font-size:13px;">${detail}</div></div>`;

/* ── DRUG REPOSITORY (RX) ── */
const RX = {
  vitk: ()=> D('Vitamin K (Phytomenadione)', LANG==='ru'?'1 мг в/м — плановая профилактика':LANG==='uz'?'1 mg IM — muntazam profilaktika':'1mg IM — routine prophylaxis'),
  dex:  ()=> D('Dextrose 50%', LANG==='ru'?'25–50 мл в/в при подтверждённой гипогликемии':LANG==='uz'?'25–50 mL IV tasdiqlangan gipoglikemiyada':'25–50 mL IV if hypoglycaemia confirmed'),
  thiamine: ()=> D('Thiamine 100mg IV/IM', LANG==='ru'?'При подозрении на алкоголизм/недоедание':LANG==='uz'?'Alkogol/oziqlanish yetishmovchiligida':' If alcohol/malnutrition suspected'),
  apix_dvt: ()=> D('Apixaban', LANG==='ru'?'10 мг 2 р/сут × 7 дней, затем 5 мг 2 р/сут × 3–6 мес':LANG==='uz'?'10 mg 2 marta/kun × 7 kun, so\'ng 5 mg 2 marta/kun × 3–6 oy':'10mg BD × 7 days, then 5mg BD × 3–6 months'),
  riva_dvt: ()=> D('Rivaroxaban', LANG==='ru'?'15 мг 2 р/сут × 21 день, затем 20 мг 1 р/сут':LANG==='uz'?'15 mg 2 marta/kun × 21 kun, so\'ng 20 mg 1 marta/kun':'15mg BD × 21 days, then 20mg OD with food'),
  apix_pe:  ()=> D('Apixaban', LANG==='ru'?'10 мг 2 р/сут × 7 дней, затем 5 мг 2 р/сут':LANG==='uz'?'10 mg 2 marta/kun × 7 kun, so\'ng 5 mg 2 marta/kun':'10mg BD × 7 days, then 5mg BD'),
  altep_pe: ()=> D('Alteplase', LANG==='ru'?'100 мг в/в за 2 ч — только при массивной ТЭЛА':LANG==='uz'?'100 mg IV 2 soatda — faqat og\'ir OE da':'100mg IV over 2h — massive PE only if haemodynamic compromise'),
  amox_curb:()=> D('Amoxicillin 500mg TDS × 5 days', LANG==='ru'?'Первая линия при ВБП':LANG==='uz'?'Birinchi qator JKP':'First-line CAP'),
  coamox:   ()=> D('IV Co-amoxiclav 1.2g TDS + Clarithromycin 500mg BD', LANG==='ru'?'Стандартная двойная в/в терапия ВБП':LANG==='uz'?'Standart IV JKP kombinatsiya':'Standard IV dual CAP therapy'),
  pip_taz:  ()=> D('Piperacillin-tazobactam 4.5g QDS', LANG==='ru'?'При риске синегнойной палочки':LANG==='uz'?'Psevdomonas xavfi bo\'lsa':'If Pseudomonas risk'),
  apix_af:  ()=> D('Apixaban 5mg BD (preferred)', LANG==='ru'?'Наименьший риск кровотечения. Снизить до 2,5 мг при ≥2 из: возраст≥80, вес≤60 кг, Кр≥133':LANG==='uz'?'Eng kam qon ketish xavfi.':'Lowest bleeding risk. Reduce to 2.5mg BD if ≥2: age≥80, wt≤60kg, Cr≥133'),
  riva_af:  ()=> D('Rivaroxaban 20mg OD with evening meal', LANG==='ru'?'Проверить СКФ — снизить до 15 мг при СКФ 15–49':LANG==='uz'?'GFR ni tekshiring — 15–49 da 15 mg':'Check eGFR — reduce to 15mg if eGFR 15–49'),
  prop:     ()=> D('Propranolol', LANG==='ru'?'20–40 мг 2 р/сут — целевая ЧСС 55–60 уд/мин':LANG==='uz'?'20–40 mg 2 marta/kun — maqsad YUR 55–60':'20–40mg BD — target HR 55–60 (if varices)'),
  spiro:    ()=> D('Spironolactone 100mg + Furosemide 40mg', LANG==='ru'?'При асците — подбирать по диурезу':LANG==='uz'?'Assit uchun — diurezga qarab sozlash':'Titrate to diuresis (ascites)'),
  lact:     ()=> D('Lactulose 15–30mL BD', LANG==='ru'?'Цель: 2–3 мягких стула/сут (энцефалопатия)':LANG==='uz'?'Maqsad: 2–3 yumshoq najasot/kun (ensefalopati)':'Target 2–3 soft stools/day — encephalopathy'),
  norflo:   ()=> D('Norfloxacin 400mg OD', LANG==='ru'?'Профилактика СБП при белке асцитической жидкости < 15 г/л':LANG==='uz'?'Assit oqsili < 15 g/L da SBP profilaktikasi':'SBP prophylaxis if ascites protein < 15g/L'),
  terlip:   ()=> D('Terlipressin 0.5–2mg IV QDS + Albumin', LANG==='ru'?'Гепаторенальный синдром':LANG==='uz'?'Gepatorental sindrom':'Hepatorenal syndrome'),
  hicalnor: ()=> D('High-calorie supplements', LANG==='ru'?'Ensure/Fortisip 2–3 шт/сут':LANG==='uz'?'Ensure/Fortisip kuniga 2–3 ta':'Ensure/Fortisip 2–3/day'),
  sema:     ()=> D('Semaglutide 2.4mg SC weekly (Wegovy)', LANG==='ru'?'ГПП-1 — снижение веса в среднем 12–15%':LANG==='uz'?'GLP-1 — o\'rtacha 12–15% vazn yo\'qotish':'GLP-1 agonist — average 12–15% weight loss'),
  orli:     ()=> D('Orlistat 120mg TDS', LANG==='ru'?'Более старый препарат — умеренный эффект':LANG==='uz'?'Eski dori — o\'rtacha effekt':'Older agent — modest effect'),
  bariatric:()=> D('Bariatric surgery assessment', LANG==='ru'?'При недостаточности фармакотерапии':LANG==='uz'?'Farmakoterapiya yetarli bo\'lmasa':'If pharmacotherapy insufficient'),
  acei:     ()=> D('ACEi or ARB', LANG==='ru'?'Нефропротекция при протеинурии':LANG==='uz'?'Proteinuriyada nefroprotektsiya':'Nephroprotection with proteinuria'),
  sglt2:    ()=> D('Dapagliflozin 10mg OD', LANG==='ru'?'Нефропротекция независимо от СД':LANG==='uz'?'QD dan qat\'iy nazar nefroprotektsiya':'CKD-protective regardless of DM'),
  esa:      ()=> D('ESA if Hb < 100 + iron replete', LANG==='ru'?'Обсудить с нефрологом':LANG==='uz'?'Nefrolog bilan muhokama qiling':'Discuss with nephrology'),
  iv_fluid: ()=> D('IV crystalloid (0.9% NaCl or Hartmann\'s)', LANG==='ru'?'250–500 мл болюс, переоценка ответа':LANG==='uz'?'250–500 mL bolus, javobni qayta baholang':'250–500 mL boluses, reassess response'),
  nora:     ()=> D('Noradrenaline', LANG==='ru'?'0,01–3 мкг/кг/мин — целевое СрАД ≥ 65':LANG==='uz'?'0,01–3 mkg/kg/daqiqa — maqsad MAP ≥ 65':'0.01–3 mcg/kg/min — titrate MAP ≥ 65'),
  hc:       ()=> D('Hydrocortisone 200mg/day', LANG==='ru'?'50 мг 4 р/сут в/в при рефрактерном шоке':LANG==='uz'?'Refrakter shokda 50 mg 4 marta/kun IV':'50mg QDS IV if refractory shock'),
  vaso:     ()=> D('Vasopressin 0.03 units/min', LANG==='ru'?'Дополнение к норадреналину — снижает потребность':LANG==='uz'?'Noradrenalinga qo\'shimcha — miqdorini kamaytiradi':'Adjunct to noradrenaline — reduces requirements'),
  crrt:     ()=> D('CRRT', LANG==='ru'?'Предпочтительно при гемодинамической нестабильности':LANG==='uz'?'Gemodinamik beqarorlikda afzal':'Preferred over intermittent HD if haemodynamically unstable'),
  penV:     ()=> D('Phenoxymethylpenicillin 500mg BD × 10 days', LANG==='ru'?'Первая линия — 10 дней лучше 5':LANG==='uz'?'Birinchi qator — 10 kun 5 kundan yaxshiroq':'First-line — superior to 5-day course'),
  clari_strep: ()=> D('Clarithromycin 250mg BD × 5 days', LANG==='ru'?'При аллергии на пенициллин':LANG==='uz'?'Penitsillin allergiyasida':'If penicillin allergy'),
  aspirin_tia: ()=> D('Aspirin 300mg stat', LANG==='ru'?'После исключения геморрагии по КТ':LANG==='uz'?'KT da gemorragiya istisno qilingandan so\'ng':'After excluding haemorrhage on CT'),
  thrombect: ()=> D('Mechanical Thrombectomy', LANG==='ru'?'При ОЛО — до 24 ч при наличии жизнеспособной ткани':LANG==='uz'?'OBO bo\'lsa — tirik to\'qima bo\'lsa 24 soatgacha':'If LVO on CTA — up to 24h with salvageable tissue'),
  altep_str: ()=> D('Alteplase 0.9 mg/kg IV', LANG==='ru'?'10% болюс, остаток за 60 мин — при давности ≤ 4,5 ч':LANG==='uz'?'10% bolus, 60 daqiqada qolgani — ≤ 4,5 soat':'10% bolus, remainder over 60 min — if ≤4.5h'),
  leve:     ()=> D('Levetiracetam 500mg BD', LANG==='ru'?'При судорогах':LANG==='uz'?'Tutqanoq bo\'lsa':'If seizures'),
  pip_sep:  ()=> D('Piperacillin-tazobactam 4.5g IV QDS', LANG==='ru'?'При подозрении на сепсис':LANG==='uz'?'Sepsis shubhali bo\'lsa':'Broad-spectrum if sepsis'),
  nnj:      ()=> D('Nasojejunal feeding', LANG==='ru'?'Защищает кишечный барьер':LANG==='uz'?'Ichak to\'sig\'ini himoya qiladi':'Protects gut barrier, reduces infectious complications'),
  mero:     ()=> D('Meropenem 1g TDS', LANG==='ru'?'Только при подтверждённом инфицированном некрозе':LANG==='uz'?'Faqat tasdiqlangan infitsiyalangan nekrozda':'Only if confirmed infected necrosis — NOT routine prophylaxis'),
  pn:       ()=> D('Parenteral nutrition via CVC', LANG==='ru'?'Если энтеральный путь невозможен':LANG==='uz'?'Enteral yo\'l mumkin bo\'lmasa':'If enteral route impossible'),
  ketam:    ()=> D('Ketamine (RSI induction) 1–2mg/kg IV', LANG==='ru'?'Предпочтителен при нестабильности':LANG==='uz'?'Gemodinamik beqarorlikda afzal':'Preferred in haemodynamic instability'),
  suxam:    ()=> D('Suxamethonium (RSI paralytic) 1.5mg/kg IV', LANG==='ru'?'Для быстрой интубации':LANG==='uz'?'Tez intubatsiya uchun':'For Rapid Sequence Intubation'),
  manni:    ()=> D('Mannitol 20% 0.5–1g/kg IV', LANG==='ru'?'При подозрении на повышение ВЧД':LANG==='uz'?'IKB shubhali bo\'lsa':'If raised ICP — discuss with neurosurgery'),
  leve2:    ()=> D('Levetiracetam 500mg IV', LANG==='ru'?'Профилактика судорог':LANG==='uz'?'Tutqanoq profilaktikasi':'If seizure prophylaxis needed'),
  adren_ap: ()=> D('Adrenaline 0.01–0.03mg/kg IV', LANG==='ru'?'Реанимация новорождённых':LANG==='uz'?'Yangi tug\'ilgan reanimatsiyasi':'Neonatal resuscitation'),
  bicarb:   ()=> D('Sodium Bicarbonate 4.2% 1–2mmol/kg', LANG==='ru'?'Только при остановке сердца с ацидозом':LANG==='uz'?'Faqat tutqanoqda atsidoz bo\'lsa':'Only if prolonged arrest with acidosis'),
  o2:       ()=> D('O₂ 100% via face mask', LANG==='ru'?'Подбирать по сатурации':LANG==='uz'?'Saturatsiyaga qarab sozlash':'Titrate to saturations'),
  glucose10:()=> D('Glucose 10% 2mL/kg IV', LANG==='ru'?'При гипогликемии':LANG==='uz'?'Gipoglikemiyada':'If hypoglycaemia'),
  hart:     ()=> D("Hartmann's solution", LANG==='ru'?'250–500 мл/ч в течение 24–48 ч':LANG==='uz'?'250–500 mL/soat 24–48 soat':'250–500mL/hr for 24–48h'),
  morph:    ()=> D("Morphine 2.5–5mg IV PRN", LANG==='ru'?'Обезболивание — безопасно':LANG==='uz'?'Og\'riq qoldirish — xavfsiz':'Analgesia — safe to use in pancreatitis'),
  noab:     ()=> D('No antibiotics required', LANG==='ru'?'Ненужные антибиотики способствуют резистентности':LANG==='uz'?'Antibiotik kerak emas':'Viral etiology most likely'),
  paracib:  ()=> D('Paracetamol 1g QDS + Ibuprofen 400mg TDS', LANG==='ru'?'Чередование обеспечивает лучший эффект':LANG==='uz'?'Navbatma-navbat berish yaxshiroq':'Alternating provides superior pain relief'),
  stopmeta: ()=> D('Stop Metformin', LANG==='ru'?'Риск лактацидоза при СКФ < 30':LANG==='uz'?'GFR < 30 da laktatsidoz xavfi':'Risk of lactic acidosis below eGFR 30'),
  phosbind: ()=> D('Phosphate binders', LANG==='ru'?'С едой':LANG==='uz'?'Ovqat bilan':'With meals'),
  alfacal:  ()=> D('Alfacalcidol', LANG==='ru'?'При повышении ПТГ':LANG==='uz'?'PTH ko\'tarilganda':'If PTH elevated'),
  enox:     ()=> D('Enoxaparin 1mg/kg SC BD', LANG==='ru'?'Мост-терапия при ожидании визуализации':LANG==='uz'?'Tasvirlash kutilayotganda ko\'prik terapiya':'LMWH bridge while awaiting imaging'),
  coamoxlev: ()=> D('IV Co-amoxiclav 1.2g TDS + Clarithromycin 500mg BD', LANG==='ru'?'Немедленная двойная терапия':LANG==='uz'?'Darhol ikki tomonlama terapiya':'Immediate dual IV CAP therapy'),
  levo_psi: ()=> D('Levofloxacin 500mg BD', LANG==='ru'?'При аллергии на пенициллин':LANG==='uz'?'Penitsillin allergiyasida':'If penicillin allergy'),
  aspirin_af: ()=> D('Aspirin NOT recommended in AF', LANG==='ru'?'Для профилактики инсульта не применяется':LANG==='uz'?'Insult profilaktikasi uchun emas':'Not effective for stroke prevention in AF'),
};


/* ── CALCULATION LOGIC FOR ALL 15 TOOLS ── */

function calc_gcs(){
  const e=gv('ge'),v=gv('gv'),m=gv('gm');
  if(e===null||v===null||m===null){alertMsg();return}
  const s=e+v+m;
  if(s>=13) showResult(s,'/15','lo',t('r_gcs_mild'), S(1,t('r_gcs_mild_1'))+S(2,t('r_gcs_mild_2'))+S(3,t('r_gcs_mild_3')), RX.thiamine()+RX.dex());
  else if(s>=9) showResult(s,'/15','md',t('r_gcs_mod'), S(1,t('r_gcs_mod_1'))+S(2,t('r_gcs_mod_2'))+S(3,t('r_gcs_mod_3'))+S(4,t('r_gcs_mod_4')), RX.manni()+RX.leve2());
  else showResult(s,'/15','hi',t('r_gcs_sev'), S(1,t('r_gcs_sev_1'))+S(2,t('r_gcs_sev_2'))+S(3,t('r_gcs_sev_3'))+S(4,t('r_gcs_sev_4')), RX.ketam()+RX.suxam());
}

function calc_apgar(){
  const ks=['aa','ap','ag','ac','ar'];
  if(!allSet(ks)){alertMsg();return}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s>=7) showResult(s,'/10','lo',t('r_apgar_norm'), S(1,t('r_apgar_norm_1'))+S(2,t('r_apgar_norm_2'))+S(3,t('r_apgar_norm_3')), RX.vitk()+RX.dex());
  else if(s>=4) showResult(s,'/10','md',t('r_apgar_mod'), S(1,t('r_apgar_mod_1'))+S(2,t('r_apgar_mod_2'))+S(3,t('r_apgar_mod_3'))+S(4,t('r_apgar_mod_4')), RX.o2()+RX.glucose10());
  else showResult(s,'/10','hi',t('r_apgar_crit'), S(1,t('r_apgar_crit_1'))+S(2,t('r_apgar_crit_2'))+S(3,t('r_apgar_crit_3'))+S(4,t('r_apgar_crit_4')), RX.adren_ap()+RX.bicarb());
}

function calc_dvt(){
  const ks=['d1','d2','d3','d4','d5','d6','d7','d8','d9'];
  if(!allSet(ks)){alertMsg();return}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s>=3) showResult(s,'pts','hi',t('r_dvt_hi'), S(1,t('r_dvt_hi_1'))+S(2,t('r_dvt_hi_2'))+S(3,t('r_dvt_hi_3')), RX.apix_dvt()+RX.riva_dvt());
  else if(s>=1) showResult(s,'pts','md',t('r_dvt_md'), S(1,t('r_dvt_md_1'))+S(2,t('r_dvt_md_2')), D('Anticoagulation only if USS confirms DVT',''));
  else showResult(s,'pts','lo',t('r_dvt_lo'), S(1,t('r_dvt_lo_1'))+S(2,t('r_dvt_lo_2')), D('No empirical anticoagulation',''));
}

function calc_pe(){
  const ks=['p1','p2','p3','p4','p5','p6','p7'];
  if(!allSet(ks)){alertMsg();return}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s>4) showResult(s,'pts','hi',t('r_pe_hi'), S(1,t('r_pe_hi_1'))+S(2,t('r_pe_hi_2'))+S(3,t('r_pe_hi_3')), RX.apix_pe()+RX.altep_pe());
  else if(s>=2) showResult(s,'pts','md',t('r_pe_md'), S(1,t('r_pe_md_1'))+S(2,t('r_pe_md_2')), RX.riva_dvt()+RX.enox());
  else showResult(s,'pts','lo',t('r_pe_lo'), S(1,t('r_pe_lo_1'))+S(2,t('r_pe_lo_2')), D('No empirical anticoagulation',''));
}

function calc_curb65(){
  const ks=['c1','c2','c3','c4','c5'];
  if(!allSet(ks)){alertMsg();return}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s<=1) showResult(s,'/5','lo',t('r_curb_lo'), S(1,t('r_curb_lo_1'))+S(2,t('r_curb_lo_2'))+S(3,t('r_curb_lo_3')), RX.amox_curb());
  else if(s===2) showResult(s,'/5','md',t('r_curb_md'), S(1,t('r_curb_md_1'))+S(2,t('r_curb_md_2'))+S(3,t('r_curb_md_3')), RX.coamox());
  else showResult(s,'/5','hi',t('r_curb_hi'), S(1,t('r_curb_hi_1'))+S(2,t('r_curb_hi_2'))+S(3,t('r_curb_hi_3')), RX.coamoxlev()+RX.pip_taz());
}

function calc_chads2(){
  const ks=['h1','h2','h3','h4','h5','h6','h7','h8'];
  if(!allSet(ks)){alertMsg();return}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s===0) showResult(s,'/9','lo',t('r_chads_lo'), S(1,t('r_chads_lo_1'))+S(2,t('r_chads_lo_2')), RX.aspirin_af());
  else if(s<=1) showResult(s,'/9','md',t('r_chads_md'), S(1,t('r_chads_md_1'))+S(2,t('r_chads_md_2')), RX.apix_af()+RX.riva_af());
  else showResult(s,'/9','hi',t('r_chads_hi'), S(1,t('r_chads_hi_1'))+S(2,t('r_chads_hi_2'))+S(3,t('r_chads_hi_3')), RX.apix_af()+RX.riva_af());
}

function calc_childpugh(){
  const ks=['cb','ca','cp','casc','ce'];
  if(!allSet(ks)){alertMsg();return}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  const cls=s<=6?'A':s<=9?'B':'C';
  const sev=s<=6?'lo':s<=9?'md':'hi';
  showResult(s,`(Class ${cls})`,sev,t(s<=6?'r_cp_a':s<=9?'r_cp_b':'r_cp_c'), s<=6?S(1,t('r_cp_a_1'))+S(2,t('r_cp_a_2')):s<=9?S(1,t('r_cp_b_1'))+S(2,t('r_cp_b_2')):S(1,t('r_cp_c_1'))+S(2,t('r_cp_c_2')), s<=6?RX.prop():s<=9?RX.spiro()+RX.lact():RX.norflo()+RX.terlip());
}

function calc_bmi(){
  const w=parseFloat(document.getElementById('bw').value);
  const h=parseFloat(document.getElementById('bh').value)/100;
  if(!w||!h||isNaN(w)||isNaN(h)){alertMsg();return}
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
  if(!cr||!age||!sx){alertMsg();return}
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
  if(!allSet(ks)){alertMsg();return}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s<=2) showResult(s,'/14','lo',t('r_mews_lo'), S(1,t('r_mews_lo_1'))+S(2,t('r_mews_lo_2')), D('No specific pharmacological intervention',''));
  else if(s<=4) showResult(s,'/14','md',t('r_mews_md'), S(1,t('r_mews_md_1'))+S(2,t('r_mews_md_2'))+S(3,t('r_mews_md_3')), RX.iv_fluid()+RX.o2());
  else showResult(s,'/14','hi',t('r_mews_hi'), S(1,t('r_mews_hi_1'))+S(2,t('r_mews_hi_2'))+S(3,t('r_mews_hi_3')), RX.iv_fluid()+RX.nora());
}

function calc_centor(){
  const ks=['cen1','cen2','cen3','cen4','cenage'];
  if(!allSet(ks)){alertMsg();return}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s<=1) showResult(s,'/5','lo',t('r_centor_lo'), S(1,t('r_centor_lo_1'))+S(2,t('r_centor_lo_2')), RX.noab()+RX.paracib());
  else if(s<=3) showResult(s,'/5','md',t('r_centor_md'), S(1,t('r_centor_md_1'))+S(2,t('r_centor_md_2')), D('Antibiotics only if Strep A confirmed',''));
  else showResult(s,'/5','hi',t('r_centor_hi'), S(1,t('r_centor_hi_1'))+S(2,t('r_centor_hi_2')), RX.penV()+RX.clari_strep());
}

function calc_nihss(){
  const s=parseInt(document.getElementById('nihss_s').value);
  if(isNaN(s)||s<0||s>42){alertMsg();return}
  if(s===0) showResult(s,'/42','lo',t('r_nihss_none'), S(1,t('r_nihss_none_1'))+S(2,t('r_nihss_none_2')), RX.aspirin_tia());
  else if(s<=4) showResult(s,'/42','lo',t('r_nihss_minor'), S(1,t('r_nihss_minor_1'))+S(2,t('r_nihss_minor_2'))+S(3,t('r_nihss_minor_3')), RX.altep_str()+RX.aspirin_tia());
  else if(s<=15) showResult(s,'/42','md',t('r_nihss_mod'), S(1,t('r_nihss_mod_1'))+S(2,t('r_nihss_mod_2'))+S(3,t('r_nihss_mod_3')), RX.altep_str()+RX.thrombect());
  else if(s<=20) showResult(s,'/42','hi',t('r_nihss_modsev'), S(1,t('r_nihss_modsev_1'))+S(2,t('r_nihss_modsev_2'))+S(3,t('r_nihss_modsev_3')), RX.thrombect());
  else showResult(s,'/42','hi',t('r_nihss_sev'), S(1,t('r_nihss_sev_1'))+S(2,t('r_nihss_sev_2'))+S(3,t('r_nihss_sev_3')), RX.thrombect()+RX.leve());
}

function calc_sofa(){
  const ks=['sr','sc','sl','scv','sn','sk'];
  if(!allSet(ks)){alertMsg();return}
  const s=ks.reduce((a,k)=>a+gv(k),0);
  if(s<=6) showResult(s,'/24','lo',t('r_sofa_lo'), S(1,t('r_sofa_lo_1'))+S(2,t('r_sofa_lo_2'))+S(3,t('r_sofa_lo_3')), RX.pip_sep()+RX.iv_fluid());
  else if(s<=12) showResult(s,'/24','md',t('r_sofa_md'), S(1,t('r_sofa_md_1'))+S(2,t('r_sofa_md_2'))+S(3,t('r_sofa_md_3')), RX.nora()+RX.hc());
  else showResult(s,'/24','hi',t('r_sofa_hi'), S(1,t('r_sofa_hi_1'))+S(2,t('r_sofa_hi_2'))+S(3,t('r_sofa_hi_3')), RX.vaso()+RX.crrt());
}

function calc_ranson(){
  const ks=['rn1','rn2','rn3','rn4','rn5','rn6','rn7','rn8','rn9','rn10'];
  if(!allSet(ks)){alertMsg();return}
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
  
  if(isNaN(age) || sex===null) { alertMsg(); return; }
  
  let score = age + sex + (nursing_home||0) + (neoplastic||0) + (liver||0) + (chf||0) + (cerebro||0) + (renal||0) + (ams||0) + (rr||0) + (sbp||0) + (temp||0) + (pulse||0);
  
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
