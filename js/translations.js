'use strict';

/**
 * WARDCALC MASTER DICTIONARY
 * Developer: Muhammad Sabir Ali, Final year student at Bukhara State Medical Institute.
 * Contains 100% of UI, Questions, and Expert Clinical Triage Guidelines in EN, RU, UZ.
 */

window.T = {
en:{
  // --- UI & LEGAL ---
  badge: 'CLINICAL DECISION TOOLS', h1a: 'Ward', h1b: 'Calc', sub: 'Evidence-based medical calculators for daily ward practice.', badge_stu: 'BUILT BY A MEDICAL STUDENT · FOR MEDICAL PROFESSIONALS', h1_main: 'Clinical Tools', h1_sub: 'for Ward Rounds', search_ph: 'Search tools (e.g., GCS, BMI)...', alert_msg: 'Please complete all required fields.', btn: 'Calculate', tab_i: 'Interpretation', tab_a: 'Action Plan', tab_d: 'First-Line Rx', yes: 'Yes', no: 'No', YES: 'Yes', NO: 'No',
  sp_neuro: 'Neurology', sp_ped: 'Pediatrics', sp_gen: 'General', sp_resp: 'Respiratory', sp_cardio: 'Cardiology', sp_gastro: 'Gastroenterology', sp_id: 'Infectious Disease', sev_lo: 'LOW RISK', sev_md: 'MODERATE RISK', sev_hi: 'HIGH RISK',
  ft_about: 'About Us', ft_contact: 'Contact', ft_disc: 'Disclaimer', ft_terms: 'Terms', ft_privacy: 'Privacy', ft_rights: '© 2026 WardCalc. All rights reserved.',
  nav_about: 'About WardCalc', about_p1: 'WardCalc is a comprehensive clinical decision support system developed by Muhammad Sabir Ali, Final year student at Bukhara State Medical Institute. Designed to bridge the gap between complex medical literature and fast-paced bedside practice, WardCalc delivers rapid, evidence-based calculation tools to healthcare professionals globally.', about_h2: 'Our Mission', about_p2: 'In acute medical settings, time and accuracy are paramount. Our mission is to digitize and simplify internationally validated medical scoring systems into an intuitive, mobile-first interface. By reducing cognitive load, WardCalc empowers clinicians to make safer, faster, and more standardized therapeutic decisions.', about_h3: 'Educational Purpose', about_p3: 'While all algorithms and logic models within WardCalc are built strictly upon recognized peer-reviewed medical guidelines, the application is designated as an educational and reference tool. It is designed to assist, not replace, formal clinical judgment.',
  nav_contact: 'Contact & Support', contact_p1: 'We are committed to continuous clinical and technical improvement. If you have professional feedback, feature suggestions, or have encountered a technical issue, we encourage you to reach out.', contact_p2: 'For academic inquiries or technical support, please submit an issue via our official GitHub repository. All peer feedback is reviewed to ensure strict clinical accuracy.',
  nav_disc: 'Clinical Disclaimer', disc_p1: 'The calculations, guidelines, and pharmacological dosages provided by WardCalc are strictly for educational and informational purposes. They do not constitute definitive professional medical advice or protocols.', disc_p2: 'Healthcare providers must exercise their own independent clinical judgment. Muhammad Sabir Ali, Final year student at Bukhara State Medical Institute, assumes no liability for clinical decisions made, or actions taken, based on the outputs of this application. Always consult your institutional guidelines.',
  nav_terms: 'Terms of Use', terms_p1: 'By utilizing the WardCalc platform, you agree to these Terms. This application is provided "as is" without implied warranties.', terms_p2: 'Users are entirely responsible for verifying the accuracy of all calculations before applying them to real-world patient care.',
  nav_privacy: 'Privacy Policy', privacy_p1: 'Data security is the foundation of our architecture. WardCalc operates entirely client-side, meaning all calculations are performed locally within your browser.', privacy_p2: 'We do not collect, transmit, or store any Personal Health Information (PHI) or patient-identifiable data.',

  // --- 1. GCS ---
  d_gcs: 'Assess consciousness level. The baseline score demanded on every trauma call.', f_eye:'Eye Opening', f_verbal:'Verbal Response', f_motor:'Motor Response', g_e4: 'Spontaneous (4)', g_e3: 'To voice (3)', g_e2: 'To pain (2)', g_e1: 'None (1)', g_v5: 'Oriented (5)', g_v4: 'Confused (4)', g_v3: 'Words (3)', g_v2: 'Sounds (2)', g_v1: 'None (1)', g_m6: 'Obeys (6)', g_m5: 'Localizes (5)', g_m4: 'Withdrawal (4)', g_m3: 'Flexion (3)', g_m2: 'Extension (2)', g_m1: 'None (1)',
  gcs_info_title: 'Understanding the GCS', gcs_info_p1: 'The Glasgow Coma Scale (GCS) objectively measures a patient\'s level of consciousness following acute brain injury.', gcs_info_p2: 'Clinical Threshold: A score of 8 or less indicates a failure to protect the airway and requires immediate intubation.', gcs_info_p3: '',
  r_gcs_mi: 'Mild head injury or physiologically normal (GCS 13-15).', a_gcs_mi: '• Conduct full neurological exam.<br>• Routine neuro-obs every 30-60 mins.<br>• Consider CT head based on Canadian CT Head Rule.', rx_gcs_mi_n: 'Supportive Care', rx_gcs_mi_d: 'Analgesia (e.g., Paracetamol). Avoid sedating opioids.',
  r_gcs_mo: 'Moderate traumatic brain injury (GCS 9-12). High risk for secondary brain ischemia.', a_gcs_mo: '• Urgent non-contrast CT head.<br>• Immediate Neurosurgical consultation.<br>• Elevate head of bed to 30°.', rx_gcs_mo_n: 'Seizure Prophylaxis', rx_gcs_mo_d: 'Consider prophylactic Levetiracetam (500mg IV BID).',
  r_gcs_se: 'Severe traumatic brain injury (GCS ≤ 8). Inability to protect airway independently.', a_gcs_se: '• IMMEDIATE airway protection (RSI).<br>• Urgent non-contrast CT head & C-spine.<br>• Admit directly to Neuro-ICU.', rx_gcs_se_n: 'RSI & ICP Management', rx_gcs_se_d: 'RSI induction agents. If signs of herniation: Mannitol 20% or Hypertonic Saline (3%).',

  // --- 2. APGAR ---
  d_apgar: 'Newborn assessment at 1 and 5 minutes.', f_appear: 'Appearance', f_pulse: 'Pulse', f_grimace: 'Grimace', f_activity: 'Activity', f_resp_a: 'Respiration', a_a2: 'Pink (2)', a_a1: 'Blue ext. (1)', a_a0: 'Pale (0)', a_p2: '≥ 100 (2)', a_p1: '< 100 (1)', a_p0: 'Absent (0)', a_g2: 'Cry (2)', a_g1: 'Grimace (1)', a_g0: 'None (0)', a_c2: 'Active (2)', a_c1: 'Flexion (1)', a_c0: 'Limp (0)', a_r2: 'Strong (2)', a_r1: 'Weak (1)', a_r0: 'Absent (0)',
  apgar_info_title: 'Understanding APGAR', apgar_info_p1: 'Provides a standardized method for assessing clinical status at 1 and 5 minutes after birth.', apgar_info_p2: 'Threshold: A score ≤ 3 at 5 minutes correlates with an increased risk of neurological damage.', apgar_info_p3: '',
  r_apgar_no: 'Normal Neonatal Transition (7-10).', a_apgar_no: '• Provide routine postnatal care.<br>• Promote immediate skin-to-skin contact.<br>• Initiate early breastfeeding.', rx_apgar_no_n: 'Routine Prophylaxis', rx_apgar_no_d: 'Intramuscular Vitamin K 1mg. Erythromycin eye ointment.',
  r_apgar_mo: 'Moderately Depressed (4-6). Requires targeted intervention.', a_apgar_mo: '• Provide vigorous tactile stimulation.<br>• Clear airway if obstructed.<br>• Administer blow-by oxygen or CPAP.', rx_apgar_mo_n: 'Oxygen Therapy', rx_apgar_mo_d: 'Titrate FiO2 to maintain targeted neonatal SpO2 percentiles.',
  r_apgar_cr: 'Critically Low (0-3). Impending cardiovascular collapse.', a_apgar_cr: '• Initiate Neonatal Resuscitation Protocol (NRP).<br>• Start Positive Pressure Ventilation (PPV).<br>• Prepare for emergent intubation and chest compressions.', rx_apgar_cr_n: 'Resuscitation Drugs', rx_apgar_cr_d: 'If HR < 60 after PPV/compressions, administer IV Epinephrine (0.01-0.03 mg/kg).',

  // --- 3. WELLS DVT ---
  d_dvt: 'Estimate the pre-test probability of DVT.', f_cancer: 'Active cancer', f_paralysis: 'Paralysis or paresis', f_bedridden: 'Bedridden > 3 days', f_tenderness: 'Localized tenderness', f_swelling_entire: 'Entire leg swollen', f_swelling_calf: 'Calf swelling > 3 cm', f_pitting: 'Pitting edema', f_collateral: 'Collateral superficial veins', f_alt_dx: 'Alt diagnosis more likely (-2)',
  dvt_info_title: 'Understanding Wells DVT', dvt_info_p1: 'Safely and objectively categorizes patients into risk tiers, standardizing diagnostic imaging approaches.', dvt_info_p2: 'Threshold: A score ≥ 2 categorizes the patient into the "Likely" tier, where D-dimer alone is insufficient.', dvt_info_p3: '',
  r_dvt_lo: 'DVT Unlikely (Low Risk).', a_dvt_lo: '• Perform highly sensitive D-Dimer test.<br>• If negative, DVT is safely excluded.<br>• Investigate alternative diagnoses.', rx_dvt_lo_n: 'No Anticoagulation', rx_dvt_lo_d: 'Do not initiate empiric therapeutic anticoagulation.',
  r_dvt_md: 'Moderate probability of DVT.', a_dvt_md: '• Obtain D-Dimer testing.<br>• If positive, proceed to proximal vein ultrasound.<br>• Advise patient on DVT symptoms.', rx_dvt_md_n: 'Hold Anticoagulation', rx_dvt_md_d: 'Hold empiric therapy unless ultrasound is delayed > 4 hours.',
  r_dvt_hi: 'High clinical probability of DVT.', a_dvt_hi: '• Do NOT rely on D-Dimer.<br>• Proceed directly to comprehensive venous ultrasound.<br>• Assess patient bleeding risk.', rx_dvt_hi_n: 'Empiric Anticoagulation', rx_dvt_hi_d: 'If scan delayed, start DOAC (Apixaban/Rivaroxaban) or LMWH (Enoxaparin 1.5mg/kg).',

  // --- 4. WELLS PE ---
  d_pe: 'Calculate pre-test probability to guide PE imaging.', f_pe_dvt: 'Clinical signs of DVT', f_pe_alt: 'Alt diagnosis less likely', f_pe_hr: 'Heart rate > 100 bpm', f_pe_immob: 'Immobilization (> 3 days)', f_pe_hx: 'Previous PE or DVT', f_pe_hemop: 'Hemoptysis', f_pe_malig: 'Malignancy',
  pe_info_title: 'Understanding Wells PE', pe_info_p1: 'Directly dictates whether a patient should undergo D-dimer testing or proceed immediately to a CT Pulmonary Angiogram (CTPA).', pe_info_p2: 'Threshold: A score > 4 means PE is likely; a negative D-dimer cannot safely rule out PE.', pe_info_p3: '',
  r_pe_lo: 'PE Unlikely (Low Risk).', a_pe_lo: '• Apply PERC rule or obtain D-Dimer.<br>• If negative, PE is excluded.<br>• Avoid unnecessary radiation exposure.', rx_pe_lo_n: 'No Anticoagulation', rx_pe_lo_d: 'Empiric anticoagulation is contraindicated.',
  r_pe_md: 'Moderate clinical risk of PE.', a_pe_md: '• Obtain high-sensitivity D-Dimer.<br>• If positive, proceed to CTPA imaging.<br>• Evaluate for deep vein thrombosis.', rx_pe_md_n: 'Hold Anticoagulation', rx_pe_md_d: 'Wait for CTPA results unless imaging is significantly delayed.',
  r_pe_hi: 'High clinical probability of Pulmonary Embolism.', a_pe_hi: '• Proceed directly to CTPA.<br>• D-Dimer testing is not appropriate.<br>• Admit patient; evaluate hemodynamics (RV strain).', rx_pe_hi_n: 'Therapeutic Anticoagulation', rx_pe_hi_d: 'Start immediately (LMWH or IV Heparin) pending scan, provided no contraindications exist.',

  // --- 5. CURB-65 ---
  d_curb65: 'Mortality risk stratification for CAP.', f_confusion: 'Confusion (AMTS ≤ 8)', f_urea: 'BUN > 19 mg/dL', f_rr30: 'Resp Rate ≥ 30/min', f_bp_low: 'BP < 90/60 mmHg', f_age65: 'Age ≥ 65',
  curb_info_title: 'Understanding CURB-65', curb_info_p1: 'A validated prediction rule to calculate 30-day mortality risk in Community-Acquired Pneumonia.', curb_info_p2: 'Threshold: A score of 3 or higher carries a mortality risk of ~14%, mandating hospitalization.', curb_info_p3: '',
  r_curb_lo: 'Low mortality risk (< 2%).', a_curb_lo: '• Suitable for outpatient management.<br>• Provide strict safety-netting advice.<br>• Clinical follow-up in 48-72 hours.', rx_curb_lo_n: 'Outpatient Antimicrobials', rx_curb_lo_d: 'Amoxicillin 500mg TDS or Doxycycline 100mg BID for 5-7 days.',
  r_curb_md: 'Moderate mortality risk (~9%).', a_curb_md: '• Hospital admission to general medical ward.<br>• Obtain blood cultures and sputum Gram stain.<br>• Continuous SpO2 monitoring.', rx_curb_md_n: 'Inpatient Antimicrobials', rx_curb_md_d: 'IV Amoxicillin/Clavulanate (1.2g TDS) + Oral Clarithromycin (500mg BD).',
  r_curb_hi: 'Severe CAP (Mortality > 22%).', a_curb_hi: '• Mandatory hospitalization; evaluate for ICU.<br>• Aggressive IV fluid resuscitation.<br>• ABG analysis; prepare for mechanical ventilation.', rx_curb_hi_n: 'ICU Broad-Spectrum ABX', rx_curb_hi_d: 'IV Ceftriaxone (2g OD) PLUS IV Macrolide. Add MRSA coverage if indicated.',

  // --- 6. CHADS-VASC ---
  d_chads2: 'Stroke risk stratification in atrial fibrillation.', f_chf: 'Heart Failure', f_htn: 'Hypertension', f_age75: 'Age ≥ 75', f_dm: 'Diabetes', f_stroke: 'Stroke/TIA', f_vascular: 'Vascular Disease', f_age65_74: 'Age 65-74', f_sex_f: 'Female Sex',
  chads_info_title: 'Understanding CHA₂DS₂-VASc', chads_info_p1: 'Estimates the annual risk of ischemic stroke to guide prophylactic anticoagulation.', chads_info_p2: 'Threshold: A score of 2 or greater signifies a high stroke risk (≥ 4.0% per year).', chads_info_p3: '',
  r_chads_lo: 'Low Stroke Risk (Score 0 in men, 1 in women).', a_chads_lo: '• Evaluate individual bleeding risks (HAS-BLED).<br>• Focus on lifestyle modifications.<br>• Annual reassessment of risk factors.', rx_chads_lo_n: 'No Anticoagulation', rx_chads_lo_d: 'Antithrombotic therapy is generally not recommended.',
  r_chads_md: 'Intermediate Stroke Risk (Score 1 in men).', a_chads_md: '• Consider patient preferences and bleeding risk.<br>• Shared decision-making regarding therapy.<br>• Monitor for progression of comorbidities.', rx_chads_md_n: 'Consider DOAC', rx_chads_md_d: 'Oral anticoagulation should be considered based on individual benefit-risk profile.',
  r_chads_hi: 'High Stroke Risk (Score ≥ 2).', a_chads_hi: '• Strong clinical indication for systemic anticoagulation.<br>• Assess and optimize modifiable bleeding risks.<br>• Ensure strict medication compliance.', rx_chads_hi_n: 'Lifelong Anticoagulation', rx_chads_hi_d: 'DOACs preferred (e.g., Apixaban 5mg BID) over Warfarin unless contraindicated (e.g., mitral stenosis).',

  // --- 7. CHILD-PUGH ---
  d_cp: 'Prognostic classification of liver cirrhosis.', f_bili: 'Bilirubin (μmol/L)', f_alb: 'Albumin (g/L)', f_pt: 'PT / INR', f_ascites: 'Ascites', f_enceph: 'Encephalopathy', cp_b1: '< 34', cp_b2: '34–50', cp_b3: '> 50', cp_a1: '> 35', cp_a2: '28–35', cp_a3: '< 28', cp_p1: '< 1.7', cp_p2: '1.7–2.3', cp_p3: '> 2.3', cp_as2: 'Mild/Mod', cp_as3: 'Severe', cp_e2: 'Grade I–II', cp_e3: 'Grade III–IV',
  cp_info_title: 'Understanding Child-Pugh', cp_info_p1: 'An established system for assessing the prognosis of chronic liver disease.', cp_info_p2: 'Threshold: Progression to Class C denotes decompensated disease with poor prognosis.', cp_info_p3: '',
  r_cp_a: 'Class A: Compensated Cirrhosis.', a_cp_a: '• Routine hepatology follow-up.<br>• Excellent 1-year survival (~100%).<br>• Screen for esophageal varices via endoscopy.', rx_cp_a_n: 'Standard Care', rx_cp_a_d: 'Avoid hepatotoxic medications. Vaccinate for Hepatitis A and B.',
  r_cp_b: 'Class B: Significant Functional Impairment.', a_cp_b: '• Formal hepatology evaluation.<br>• Increased perioperative mortality risk.<br>• Strict monitoring of liver biochemistry.', rx_cp_b_n: 'Targeted Management', rx_cp_b_d: 'Non-selective beta-blockers (Propranolol) for portal hypertension.',
  r_cp_c: 'Class C: Decompensated Cirrhosis.', a_cp_c: '• Urgent transplant evaluation required.<br>• Poor 1-year survival without transplant (45%).<br>• Monitor closely for spontaneous bacterial peritonitis (SBP).', rx_cp_c_n: 'Complication Management', rx_cp_c_d: 'Spironolactone/Furosemide for ascites. Oral Lactulose to target 2-3 soft bowel movements daily for encephalopathy.',

  // --- 8. BMI ---
  d_bmi: 'Body Mass Index calculation.', f_weight: 'Weight (kg)', f_height: 'Height (cm)',
  bmi_info_title: 'Understanding BMI', bmi_info_p1: 'Provides a baseline metric for cardiovascular and metabolic risk stratification.', bmi_info_p2: 'Note: BMI does not directly measure body fat percentage.', bmi_info_p3: '',
  r_bmi_un: 'Underweight (BMI < 18.5).', a_bmi_un: '• Assess for malnutrition or eating disorders.<br>• Rule out hyperthyroidism or malignancy.<br>• Consider dietician referral.', rx_bmi_un_n: 'Nutritional Support', rx_bmi_un_d: 'High-caloric dietary supplementation.',
  r_bmi_no: 'Normal Weight (BMI 18.5 - 24.9).', a_bmi_no: '• Encourage maintenance of healthy lifestyle.<br>• Routine annual cardiovascular screening.', rx_bmi_no_n: 'Preventative Care', rx_bmi_no_d: 'No pharmacological intervention indicated.',
  r_bmi_ov: 'Overweight (BMI 25 - 29.9).', a_bmi_ov: '• Recommend 5-10% weight loss.<br>• Screen for metabolic syndrome (HTN, Diabetes).<br>• Prescribe aerobic exercise regimen.', rx_bmi_ov_n: 'Lifestyle Optimization', rx_bmi_ov_d: 'Dietary caloric restriction. Meds rarely indicated.',
  r_bmi_ob1: 'Obesity Class I (BMI 30 - 34.9).', a_bmi_ob1: '• Intensive multidisciplinary lifestyle intervention.<br>• Aggressive management of comorbidities.', rx_bmi_ob1_n: 'Consider Pharmacotherapy', rx_bmi_ob1_d: 'GLP-1 receptor agonists (e.g., Semaglutide) if comorbidities are present and lifestyle modifications fail.',
  r_bmi_ob2: 'Severe Obesity (BMI ≥ 35).', a_bmi_ob2: '• High risk for severe cardiovascular events.<br>• Screen for Obstructive Sleep Apnea (OSA).<br>• Formal bariatric surgery evaluation.', rx_bmi_ob2_n: 'Aggressive Intervention', rx_bmi_ob2_d: 'Maximally tolerate medical therapy; prepare for surgical options (e.g., sleeve gastrectomy).',

  // --- 9. EGFR ---
  d_egfr: 'Estimated GFR via CKD-EPI 2021.', f_cr: 'Serum Creatinine', f_age: 'Age', f_sex: 'Sex', sex_m: 'Male', sex_f: 'Female',
  egfr_info_title: 'Understanding eGFR', egfr_info_p1: 'Mandatory prior to prescribing renally excreted or nephrotoxic drugs.', egfr_info_p2: 'Threshold: An eGFR of < 60 mL/min persisting for 3 months establishes CKD.', egfr_info_p3: '',
  r_egfr_no: 'Normal/Mildly Decreased GFR (≥ 60).', a_egfr_no: '• Routine monitoring of renal function.<br>• Optimize blood pressure and glucose control.<br>• Screen for proteinuria.', rx_egfr_no_n: 'Standard Care', rx_egfr_no_d: 'If proteinuria present, initiate ACE inhibitor or ARB.',
  r_egfr_md: 'Moderate CKD (GFR 30 - 59).', a_egfr_md: '• Evaluate for complications (anemia, bone disease).<br>• Adjust renally cleared medications.<br>• Refer to nephrology if rapidly declining.', rx_egfr_md_n: 'Renal Dose Adjustments', rx_egfr_md_d: 'Dose reduce DOACs, Metformin, and specific antibiotics. Avoid NSAIDs.',
  r_egfr_se: 'Severe CKD / Kidney Failure (GFR < 30).', a_egfr_se: '• Mandatory Nephrology consultation.<br>• Discuss and prepare for Renal Replacement Therapy (RRT).<br>• Strict dietary potassium/phosphate restriction.', rx_egfr_se_n: 'Strict Nephro-Protection', rx_egfr_se_d: 'Discontinue Metformin. Manage hyperkalemia and metabolic acidosis actively.',

  // --- 10. MEWS ---
  d_mews: 'Early detection of clinical deterioration.', f_mews_rr: 'Resp Rate', f_mews_hr: 'Heart Rate', f_mews_sbp: 'Systolic BP', f_mews_temp: 'Temperature', f_mews_avpu: 'Consciousness (AVPU)',
  mews_info_title: 'Understanding MEWS', mews_info_p1: 'Used universally to rapidly identify patients at risk of impending clinical decline.', mews_info_p2: 'Threshold: A score of 5 or higher is associated with a severely increased likelihood of ICU admission.', mews_info_p3: '',
  r_mews_lo: 'Physiologically stable.', a_mews_lo: '• Continue routine ward observations (every 4-6 hours).<br>• Maintain current therapeutic management plan.', rx_mews_lo_n: 'No escalation required', rx_mews_lo_d: 'Continue charted medications.',
  r_mews_md: 'Potential physiological instability.', a_mews_md: '• Escalate observation frequency to 1-2 hourly.<br>• Notify the nurse-in-charge.<br>• Request medical review within 30 minutes.', rx_mews_md_n: 'Targeted Resuscitation', rx_mews_md_d: 'Titrate oxygen to SpO2 >94%. Consider conservative IV fluid bolus if hypotensive.',
  r_mews_hi: 'Critical physiological deterioration.', a_mews_hi: '• Immediate emergency medical review.<br>• Activate Rapid Response Team (RRT).<br>• Prepare for emergent intubation or vasopressors.', rx_mews_hi_n: 'ALS Standby', rx_mews_hi_d: 'Aggressive fluid resuscitation. Prepare crash cart.',

  // --- 11. CENTOR ---
  d_centor: 'Clinical probability of Strep pharyngitis.', f_cough_a: 'No cough', f_exudates: 'Tonsillar exudates', f_lymph: 'Tender lymph nodes', f_temp38: 'Temp > 38.0°C', f_c_age: 'Age Group', c_age_1: '3-14 (+1)', c_age_2: '15-44 (0)', c_age_3: '≥ 45 (-1)',
  centor_info_title: 'Understanding Centor', centor_info_p1: 'Evaluates the likelihood of Group A beta-hemolytic Streptococcus infection.', centor_info_p2: 'Primary utility lies in antibiotic stewardship.', centor_info_p3: '',
  r_centor_lo: 'Strep Unlikely (Viral Pharyngitis).', a_centor_lo: '• Provide symptomatic relief.<br>• Reassure patient illness is self-limiting.<br>• Do NOT perform throat culture.', rx_centor_lo_n: 'Symptomatic Care Only', rx_centor_lo_d: 'Acetaminophen or Ibuprofen. Avoid antimicrobial prescription.',
  r_centor_md: 'Possible Strep Pharyngitis.', a_centor_md: '• Perform Rapid Antigen Detection Test (RADT).<br>• If positive, treat with antibiotics.<br>• If negative, treat symptomatically.', rx_centor_md_n: 'Hold Antibiotics', rx_centor_md_d: 'Empiric antibiotics not recommended until laboratory confirmation.',
  r_centor_hi: 'Strep Highly Likely.', a_centor_hi: '• Consider empiric antibiotics if RADT is unavailable.<br>• Advise on signs of peritonsillar abscess.<br>• Exclude infectious mononucleosis.', rx_centor_hi_n: 'Antimicrobial Therapy', rx_centor_hi_d: 'Penicillin V 500mg QID for 10 days (or Amoxicillin). Azithromycin if penicillin-allergic.',

  // --- 12. NIHSS ---
  d_nihss: 'Quantify stroke severity to guide thrombolysis.', f_nihss_score: 'Total NIHSS Score (0-42)',
  nihss_info_title: 'Understanding the NIHSS', nihss_info_p1: 'The international standard providing a quantitative measure of stroke-related neurologic deficit.', nihss_info_p2: 'Determines eligibility for IV thrombolysis and endovascular thrombectomy.', nihss_info_p3: '',
  r_nihss_mi: 'Minor Stroke (Score 1-4).', a_nihss_mi: '• Admit to specialized Stroke Unit.<br>• Perform swallowing assessment.<br>• Evaluate for secondary stroke prevention.', rx_nihss_mi_n: 'Antiplatelet Therapy', rx_nihss_mi_d: 'Aspirin 300mg stat. Evaluate risk/benefit for IV thrombolysis if deficits are highly disabling.',
  r_nihss_mo: 'Moderate Stroke (Score 5-15).', a_nihss_mo: '• Urgent evaluation for IV thrombolysis.<br>• Strict blood pressure monitoring.<br>• CT Angiography to assess for Large Vessel Occlusion (LVO).', rx_nihss_mo_n: 'Reperfusion Evaluation', rx_nihss_mo_d: 'IV Alteplase (0.9 mg/kg) if presenting < 4.5 hours from onset with no absolute contraindications.',
  r_nihss_ms: 'Moderate-Severe Stroke (Score 16-20).', a_nihss_ms: '• High probability of LVO; activate endovascular team.<br>• Prepare for emergent thrombectomy.<br>• Close monitoring of airway reflexes.', rx_nihss_ms_n: 'Combined Reperfusion', rx_nihss_ms_d: 'Bridging IV Thrombolysis followed immediately by Mechanical Thrombectomy if LVO confirmed.',
  r_nihss_se: 'Severe Stroke (Score > 20).', a_nihss_se: '• Very high risk of cerebral edema and hemorrhagic transformation.<br>• Frequent neuro-obs to detect malignant MCA syndrome.<br>• Consider early decompressive hemicraniectomy.', rx_nihss_se_n: 'ICU Management', rx_nihss_se_d: 'Withhold thrombolysis if extensive early ischemic changes on CT. Manage BP strictly.',

  // --- 13. SOFA ---
  d_sofa: 'Define sepsis via organ failure assessment.', f_pao2: 'PaO2/FiO2', f_plt: 'Platelets', f_bili_sofa: 'Bilirubin', f_map: 'MAP / Vasopressors', f_gcs_sofa: 'GCS Score', f_cr_sofa: 'Creatinine',
  sofa_info_title: 'Understanding SOFA', sofa_info_p1: 'Tracks physiological deterioration and rate of multi-organ failure.', sofa_info_p2: 'Threshold: An acute increase in the total SOFA score of ≥ 2 points defines sepsis.', sofa_info_p3: '',
  r_sofa_lo: 'Low Sepsis Mortality Risk.', a_sofa_lo: '• Identify and treat underlying source of infection.<br>• Continue standard ward-level monitoring.<br>• Obtain source cultures.', rx_sofa_lo_n: 'Targeted Antimicrobials', rx_sofa_lo_d: 'Initiate appropriate antibiotics based on suspected source and local guidelines.',
  r_sofa_md: 'Moderate Organ Dysfunction.', a_sofa_md: '• Sepsis formally diagnosed (Sepsis-3).<br>• Initiate Sepsis Six pathway immediately.<br>• Evaluate for Step-Down or ICU admission.', rx_sofa_md_n: 'Sepsis Resuscitation', rx_sofa_md_d: 'Administer 30 mL/kg IV crystalloid fluid if hypotensive/hyperlactatemic. Broad-spectrum IV antibiotics.',
  r_sofa_hi: 'Severe Multi-Organ Failure (Septic Shock).', a_sofa_hi: '• Mandatory ICU admission.<br>• Central venous access and arterial line insertion.<br>• Prepare for mechanical ventilation and RRT.', rx_sofa_hi_n: 'Vasopressor Support', rx_sofa_hi_d: 'Norepinephrine as first-line agent to maintain MAP > 65 mmHg. Early source control (surgery/drainage).',

  // --- 14. RANSON ---
  d_ranson: 'Predictive algorithm for acute pancreatitis.', f_age55: 'Age > 55', f_wbc: 'WBC > 16k', f_glu: 'Glucose > 200', f_ldh: 'LDH > 350', f_ast: 'AST > 250', f_hct_drop: 'Hct drop > 10%', f_bun_rise: 'BUN rise', f_ca_low: 'Ca < 8', f_pao2_low: 'PaO2 < 60', f_base_def: 'Base deficit > 4', f_fluid_seq: 'Fluid > 6L',
  ranson_info_title: 'Understanding Ranson Criteria', ranson_info_p1: 'Objectively evaluates the severity and prognosis of acute pancreatitis.', ranson_info_p2: 'Threshold: A score of 3 or higher indicates severe pancreatitis.', ranson_info_p3: '',
  r_ranson_lo: 'Mild Acute Pancreatitis.', a_ranson_lo: '• Admit to general medical ward.<br>• Monitor urinary output and vital signs.<br>• Initiate early enteral nutrition when nausea subsides.', rx_ranson_lo_n: 'Supportive Care', rx_ranson_lo_d: 'Isotonic IV fluids. IV Opioids (e.g., Morphine) for pain control. Antiemetics.',
  r_ranson_md: 'Moderate-to-Severe Pancreatitis.', a_ranson_md: '• Step-down or ICU admission.<br>• Aggressive, goal-directed fluid resuscitation.<br>• Frequent electrolyte (Ca, Mg) and glucose monitoring.', rx_ranson_md_n: 'Aggressive Resuscitation', rx_ranson_md_d: 'Lactated Ringer’s preferred at 250-500 mL/hr. Correct hypocalcemia.',
  r_ranson_hi: 'Severe Acute Pancreatitis (High Mortality).', a_ranson_hi: '• Mandatory ICU admission.<br>• Monitor for ARDS, AKI, and necrotizing pancreatitis.<br>• Surgical and gastroenterology consultations.', rx_ranson_hi_n: 'Critical Care Management', rx_ranson_hi_d: 'Massive fluid sequestration requires vasopressors if fluids fail. Consider antibiotics ONLY if necrosis becomes infected.',

  // --- 15. PSI/PORT ---
  d_psi: 'Mortality stratification for CAP.', f_psi_age: 'Age', f_psi_sex: 'Sex', f_psi_nh: 'Nursing home', f_psi_neo: 'Neoplasm', f_psi_liv: 'Liver disease', f_psi_chf: 'CHF', f_psi_cvd: 'Stroke', f_psi_ren: 'Renal disease', f_psi_ams: 'AMS', f_psi_rr: 'RR ≥ 30', f_psi_sbp: 'SBP < 90', f_psi_temp: 'Temp < 35 or ≥ 40', f_psi_pulse: 'Pulse ≥ 125', f_psi_ph: 'pH < 7.35', f_psi_bun: 'BUN ≥ 30', f_psi_na: 'Na < 130', f_psi_gluc: 'Gluc ≥ 250', f_psi_hct: 'Hct < 30%', f_psi_pao2: 'PaO2 < 60', f_psi_eff: 'Effusion',
  psi_info_title: 'Understanding PSI/PORT', psi_info_p1: 'The Pneumonia Severity Index calculates the 30-day mortality probability for CAP.', psi_info_p2: 'Considered the superior tool for identifying low-risk patients who can be safely discharged.', psi_info_p3: 'Threshold: Risk Classes IV and V mandate inpatient admission.',
  r_psi_1: 'Risk Class I (Lowest Mortality).', a_psi_1: '• Safe for outpatient management.<br>• Discharge home with clear return precautions.<br>• No further laboratory testing required.', rx_psi_1_n: 'Outpatient Oral ABX', rx_psi_1_d: 'Oral Macrolide (Azithromycin) or Doxycycline monotherapy.',
  r_psi_2: 'Risk Class II (Low Mortality).', a_psi_2: '• Outpatient management recommended.<br>• Ensure patient has adequate social support.<br>• Re-evaluate in 48 hours.', rx_psi_2_n: 'Outpatient Oral ABX', rx_psi_2_d: 'Oral Amoxicillin or Macrolide. Consider comorbidities when selecting agent.',
  r_psi_3: 'Risk Class III (Moderate Mortality).', a_psi_3: '• Consider hospital admission to observation unit or short-stay ward.<br>• Assess oxygenation and hydration status.', rx_psi_3_n: 'Short-Stay ABX', rx_psi_3_d: 'Oral or IV Respiratory Fluoroquinolone OR Beta-lactam + Macrolide combination.',
  r_psi_4: 'Risk Class IV (High Mortality).', a_psi_4: '• Formal inpatient admission required.<br>• Continuous telemetry and SpO2 monitoring.<br>• Obtain comprehensive blood and sputum cultures.', rx_psi_4_n: 'Inpatient IV ABX', rx_psi_4_d: 'IV Ceftriaxone PLUS Azithromycin OR IV Levofloxacin. Transition to oral when clinically stable.',
  r_psi_5: 'Risk Class V (Very High Mortality).', a_psi_5: '• Direct ICU admission strongly recommended.<br>• High risk for respiratory failure and septic shock.<br>• Aggressive hemodynamic resuscitation.', rx_psi_5_n: 'ICU Broad-Spectrum ABX', rx_psi_5_d: 'IV Beta-Lactam + IV Macrolide. Cover for MRSA/Pseudomonas if specific risk factors exist.'
},

ru:{
  // --- UI & LEGAL (Russian) ---
  badge: 'КЛИНИЧЕСКИЕ ИНСТРУМЕНТЫ', h1a: 'Ward', h1b: 'Calc', sub: 'Доказательные медицинские калькуляторы для ежедневной практики.', badge_stu: 'СОЗДАНО СТУДЕНТОМ-МЕДИКОМ · ДЛЯ ВРАЧЕЙ', h1_main: 'Клинические инструменты', h1_sub: 'для обходов', search_ph: 'Поиск (напр. ШКГ, ИМТ)...', alert_msg: 'Пожалуйста, заполните все поля.', btn: 'Рассчитать', tab_i: 'Интерпретация', tab_a: 'План действий', tab_d: 'Терапия (Rx)', yes: 'Да', no: 'Нет', YES: 'Да', NO: 'Нет',
  sp_neuro: 'Неврология', sp_ped: 'Педиатрия', sp_gen: 'Общие', sp_resp: 'Пульмонология', sp_cardio: 'Кардиология', sp_gastro: 'Гастро', sp_id: 'Инф. болезни', sev_lo: 'НИЗКИЙ РИСК', sev_md: 'СРЕДНИЙ РИСК', sev_hi: 'ВЫСОКИЙ РИСК',
  ft_about: 'О нас', ft_contact: 'Контакты', ft_disc: 'Отказ', ft_terms: 'Условия', ft_privacy: 'Конфиденциальность', ft_rights: '© 2026 WardCalc. Все права защищены.',
  nav_about: 'О проекте WardCalc', about_p1: 'WardCalc — это комплексная система поддержки принятия клинических решений, разработанная Мухаммадом Сабиром Али, студентом выпускного курса Бухарского государственного медицинского института.', about_h2: 'Наша миссия', about_p2: 'Оцифровать признанные международные шкалы в интуитивный мобильный интерфейс, помогая врачам принимать безопасные решения.', about_h3: 'Образовательная цель', about_p3: 'Приложение предназначено исключительно для образовательных и справочных целей. Оно должно помогать, а не заменять клиническое мышление.',
  nav_contact: 'Свяжитесь с нами', contact_p1: 'Если у вас есть отзывы или вы столкнулись с проблемой, свяжитесь с нами.', contact_p2: 'Для поддержки обращайтесь через наш официальный репозиторий GitHub.',
  nav_disc: 'Отказ от ответственности', disc_p1: 'Предоставленные рекомендации и дозировки предназначены исключительно для образовательных целей и не являются официальным медицинским протоколом.', disc_p2: 'Врачи должны полагаться на собственное независимое клиническое суждение. Мухаммад Сабир Али, студент выпускного курса Бухарского государственного медицинского института, не несет ответственности за решения, принятые на основе этого приложения.',
  nav_terms: 'Условия использования', terms_p1: 'Сервис предоставляется «как есть» без гарантий.', terms_p2: 'Пользователи несут ответственность за проверку точности расчетов перед применением их в практике.',
  nav_privacy: 'Конфиденциальность', privacy_p1: 'WardCalc работает полностью локально в вашем браузере.', privacy_p2: 'Мы не собираем и не храним личные медицинские данные пациентов.',

  // --- 1. GCS ---
  d_gcs: 'Базовая оценка уровня сознания.', f_eye:'Открывание глаз', f_verbal:'Речевой ответ', f_motor:'Двигательный ответ', g_e4: 'Самопроизвольно (4)', g_e3: 'На голос (3)', g_e2: 'На боль (2)', g_e1: 'Нет (1)', g_v5: 'Ориентирован (5)', g_v4: 'Спутанная (4)', g_v3: 'Слова (3)', g_v2: 'Звуки (2)', g_v1: 'Нет (1)', g_m6: 'Выполняет (6)', g_m5: 'Локализует (5)', g_m4: 'Отдёргивание (4)', g_m3: 'Сгибание (3)', g_m2: 'Разгибание (2)', g_m1: 'Нет (1)',
  gcs_info_title: 'Шкала Глазго', gcs_info_p1: 'Измеряет уровень сознания после травмы.', gcs_info_p2: 'Оценка 8 и ниже требует немедленной интубации.', gcs_info_p3: '',
  r_gcs_mi: 'Легкая ЧМТ (ШКГ 13-15).', a_gcs_mi: '• Полный неврологический осмотр.<br>• Наблюдение каждые 30-60 минут.<br>• КТ головы при наличии показаний.', rx_gcs_mi_n: 'Симптоматическая терапия', rx_gcs_mi_d: 'Анальгезия (Парацетамол). Избегать седативных опиоидов.',
  r_gcs_mo: 'Умеренная ЧМТ (ШКГ 9-12). Высокий риск ишемии мозга.', a_gcs_mo: '• Срочная КТ головы.<br>• Консультация нейрохирурга.<br>• Приподнять изголовье на 30°.', rx_gcs_mo_n: 'Нейропротекция', rx_gcs_mo_d: 'Рассмотреть Леветирацетам (500 мг в/в).',
  r_gcs_se: 'Тяжелая ЧМТ (ШКГ ≤ 8). Риск дислокации.', a_gcs_se: '• НЕМЕДЛЕННАЯ защита дыхательных путей (интубация).<br>• Госпитализация в ОРИТ.<br>• Мониторинг ВЧД.', rx_gcs_se_n: 'Терапия ВЧД', rx_gcs_se_d: 'Пропофол/Кетамин. При дислокации: Маннитол 20% или гипертонический NaCl 3%.',

  // --- 2. APGAR ---
  d_apgar: 'Оценка новорожденного на 1 и 5 минутах.', f_appear: 'Цвет кожи', f_pulse: 'Пульс', f_grimace: 'Гримаса', f_activity: 'Тонус', f_resp_a: 'Дыхание', a_a2: 'Розовый (2)', a_a1: 'Акроцианоз (1)', a_a0: 'Бледный (0)', a_p2: '≥ 100 (2)', a_p1: '< 100 (1)', a_p0: 'Нет (0)', a_g2: 'Крик (2)', a_g1: 'Гримаса (1)', a_g0: 'Нет (0)', a_c2: 'Активный (2)', a_c1: 'Сгибание (1)', a_c0: 'Вялый (0)', a_r2: 'Громкий (2)', a_r1: 'Слабое (1)', a_r0: 'Нет (0)',
  apgar_info_title: 'Шкала Апгар', apgar_info_p1: 'Стандартизированная оценка клинического статуса.', apgar_info_p2: 'Оценка ≤ 3 коррелирует с риском повреждений мозга.', apgar_info_p3: '',
  r_apgar_no: 'Нормальная адаптация.', a_apgar_no: '• Стандартный уход.<br>• Контакт кожа-к-коже.<br>• Раннее прикладывание к груди.', rx_apgar_no_n: 'Профилактика', rx_apgar_no_d: 'Витамин К 1 мг в/м.',
  r_apgar_mo: 'Умеренная депрессия.', a_apgar_mo: '• Тактильная стимуляция.<br>• Очистка путей.<br>• Подача кислорода.', rx_apgar_mo_n: 'Оксигенотерапия', rx_apgar_mo_d: 'Титровать кислород по сатурации.',
  r_apgar_cr: 'Критическое состояние.', a_apgar_cr: '• Немедленная реанимация.<br>• ИВЛ через маску.<br>• Подготовка к интубации и массажу сердца.', rx_apgar_cr_n: 'Препараты', rx_apgar_cr_d: 'При ЧСС < 60 после вентиляции: Эпинефрин в/в.',

  // --- 3. WELLS DVT ---
  d_dvt: 'Оценка вероятности ТГВ.', f_cancer: 'Активный рак', f_paralysis: 'Паралич', f_bedridden: 'Постельный режим', f_tenderness: 'Болезненность', f_swelling_entire: 'Отек всей ноги', f_swelling_calf: 'Отек голени > 3 см', f_pitting: 'Ямкообразующий отек', f_collateral: 'Коллатерали', f_alt_dx: 'Альтернативный диагноз (-2)',
  dvt_info_title: 'ТГВ Уэллса', dvt_info_p1: 'Стандартизирует подход при подозрении на ТГВ.', dvt_info_p2: 'Оценка ≥ 2 означает высокую вероятность, требуется УЗИ.', dvt_info_p3: '',
  r_dvt_lo: 'ТГВ маловероятен.', a_dvt_lo: '• Анализ на D-димер.<br>• При (-) ТГВ исключен.<br>• Искать другую причину.', rx_dvt_lo_n: 'Антикоагулянты не нужны', rx_dvt_lo_d: 'Эмпирическая терапия не показана.',
  r_dvt_md: 'Умеренная вероятность.', a_dvt_md: '• D-димер.<br>• При (+) УЗИ вен.<br>• Осмотр ног.', rx_dvt_md_n: 'Ожидание УЗИ', rx_dvt_md_d: 'Терапия только при задержке УЗИ > 4 часов.',
  r_dvt_hi: 'Высокая вероятность ТГВ.', a_dvt_hi: '• D-димер не нужен.<br>• Срочное УЗИ вен нижних конечностей.', rx_dvt_hi_n: 'Эмпирическая терапия', rx_dvt_hi_d: 'Начать НОАК (Апиксабан) или НМГ (Эноксапарин) до УЗИ.',

  // --- 4. WELLS PE ---
  d_pe: 'Расчет вероятности ТЭЛА.', f_pe_dvt: 'Признаки ТГВ', f_pe_alt: 'Альтернатива менее вероятна', f_pe_hr: 'ЧСС > 100', f_pe_immob: 'Иммобилизация', f_pe_hx: 'ТЭЛА или ТГВ', f_pe_hemop: 'Кровохарканье', f_pe_malig: 'Онкология',
  pe_info_title: 'ТЭЛА Уэллса', pe_info_p1: 'Диктует необходимость D-димера или сразу КТ-АГ.', pe_info_p2: 'Оценка > 4 означает высокую вероятность ТЭЛА.', pe_info_p3: '',
  r_pe_lo: 'ТЭЛА маловероятна.', a_pe_lo: '• Правило PERC или D-димер.<br>• Избегать КТ (облучение).', rx_pe_lo_n: 'Терапия не показана', rx_pe_lo_d: 'Антикоагулянты противопоказаны.',
  r_pe_md: 'Умеренная вероятность.', a_pe_md: '• D-димер.<br>• При (+) показана КТ-ангиография.', rx_pe_md_n: 'Ожидание КТ', rx_pe_md_d: 'Ждать результатов КТ, если нет критической задержки.',
  r_pe_hi: 'Высокая вероятность ТЭЛА.', a_pe_hi: '• Срочная КТ-ангиография.<br>• Госпитализация.<br>• Оценка функции ПЖ.', rx_pe_hi_n: 'Агрессивная терапия', rx_pe_hi_d: 'Немедленно начать НМГ или инфузию Гепарина в/в.',

  // --- 5. CURB-65 ---
  d_curb65: 'Стратификация риска при пневмонии.', f_confusion: 'Спутанность', f_urea: 'Мочевина > 7 ммоль/л', f_rr30: 'ЧДД ≥ 30', f_bp_low: 'АД < 90/60', f_age65: 'Возраст ≥ 65',
  curb_info_title: 'CURB-65', curb_info_p1: 'Оценка 30-дневного риска смертности при ВП.', curb_info_p2: 'Оценка 3 или выше требует госпитализации (смертность 14%).', curb_info_p3: '',
  r_curb_lo: 'Низкий риск смертности.', a_curb_lo: '• Амбулаторное лечение.<br>• Контроль через 48 часов.', rx_curb_lo_n: 'Амбулаторные АБ', rx_curb_lo_d: 'Амоксициллин внутрь или Доксициклин (5-7 дней).',
  r_curb_md: 'Умеренный риск.', a_curb_md: '• Госпитализация в терапию.<br>• Посев крови/мокроты.<br>• Мониторинг SpO2.', rx_curb_md_n: 'В/в АБТ', rx_curb_md_d: 'Амоксициллин/Клавуланат в/в + Кларитромицин.',
  r_curb_hi: 'Тяжелая пневмония.', a_curb_hi: '• Срочная госпитализация (ОРИТ).<br>• Инфузионная терапия.<br>• Готовность к ИВЛ.', rx_curb_hi_n: 'АБТ широкого спектра', rx_curb_hi_d: 'Цефтриаксон в/в ПЛЮС Макролид. Добавить защиту от MRSA.',

  // --- 6. CHADS-VASC ---
  d_chads2: 'Риск инсульта при фибрилляции предсердий.', f_chf: 'СН', f_htn: 'Гипертензия', f_age75: 'Возраст ≥ 75', f_dm: 'Диабет', f_stroke: 'Инсульт', f_vascular: 'ССЗ', f_age65_74: 'Возраст 65-74', f_sex_f: 'Женский пол',
  chads_info_title: 'CHA₂DS₂-VASc', chads_info_p1: 'Оценивает годовой риск ишемического инсульта.', chads_info_p2: 'Оценка 2 или выше — прямое показание для антикоагулянтов.', chads_info_p3: '',
  r_chads_lo: 'Низкий риск.', a_chads_lo: '• Оценка риска кровотечений (HAS-BLED).<br>• Модификация образа жизни.', rx_chads_lo_n: 'Терапия не нужна', rx_chads_lo_d: 'Антитромботическая терапия не рекомендована.',
  r_chads_md: 'Промежуточный риск.', a_chads_md: '• Индивидуальное решение.<br>• Оценка пользы/риска.', rx_chads_md_n: 'Рассмотреть НОАК', rx_chads_md_d: 'Решение принимается совместно с пациентом.',
  r_chads_hi: 'Высокий риск инсульта.', a_chads_hi: '• Строгое показание к антикоагулянтам.<br>• Контроль приверженности лечению.', rx_chads_hi_n: 'Пожизненная терапия', rx_chads_hi_d: 'НОАК (Апиксабан/Ривароксабан) предпочтительнее Варфарина.',

  // --- 7. CHILD-PUGH ---
  d_cp: 'Прогностическая классификация тяжести цирроза.', f_bili: 'Билирубин', f_alb: 'Альбумин', f_pt: 'ПВ / МНО', f_ascites: 'Асцит', f_enceph: 'Энцефалопатия', cp_b1: '< 34', cp_b2: '34–50', cp_b3: '> 50', cp_a1: '> 35', cp_a2: '28–35', cp_a3: '< 28', cp_p1: '< 1.7', cp_p2: '1.7–2.3', cp_p3: '> 2.3', cp_as2: 'Легкий', cp_as3: 'Тяжелый', cp_e2: 'I–II', cp_e3: 'III–IV',
  cp_info_title: 'Чайлд-Пью', cp_info_p1: 'Оценка прогноза хронических заболеваний печени.', cp_info_p2: 'Класс С означает декомпенсацию, требующую трансплантации.', cp_info_p3: '',
  r_cp_a: 'Класс A: Компенсация.', a_cp_a: '• Плановое наблюдение гепатолога.<br>• Скрининг варикоза вен пищевода.', rx_cp_a_n: 'Стандартный уход', rx_cp_a_d: 'Избегать гепатотоксичных лекарств.',
  r_cp_b: 'Класс B: Значительное нарушение.', a_cp_b: '• Формальная оценка гепатолога.<br>• Высокий хирургический риск.', rx_cp_b_n: 'Симптоматическое лечение', rx_cp_b_d: 'Бета-блокаторы для портальной гипертензии.',
  r_cp_c: 'Класс C: Декомпенсация.', a_cp_c: '• Срочная оценка на трансплантацию.<br>• Мониторинг перитонита.', rx_cp_c_n: 'Лечение осложнений', rx_cp_c_d: 'Спиронолактон при асците. Лактулоза при энцефалопатии.',

  // --- 8. BMI ---
  d_bmi: 'Индекс массы тела.', f_weight: 'Вес (кг)', f_height: 'Рост (см)',
  bmi_info_title: 'ИМТ', bmi_info_p1: 'Оценка риска сердечно-сосудистых заболеваний.', bmi_info_p2: 'Внимание: ИМТ не измеряет напрямую процент жира.', bmi_info_p3: '',
  r_bmi_un: 'Дефицит веса (< 18.5).', a_bmi_un: '• Оценка питания.<br>• Исключить онкологию/гипертиреоз.', rx_bmi_un_n: 'Нутритивная поддержка', rx_bmi_un_d: 'Высококалорийное питание.',
  r_bmi_no: 'Нормальный вес (18.5-24.9).', a_bmi_no: '• Здоровый образ жизни.<br>• Ежегодный скрининг.', rx_bmi_no_n: 'Профилактика', rx_bmi_no_d: 'Лекарства не требуются.',
  r_bmi_ov: 'Избыточный вес (25-29.9).', a_bmi_ov: '• Снижение веса на 5-10%.<br>• Скрининг на диабет.', rx_bmi_ov_n: 'Оптимизация', rx_bmi_ov_d: 'Диета и спорт. Фармакотерапия редко показана.',
  r_bmi_ob1: 'Ожирение I (30-34.9).', a_bmi_ob1: '• Интенсивное изменение образа жизни.<br>• Контроль давления.', rx_bmi_ob1_n: 'Фармакотерапия', rx_bmi_ob1_d: 'Агонисты ГПП-1 (Семаглутид) при наличии сопутствующих патологий.',
  r_bmi_ob2: 'Ожирение II+ (≥ 35).', a_bmi_ob2: '• Высокий сердечный риск.<br>• Оценка бариатрической хирургии.', rx_bmi_ob2_n: 'Агрессивная терапия', rx_bmi_ob2_d: 'Хирургическое вмешательство.',

  // --- 9. EGFR ---
  d_egfr: 'рСКФ (CKD-EPI 2021).', f_cr: 'Креатинин', f_age: 'Возраст', f_sex: 'Пол', sex_m: 'Мужской', sex_f: 'Женский',
  egfr_info_title: 'рСКФ', egfr_info_p1: 'Обязательна перед назначением нефротоксичных препаратов.', egfr_info_p2: 'Оценка < 60 устанавливает диагноз ХБП.', egfr_info_p3: '',
  r_egfr_no: 'Нормальная функция (≥ 60).', a_egfr_no: '• Рутинный контроль.<br>• Контроль АД и глюкозы.', rx_egfr_no_n: 'Стандарт', rx_egfr_no_d: 'Ингибиторы АПФ при протеинурии.',
  r_egfr_md: 'Умеренная ХБП (30-59).', a_egfr_md: '• Коррекция доз препаратов.<br>• Консультация нефролога при падении СКФ.', rx_egfr_md_n: 'Снижение доз', rx_egfr_md_d: 'Уменьшить дозу НОАК, Метформина. Избегать НПВС.',
  r_egfr_se: 'Тяжелая ХБП / Отказ почек (< 30).', a_egfr_se: '• Срочная консультация нефролога.<br>• Подготовка к диализу (ЗПТ).', rx_egfr_se_n: 'Нефропротекция', rx_egfr_se_d: 'Отменить Метформин. Контроль калия.',

  // --- 10. MEWS ---
  d_mews: 'Риск клинического ухудшения.', f_mews_rr: 'ЧДД', f_mews_hr: 'ЧСС', f_mews_sbp: 'АД', f_mews_temp: 'Температура', f_mews_avpu: 'Сознание',
  mews_info_title: 'MEWS', mews_info_p1: 'Выявление пациентов с риском остановки сердца.', mews_info_p2: 'Оценка 5 или выше связана с вероятностью перевода в ОРИТ.', mews_info_p3: '',
  r_mews_lo: 'Стабильно.', a_mews_lo: '• Рутинное наблюдение.', rx_mews_lo_n: 'Нет эскалации', rx_mews_lo_d: 'Текущий план лечения.',
  r_mews_md: 'Возможная нестабильность.', a_mews_md: '• Участить мониторинг.<br>• Вызов врача в течение 30 минут.', rx_mews_md_n: 'Целевая поддержка', rx_mews_md_d: 'Кислород до SpO2 >94%. Жидкость при гипотензии.',
  r_mews_hi: 'Критическое ухудшение.', a_mews_hi: '• Немедленный осмотр.<br>• Вызов реаниматологов.', rx_mews_hi_n: 'Реанимация', rx_mews_hi_d: 'Агрессивная инфузия. Готовность к интубации.',

  // --- 11. CENTOR ---
  d_centor: 'Вероятность стрептококкового фарингита.', f_cough_a: 'Нет кашля', f_exudates: 'Экссудат', f_lymph: 'Лимфоузлы', f_temp38: 'Темп > 38', f_c_age: 'Возраст', c_age_1: '3–14 лет', c_age_2: '15–44 лет', c_age_3: '≥ 45 лет',
  centor_info_title: 'Критерии Центора', centor_info_p1: 'Помогает предотвратить необоснованное назначение антибиотиков.', centor_info_p2: 'Оценка 4-5 оправдывает эмпирическую АБТ.', centor_info_p3: '',
  r_centor_lo: 'Стрептококк маловероятен.', a_centor_lo: '• Симптоматическое лечение.<br>• Мазок не нужен.', rx_centor_lo_n: 'Без антибиотиков', rx_centor_lo_d: 'Парацетамол/Ибупрофен.',
  r_centor_md: 'Возможен стрептококк.', a_centor_md: '• Выполнить экспресс-тест (RADT).', rx_centor_md_n: 'Ждать результатов', rx_centor_md_d: 'Лечить только при (+) тесте.',
  r_centor_hi: 'Высокая вероятность.', a_centor_hi: '• Эмпирические антибиотики оправданы.', rx_centor_hi_n: 'АБТ', rx_centor_hi_d: 'Пенициллин V 500 мг 4 р/д (10 дней).',

  // --- 12. NIHSS ---
  d_nihss: 'Оценка дефицита при инсульте.', f_nihss_score: 'Балл NIHSS',
  nihss_info_title: 'NIHSS', nihss_info_p1: 'Мировой стандарт оценки дефицита при инсульте.', nihss_info_p2: 'Основной показатель для тромболизиса.', nihss_info_p3: '',
  r_nihss_mi: 'Легкий инсульт.', a_nihss_mi: '• Госпитализация в инсультное отделение.', rx_nihss_mi_n: 'Антиагреганты', rx_nihss_mi_d: 'Аспирин 300 мг.',
  r_nihss_mo: 'Средний инсульт.', a_nihss_mo: '• Оценка для в/в тромболизиса.<br>• КТ-АГ.', rx_nihss_mo_n: 'Реперфузия', rx_nihss_mo_d: 'Алтеплаза (0.9 мг/кг) если < 4.5 часов.',
  r_nihss_ms: 'Средне-тяжелый.', a_nihss_ms: '• Подготовка к тромбэктомии.', rx_nihss_ms_n: 'Комбинация', rx_nihss_ms_d: 'Тромболизис + Тромбэктомия.',
  r_nihss_se: 'Тяжелый.', a_nihss_se: '• Риск отека мозга.<br>• Декомпрессивная краниэктомия.', rx_nihss_se_n: 'ОРИТ', rx_nihss_se_d: 'Жесткий контроль АД.',

  // --- 13. SOFA ---
  d_sofa: 'Оценка органной дисфункции (Sepsis-3).', f_pao2: 'PaO2/FiO2', f_plt: 'Тромбоциты', f_bili_sofa: 'Билирубин', f_map: 'АД / Вазопрессоры', f_gcs_sofa: 'ШКГ', f_cr_sofa: 'Креатинин',
  sofa_info_title: 'SOFA', sofa_info_p1: 'Оценка полиорганной недостаточности.', sofa_info_p2: 'Повышение на ≥ 2 балла определяет сепсис (смертность 10%).', sofa_info_p3: '',
  r_sofa_lo: 'Низкий риск смертности.', a_sofa_lo: '• Найти источник инфекции.', rx_sofa_lo_n: 'Антибиотики', rx_sofa_lo_d: 'По локальным протоколам.',
  r_sofa_md: 'Органная дисфункция (Сепсис).', a_sofa_md: '• Протокол "Sepsis Six".', rx_sofa_md_n: 'Реанимация', rx_sofa_md_d: 'Инфузия 30 мл/кг. Широкий спектр АБ в/в.',
  r_sofa_hi: 'Септический шок.', a_sofa_hi: '• Обязательно ОРИТ.<br>• ЦВК.', rx_sofa_hi_n: 'Вазопрессоры', rx_sofa_hi_d: 'Норадреналин (целевое САД > 65).',

  // --- 14. RANSON ---
  d_ranson: 'Риск при остром панкреатите.', f_age55: 'Возраст > 55', f_wbc: 'Лейкоциты > 16k', f_glu: 'Глюкоза > 11', f_ldh: 'ЛДГ > 350', f_ast: 'АСТ > 250', f_hct_drop: 'Гематокрит', f_bun_rise: 'Мочевина', f_ca_low: 'Кальций', f_pao2_low: 'PaO2 < 60', f_base_def: 'Дефицит оснований', f_fluid_seq: 'Жидкость',
  ranson_info_title: 'Критерии Рэнсона', ranson_info_p1: 'Оценка тяжести панкреатита.', ranson_info_p2: 'Оценка 3 и выше указывает на тяжелый панкреатит.', ranson_info_p3: '',
  r_ranson_lo: 'Легкий панкреатит.', a_ranson_lo: '• Общая палата.<br>• Раннее питание.', rx_ranson_lo_n: 'Поддержка', rx_ranson_lo_d: 'Инфузии. Опиоиды для обезболивания.',
  r_ranson_md: 'Средне-тяжелый.', a_ranson_md: '• ОРИТ.<br>• Агрессивная инфузия.', rx_ranson_md_n: 'Агрессивная терапия', rx_ranson_md_d: 'Раствор Рингера/Хартмана 250-500 мл/ч.',
  r_ranson_hi: 'Высокая смертность.', a_ranson_hi: '• Мониторинг АРДС и некроза.', rx_ranson_hi_n: 'ОРИТ', rx_ranson_hi_d: 'АБ только при инфицированном некрозе.',

  // --- 15. PSI/PORT ---
  d_psi: 'Стратификация при ВП.', f_psi_age: 'Возраст', f_psi_sex: 'Пол', f_psi_nh: 'Дом престарелых', f_psi_neo: 'Онкология', f_psi_liv: 'Печень', f_psi_chf: 'СН', f_psi_cvd: 'Инсульт', f_psi_ren: 'Почки', f_psi_ams: 'Сознание', f_psi_rr: 'ЧДД ≥ 30', f_psi_sbp: 'АД < 90', f_psi_temp: 'Темп < 35 или ≥ 40', f_psi_pulse: 'Пульс ≥ 125', f_psi_ph: 'pH < 7.35', f_psi_bun: 'Мочевина ≥ 10.7', f_psi_na: 'Натрий < 130', f_psi_gluc: 'Глюкоза ≥ 13.9', f_psi_hct: 'Гематокрит < 30%', f_psi_pao2: 'PaO2 < 60', f_psi_eff: 'Выпот',
  psi_info_title: 'PSI/PORT', psi_info_p1: 'Вероятность смерти при внебольничной пневмонии.', psi_info_p2: 'Классы IV и V требуют госпитализации в стационар/ОРИТ.', psi_info_p3: '',
  r_psi_1: 'Класс I (Низкий).', a_psi_1: '• Амбулаторное лечение.', rx_psi_1_n: 'Пероральные АБ', rx_psi_1_d: 'Макролид или Доксициклин.',
  r_psi_2: 'Класс II (Низкий).', a_psi_2: '• Амбулаторное лечение.', rx_psi_2_n: 'Пероральные АБ', rx_psi_2_d: 'Амоксициллин.',
  r_psi_3: 'Класс III (Средний).', a_psi_3: '• Краткосрочная госпитализация.', rx_psi_3_n: 'Короткий курс', rx_psi_3_d: 'В/в или внутрь Фторхинолон.',
  r_psi_4: 'Класс IV (Высокий).', a_psi_4: '• Обязательная госпитализация.', rx_psi_4_n: 'В/в АБТ', rx_psi_4_d: 'Цефтриаксон + Азитромицин.',
  r_psi_5: 'Класс V (Критический).', a_psi_5: '• Госпитализация в ОРИТ.', rx_psi_5_n: 'Широкий спектр (ОРИТ)', rx_psi_5_d: 'Бета-лактам + Макролид в/в.'
},

uz:{
  // --- UI & LEGAL (Uzbek) ---
  badge: 'KLINIK VOSITALAR', h1a: 'Ward', h1b: 'Calc', sub: 'Kundalik amaliyot uchun tibbiy kalkulyatorlar.', badge_stu: 'TIBBIYOT TALABASI TOMONIDAN YARATILGAN', h1_main: 'Klinik vositalar', h1_sub: 'palata aylanmalari uchun', search_ph: 'Qidiruv (masalan, GCS, BMI)...', alert_msg: 'Barcha maydonlarni to\'ldiring.', btn: 'Hisoblash', tab_i: 'Talqin', tab_a: 'Harakat Rejasi', tab_d: 'Davolash (Rx)', yes: 'Ha', no: 'Yo\'q', YES: 'Ha', NO: 'Yo\'q',
  sp_neuro: 'Nevrologiya', sp_ped: 'Pediatriya', sp_gen: 'Umumiy', sp_resp: 'Nafas tizimi', sp_cardio: 'Kardiologiya', sp_gastro: 'Gastroenterologiya', sp_id: 'Yuqumli kasal.', sev_lo: 'PAST XAVF', sev_md: 'O’RTACHA XAVF', sev_hi: 'YUQORI XAVF',
  ft_about: 'Biz haqimizda', ft_contact: 'Aloqa', ft_disc: 'Rad etish', ft_terms: 'Shartlar', ft_privacy: 'Maxfiylik', ft_rights: '© 2026 WardCalc. Barcha huquqlar himoyalangan.',
  nav_about: 'WardCalc haqida', about_p1: 'WardCalc - bu Buxoro davlat tibbiyot instituti bitiruvchi talabasi Muhammad Sabir Ali tomonidan ishlab chiqilgan kompleks klinik qarorlarni qabul qilishni qo\'llab-quvvatlash tizimi.', about_h2: 'Bizning maqsadimiz', about_p2: 'Tibbiy ball tizimlarini intuitiv interfeysga aylantirish, shifokorlarga xavfsizroq va standartlashtirilgan qarorlar qabul qilish imkonini berishdir.', about_h3: 'Ta\'lim maqsadi', about_p3: 'U rasmiy klinik xulosani almashtirish uchun emas, yordam berish uchun mo\'ljallangan.',
  nav_contact: 'Aloqa', contact_p1: 'Agar sizda klinik mulohazalar yoki texnik muammolar bo\'lsa, biz bilan bog\'laning.', contact_p2: 'GitHub orqali murojaat qiling. Barcha xabarlar ko\'rib chiqiladi.',
  nav_disc: 'Rad etish', disc_p1: 'Taqdim etilgan tavsiyalar faqat ta\'lim maqsadida bo\'lib, rasmiy tibbiy bayonnoma hisoblanmaydi.', disc_p2: 'Muhammad Sabir Ali, Buxoro davlat tibbiyot instituti bitiruvchi talabasi, ushbu dastur natijalariga asoslangan klinik qarorlar uchun javobgar emas.',
  nav_terms: 'Foydalanish shartlari', terms_p1: 'Ushbu xizmat hech qanday kafolatsiz taqdim etiladi.', terms_p2: 'Hisob-kitoblar aniqligini tekshirish foydalanuvchi javobgarligida.',
  nav_privacy: 'Maxfiylik siyosati', privacy_p1: 'WardCalc to\'liq mijoz tomonida (brauzeringizda) ishlaydi.', privacy_p2: 'Biz bemor ma\'lumotlarini yig\'maymiz va saqlamaymiz.',

  // --- 1. GCS ---
  d_gcs: 'Ong darajasini baholash.', f_eye:"Ko'z ochilishi", f_verbal:"Og'zaki javob", f_motor:'Harakat javobi', g_e4: 'O\'z-o\'zidan (4)', g_e3: 'Ovozga (3)', g_e2: 'Og\'riqqa (2)', g_e1: 'Yo\'q (1)', g_v5: 'Mo\'ljallangan (5)', g_v4: 'Chalkash (4)', g_v3: 'So\'zlar (3)', g_v2: 'Tovushlar (2)', g_v1: 'Yo\'q (1)', g_m6: 'Bajaradi (6)', g_m5: 'Lokalizatsiya (5)', g_m4: 'Tortib olish (4)', g_m3: 'Bukilish (3)', g_m2: 'Yozilish (2)', g_m1: 'Yo\'q (1)',
  gcs_info_title: 'Glazgo shkalasini tushunish', gcs_info_p1: 'Bosh miya jarohatidan keyin ong darajasini ishonchli o\'lchash uchun xizmat qiladi.', gcs_info_p2: '8 yoki undan past ball nafas yo\'llarini himoya qila olmaslikni va intubatsiyani ko\'rsatadi.', gcs_info_p3: '',
  r_gcs_mi: 'Yengil jarohat yoki fiziologik me\'yor (GCS 13-15).', a_gcs_mi: '• To\'liq nevrologik tekshiruv.<br>• Har 30-60 daqiqada muntazam neyro-kuzatuv.<br>• Ko\'rsatma bo\'lsa bosh miya KTsi.', rx_gcs_mi_n: 'Simptomatik Terapiya', rx_gcs_mi_d: 'Analgeziya (Paratsetamol). Sedativ opioidlar tavsiya etilmaydi.',
  r_gcs_mo: 'O\'rtacha og\'irlikdagi bosh miya jarohati (GCS 9-12).', a_gcs_mo: '• Zudlik bilan bosh KT.<br>• Neyrojarrohning shoshilinch konsultatsiyasi.<br>• Bemor boshini 30° ga ko\'tarish.', rx_gcs_mo_n: 'Neyroprotektsiya', rx_gcs_mo_d: 'Levetiratsetam (500 mg v/i). Normoglikemiyani saqlash.',
  r_gcs_se: 'Og\'ir bosh miya jarohati (GCS ≤ 8). Miya dislokatsiyasi xavfi.', a_gcs_se: '• ZUDLIK BILAN nafas yo\'llarini himoyalash (Traxeya intubatsiyasi).<br>• Neyroreanimatsiyaga (ORIT) yotqizish.<br>• Bosh miya ichki bosimini monitoring qilish.', rx_gcs_se_n: 'ICP va Sedatsiya', rx_gcs_se_d: 'Induksiya uchun Propofol/Ketamin. Dislokatsiyada: Mannitol 20% yoki NaCl 3%.',

  // --- 2. APGAR ---
  d_apgar: 'Chaqaloqni 1 va 5-daqiqada baholash.', f_appear: 'Teri rangi', f_pulse: 'Puls', f_grimace: 'Grimasa', f_activity: 'Aktivlik', f_resp_a: 'Nafas', a_a2: 'Pushti (2)', a_a1: 'Ko\'k (1)', a_a0: 'Oq (0)', a_p2: '≥ 100 (2)', a_p1: '< 100 (1)', a_p0: 'Yo\'q (0)', a_g2: 'Yig\'lash (2)', a_g1: 'Grimasa (1)', a_g0: 'Yo\'q (0)', a_c2: 'Faol (2)', a_c1: 'Bukilish (1)', a_c0: 'Bo\'sh (0)', a_r2: 'Yig\'i (2)', a_r1: 'Sust (1)', a_r0: 'Yo\'q (0)',
  apgar_info_title: 'Apgar shkalasi', apgar_info_p1: 'Yangi tug\'ilgan chaqaloqning holatini tezkor baholash.', apgar_info_p2: '≤ 3 ball nevrologik shikastlanish xavfini bildiradi.', apgar_info_p3: '',
  r_apgar_no: 'Normal (7-10).', a_apgar_no: '• Standart parvarish.<br>• Ona bilan kontakt.', rx_apgar_no_n: 'Profilaktika', rx_apgar_no_d: 'Vitamin K 1 mg.',
  r_apgar_mo: 'O\'rtacha asfiksiya (4-6).', a_apgar_mo: '• Taktil stimulyatsiya.<br>• Kislorod.', rx_apgar_mo_n: 'Oksigenoterapiya', rx_apgar_mo_d: 'Saturatsiyaga qarab kislorod.',
  r_apgar_cr: 'Og\'ir asfiksiya (0-3).', a_apgar_cr: '• Zudlik bilan reanimatsiya.<br>• IVL (niqob orqali).', rx_apgar_cr_n: 'Reanimatsiya dori-darmonlari', rx_apgar_cr_d: 'Puls < 60 bo\'lsa v/i Epinefrin.',

  // --- 3. WELLS DVT ---
  d_dvt: 'TVT ehtimolini baholash.', f_cancer: 'Saraton', f_paralysis: 'Paralich', f_bedridden: 'Yotoq rejimi', f_tenderness: 'Og\'riq', f_swelling_entire: 'Oyoq shishi', f_swelling_calf: 'Boldir shishi', f_pitting: 'Chuqurcha', f_collateral: 'Venalar', f_alt_dx: 'Boshqa tashxis (-2)',
  dvt_info_title: 'Wells DVT mezonlari', dvt_info_p1: 'Tashxislash yondashuvini standartlashtiradi.', dvt_info_p2: '≥ 2 ball bemorda UTT majburiyligini bildiradi.', dvt_info_p3: '',
  r_dvt_lo: 'TVT ehtimoli past.', a_dvt_lo: '• D-Dimer tekshiruvi.<br>• Manfiy bo\'lsa TVT istisno qilinadi.', rx_dvt_lo_n: 'Antikoagulyantlar kerak emas', rx_dvt_lo_d: 'Empirik terapiya shart emas.',
  r_dvt_md: 'O\'rtacha xavf.', a_dvt_md: '• D-Dimer musbat bo\'lsa UTT qilinadi.', rx_dvt_md_n: 'Kuzatuv', rx_dvt_md_d: 'Agar UTT 4 soatdan ortiq kechiksa, terapiyani boshlash mumkin.',
  r_dvt_hi: 'TVT ehtimoli yuqori.', a_dvt_hi: '• Zudlik bilan oyoq venalari UTTsi.<br>• D-Dimer bu yerda yetarli emas.', rx_dvt_hi_n: 'Empirik Terapiya', rx_dvt_hi_d: 'Kechiksa NOAK (Apiksaban) yoki Enoksaparin boshlang.',

  // --- 4. WELLS PE ---
  d_pe: 'O\'ATE ehtimolini baholash.', f_pe_dvt: 'DVT belgilari', f_pe_alt: 'Boshqa tashxis kamroq', f_pe_hr: 'Puls > 100', f_pe_immob: 'Yotoq rejimi', f_pe_hx: 'PE/DVT', f_pe_hemop: 'Qon tupurish', f_pe_malig: 'Onkologiya',
  pe_info_title: 'Wells PE', pe_info_p1: 'D-dimer yoki KT angiografiyasini (KTPA) bajarishni belgilash.', pe_info_p2: '> 4 ball O\'ATE ehtimoli yuqori ekanligini anglatadi.', pe_info_p3: '',
  r_pe_lo: 'O\'ATE ehtimoli past.', a_pe_lo: '• D-Dimer orqali istisno qilish.', rx_pe_lo_n: 'Terapiya kerak emas', rx_pe_lo_d: 'Antikoagulyantlar qarshi ko\'rsatilgan.',
  r_pe_md: 'O\'rtacha xavf.', a_pe_md: '• Musbat D-Dimer bo\'lsa KT-AG.', rx_pe_md_n: 'Kutish', rx_pe_md_d: 'KT natijasini kuting.',
  r_pe_hi: 'O\'ATE ehtimoli yuqori.', a_pe_hi: '• Zudlik bilan KT-AG.<br>• Reanimatsiyaga yotqizish.', rx_pe_hi_n: 'Agressiv Terapiya', rx_pe_hi_d: 'Geparin yoki Enoksaparin zudlik bilan boshlanadi.',

  // --- 5. CURB-65 ---
  d_curb65: 'Pnevmoniyada o\'lim xavfi.', f_confusion: 'Ong chalkashligi', f_urea: 'Mochevina > 7', f_rr30: 'Nafas ≥ 30', f_bp_low: 'Qon bosimi < 90', f_age65: 'Yosh ≥ 65',
  curb_info_title: 'CURB-65', curb_info_p1: '30 kunlik o\'lim xavfini hisoblash.', curb_info_p2: '3 yoki undan yuqori ball gospitalizatsiyani talab qiladi.', curb_info_p3: '',
  r_curb_lo: 'O\'lim xavfi past (< 2%).', a_curb_lo: '• Uyda davolanish.<br>• 48 soatdan keyin nazorat.', rx_curb_lo_n: 'Ambulator Antibiotiklar', rx_curb_lo_d: 'Amoksitsillin yoki Doksitsiklin (5-7 kun).',
  r_curb_md: 'O\'rtacha xavf (~9%).', a_curb_md: '• Terapiya bo\'limiga yotqizish.<br>• Qon va balg\'am ekmasi.', rx_curb_md_n: 'Statsionar Terapiya', rx_curb_md_d: 'Vena ichiga Amoksitsillin/Klavulanat + peroral Klaritromitsin.',
  r_curb_hi: 'Og\'ir pnevmoniya.', a_curb_hi: '• Majburiy gospitalizatsiya (ORIT).<br>• IVL ga tayyorgarlik.', rx_curb_hi_n: 'Keng Spektrli Terapiya (ORIT)', rx_curb_hi_d: 'V/i Seftriakson 2g + Makrolid. MRSA ni hisobga olish.',

  // --- 6. CHADS-VASC ---
  d_chads2: 'Insult xavfini baholash.', f_chf: 'Yurak yetishmovchiligi', f_htn: 'Gipertenziya', f_age75: 'Yosh ≥ 75', f_dm: 'Qandli diabet', f_stroke: 'Insult', f_vascular: 'Tomir', f_age65_74: 'Yosh 65-74', f_sex_f: 'Ayol jinsi',
  chads_info_title: 'CHA₂DS₂-VASc', chads_info_p1: 'Bo\'lmachalar fibrillyatsiyasida insultning yillik xavfi.', chads_info_p2: '2 ball va undan yuqori bo\'lsa antikoagulyatsiya shart.', chads_info_p3: '',
  r_chads_lo: 'Past xavf.', a_chads_lo: '• Turmush tarzini o\'zgartirish.', rx_chads_lo_n: 'Dori kerak emas', rx_chads_lo_d: 'Antitrombotik dori tavsiya etilmaydi.',
  r_chads_md: 'O\'rtacha xavf.', a_chads_md: '• Qon ketish xavfini hisobga olgan holda davolash.', rx_chads_md_n: 'NOAK tavsiya etiladi', rx_chads_md_d: 'Bemor bilan muhokama qilish.',
  r_chads_hi: 'Insult xavfi yuqori.', a_chads_hi: '• Tizimli antikoagulyatsiya uchun qat\'iy ko\'rsatma.', rx_chads_hi_n: 'Uzoq muddatli Terapiya', rx_chads_hi_d: 'Apiksaban 5mg yoki Rivaroksaban 20mg.',

  // --- 7. CHILD-PUGH ---
  d_cp: 'Jigar sirrozi og\'irligi.', f_bili: 'Bilirubin', f_alb: 'Albumin', f_pt: 'PV / XNN', f_ascites: 'Assit', f_enceph: 'Ensefalopatiya', cp_b1: '< 34', cp_b2: '34–50', cp_b3: '> 50', cp_a1: '> 35', cp_a2: '28–35', cp_a3: '< 28', cp_p1: '< 1.7', cp_p2: '1.7–2.3', cp_p3: '> 2.3', cp_as2: 'O\'rtacha', cp_as3: 'Og\'ir', cp_e2: 'I–II', cp_e3: 'III–IV',
  cp_info_title: 'Child-Pugh shkalasi', cp_info_p1: 'Surunkali jigar kasalliklari prognozi.', cp_info_p2: 'C sinfiga o\'tish transplantatsiya baholashini talab qiladi.', cp_info_p3: '',
  r_cp_a: 'A sinf: Kompensatsiyalangan.', a_cp_a: '• Gepatolog kuzatuvi.<br>• Qizilo\'ngach venalarini tekshirish.', rx_cp_a_n: 'Standart', rx_cp_a_d: 'Gepatotoksik dorilardan saqlaning.',
  r_cp_b: 'B sinf: O\'rtacha.', a_cp_b: '• Jarrohlik xavfi yuqori.', rx_cp_b_n: 'Maqsadli Davolash', rx_cp_b_d: 'Portal gipertenziya uchun Propranolol.',
  r_cp_c: 'C sinf: Dekompensatsiyalangan.', a_cp_c: '• Zudlik bilan transplantatsiya markaziga.', rx_cp_c_n: 'Asoratlarni Davolash', rx_cp_c_d: 'Assit uchun Spironolakton. Ensefalopatiya uchun Laktuloza.',

  // --- 8. BMI ---
  d_bmi: 'Tana vazni indeksi.', f_weight: 'Vazn (kg)', f_height: 'Bo\'y (sm)',
  bmi_info_title: 'TVI (BMI)', bmi_info_p1: 'Semizlikni tasniflash uchun ishlatiladi.', bmi_info_p2: 'Yog\' foizini aniq o\'lchamasligini yodda tuting.', bmi_info_p3: '',
  r_bmi_un: 'Vazn yetishmovchiligi.', a_bmi_un: '• Diyetolog konsultatsiyasi.', rx_bmi_un_n: 'Qo\'shimcha oziqlanish', rx_bmi_un_d: 'Yuqori kaloriyali parhez.',
  r_bmi_no: 'Normal vazn.', a_bmi_no: '• Sog\'lom turmush tarzi.', rx_bmi_no_n: 'Profilaktika', rx_bmi_no_d: 'Hech qanday dori kerak emas.',
  r_bmi_ov: 'Ortiqcha vazn.', a_bmi_ov: '• 5-10% vazn yo\'qotish tavsiya etiladi.', rx_bmi_ov_n: 'Turmush Tarzi', rx_bmi_ov_d: 'Muntazam jismoniy mashqlar.',
  r_bmi_ob1: 'I darajali semizlik.', a_bmi_ob1: '• Yondosh kasalliklarni tekshirish.', rx_bmi_ob1_n: 'Farmakoterapiya', rx_bmi_ob1_d: 'Semaglutid kabi GLP-1 agonistlari.',
  r_bmi_ob2: 'II+ darajali semizlik.', a_bmi_ob2: '• Bariatrik jarrohlik konsultatsiyasi.', rx_bmi_ob2_n: 'Jarrohlik', rx_bmi_ob2_d: 'Maksimal tibbiy terapiya qilib ko\'rish.',

  // --- 9. EGFR ---
  d_egfr: 'Buyrak faoliyatini baholash.', f_cr: 'Kreatinin', f_age: 'Yosh', f_sex: 'Jins', sex_m: 'Erkak', sex_f: 'Ayol',
  egfr_info_title: 'eGFR', egfr_info_p1: 'Nefrotoksik dorilarni yozishdan oldin majburiydir.', egfr_info_p2: '< 60 ml/min ko\'rsatkichi kasallikni tasdiqlaydi.', egfr_info_p3: '',
  r_egfr_no: 'Normal eGFR (≥ 60).', a_egfr_no: '• Muntazam monitoring.', rx_egfr_no_n: 'Standart', rx_egfr_no_d: 'Proteinuriya bo\'lsa AAF inhibitori.',
  r_egfr_md: 'O\'rtacha SBK (30 - 59).', a_egfr_md: '• Dori dozalarini kamaytirish.', rx_egfr_md_n: 'Dozalarni to\'g\'rilash', rx_egfr_md_d: 'Metformin va NOAK dozasini pasaytirish. NYAQV (NSAID) dan saqlanish.',
  r_egfr_se: 'Og\'ir SBK (< 30).', a_egfr_se: '• Nefrologga yuborish.<br>• Dializga tayyorgarlik.', rx_egfr_se_n: 'Nefro-himoya', rx_egfr_se_d: 'Metforminni to\'xtatish. Kaliy nazorati.',

  // --- 10. MEWS ---
  d_mews: 'Klinik yomonlashuvni aniqlash.', f_mews_rr: 'Nafas', f_mews_hr: 'Puls', f_mews_sbp: 'Bosim', f_mews_temp: 'Harorat', f_mews_avpu: 'Ong',
  mews_info_title: 'MEWS shkalasi', mews_info_p1: 'Fiziologik baholash tizimi.', mews_info_p2: '5 yoki undan yuqori ball ORIT ehtimoli.', mews_info_p3: '',
  r_mews_lo: 'Fiziologik stabil.', a_mews_lo: '• Har 4-6 soatda kuzatuv.', rx_mews_lo_n: 'Eskalatsiya yo\'q', rx_mews_lo_d: 'Amaldagi dorilar davom ettiriladi.',
  r_mews_md: 'Ehtimoliy beqarorlik.', a_mews_md: '• 30 minut ichida shifokor ko\'rigi.', rx_mews_md_n: 'Maqsadli yordam', rx_mews_md_d: 'Kislorod berish. Gipotenziyada suyuqlik.',
  r_mews_hi: 'Kritik yomonlashuv.', a_mews_hi: '• Zudlik bilan reanimatsiya chaqirish.', rx_mews_hi_n: 'Tayyorgarlik', rx_mews_hi_d: 'Intubatsiya va vazopressorlarga tayyor bo\'lish.',

  // --- 11. CENTOR ---
  d_centor: 'Streptokokk ehtimoli.', f_cough_a: 'Yo\'tal yo\'q', f_exudates: 'Karash', f_lymph: 'Limfa tugun', f_temp38: 'Harorat > 38', f_c_age: 'Yosh', c_age_1: '3–14', c_age_2: '15–44', c_age_3: '≥ 45',
  centor_info_title: 'Centor mezonlari', centor_info_p1: 'Virusli faringit uchun antibiotiklarni empirik yozib berishni kamaytirish.', centor_info_p2: '4-5 ball empirik antibiotiklarni asoslaydi.', centor_info_p3: '',
  r_centor_lo: 'Strep ehtimoli past (Virusli).', a_centor_lo: '• Tomoqdan surtma shart emas.', rx_centor_lo_n: 'Simptomatik Davolash', rx_centor_lo_d: 'Ibuprofen. Antibiotik BERILMAYDI.',
  r_centor_md: 'Strep mumkin.', a_centor_md: '• Ekspress-test qilish.', rx_centor_md_n: 'Kutish', rx_centor_md_d: 'Test musbat bo\'lsa antibiotik berish.',
  r_centor_hi: 'Strep ehtimoli yuqori.', a_centor_hi: '• Empirik antibiotiklar boshlash mumkin.', rx_centor_hi_n: 'Antibiotikoterapiya', rx_centor_hi_d: 'Penitsillin V yoki Amoksitsillin 10 kun.',

  // --- 12. NIHSS ---
  d_nihss: 'Insult og\'irligini baholash.', f_nihss_score: 'NIHSS bali',
  nihss_info_title: 'NIHSS shkalasi', nihss_info_p1: 'Nevrologik defitsitning miqdoriy o\'lchovi.', nihss_info_p2: 'Trombolizis uchun asosiy ko\'rsatkich.', nihss_info_p3: '',
  r_nihss_mi: 'Yengil insult.', a_nihss_mi: '• Insult bo\'limiga yotqizish.', rx_nihss_mi_n: 'Antiagregant', rx_nihss_mi_d: 'Aspirin 300 mg.',
  r_nihss_mo: 'O\'rtacha insult.', a_nihss_mo: '• IV Trombolizisga ko\'rsatma.', rx_nihss_mo_n: 'Reperfuziya', rx_nihss_mo_d: 'Agar < 4.5 soat o\'tgan bo\'lsa Alteplaza (0.9 mg/kg).',
  r_nihss_ms: 'O\'rta-og\'ir insult.', a_nihss_ms: '• Trombektomiya (jarrohlik) jamoasini chaqirish.', rx_nihss_ms_n: 'Qo\'shma Terapiya', rx_nihss_ms_d: 'Trombolizis va Trombektomiya.',
  r_nihss_se: 'Og\'ir insult.', a_nihss_se: '• Miya shishi va gemorragik transformatsiya xavfi.', rx_nihss_se_n: 'ORIT', rx_nihss_se_d: 'Qon bosimini qat\'iy nazorat qilish.',

  // --- 13. SOFA ---
  d_sofa: 'A\'zolar yetishmovchiligi (Sepsis-3).', f_pao2: 'PaO2/FiO2', f_plt: 'Trombotsitlar', f_bili_sofa: 'Bilirubin', f_map: 'Bosim/Vazopressor', f_gcs_sofa: 'GCS', f_cr_sofa: 'Kreatinin',
  sofa_info_title: 'SOFA shkalasi', sofa_info_p1: 'Poliorgan yetishmovchiligini kuzatib boradi.', sofa_info_p2: '≥ 2 ballga oshishi sepsisni belgilaydi.', sofa_info_p3: '',
  r_sofa_lo: 'Past xavf.', a_sofa_lo: '• Infeksiya o\'chog\'ini topish.', rx_sofa_lo_n: 'Antibiotiklar', rx_sofa_lo_d: 'Gumon qilingan manbaga qarab tayinlash.',
  r_sofa_md: 'A\'zolar disfunksiyasi (Sepsis).', a_sofa_md: '• Sepsis-3 tashxisi tasdiqlandi.', rx_sofa_md_n: 'Reanimatsiya', rx_sofa_md_d: 'Keng spektrli v/i antibiotiklar. Suyuqlik.',
  r_sofa_hi: 'Septik Shok.', a_sofa_hi: '• Zudlik bilan ORIT.<br>• Markaziy vena kateteri.', rx_sofa_hi_n: 'Vazopressorlar', rx_sofa_hi_d: 'Norepinefrin (Maqsadli MAP > 65).',

  // --- 14. RANSON ---
  d_ranson: 'O\'tkir pankreatitda o\'lim xavfi.', f_age55: 'Yosh > 55', f_wbc: 'Leykotsit > 16k', f_glu: 'Glyukoza > 200', f_ldh: 'LDH > 350', f_ast: 'AST > 250', f_hct_drop: 'Gematokrit', f_bun_rise: 'Mochevina', f_ca_low: 'Kaltsiy', f_pao2_low: 'PaO2 < 60', f_base_def: 'Asos defitsiti', f_fluid_seq: 'Suyuqlik',
  ranson_info_title: 'Ranson mezonlari', ranson_info_p1: 'O\'tkir pankreatitning og\'irligini baholash.', ranson_info_p2: '3 yoki undan yuqori ball og\'ir pankreatitni ko\'rsatadi.', ranson_info_p3: '',
  r_ranson_lo: 'Yengil pankreatit.', a_ranson_lo: '• Umumiy bo\'limga yotqizish.', rx_ranson_lo_n: 'Simptomatik Terapiya', rx_ranson_lo_d: 'Suyuqliklar va Og\'riq qoldiruvchilar (Opioidlar).',
  r_ranson_md: 'O\'rtacha-og\'ir pankreatit.', a_ranson_md: '• Agressiv infuzion terapiya.', rx_ranson_md_n: 'Agressiv Infuziya', rx_ranson_md_d: 'Ringer laktat yoki Hartman (250-500 ml/soat).',
  r_ranson_hi: 'Og\'ir pankreatit.', a_ranson_hi: '• Majburiy ORIT.<br>• Jarroh konsultatsiyasi.', rx_ranson_hi_n: 'ORIT', rx_ranson_hi_d: 'Antibiotiklar faqat nekroz infeksiyalansa.',

  // --- 15. PSI/PORT ---
  d_psi: 'Kasalxonadan tashqari pnevmoniya uchun xavf.', f_psi_age: 'Yosh', f_psi_sex: 'Jins', f_psi_nh: 'Qariyalar uyi', f_psi_neo: 'Onkologiya', f_psi_liv: 'Jigar', f_psi_chf: 'Yurak yetish.', f_psi_cvd: 'Insult', f_psi_ren: 'Buyrak', f_psi_ams: 'Ong', f_psi_rr: 'Nafas ≥ 30', f_psi_sbp: 'Bosim < 90', f_psi_temp: 'Harorat < 35 yoki ≥ 40', f_psi_pulse: 'Puls ≥ 125', f_psi_ph: 'pH < 7.35', f_psi_bun: 'Mochevina ≥ 30', f_psi_na: 'Natriy < 130', f_psi_gluc: 'Glyukoza ≥ 250', f_psi_hct: 'Gematokrit < 30%', f_psi_pao2: 'PaO2 < 60', f_psi_eff: 'Plevral suyuqlik',
  psi_info_title: 'PSI/PORT shkalasi', psi_info_p1: 'Pnevmoniya bilan kasallangan bemorlar uchun 30 kunlik o\'lim ehtimoli.', psi_info_p2: 'IV va V xavf sinflari mutlaqo kasalxonaga yotqizishni talab qiladi.', psi_info_p3: '',
  r_psi_1: 'I Sinf (Past xavf).', a_psi_1: '• Uyda davolanish.', rx_psi_1_n: 'Peroral Antibiotik', rx_psi_1_d: 'Makrolid yoki Doksitsiklin.',
  r_psi_2: 'II Sinf (Past xavf).', a_psi_2: '• Uyda davolanish.', rx_psi_2_n: 'Peroral Antibiotik', rx_psi_2_d: 'Amoksitsillin yoki Makrolid.',
  r_psi_3: 'III Sinf (O\'rtacha).', a_psi_3: '• Qisqa muddatli kasalxonada kuzatuv.', rx_psi_3_n: 'Qisqa muddatli V/I', rx_psi_3_d: 'Ftorxinolon yoki Beta-laktam + Makrolid.',
  r_psi_4: 'IV Sinf (Yuqori xavf).', a_psi_4: '• Kasalxonaga yotqizish.', rx_psi_4_n: 'Vena ichiga Agressiv Terapiya', rx_psi_4_d: 'Seftriakson + Azitromitsin.',
  r_psi_5: 'V Sinf (Juda Yuqori).', a_psi_5: '• Zudlik bilan Reanimatsiya (ORIT).', rx_psi_5_n: 'Keng Spektrli (ORIT)', rx_psi_5_d: 'Beta-laktam + Makrolid. MRSA ni yopish.'
}
};

// --- GLOBAL TRANSLATION HANDLER ---
window.t = function(key) {
    var lang = localStorage.getItem('wardcalc_lang') || 'en';
    var dict = (window.T && window.T[lang]) ? window.T[lang] : (window.T ? window.T.en : {});
    return dict[key] || (window.T.en ? window.T.en[key] : key) || key;
};
