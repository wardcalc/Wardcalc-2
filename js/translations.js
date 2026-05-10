'use strict';

/**
 * WARDCALC MASTER DICTIONARY
 * Developer: Muhammad Sabir Ali, Final year student at Bukhara State Medical Institute.
 * Contains Expanded MDCalc-style Clinical Insights, Triage Guidelines, and Rx.
 */

window.T = {
en:{
  // --- UI & LEGAL ---
  badge: 'CLINICAL DECISION TOOLS', h1a: 'Ward', h1b: 'Calc', sub: 'Evidence-based medical calculators for daily ward practice.', badge_stu: 'BUILT BY A MEDICAL STUDENT · FOR MEDICAL PROFESSIONALS', h1_main: 'Clinical Tools', h1_sub: 'for Ward Rounds', search_ph: 'Search tools (e.g., GCS, BMI)...', alert_msg: 'Please complete all required fields.', btn: 'Calculate', tab_i: 'Interpretation', tab_a: 'Action Plan', tab_d: 'First-Line Rx', yes: 'Yes', no: 'No', YES: 'Yes', NO: 'No',
  sp_neuro: 'Neurology', sp_ped: 'Pediatrics', sp_gen: 'General', sp_resp: 'Respiratory', sp_cardio: 'Cardiology', sp_gastro: 'Gastroenterology', sp_id: 'Infectious Disease', sev_lo: 'LOW RISK', sev_md: 'MODERATE RISK', sev_hi: 'HIGH RISK', mnem_all: 'Memory Aid / Mnemonics',
  
  ft_about: 'About Us', ft_contact: 'Contact', ft_disc: 'Disclaimer', ft_terms: 'Terms', ft_privacy: 'Privacy', ft_rights: '© 2026 WardCalc. All rights reserved.',
  nav_about: 'About WardCalc', about_p1: 'WardCalc is a comprehensive clinical decision support system developed by Muhammad Sabir Ali, Final year student at Bukhara State Medical Institute. Designed to bridge the gap between complex medical literature and fast-paced bedside practice, WardCalc delivers rapid, evidence-based calculation tools to healthcare professionals globally.', about_h2: 'Our Mission', about_p2: 'In acute medical settings, time and accuracy are paramount. Our mission is to digitize and simplify internationally validated medical scoring systems into an intuitive, mobile-first interface. By reducing cognitive load, WardCalc empowers clinicians to make safer, faster, and more standardized therapeutic decisions.', about_h3: 'Educational Purpose', about_p3: 'While all algorithms and logic models within WardCalc are built strictly upon recognized peer-reviewed medical guidelines, the application is designated as an educational and reference tool. It is designed to assist, not replace, formal clinical judgment.',
  nav_contact: 'Contact & Support', contact_p1: 'We are committed to continuous clinical and technical improvement. If you have professional feedback, feature suggestions, or have encountered a technical issue, we encourage you to reach out.', contact_p2: 'For academic inquiries or technical support, please submit an issue via our official GitHub repository. All peer feedback is reviewed to ensure strict clinical accuracy.',
  nav_disc: 'Clinical Disclaimer', disc_p1: 'The calculations, guidelines, and pharmacological dosages provided by WardCalc are strictly for educational and informational purposes. They do not constitute definitive professional medical advice or protocols.', disc_p2: 'Healthcare providers must exercise their own independent clinical judgment. Muhammad Sabir Ali, Final year student at Bukhara State Medical Institute, assumes no liability for clinical decisions made, or actions taken, based on the outputs of this application. Always consult your institutional guidelines.',
  nav_terms: 'Terms of Use', terms_p1: 'By utilizing the WardCalc platform, you agree to these Terms. This application is provided "as is" without implied warranties.', terms_p2: 'Users are entirely responsible for verifying the accuracy of all calculations before applying them to real-world patient care.',
  nav_privacy: 'Privacy Policy', privacy_p1: 'Data security is the foundation of our architecture. WardCalc operates entirely client-side, meaning all calculations are performed locally within your browser.', privacy_p2: 'We do not collect, transmit, or store any Personal Health Information (PHI) or patient-identifiable data.',

  // --- EXPERT CLINICAL TEXT & RESULTS ---
  // GCS
  r_gcs_mi: 'Mild Head Injury (GCS 13-15).', a_gcs_mi: '• Full neurological exam.<br>• Routine neuro-obs 1-hourly.', rx_gcs_mi_n: 'Supportive Care', rx_gcs_mi_d: 'Paracetamol. Avoid sedating opioids.',
  r_gcs_mo: 'Moderate TBI (GCS 9-12).', a_gcs_mo: '• Urgent non-contrast CT head.<br>• Neurosurgery consult.<br>• Elevate head 30°.', rx_gcs_mo_n: 'Neuroprotection', rx_gcs_mo_d: 'Prophylactic Levetiracetam (500mg IV BID).',
  r_gcs_se: 'Severe TBI (GCS ≤ 8).', a_gcs_se: '• IMMEDIATE intubation (RSI).<br>• Admit to Neuro-ICU.', rx_gcs_se_n: 'ICP Management', rx_gcs_se_d: 'Propofol/Ketamine. Mannitol 20% if herniating.',
  gcs_info_title: 'Evidence & Insights: GCS',
  gcs_info_p1: 'Overview: Developed in 1974 by Teasdale and Jennett, the Glasgow Coma Scale standardizes the assessment of consciousness in acute brain injury and systemic illness.',
  gcs_info_p2: 'Clinical Pearls: The motor score is the most reliable independent predictor of prognosis. If responses are asymmetrical (e.g., due to hemiparesis), always score the BEST responding side. If eyes cannot open due to orbital edema, record as "NT" (Not Testable).',
  gcs_info_p3: 'Next Steps: A GCS of 8 or less defines a coma. It indicates the patient\'s inability to independently protect their airway, serving as an absolute threshold for emergent endotracheal intubation.',
  
  // APGAR
  r_apgar_no: 'Normal Neonatal Transition.', a_apgar_no: '• Routine care.<br>• Skin-to-skin contact.', rx_apgar_no_n: 'Prophylaxis', rx_apgar_no_d: 'IM Vitamin K 1mg.',
  r_apgar_mo: 'Moderately Depressed.', a_apgar_mo: '• Tactile stimulation.<br>• Administer blow-by oxygen or CPAP.', rx_apgar_mo_n: 'Oxygen Therapy', rx_apgar_mo_d: 'Titrate FiO2 to targeted SpO2.',
  r_apgar_cr: 'Critically Low.', a_apgar_cr: '• Initiate Neonatal Resuscitation Protocol (NRP).<br>• Positive Pressure Ventilation.', rx_apgar_cr_n: 'Resuscitation', rx_apgar_cr_d: 'If HR < 60 after PPV, give IV Epinephrine (0.01-0.03 mg/kg).',
  apgar_info_title: 'Evidence & Insights: APGAR',
  apgar_info_p1: 'Overview: Devised by Dr. Virginia Apgar in 1952. The 1-minute score reflects how well the infant tolerated labor, while the 5-minute score assesses extrauterine adaptation.',
  apgar_info_p2: 'Clinical Pearls: The 5 criteria are NOT of equal significance. Heart rate and respiratory effort are paramount for survival, while skin color (acrocyanosis) is the least reliable and most subjective metric.',
  apgar_info_p3: 'Guidelines: ACOG and AAP emphasize that APGAR alone should NOT diagnose asphyxia. However, a score of <7 at 5 minutes mandates continued scoring every 5 minutes (up to 20 mins) and active resuscitation.',
  
  // WELLS DVT
  r_dvt_lo: 'DVT Unlikely.', a_dvt_lo: '• Perform high-sensitivity D-Dimer test.<br>• If negative, DVT safely excluded.', rx_dvt_lo_n: 'No Anticoagulation', rx_dvt_lo_d: 'Do not initiate empiric therapy.',
  r_dvt_md: 'Moderate Probability.', a_dvt_md: '• Obtain D-Dimer testing.<br>• If positive, proceed to proximal vein ultrasound.', rx_dvt_md_n: 'Hold Therapy', rx_dvt_md_d: 'Hold empiric therapy unless ultrasound delayed > 4 hours.',
  r_dvt_hi: 'DVT Likely.', a_dvt_hi: '• Proceed directly to venous ultrasound.<br>• Assess patient bleeding risk.', rx_dvt_hi_n: 'Empiric Anticoagulation', rx_dvt_hi_d: 'DOAC (Apixaban/Rivaroxaban) or LMWH (Enoxaparin 1.5mg/kg).',
  dvt_info_title: 'Evidence & Insights: Wells DVT',
  dvt_info_p1: 'Overview: A validated clinical prediction rule designed to estimate the pre-test probability of Deep Vein Thrombosis before initiating costly imaging or hazardous anticoagulation.',
  dvt_info_p2: 'Clinical Pearls: The criterion "Alternative diagnosis at least as likely" requires strong clinical gestalt. Consider cellulitis, ruptured Baker’s cyst, heart failure, or superficial thrombophlebitis.',
  dvt_info_p3: 'Next Steps: In low-risk patients, a negative high-sensitivity D-dimer safely rules out DVT. In high-risk patients (≥2), D-dimer is insufficient; proceed directly to proximal compression ultrasonography.',
  
  // WELLS PE
  r_pe_lo: 'PE Unlikely.', a_pe_lo: '• Apply PERC rule or obtain D-Dimer.', rx_pe_lo_n: 'No Anticoagulation', rx_pe_lo_d: 'Empiric anticoagulation is contraindicated.',
  r_pe_md: 'Moderate Risk.', a_pe_md: '• Obtain high-sensitivity D-Dimer.<br>• If positive, proceed to CTPA imaging.', rx_pe_md_n: 'Hold Anticoagulation', rx_pe_md_d: 'Wait for CTPA results unless imaging is delayed.',
  r_pe_hi: 'PE Likely.', a_pe_hi: '• Proceed directly to CTPA.<br>• D-Dimer testing is not appropriate.', rx_pe_hi_n: 'Therapeutic Anticoagulation', rx_pe_hi_d: 'Start immediately (LMWH or IV Heparin) pending scan.',
  pe_info_title: 'Evidence & Insights: Wells PE',
  pe_info_p1: 'Overview: Stratifies the risk of Pulmonary Embolism to prevent unnecessary CT Pulmonary Angiography (CTPA) and its associated radiation/contrast nephropathy risks.',
  pe_info_p2: 'Clinical Pearls: Tachycardia (>100 bpm) is a strong but highly nonspecific predictor. Suspect PE in unexplained hypoxia, pleuritic chest pain, or new-onset right heart strain (S1Q3T3 on ECG).',
  pe_info_p3: 'Next Steps: If PE is "Likely" (>4), do NOT order a D-Dimer; it cannot safely rule out PE. Proceed immediately to CTPA and initiate empiric anticoagulation if bleeding risk is low.',

  // CURB-65
  r_curb_lo: 'Low mortality risk (< 2%).', a_curb_lo: '• Outpatient management.<br>• Clinical follow-up in 48-72 hours.', rx_curb_lo_n: 'Oral Antimicrobials', rx_curb_lo_d: 'Amoxicillin 500mg TDS or Doxycycline 100mg BID.',
  r_curb_md: 'Moderate mortality risk (~9%).', a_curb_md: '• Hospital admission to medical ward.<br>• Blood cultures and sputum Gram stain.', rx_curb_md_n: 'Inpatient Antimicrobials', rx_curb_md_d: 'IV Amoxicillin/Clavulanate (1.2g TDS) + Oral Clarithromycin.',
  r_curb_hi: 'Severe CAP (Mortality > 22%).', a_curb_hi: '• Mandatory hospitalization; evaluate for ICU.<br>• ABG analysis; prepare for mechanical ventilation.', rx_curb_hi_n: 'ICU Broad-Spectrum', rx_curb_hi_d: 'IV Ceftriaxone (2g OD) PLUS IV Macrolide. Add MRSA coverage if indicated.',
  curb_info_title: 'Evidence & Insights: CURB-65',
  curb_info_p1: 'Overview: Endorsed by the British Thoracic Society (BTS), this tool accurately predicts 30-day mortality in patients with Community-Acquired Pneumonia (CAP).',
  curb_info_p2: 'Clinical Pearls: Urea > 7 mmol/L reflects dehydration and poor renal perfusion secondary to sepsis. "Confusion" is formally defined as an Abbreviated Mental Test Score (AMTS) of ≤ 8.',
  curb_info_p3: 'Next Steps: Score 0-1 implies safe outpatient treatment. Score 2 mandates ward admission. Score 3+ implies severe CAP with up to 40% mortality, necessitating ICU evaluation.',

  // CHADS2
  r_chads_lo: 'Low Stroke Risk.', a_chads_lo: '• Evaluate individual bleeding risks.<br>• Annual reassessment.', rx_chads_lo_n: 'No Anticoagulation', rx_chads_lo_d: 'Antithrombotic therapy is generally not recommended.',
  r_chads_md: 'Intermediate Stroke Risk.', a_chads_md: '• Shared decision-making regarding therapy.', rx_chads_md_n: 'Consider DOAC', rx_chads_md_d: 'Oral anticoagulation considered based on benefit-risk profile.',
  r_chads_hi: 'High Stroke Risk.', a_chads_hi: '• Strong clinical indication for systemic anticoagulation.', rx_chads_hi_n: 'Lifelong Anticoagulation', rx_chads_hi_d: 'DOACs preferred (e.g., Apixaban 5mg BID) over Warfarin.',
  chads_info_title: 'Evidence & Insights: CHA₂DS₂-VASc',
  chads_info_p1: 'Overview: The AHA/ACC/ESC recommended scoring system to estimate the annual risk of ischemic stroke in patients with non-valvular Atrial Fibrillation.',
  chads_info_p2: 'Clinical Pearls: "Non-valvular" means the absence of moderate-to-severe mitral stenosis or a mechanical heart valve. Always calculate the HAS-BLED score concurrently to weigh bleeding risk.',
  chads_info_p3: 'Guidelines: A score of ≥2 in men or ≥3 in women represents a definitive indication for lifelong oral anticoagulation, with DOACs favored over Warfarin due to superior safety profiles.',

  // CHILD-PUGH
  r_cp_a: 'Class A: Compensated.', a_cp_a: '• Routine hepatology follow-up.<br>• Screen for esophageal varices.', rx_cp_a_n: 'Standard Care', rx_cp_a_d: 'Avoid hepatotoxic medications.',
  r_cp_b: 'Class B: Significant Impairment.', a_cp_b: '• Formal hepatology evaluation.<br>• Increased perioperative mortality risk.', rx_cp_b_n: 'Targeted Management', rx_cp_b_d: 'Non-selective beta-blockers for portal hypertension.',
  r_cp_c: 'Class C: Decompensated.', a_cp_c: '• Urgent transplant evaluation required.<br>• Monitor closely for SBP.', rx_cp_c_n: 'Complication Management', rx_cp_c_d: 'Spironolactone/Furosemide for ascites. Lactulose for encephalopathy.',
  cp_info_title: 'Evidence & Insights: Child-Pugh',
  cp_info_p1: 'Overview: A classic prognostic model used to estimate 1- and 2-year survival in patients with cirrhosis, and to evaluate perioperative mortality risk.',
  cp_info_p2: 'Clinical Pearls: The subjective criteria (ascites and encephalopathy) can be artificially altered by recent medical interventions (e.g., vigorous diuresis or lactulose therapy).',
  cp_info_p3: 'Next Steps: Class A boasts a ~100% 1-year survival. Class C indicates end-stage decompensation with only ~45% 1-year survival, mandating immediate liver transplant evaluation.',

  // BMI
  r_bmi_un: 'Underweight.', a_bmi_un: '• Assess for malnutrition or malignancy.<br>• Dietician referral.', rx_bmi_un_n: 'Nutritional Support', rx_bmi_un_d: 'High-caloric dietary supplementation.',
  r_bmi_no: 'Normal Weight.', a_bmi_no: '• Routine annual cardiovascular screening.', rx_bmi_no_n: 'Preventative Care', rx_bmi_no_d: 'No pharmacological intervention indicated.',
  r_bmi_ov: 'Overweight.', a_bmi_ov: '• Recommend 5-10% weight loss.<br>• Screen for metabolic syndrome.', rx_bmi_ov_n: 'Lifestyle Optimization', rx_bmi_ov_d: 'Dietary caloric restriction.',
  r_bmi_ob1: 'Obesity Class I.', a_bmi_ob1: '• Intensive multidisciplinary lifestyle intervention.', rx_bmi_ob1_n: 'Pharmacotherapy', rx_bmi_ob1_d: 'GLP-1 receptor agonists (e.g., Semaglutide) if comorbidities present.',
  r_bmi_ob2: 'Severe Obesity.', a_bmi_ob2: '• Formal bariatric surgery evaluation.', rx_bmi_ob2_n: 'Aggressive Intervention', rx_bmi_ob2_d: 'Maximally tolerate medical therapy; prepare for surgery.',
  bmi_info_title: 'Evidence & Insights: BMI',
  bmi_info_p1: 'Overview: The World Health Organization (WHO) standard for anthropometric tracking, providing a baseline metric for cardiovascular and metabolic risk stratification.',
  bmi_info_p2: 'Clinical Pearls: BMI does not differentiate between muscle mass and adipose tissue, potentially misclassifying bodybuilders. Conversely, it may fail to identify dangerous visceral adiposity in "normal-weight obesity".',
  bmi_info_p3: 'Next Steps: Note that Asian populations exhibit higher cardiometabolic risks at lower BMIs; WHO guidelines adjust "Overweight" to ≥23 and "Obesity" to ≥25 for these demographics.',

  // EGFR
  r_egfr_no: 'Normal/Mildly Decreased (≥ 60).', a_egfr_no: '• Routine monitoring of renal function.<br>• Screen for proteinuria.', rx_egfr_no_n: 'Standard Care', rx_egfr_no_d: 'If proteinuria present, initiate ACE inhibitor or ARB.',
  r_egfr_md: 'Moderate CKD (30-59).', a_egfr_md: '• Adjust renally cleared medications.<br>• Refer to nephrology if rapidly declining.', rx_egfr_md_n: 'Renal Dose Adjustments', rx_egfr_md_d: 'Dose reduce DOACs, Metformin. Avoid NSAIDs.',
  r_egfr_se: 'Severe CKD (< 30).', a_egfr_se: '• Mandatory Nephrology consultation.<br>• Prepare for Renal Replacement Therapy (RRT).', rx_egfr_se_n: 'Strict Nephro-Protection', rx_egfr_se_d: 'Discontinue Metformin. Manage hyperkalemia actively.',
  egfr_info_title: 'Evidence & Insights: eGFR (CKD-EPI)',
  egfr_info_p1: 'Overview: The 2021 CKD-EPI equation removes the controversial race multiplier, providing the most accurate reflection of true Glomerular Filtration Rate currently available.',
  egfr_info_p2: 'Clinical Pearls: eGFR formulas are inaccurate in acute kidney injury (AKI) where creatinine is not in steady state. It is also unreliable in amputees, severe malnutrition, or extremes of muscle mass.',
  egfr_info_p3: 'Guidelines: An eGFR <60 mL/min persisting for >3 months establishes Chronic Kidney Disease (CKD). It is mandatory to check eGFR before prescribing renally cleared drugs (e.g., DOACs, antibiotics).',

  // MEWS
  r_mews_lo: 'Physiologically stable.', a_mews_lo: '• Continue routine ward observations.', rx_mews_lo_n: 'No escalation', rx_mews_lo_d: 'Continue charted medications.',
  r_mews_md: 'Potential instability.', a_mews_md: '• Escalate observation frequency.<br>• Request medical review within 30 mins.', rx_mews_md_n: 'Targeted Resuscitation', rx_mews_md_d: 'Titrate oxygen to SpO2 >94%. Conservative IV fluid bolus.',
  r_mews_hi: 'Critical deterioration.', a_mews_hi: '• Immediate medical review.<br>• Activate Rapid Response Team (RRT).', rx_mews_hi_n: 'ALS Standby', rx_mews_hi_d: 'Aggressive fluid resuscitation. Prepare crash cart.',
  mews_info_title: 'Evidence & Insights: MEWS',
  mews_info_p1: 'Overview: A bedside "track-and-trigger" scoring system used universally to identify catastrophic clinical deterioration hours before cardiac arrest occurs.',
  mews_info_p2: 'Clinical Pearls: Tachypnea (increased respiratory rate) is highly sensitive and often the very first indicator of systemic distress or metabolic acidosis. Temperature is the least predictive alone.',
  mews_info_p3: 'Next Steps: A score of ≥5 triggers mandatory Rapid Response Team (RRT) or Medical Emergency Team (MET) activation globally, indicating impending need for ICU transfer.',

  // CENTOR
  r_centor_lo: 'Viral Pharyngitis likely.', a_centor_lo: '• Provide symptomatic relief.<br>• Do NOT perform throat culture.', rx_centor_lo_n: 'Symptomatic Care Only', rx_centor_lo_d: 'Acetaminophen or Ibuprofen. Avoid antibiotics.',
  r_centor_md: 'Possible Strep.', a_centor_md: '• Perform Rapid Antigen Detection Test (RADT).', rx_centor_md_n: 'Hold Antibiotics', rx_centor_md_d: 'Empiric antibiotics not recommended until confirmed.',
  r_centor_hi: 'Strep Highly Likely.', a_centor_hi: '• Consider empiric antibiotics if RADT unavailable.', rx_centor_hi_n: 'Antimicrobial Therapy', rx_centor_hi_d: 'Penicillin V 500mg QID for 10 days.',
  centor_info_title: 'Evidence & Insights: Centor Criteria',
  centor_info_p1: 'Overview: The Modified Centor (McIsaac) rule estimates the probability that pharyngitis is caused by Group A beta-hemolytic Streptococcus (GAS).',
  centor_info_p2: 'Clinical Pearls: Its primary power is negative predictive value—best used to *rule out* Strep and avoid unnecessary antibiotics. It is not validated for use in children under 3 years old.',
  centor_info_p3: 'Guidelines: Score 0-1: No testing, no antibiotics. Score 2-3: Perform Rapid Strep Test. Score 4-5: High probability; empiric Amoxicillin/Penicillin is justified to prevent rheumatic fever.',

  // NIHSS
  r_nihss_mi: 'Minor Stroke (1-4).', a_nihss_mi: '• Admit to Stroke Unit.<br>• Secondary stroke prevention.', rx_nihss_mi_n: 'Antiplatelet Therapy', rx_nihss_mi_d: 'Aspirin 300mg stat.',
  r_nihss_mo: 'Moderate Stroke (5-15).', a_nihss_mo: '• Urgent evaluation for IV thrombolysis.<br>• CT Angiography to assess LVO.', rx_nihss_mo_n: 'Reperfusion Evaluation', rx_nihss_mo_d: 'IV Alteplase (0.9 mg/kg) if presenting < 4.5 hours.',
  r_nihss_ms: 'Moderate-Severe (16-20).', a_nihss_ms: '• High probability of LVO; activate endovascular team.', rx_nihss_ms_n: 'Combined Reperfusion', rx_nihss_ms_d: 'Bridging IV Thrombolysis followed by Mechanical Thrombectomy.',
  r_nihss_se: 'Severe Stroke (> 20).', a_nihss_se: '• Very high risk of cerebral edema.<br>• Consider early decompressive hemicraniectomy.', rx_nihss_se_n: 'ICU Management', rx_nihss_se_d: 'Withhold thrombolysis if extensive early ischemic changes. Manage BP strictly.',
  nihss_info_title: 'Evidence & Insights: NIHSS',
  nihss_info_p1: 'Overview: The international gold standard 15-item quantitative measure used to rapidly evaluate the severity of acute stroke-related neurologic deficits.',
  nihss_info_p2: 'Clinical Pearls: The scale is heavily weighted toward anterior circulation (MCA) strokes. It may artificially score low in patients with devastating brainstem or cerebellar (posterior) strokes.',
  nihss_info_p3: 'Next Steps: Standardizes communication between EMS, ED, and Neurology. Essential for determining eligibility for IV Alteplase (tPA) and Endovascular Thrombectomy (EVT).',

  // SOFA
  r_sofa_lo: 'Low Sepsis Mortality Risk.', a_sofa_lo: '• Identify and treat underlying source of infection.', rx_sofa_lo_n: 'Targeted Antimicrobials', rx_sofa_lo_d: 'Initiate appropriate antibiotics based on suspected source.',
  r_sofa_md: 'Moderate Organ Dysfunction.', a_sofa_md: '• Sepsis formally diagnosed.<br>• Initiate Sepsis Six pathway immediately.', rx_sofa_md_n: 'Sepsis Resuscitation', rx_sofa_md_d: 'Administer 30 mL/kg IV crystalloid fluid. Broad-spectrum IV antibiotics.',
  r_sofa_hi: 'Severe Multi-Organ Failure.', a_sofa_hi: '• Mandatory ICU admission.<br>• Central venous access.', rx_sofa_hi_n: 'Vasopressor Support', rx_sofa_hi_d: 'Norepinephrine as first-line agent to maintain MAP > 65 mmHg.',
  sofa_info_title: 'Evidence & Insights: SOFA',
  sofa_info_p1: 'Overview: The Sequential Organ Failure Assessment (SOFA) is the foundation of the Sepsis-3 diagnostic criteria, tracking multi-organ failure and ICU mortality.',
  sofa_info_p2: 'Clinical Pearls: Unlike the rapid bedside qSOFA, the full SOFA score requires comprehensive laboratory inputs (Platelets, Bilirubin, Creatinine, ABG) to objectify the dysfunction across 6 organ systems.',
  sofa_info_p3: 'Guidelines: An acute increase of ≥ 2 points from the patient\'s baseline establishes a formal clinical diagnosis of Sepsis, correlating with a minimum 10% mortality risk.',

  // RANSON
  r_ranson_lo: 'Mild Acute Pancreatitis.', a_ranson_lo: '• Admit to general medical ward.<br>• Initiate early enteral nutrition.', rx_ranson_lo_n: 'Supportive Care', rx_ranson_lo_d: 'Isotonic IV fluids. IV Opioids (e.g., Morphine) for pain control.',
  r_ranson_md: 'Moderate-to-Severe Pancreatitis.', a_ranson_md: '• Step-down or ICU admission.<br>• Aggressive, goal-directed fluid resuscitation.', rx_ranson_md_n: 'Aggressive Resuscitation', rx_ranson_md_d: 'Lactated Ringer’s preferred at 250-500 mL/hr. Correct hypocalcemia.',
  r_ranson_hi: 'Severe Acute Pancreatitis.', a_ranson_hi: '• Mandatory ICU admission.<br>• Monitor for ARDS, AKI, and necrotizing pancreatitis.', rx_ranson_hi_n: 'Critical Care Management', rx_ranson_hi_d: 'Vasopressors if fluids fail. Consider antibiotics ONLY if necrosis becomes infected.',
  ranson_info_title: 'Evidence & Insights: Ranson Criteria',
  ranson_info_p1: 'Overview: The original 1974 predictive model designed to estimate mortality and severity in acute pancreatitis based on inflammatory and metabolic markers.',
  ranson_info_p2: 'Clinical Pearls: The score requires a full 48 hours to complete. Markers like massive fluid sequestration (>6L) and hypocalcemia reflect severe third-spacing and retroperitoneal saponification/necrosis.',
  ranson_info_p3: 'Next Steps: A score ≥3 signifies severe acute pancreatitis. Modern practice often combines Ranson with APACHE II or BISAP scores for dynamic daily tracking in the ICU.',

  // PSI/PORT
  r_psi_1: 'Risk Class I (Lowest Mortality).', a_psi_1: '• Safe for outpatient management.<br>• Discharge home with clear return precautions.', rx_psi_1_n: 'Outpatient Oral ABX', rx_psi_1_d: 'Oral Macrolide (Azithromycin) or Doxycycline monotherapy.',
  r_psi_2: 'Risk Class II (Low Mortality).', a_psi_2: '• Outpatient management recommended.<br>• Ensure patient has adequate social support.', rx_psi_2_n: 'Outpatient Oral ABX', rx_psi_2_d: 'Oral Amoxicillin or Macrolide.',
  r_psi_3: 'Risk Class III (Moderate Mortality).', a_psi_3: '• Consider hospital admission to observation unit or short-stay ward.', rx_psi_3_n: 'Short-Stay ABX', rx_psi_3_d: 'Oral or IV Respiratory Fluoroquinolone OR Beta-lactam + Macrolide combination.',
  r_psi_4: 'Risk Class IV (High Mortality).', a_psi_4: '• Formal inpatient admission required.<br>• Obtain comprehensive blood and sputum cultures.', rx_psi_4_n: 'Inpatient IV ABX', rx_psi_4_d: 'IV Ceftriaxone PLUS Azithromycin OR IV Levofloxacin.',
  r_psi_5: 'Risk Class V (Very High Mortality).', a_psi_5: '• Direct ICU admission strongly recommended.<br>• Aggressive hemodynamic resuscitation.', rx_psi_5_n: 'ICU Broad-Spectrum ABX', rx_psi_5_d: 'IV Beta-Lactam + IV Macrolide. Cover for MRSA/Pseudomonas if specific risk factors exist.',
  psi_info_title: 'Evidence & Insights: PSI/PORT',
  psi_info_p1: 'Overview: A robust, age-weighted clinical prediction rule used to calculate the 30-day mortality probability for patients with Community-Acquired Pneumonia.',
  psi_info_p2: 'Clinical Pearls: While much more complex than CURB-65 (requiring 20 variables including ABGs), it is statistically superior at identifying truly low-risk patients, safely reducing unnecessary hospital admissions.',
  psi_info_p3: 'Guidelines: Classes I and II can be safely discharged. Class III requires clinical judgment (observation). Classes IV and V demand formal inpatient admission, with Class V often requiring Critical Care.'
},

ru:{
  // --- UI & LEGAL (Russian) ---
  badge: 'КЛИНИЧЕСКИЕ ИНСТРУМЕНТЫ', h1a: 'Ward', h1b: 'Calc', sub: 'Доказательные медицинские калькуляторы для ежедневной практики.', badge_stu: 'СОЗДАНО СТУДЕНТОМ-МЕДИКОМ · ДЛЯ ВРАЧЕЙ', h1_main: 'Клинические инструменты', h1_sub: 'для обходов', search_ph: 'Поиск (напр. ШКГ, ИМТ)...', alert_msg: 'Пожалуйста, заполните все поля.', btn: 'Рассчитать', tab_i: 'Интерпретация', tab_a: 'План действий', tab_d: 'Терапия (Rx)', yes: 'Да', no: 'Нет', YES: 'Да', NO: 'Нет',
  sp_neuro: 'Неврология', sp_ped: 'Педиатрия', sp_gen: 'Общие', sp_resp: 'Пульмонология', sp_cardio: 'Кардиология', sp_gastro: 'Гастро', sp_id: 'Инф. болезни', sev_lo: 'НИЗКИЙ РИСК', sev_md: 'СРЕДНИЙ РИСК', sev_hi: 'ВЫСОКИЙ РИСК', mnem_all: 'Мнемоника / Запоминание',
  
  ft_about: 'О нас', ft_contact: 'Контакты', ft_disc: 'Отказ', ft_terms: 'Условия', ft_privacy: 'Конфиденциальность', ft_rights: '© 2026 WardCalc. Все права защищены.',
  nav_about: 'О проекте WardCalc', about_p1: 'WardCalc — это комплексная система поддержки принятия клинических решений, разработанная Мухаммадом Сабиром Али, студентом выпускного курса Бухарского государственного медицинского института.', about_h2: 'Наша миссия', about_p2: 'Оцифровать признанные международные шкалы в интуитивный мобильный интерфейс, помогая врачам принимать безопасные решения.', about_h3: 'Образовательная цель', about_p3: 'Приложение предназначено исключительно для образовательных и справочных целей. Оно должно помогать, а не заменять клиническое мышление.',
  nav_contact: 'Свяжитесь с нами', contact_p1: 'Если у вас есть отзывы или вы столкнулись с проблемой, свяжитесь с нами.', contact_p2: 'Для поддержки обращайтесь через наш официальный репозиторий GitHub.',
  nav_disc: 'Отказ от ответственности', disc_p1: 'Предоставленные рекомендации и дозировки предназначены исключительно для образовательных целей и не являются официальным медицинским протоколом.', disc_p2: 'Врачи должны полагаться на собственное независимое клиническое суждение. Мухаммад Сабир Али, студент выпускного курса Бухарского государственного медицинского института, не несет ответственности за решения, принятые на основе этого приложения.',
  nav_terms: 'Условия использования', terms_p1: 'Сервис предоставляется «как есть» без гарантий.', terms_p2: 'Пользователи несут ответственность за проверку точности расчетов перед применением их в практике.',
  nav_privacy: 'Конфиденциальность', privacy_p1: 'WardCalc работает полностью локально в вашем браузере.', privacy_p2: 'Мы не собираем и не храним личные медицинские данные пациентов.',

  // --- EXPERT CLINICAL TEXT (Russian) ---
  r_gcs_mi: 'Легкая ЧМТ (ШКГ 13-15).', a_gcs_mi: '• Полный неврологический осмотр.<br>• Наблюдение каждые 30-60 минут.', rx_gcs_mi_n: 'Симптоматическая терапия', rx_gcs_mi_d: 'Анальгезия (Парацетамол). Избегать седативных опиоидов.',
  r_gcs_mo: 'Умеренная ЧМТ (ШКГ 9-12). Высокий риск ишемии мозга.', a_gcs_mo: '• Срочная КТ головы.<br>• Консультация нейрохирурга.', rx_gcs_mo_n: 'Нейропротекция', rx_gcs_mo_d: 'Рассмотреть Леветирацетам (500 мг в/в).',
  r_gcs_se: 'Тяжелая ЧМТ (ШКГ ≤ 8). Риск дислокации.', a_gcs_se: '• НЕМЕДЛЕННАЯ интубация трахеи.<br>• Госпитализация в ОРИТ.', rx_gcs_se_n: 'Терапия ВЧД', rx_gcs_se_d: 'Пропофол/Кетамин. При дислокации: Маннитол 20% или гипертонический NaCl 3%.',
  gcs_info_title: 'Анализ: Шкала Глазго',
  gcs_info_p1: 'Обзор: Шкала комы Глазго стандартизирует оценку сознания при острой травме мозга и системных заболеваниях.',
  gcs_info_p2: 'Жемчужины: Двигательный ответ — самый надежный предиктор исхода. При асимметрии всегда оценивайте ЛУЧШИЙ ответ. Если глаза отекли, ставьте "Не тестируется" (NT).',
  gcs_info_p3: 'Тактика: ШКГ 8 и ниже означает кому. Это абсолютное показание для экстренной интубации трахеи.',
  
  r_apgar_no: 'Нормальная адаптация.', a_apgar_no: '• Стандартный уход.<br>• Контакт кожа-к-коже.', rx_apgar_no_n: 'Профилактика', rx_apgar_no_d: 'Витамин К 1 мг в/м.',
  r_apgar_mo: 'Умеренная депрессия.', a_apgar_mo: '• Тактильная стимуляция.<br>• Подача кислорода.', rx_apgar_mo_n: 'Оксигенотерапия', rx_apgar_mo_d: 'Титровать кислород по сатурации.',
  r_apgar_cr: 'Критическое состояние.', a_apgar_cr: '• Немедленная реанимация (ИВЛ через маску).', rx_apgar_cr_n: 'Препараты', rx_apgar_cr_d: 'При ЧСС < 60 после вентиляции: Эпинефрин в/в.',
  apgar_info_title: 'Анализ: Шкала Апгар',
  apgar_info_p1: 'Обзор: Оценка на 1-й минуте отражает переносимость родов, на 5-й минуте — адаптацию к внеутробной жизни.',
  apgar_info_p2: 'Жемчужины: Критерии НЕ равнозначны. Пульс и дыхание жизненно важны, тогда как цвет кожи (акроцианоз) наименее надежен.',
  apgar_info_p3: 'Тактика: Оценка ≤ 3 на 5-й минуте требует агрессивной неонатальной реанимации и продолжения оценки каждые 5 минут.',
  
  r_dvt_lo: 'ТГВ маловероятен.', a_dvt_lo: '• Анализ на D-димер.<br>• При (-) ТГВ исключен.', rx_dvt_lo_n: 'Антикоагулянты не нужны', rx_dvt_lo_d: 'Эмпирическая терапия не показана.',
  r_dvt_md: 'Умеренная вероятность.', a_dvt_md: '• D-димер.<br>• При (+) УЗИ вен.', rx_dvt_md_n: 'Ожидание УЗИ', rx_dvt_md_d: 'Терапия только при задержке УЗИ > 4 часов.',
  r_dvt_hi: 'Высокая вероятность ТГВ.', a_dvt_hi: '• Срочное УЗИ вен нижних конечностей.', rx_dvt_hi_n: 'Эмпирическая терапия', rx_dvt_hi_d: 'Начать НОАК (Апиксабан) или НМГ (Эноксапарин).',
  dvt_info_title: 'Анализ: ТГВ Уэллса',
  dvt_info_p1: 'Обзор: Правило помогает оценить вероятность ТГВ до назначения дорогостоящего УЗИ или опасных антикоагулянтов.',
  dvt_info_p2: 'Жемчужины: Критерий "Альтернативный диагноз" требует клинического мышления (исключите целлюлит, разрыв кисты Бейкера).',
  dvt_info_p3: 'Тактика: У пациентов низкого риска отрицательный D-димер исключает ТГВ. При высоком риске (≥2) D-димера недостаточно, нужно УЗИ.',
  
  r_pe_lo: 'ТЭЛА маловероятна.', a_pe_lo: '• Правило PERC или D-димер.', rx_pe_lo_n: 'Терапия не показана', rx_pe_lo_d: 'Антикоагулянты противопоказаны.',
  r_pe_md: 'Умеренная вероятность.', a_pe_md: '• D-димер.<br>• При (+) показана КТ-ангиография.', rx_pe_md_n: 'Ожидание КТ', rx_pe_md_d: 'Ждать результатов КТ, если нет критической задержки.',
  r_pe_hi: 'Высокая вероятность ТЭЛА.', a_pe_hi: '• Срочная КТ-ангиография.<br>• Госпитализация.', rx_pe_hi_n: 'Агрессивная терапия', rx_pe_hi_d: 'Немедленно начать НМГ или инфузию Гепарина в/в.',
  pe_info_title: 'Анализ: ТЭЛА Уэллса',
  pe_info_p1: 'Обзор: Стратифицирует риск ТЭЛА для предотвращения ненужной КТ-ангиографии и облучения.',
  pe_info_p2: 'Жемчужины: Тахикардия (>100) — сильный, но неспецифичный признак. Ищите признаки перегрузки правых отделов (S1Q3T3 на ЭКГ).',
  pe_info_p3: 'Тактика: При оценке >4 ТЭЛА "вероятна". Отрицательный D-димер не исключает диагноз, требуется КТ-АГ и эмпирические антикоагулянты.',
  
  r_curb_lo: 'Низкий риск смертности (< 2%).', a_curb_lo: '• Амбулаторное лечение.<br>• Контроль через 48 часов.', rx_curb_lo_n: 'Амбулаторные АБ', rx_curb_lo_d: 'Амоксициллин внутрь или Доксициклин (5-7 дней).',
  r_curb_md: 'Умеренный риск (~9%).', a_curb_md: '• Госпитализация в терапию.<br>• Посев крови/мокроты.', rx_curb_md_n: 'В/в АБТ', rx_curb_md_d: 'Амоксициллин/Клавуланат в/в + Кларитромицин.',
  r_curb_hi: 'Тяжелая пневмония.', a_curb_hi: '• Срочная госпитализация (ОРИТ).<br>• Готовность к ИВЛ.', rx_curb_hi_n: 'АБТ широкого спектра (ОРИТ)', rx_curb_hi_d: 'Цефтриаксон в/в ПЛЮС Макролид. Добавить защиту от MRSA.',
  curb_info_title: 'Анализ: CURB-65',
  curb_info_p1: 'Обзор: Валидированная шкала Британского торакального общества для прогноза 30-дневной смертности при внебольничной пневмонии.',
  curb_info_p2: 'Жемчужины: Мочевина > 7 ммоль/л отражает обезвоживание и гипоперфузию почек при сепсисе.',
  curb_info_p3: 'Тактика: 0-1 балл: амбулаторно. 2 балла: отделение терапии. 3+ балла: тяжелая пневмония (смертность до 40%), рассмотреть ОРИТ.',

  r_chads_lo: 'Низкий риск инсульта.', a_chads_lo: '• Оценка риска кровотечений (HAS-BLED).', rx_chads_lo_n: 'Терапия не нужна', rx_chads_lo_d: 'Антитромботическая терапия не рекомендована.',
  r_chads_md: 'Промежуточный риск.', a_chads_md: '• Индивидуальное решение совместно с пациентом.', rx_chads_md_n: 'Рассмотреть НОАК', rx_chads_md_d: 'Оценка пользы/риска.',
  r_chads_hi: 'Высокий риск инсульта.', a_chads_hi: '• Строгое показание к антикоагулянтам.', rx_chads_hi_n: 'Пожизненная терапия', rx_chads_hi_d: 'НОАК (Апиксабан/Ривароксабан) предпочтительнее Варфарина.',
  chads_info_title: 'Анализ: CHA₂DS₂-VASc',
  chads_info_p1: 'Обзор: Рекомендованная шкала AHA/ESC для оценки годового риска ишемического инсульта при неклапанной фибрилляции предсердий.',
  chads_info_p2: 'Жемчужины: "Неклапанная" означает отсутствие выраженного митрального стеноза или механического клапана.',
  chads_info_p3: 'Тактика: Оценка ≥2 (мужчины) или ≥3 (женщины) — абсолютное показание для НОАК.',

  r_cp_a: 'Класс A: Компенсация.', a_cp_a: '• Плановое наблюдение гепатолога.<br>• Скрининг варикоза вен пищевода.', rx_cp_a_n: 'Стандартный уход', rx_cp_a_d: 'Избегать гепатотоксичных лекарств.',
  r_cp_b: 'Класс B: Значительное нарушение.', a_cp_b: '• Формальная оценка гепатолога.<br>• Высокий хирургический риск.', rx_cp_b_n: 'Симптоматическое лечение', rx_cp_b_d: 'Бета-блокаторы для портальной гипертензии.',
  r_cp_c: 'Класс C: Декомпенсация.', a_cp_c: '• Срочная оценка на трансплантацию.<br>• Мониторинг перитонита.', rx_cp_c_n: 'Лечение осложнений', rx_cp_c_d: 'Спиронолактон при асците. Лактулоза при энцефалопатии.',
  cp_info_title: 'Анализ: Чайлд-Пью',
  cp_info_p1: 'Обзор: Классическая модель для оценки 1- и 2-летней выживаемости при циррозе и риска хирургического вмешательства.',
  cp_info_p2: 'Жемчужины: Субъективные критерии (асцит, энцефалопатия) могут быть временно улучшены мочегонными или лактулозой.',
  cp_info_p3: 'Тактика: Класс А дает выживаемость ~100%. Класс С означает терминальную стадию (выживаемость ~45%) и требует трансплантации.',

  r_bmi_un: 'Дефицит веса (< 18.5).', a_bmi_un: '• Оценка питания.<br>• Исключить онкологию/гипертиреоз.', rx_bmi_un_n: 'Нутритивная поддержка', rx_bmi_un_d: 'Высококалорийное питание.',
  r_bmi_no: 'Нормальный вес.', a_bmi_no: '• Здоровый образ жизни.<br>• Ежегодный скрининг.', rx_bmi_no_n: 'Профилактика', rx_bmi_no_d: 'Лекарства не требуются.',
  r_bmi_ov: 'Избыточный вес.', a_bmi_ov: '• Снижение веса на 5-10%.<br>• Скрининг на диабет.', rx_bmi_ov_n: 'Оптимизация', rx_bmi_ov_d: 'Диета и спорт. Фармакотерапия редко показана.',
  r_bmi_ob1: 'Ожирение I.', a_bmi_ob1: '• Интенсивное изменение образа жизни.', rx_bmi_ob1_n: 'Фармакотерапия', rx_bmi_ob1_d: 'Агонисты ГПП-1 (Семаглутид) при наличии патологий.',
  r_bmi_ob2: 'Ожирение II+.', a_bmi_ob2: '• Высокий сердечный риск.<br>• Оценка бариатрической хирургии.', rx_bmi_ob2_n: 'Агрессивная терапия', rx_bmi_ob2_d: 'Максимальная мед. терапия, затем хирургическое вмешательство.',
  bmi_info_title: 'Анализ: Индекс массы тела',
  bmi_info_p1: 'Обзор: Стандарт ВОЗ для отслеживания антропометрических данных и базовой оценки кардиометаболического риска.',
  bmi_info_p2: 'Жемчужины: ИМТ не различает мышечную массу и жир. Может не выявить опасное висцеральное ожирение при нормальном весе.',
  bmi_info_p3: 'Тактика: У азиатских популяций более высокие риски при низком ИМТ (Избыточный вес начинается с 23, Ожирение с 25).',

  r_egfr_no: 'Нормальная функция (≥ 60).', a_egfr_no: '• Рутинный контроль.<br>• Контроль АД и глюкозы.', rx_egfr_no_n: 'Стандарт', rx_egfr_no_d: 'Ингибиторы АПФ при протеинурии.',
  r_egfr_md: 'Умеренная ХБП (30-59).', a_egfr_md: '• Коррекция доз препаратов.<br>• Консультация нефролога при падении СКФ.', rx_egfr_md_n: 'Снижение доз', rx_egfr_md_d: 'Уменьшить дозу НОАК, Метформина. Избегать НПВС.',
  r_egfr_se: 'Тяжелая ХБП (< 30).', a_egfr_se: '• Срочная консультация нефролога.<br>• Подготовка к диализу (ЗПТ).', rx_egfr_se_n: 'Нефропротекция', rx_egfr_se_d: 'Отменить Метформин. Строгий контроль калия.',
  egfr_info_title: 'Анализ: рСКФ (CKD-EPI)',
  egfr_info_p1: 'Обзор: Формула CKD-EPI 2021 года устраняет расовый коэффициент, обеспечивая наиболее точное отражение истинной СКФ.',
  egfr_info_p2: 'Жемчужины: Формула неточна при остром повреждении почек (ОПП), у пациентов с ампутациями и при выраженной кахексии.',
  egfr_info_p3: 'Тактика: рСКФ < 60 мл/мин более 3 месяцев подтверждает Хроническую Болезнь Почек. Обязательна коррекция доз антибиотиков и НОАК.',

  r_mews_lo: 'Стабильно.', a_mews_lo: '• Рутинное наблюдение.', rx_mews_lo_n: 'Нет эскалации', rx_mews_lo_d: 'Текущий план лечения.',
  r_mews_md: 'Возможная нестабильность.', a_mews_md: '• Участить мониторинг.<br>• Вызов врача в течение 30 минут.', rx_mews_md_n: 'Целевая поддержка', rx_mews_md_d: 'Кислород до SpO2 >94%. Жидкость при гипотензии.',
  r_mews_hi: 'Критическое ухудшение.', a_mews_hi: '• Немедленный осмотр.<br>• Вызов реаниматологов.', rx_mews_hi_n: 'Реанимация', rx_mews_hi_d: 'Агрессивная инфузия. Готовность к интубации.',
  mews_info_title: 'Анализ: Шкала MEWS',
  mews_info_p1: 'Обзор: Физиологическая "track-and-trigger" система для выявления пациентов с риском катастрофического ухудшения до остановки сердца.',
  mews_info_p2: 'Жемчужины: Тахипноэ (учащенное дыхание) — самый ранний и чувствительный признак системного стресса или ацидоза.',
  mews_info_p3: 'Тактика: Оценка ≥ 5 баллов требует немедленного вызова реанимационной бригады и подготовки к переводу в ОРИТ.',

  r_centor_lo: 'Стрептококк маловероятен.', a_centor_lo: '• Симптоматическое лечение.<br>• Мазок не нужен.', rx_centor_lo_n: 'Без антибиотиков', rx_centor_lo_d: 'Парацетамол/Ибупрофен.',
  r_centor_md: 'Возможен стрептококк.', a_centor_md: '• Выполнить экспресс-тест (RADT).', rx_centor_md_n: 'Ждать результатов', rx_centor_md_d: 'Лечить только при (+) тесте.',
  r_centor_hi: 'Стрептококк высоко вероятен.', a_centor_hi: '• Эмпирические антибиотики оправданы.', rx_centor_hi_n: 'АБТ', rx_centor_hi_d: 'Пенициллин V 500 мг 4 р/д (10 дней).',
  centor_info_title: 'Анализ: Критерии Центора',
  centor_info_p1: 'Обзор: Модифицированные критерии Центора оценивают вероятность инфекции бета-гемолитическим стрептококком группы А (БГСА).',
  centor_info_p2: 'Жемчужины: Главная польза шкалы — отрицательная прогностическая ценность (чтобы ИСКЛЮЧИТЬ стрептококк и не давать антибиотики).',
  centor_info_p3: 'Тактика: 0-1 балл: без тестов и АБТ. 2-3 балла: экспресс-тест. 4-5 баллов: оправдано назначение Амоксициллина для профилактики ревматизма.',

  r_nihss_mi: 'Легкий инсульт (1-4).', a_nihss_mi: '• Госпитализация в инсультное отделение.', rx_nihss_mi_n: 'Антиагреганты', rx_nihss_mi_d: 'Аспирин 300 мг.',
  r_nihss_mo: 'Средний инсульт (5-15).', a_nihss_mo: '• Оценка для в/в тромболизиса.<br>• КТ-АГ.', rx_nihss_mo_n: 'Реперфузия', rx_nihss_mo_d: 'Алтеплаза (0.9 мг/кг) если < 4.5 часов.',
  r_nihss_ms: 'Средне-тяжелый (16-20).', a_nihss_ms: '• Подготовка к тромбэктомии.', rx_nihss_ms_n: 'Комбинация', rx_nihss_ms_d: 'Тромболизис + Тромбэктомия.',
  r_nihss_se: 'Крайне тяжелый (> 20).', a_nihss_se: '• Риск отека мозга.<br>• Декомпрессивная краниэктомия.', rx_nihss_se_n: 'ОРИТ', rx_nihss_se_d: 'Жесткий контроль АД.',
  nihss_info_title: 'Анализ: Шкала NIHSS',
  nihss_info_p1: 'Обзор: Международный золотой стандарт (15 пунктов) для количественной оценки неврологического дефицита при остром инсульте.',
  nihss_info_p2: 'Жемчужины: Шкала предвзята к переднему кровообращению (СМА). При инсультах в стволе мозга или мозжечке баллы могут быть искусственно занижены.',
  nihss_info_p3: 'Тактика: Основной показатель для решения вопроса о внутривенном тромболизисе и эндоваскулярной тромбэктомии.',

  r_sofa_lo: 'Низкий риск смертности.', a_sofa_lo: '• Найти источник инфекции.', rx_sofa_lo_n: 'Антибиотики', rx_sofa_lo_d: 'По локальным протоколам.',
  r_sofa_md: 'Органная дисфункция (Сепсис).', a_sofa_md: '• Протокол "Sepsis Six".', rx_sofa_md_n: 'Реанимация', rx_sofa_md_d: 'Инфузия 30 мл/кг. Широкий спектр АБ в/в.',
  r_sofa_hi: 'Септический шок.', a_sofa_hi: '• Обязательно ОРИТ.<br>• ЦВК.', rx_sofa_hi_n: 'Вазопрессоры', rx_sofa_hi_d: 'Норадреналин (целевое САД > 65).',
  sofa_info_title: 'Анализ: Шкала SOFA',
  sofa_info_p1: 'Обзор: Фундамент диагностических критериев Sepsis-3. Оценивает полиорганную недостаточность в условиях ОРИТ.',
  sofa_info_p2: 'Жемчужины: В отличие от быстрой шкалы qSOFA, полная шкала SOFA требует развернутых лабораторных данных (билирубин, тромбоциты, газы крови).',
  sofa_info_p3: 'Тактика: Острое повышение баллов SOFA на ≥ 2 от базового уровня подтверждает диагноз Сепсис (смертность минимум 10%).',

  r_ranson_lo: 'Легкий панкреатит.', a_ranson_lo: '• Общая палата.<br>• Раннее питание.', rx_ranson_lo_n: 'Поддержка', rx_ranson_lo_d: 'Инфузии. Опиоиды для обезболивания.',
  r_ranson_md: 'Средне-тяжелый.', a_ranson_md: '• ОРИТ.<br>• Агрессивная инфузия.', rx_ranson_md_n: 'Агрессивная терапия', rx_ranson_md_d: 'Раствор Рингера/Хартмана 250-500 мл/ч.',
  r_ranson_hi: 'Высокая смертность.', a_ranson_hi: '• Мониторинг АРДС и некроза.', rx_ranson_hi_n: 'ОРИТ', rx_ranson_hi_d: 'АБ только при инфицированном некрозе.',
  ranson_info_title: 'Анализ: Критерии Рэнсона',
  ranson_info_p1: 'Обзор: Оригинальная модель 1974 года для прогноза тяжести и смертности при остром панкреатите.',
  ranson_info_p2: 'Жемчужины: Оценка занимает 48 часов. Массивная секвестрация жидкости (>6 л) и гипокальциемия отражают тяжелый ретроперитонеальный некроз.',
  ranson_info_p3: 'Тактика: Оценка ≥ 3 баллов указывает на тяжелый панкреатит. Требуется массивная инфузионная терапия под контролем диуреза.',

  r_psi_1: 'Класс I (Низкий).', a_psi_1: '• Амбулаторное лечение.', rx_psi_1_n: 'Пероральные АБ', rx_psi_1_d: 'Макролид или Доксициклин.',
  r_psi_2: 'Класс II (Низкий).', a_psi_2: '• Амбулаторное лечение.', rx_psi_2_n: 'Пероральные АБ', rx_psi_2_d: 'Амоксициллин.',
  r_psi_3: 'Класс III (Средний).', a_psi_3: '• Краткосрочная госпитализация.', rx_psi_3_n: 'Короткий курс', rx_psi_3_d: 'В/в или внутрь Фторхинолон.',
  r_psi_4: 'Класс IV (Высокий).', a_psi_4: '• Обязательная госпитализация.', rx_psi_4_n: 'В/в АБТ', rx_psi_4_d: 'Цефтриаксон + Азитромицин.',
  r_psi_5: 'Класс V (Критический).', a_psi_5: '• Госпитализация в ОРИТ.', rx_psi_5_n: 'Широкий спектр (ОРИТ)', rx_psi_5_d: 'Бета-лактам + Макролид в/в.' ,
  psi_info_title: 'Анализ: Шкала PSI/PORT',
  psi_info_p1: 'Обзор: Комплексное правило с поправкой на возраст для расчета 30-дневной смертности при внебольничной пневмонии.',
  psi_info_p2: 'Жемчужины: Хотя она сложнее CURB-65 (требует 20 переменных, включая газы крови), PSI статистически точнее выявляет пациентов низкого риска для безопасной выписки.',
  psi_info_p3: 'Тактика: Классы I-II могут лечиться амбулаторно. Класс III — наблюдение. Классы IV-V (смертность до 27%) абсолютно требуют госпитализации в стационар или ОРИТ.'
},

uz:{
  // --- UI & LEGAL (Uzbek) ---
  badge: 'KLINIK VOSITALAR', h1a: 'Ward', h1b: 'Calc', sub: 'Kundalik amaliyot uchun isbotlarga asoslangan tibbiy kalkulyatorlar.', badge_stu: 'TIBBIYOT TALABASI TOMONIDAN YARATILGAN', h1_main: 'Klinik vositalar', h1_sub: 'palata aylanmalari uchun', search_ph: 'Qidiruv (masalan, GCS, BMI)...', alert_msg: 'Iltimos, barcha maydonlarni to\'ldiring.', btn: 'Hisoblash', tab_i: 'Talqin', tab_a: 'Harakat Rejasi', tab_d: 'Davolash (Rx)', yes: 'Ha', no: 'Yo\'q', YES: 'Ha', NO: 'Yo\'q',
  sp_neuro: 'Nevrologiya', sp_ped: 'Pediatriya', sp_gen: 'Umumiy', sp_resp: 'Nafas tizimi', sp_cardio: 'Kardiologiya', sp_gastro: 'Gastroenterologiya', sp_id: 'Yuqumli kasal.', sev_lo: 'PAST XAVF', sev_md: 'O’RTACHA XAVF', sev_hi: 'YUQORI XAVF', mnem_all: 'Mnemonika / Yodlash',
  
  ft_about: 'Biz haqimizda', ft_contact: 'Aloqa', ft_disc: 'Rad etish', ft_terms: 'Shartlar', ft_privacy: 'Maxfiylik', ft_rights: '© 2026 WardCalc. Barcha huquqlar himoyalangan.',
  nav_about: 'WardCalc haqida', about_p1: 'WardCalc - bu Buxoro davlat tibbiyot instituti bitiruvchi talabasi Muhammad Sabir Ali tomonidan ishlab chiqilgan kompleks klinik qarorlarni qabul qilishni qo\'llab-quvvatlash tizimi.', about_h2: 'Bizning maqsadimiz', about_p2: 'Tibbiy ball tizimlarini intuitiv interfeysga aylantirish, shifokorlarga xavfsizroq va standartlashtirilgan qarorlar qabul qilish imkonini berishdir.', about_h3: 'Ta\'lim maqsadi', about_p3: 'U rasmiy klinik xulosani almashtirish uchun emas, yordam berish uchun mo\'ljallangan.',
  nav_contact: 'Aloqa va Qo\'llab-quvvatlash', contact_p1: 'Biz doimiy takomillashtirish tarafdorimiz. Agar sizda klinik mulohazalar yoki texnik muammolar bo\'lsa, biz bilan bog\'laning.', contact_p2: 'GitHub orqali murojaat qiling. Barcha xabarlar ko\'rib chiqiladi.',
  nav_disc: 'Rad etish', disc_p1: 'Taqdim etilgan tavsiyalar faqat ta\'lim maqsadida bo\'lib, rasmiy tibbiy bayonnoma hisoblanmaydi.', disc_p2: 'Shifokorlar o\'zlarining mustaqil klinik xulosalariga tayanishlari shart. Muhammad Sabir Ali ushbu dastur natijalariga asoslangan qarorlar uchun javobgar emas.',
  nav_terms: 'Foydalanish shartlari', terms_p1: 'Ushbu xizmat hech qanday kafolatsiz taqdim etiladi.', terms_p2: 'Hisob-kitoblar aniqligini tekshirish foydalanuvchi javobgarligida.',
  nav_privacy: 'Maxfiylik siyosati', privacy_p1: 'WardCalc to\'liq mijoz tomonida (lokal ravishda brauzeringizda) ishlaydi.', privacy_p2: 'Biz bemorni identifikatsiya qiluvchi hech qanday ma\'lumotlarni yig\'maymiz.',

  // --- EXPERT CLINICAL TEXT (Uzbek) ---
  r_gcs_mi: 'Yengil bosh jarohati (GCS 13-15).', a_gcs_mi: '• To\'liq nevrologik tekshiruv.<br>• Har 30-60 daqiqada muntazam neyro-kuzatuv.', rx_gcs_mi_n: 'Simptomatik Terapiya', rx_gcs_mi_d: 'Analgeziya (Paratsetamol). Sedativ opioidlar tavsiya etilmaydi.',
  r_gcs_mo: 'O\'rtacha og\'irlikdagi bosh jarohati (GCS 9-12).', a_gcs_mo: '• Zudlik bilan bosh miya KTsi.<br>• Neyrojarrohning shoshilinch konsultatsiyasi.', rx_gcs_mo_n: 'Neyroprotektsiya', rx_gcs_mo_d: 'Levetiratsetam (500 mg v/i) qo\'llashni ko\'rib chiqish.',
  r_gcs_se: 'Og\'ir bosh jarohati (GCS ≤ 8). Miya dislokatsiyasi xavfi.', a_gcs_se: '• ZUDLIK BILAN nafas yo\'llarini himoyalash (Traxeya intubatsiyasi).<br>• Neyroreanimatsiyaga (ORIT) yotqizish.', rx_gcs_se_n: 'ICP va Sedatsiya', rx_gcs_se_d: 'Induksiya uchun Propofol/Ketamin. Dislokatsiya belgilarida: Mannitol 20%.',
  gcs_info_title: 'Tahlil: Glazgo shkalasi (GCS)',
  gcs_info_p1: 'Umumiy ma\'lumot: 1974 yilda ishlab chiqilgan Glazgo Koma Shkalasi bosh miya jarohati va tizimli kasalliklarda ong darajasini standartlashtirilgan tarzda baholaydi.',
  gcs_info_p2: 'Klinik injular: Harakat balli umumiy prognozning eng ishonchli ko\'rsatkichidir. Agar javoblar assimetrik bo\'lsa (masalan, gemiparez tufayli), har doim ENG YAXSHI javob beradigan tomonni baholang. Agar ko\'zlar shish tufayli ochilmasa, "NT" (Tekshirib bo\'lmaydi) deb yozing.',
  gcs_info_p3: 'Keyingi qadamlar: GCS 8 yoki undan past bo\'lishi koma holatini anglatadi. Bu bemorning nafas yo\'llarini mustaqil himoya qila olmasligini ko\'rsatadi va zudlik bilan intubatsiyani talab qiladi.',
  
  r_apgar_no: 'Normal holat (7-10).', a_apgar_no: '• Doimiy tug\'ruqdan keyingi parvarish.<br>• Ona bilan kontakt.', rx_apgar_no_n: 'Profilaktika', rx_apgar_no_d: 'Vitamin K 1 mg.',
  r_apgar_mo: 'O\'rtacha asfiksiya (4-6).', a_apgar_mo: '• Taktil stimulyatsiya.<br>• Kislorod berish.', rx_apgar_mo_n: 'Oksigenoterapiya', rx_apgar_mo_d: 'Saturatsiyaga qarab kislorod.',
  r_apgar_cr: 'Og\'ir asfiksiya (0-3).', a_apgar_cr: '• Zudlik bilan reanimatsiya.<br>• IVL (niqob orqali).', rx_apgar_cr_n: 'Reanimatsiya', rx_apgar_cr_d: 'Puls < 60 bo\'lsa v/i Epinefrin.',
  apgar_info_title: 'Tahlil: Apgar shkalasi',
  apgar_info_p1: 'Umumiy ma\'lumot: 1-daqiqadagi ball chaqaloqning tug\'ruq jarayoniga qanday toqat qilganini aks ettiradi, 5-daqiqadagi ball esa ekstrauterin moslashuvni baholaydi.',
  apgar_info_p2: 'Klinik injular: 5 ta mezon teng ahamiyatga ega emas. Yurak urishi va nafas olish omon qolish uchun eng muhimdir, teri rangi (akrotsianoz) esa eng kam ishonchli hisoblanadi.',
  apgar_info_p3: 'Ko\'rsatmalar: 5-daqiqada ≤ 3 ball nevrologik shikastlanish xavfining oshishi bilan bog\'liq va faol neonatal reanimatsiyani talab qiladi.',
  
  r_dvt_lo: 'TVT ehtimoli past.', a_dvt_lo: '• D-Dimer tekshiruvi.<br>• Manfiy bo\'lsa TVT istisno qilinadi.', rx_dvt_lo_n: 'Antikoagulyantlar kerak emas', rx_dvt_lo_d: 'Empirik terapiya shart emas.',
  r_dvt_md: 'O\'rtacha xavf.', a_dvt_md: '• D-Dimer musbat bo\'lsa UTT qilinadi.', rx_dvt_md_n: 'Kuzatuv', rx_dvt_md_d: 'UTT 4 soatdan ortiq kechiksa terapiyani boshlash.',
  r_dvt_hi: 'TVT ehtimoli yuqori.', a_dvt_hi: '• Zudlik bilan oyoq venalari UTTsi.', rx_dvt_hi_n: 'Empirik Terapiya', rx_dvt_hi_d: 'Kechiksa NOAK (Apiksaban) yoki Enoksaparin boshlang.',
  dvt_info_title: 'Tahlil: Wells TVT',
  dvt_info_p1: 'Umumiy ma\'lumot: Qimmatbaho vizualizatsiya yoki xavfli antikoagulyatsiyani boshlashdan oldin Chuqur Vena Trombozi ehtimolini taxmin qilish uchun tasdiqlangan qoida.',
  dvt_info_p2: 'Klinik injular: "Boshqa tashxis ehtimoli" mezoni kuchli klinik fikrlashni talab qiladi. Sellulit, Baker kistasining yorilishi, yoki yurak yetishmovchiligini istisno qiling.',
  dvt_info_p3: 'Keyingi qadamlar: Yuqori xavfli bemorlarda (≥2) D-dimerning o\'zi yetarli emas; to\'g\'ridan-to\'g\'ri proksimal kompressiyali ultratovush tekshiruviga o\'ting.',
  
  r_pe_lo: 'O\'ATE ehtimoli past.', a_pe_lo: '• D-Dimer orqali istisno qilish.', rx_pe_lo_n: 'Terapiya kerak emas', rx_pe_lo_d: 'Antikoagulyantlar qarshi ko\'rsatilgan.',
  r_pe_md: 'O\'rtacha xavf.', a_pe_md: '• Musbat D-Dimer bo\'lsa KT-AG.', rx_pe_md_n: 'Kutish', rx_pe_md_d: 'KT natijasini kuting.',
  r_pe_hi: 'O\'ATE ehtimoli yuqori.', a_pe_hi: '• Zudlik bilan KT-AG.<br>• Reanimatsiyaga yotqizish.', rx_pe_hi_n: 'Agressiv Terapiya', rx_pe_hi_d: 'Geparin yoki Enoksaparin zudlik bilan boshlanadi.',
  pe_info_title: 'Tahlil: Wells O\'ATE',
  pe_info_p1: 'Umumiy ma\'lumot: Keraksiz KT-angiografiya (KTPA) va uning nurlanish/kontrast nefropatiyasi xavfini oldini olish uchun O\'pka Arteriyasi Tromboemboliyasi xavfini baholaydi.',
  pe_info_p2: 'Klinik injular: Taxikardiya (>100 bpm) kuchli, ammo nospetsifik prediktordir. EKG da S1Q3T3 belgilariga e\'tibor bering.',
  pe_info_p3: 'Keyingi qadamlar: Agar baho >4 bo\'lsa, D-Dimer testini BUYURMANG; u O\'ATE ni xavfsiz inkor eta olmaydi. Darhol KTPA ga o\'ting va empirik antikoagulyatsiya boshlang.',
  
  r_curb_lo: 'O\'lim xavfi past (< 2%).', a_curb_lo: '• Uyda davolanish.<br>• 48 soatdan keyin nazorat.', rx_curb_lo_n: 'Ambulator Antibiotiklar', rx_curb_lo_d: 'Amoksitsillin yoki Doksitsiklin (5-7 kun).',
  r_curb_md: 'O\'rtacha xavf (~9%).', a_curb_md: '• Terapiya bo\'limiga yotqizish.<br>• Qon va balg\'am ekmasi.', rx_curb_md_n: 'Statsionar Terapiya', rx_curb_md_d: 'Vena ichiga Amoksitsillin/Klavulanat + peroral Klaritromitsin.',
  r_curb_hi: 'Og\'ir pnevmoniya.', a_curb_hi: '• Majburiy gospitalizatsiya (ORIT).<br>• IVL ga tayyorgarlik.', rx_curb_hi_n: 'Keng Spektrli Terapiya (ORIT)', rx_curb_hi_d: 'V/i Seftriakson 2g + Makrolid. MRSA ni hisobga olish.',
  curb_info_title: 'Tahlil: CURB-65',
  curb_info_p1: 'Umumiy ma\'lumot: Britaniya Torakal Jamiyati tomonidan kasalxonadan tashqari pnevmoniyada 30 kunlik o\'lim xavfini aniq bashorat qilish uchun tasdiqlangan.',
  curb_info_p2: 'Klinik injular: Mochevina > 7 mmol/L sepsisga ikkilamchi bo\'lgan degidratatsiya va yomon buyrak perfuziyasini aks ettiradi. "Ong chalkashligi" AMTS ≤ 8 deb rasman ta\'riflanadi.',
  curb_info_p3: 'Keyingi qadamlar: 0-1 ball uyda xavfsiz davolanishni anglatadi. 2 ball palataga yotqizishni talab qiladi. 3+ ball og\'ir pnevmoniyani (o\'lim darajasi 40% gacha) bildiradi va ORIT ni talab qiladi.',

  r_chads_lo: 'Past xavf.', a_chads_lo: '• Turmush tarzini o\'zgartirish.', rx_chads_lo_n: 'Dori kerak emas', rx_chads_lo_d: 'Antitrombotik dori tavsiya etilmaydi.',
  r_chads_md: 'O\'rtacha xavf.', a_chads_md: '• Qon ketish xavfini hisobga olgan holda davolash.', rx_chads_md_n: 'NOAK tavsiya etiladi', rx_chads_md_d: 'Bemor bilan muhokama qilish.',
  r_chads_hi: 'Insult xavfi yuqori.', a_chads_hi: '• Tizimli antikoagulyatsiya uchun qat\'iy ko\'rsatma.', rx_chads_hi_n: 'Uzoq muddatli Terapiya', rx_chads_hi_d: 'Apiksaban 5mg yoki Rivaroksaban 20mg.',
  chads_info_title: 'Tahlil: CHA₂DS₂-VASc',
  chads_info_p1: 'Umumiy ma\'lumot: AHA/ACC/ESC tomonidan tavsiya etilgan, no-klapanli bo\'lmachalar fibrillyatsiyasi bo\'lgan bemorlarda ishemik insultning yillik xavfini hisoblash tizimi.',
  chads_info_p2: 'Klinik injular: "No-klapanli" o\'rtacha-og\'ir mitrali stenoz yoki mexanik yurak klapani yo\'qligini anglatadi. Qon ketish xavfini o\'lchash uchun har doim HAS-BLED shkalasini ham hisoblang.',
  chads_info_p3: 'Ko\'rsatmalar: Erkaklarda ≥2 yoki ayollarda ≥3 ball umrbod peroral antikoagulyatsiya uchun qat\'iy ko\'rsatma bo\'lib, xavfsizlik profili tufayli NOAKlar Varfarindan afzal ko\'riladi.',

  r_cp_a: 'A sinf: Kompensatsiyalangan.', a_cp_a: '• Gepatolog kuzatuvi.<br>• Qizilo\'ngach venalarini tekshirish.', rx_cp_a_n: 'Standart', rx_cp_a_d: 'Gepatotoksik dorilardan saqlaning.',
  r_cp_b: 'B sinf: O\'rtacha.', a_cp_b: '• Jarrohlik xavfi yuqori.', rx_cp_b_n: 'Maqsadli Davolash', rx_cp_b_d: 'Portal gipertenziya uchun Propranolol.',
  r_cp_c: 'C sinf: Dekompensatsiyalangan.', a_cp_c: '• Zudlik bilan transplantatsiya markaziga.', rx_cp_c_n: 'Asoratlarni Davolash', rx_cp_c_d: 'Assit uchun Spironolakton. Ensefalopatiya uchun Laktuloza.',
  cp_info_title: 'Tahlil: Child-Pugh shkalasi',
  cp_info_p1: 'Umumiy ma\'lumot: Sirroz bilan kasallangan bemorlarda 1 va 2 yillik omon qolishni baholash hamda perioperativ o\'lim xavfini aniqlash uchun klassik prognostik model.',
  cp_info_p2: 'Klinik injular: Subyektiv mezonlar (assit va ensefalopatiya) so\'nggi tibbiy aralashuvlar (masalan, kuchli diurez yoki laktuloza terapiyasi) tufayli sun\'iy ravishda o\'zgarishi mumkin.',
  cp_info_p3: 'Keyingi qadamlar: A sinf ~100% 1 yillik omon qolishni ta\'minlaydi. C sinf esa terminal bosqichdagi dekompensatsiyani bildiradi (~45% 1 yillik omon qolish) va jigar transplantatsiyasini talab qiladi.',

  r_bmi_un: 'Vazn yetishmovchiligi.', a_bmi_un: '• Diyetolog konsultatsiyasi.', rx_bmi_un_n: 'Qo\'shimcha oziqlanish', rx_bmi_un_d: 'Yuqori kaloriyali parhez.',
  r_bmi_no: 'Normal vazn.', a_bmi_no: '• Sog\'lom turmush tarzi.', rx_bmi_no_n: 'Profilaktika', rx_bmi_no_d: 'Hech qanday dori kerak emas.',
  r_bmi_ov: 'Ortiqcha vazn.', a_bmi_ov: '• 5-10% vazn yo\'qotish tavsiya etiladi.', rx_bmi_ov_n: 'Turmush Tarzi', rx_bmi_ov_d: 'Muntazam jismoniy mashqlar.',
  r_bmi_ob1: 'I darajali semizlik.', a_bmi_ob1: '• Yondosh kasalliklarni tekshirish.', rx_bmi_ob1_n: 'Farmakoterapiya', rx_bmi_ob1_d: 'Semaglutid kabi GLP-1 agonistlari.',
  r_bmi_ob2: 'II+ darajali semizlik.', a_bmi_ob2: '• Bariatrik jarrohlik konsultatsiyasi.', rx_bmi_ob2_n: 'Jarrohlik', rx_bmi_ob2_d: 'Maksimal tibbiy terapiya qilib ko\'rish.',
  bmi_info_title: 'Tahlil: Tana Vazni Indeksi (TVI)',
  bmi_info_p1: 'Umumiy ma\'lumot: Antropometrik kuzatuv uchun Jahon Sog\'liqni Saqlash Tashkiloti (JSST) standarti bo\'lib, kardiovaskulyar va metabolik xavf uchun asosiy o\'lchovni beradi.',
  bmi_info_p2: 'Klinik injular: TVI mushak massasi va yog\' to\'qimasini farqlamaydi. Shuningdek, u "normal vaznli semizlik"dagi xavfli visseral yog\'lanishni aniqlay olmasligi mumkin.',
  bmi_info_p3: 'Keyingi qadamlar: Osiyo populyatsiyalarida pastroq TVI darajalarida ham kardiometabolik xavflar yuqori bo\'ladi; JSST qoidalariga ko\'ra ularda "Ortiqcha vazn" ≥23 dan va "Semizlik" ≥25 dan boshlanadi.',

  r_egfr_no: 'Normal eGFR (≥ 60).', a_egfr_no: '• Muntazam monitoring.', rx_egfr_no_n: 'Standart', rx_egfr_no_d: 'Proteinuriya bo\'lsa AAF inhibitori.',
  r_egfr_md: 'O\'rtacha SBK (30 - 59).', a_egfr_md: '• Dori dozalarini kamaytirish.', rx_egfr_md_n: 'Dozalarni to\'g\'rilash', rx_egfr_md_d: 'Metformin va NOAK dozasini pasaytirish.',
  r_egfr_se: 'Og\'ir SBK (< 30).', a_egfr_se: '• Nefrologga yuborish.<br>• Dializga tayyorgarlik.', rx_egfr_se_n: 'Nefro-himoya', rx_egfr_se_d: 'Metforminni to\'xtatish. Kaliy nazorati.',
  egfr_info_title: 'Tahlil: eGFR (CKD-EPI)',
  egfr_info_p1: 'Umumiy ma\'lumot: 2021 yilgi CKD-EPI tenglamasi bahsli irqiy koeffitsientni olib tashlab, haqiqiy Glomerulyar Filtratsiya Tezligini eng aniq aks ettiradi.',
  egfr_info_p2: 'Klinik injular: O\'tkir buyrak shikastlanishida (kreatinin barqaror bo\'lmaganda), amputatsiyaga uchragan bemorlarda, og\'ir to\'yib ovqatlanmaslik yoki ekstremal mushak massasida eGFR formulalari noaniq bo\'ladi.',
  egfr_info_p3: 'Ko\'rsatmalar: 3 oydan ko\'proq vaqt davomida eGFR <60 ml/min bo\'lishi Surunkali Buyrak Kasalligini (SBK) tasdiqlaydi. Buyrak orqali chiqadigan dorilarni yozishdan oldin eGFR ni tekshirish majburiydir.',

  r_mews_lo: 'Fiziologik stabil.', a_mews_lo: '• Har 4-6 soatda kuzatuv.', rx_mews_lo_n: 'Eskalatsiya yo\'q', rx_mews_lo_d: 'Amaldagi dorilar davom ettiriladi.',
  r_mews_md: 'Ehtimoliy beqarorlik.', a_mews_md: '• 30 minut ichida shifokor ko\'rigi.', rx_mews_md_n: 'Maqsadli yordam', rx_mews_md_d: 'Kislorod berish. Gipotenziyada suyuqlik.',
  r_mews_hi: 'Kritik yomonlashuv.', a_mews_hi: '• Zudlik bilan reanimatsiya chaqirish.', rx_mews_hi_n: 'Tayyorgarlik', rx_mews_hi_d: 'Intubatsiya va vazopressorlarga tayyor bo\'lish.',
  mews_info_title: 'Tahlil: MEWS shkalasi',
  mews_info_p1: 'Umumiy ma\'lumot: Yurak to\'xtashidan bir necha soat oldin halokatli klinik yomonlashuv xavfi ostida bo\'lgan bemorlarni aniqlash uchun barcha joyda qo\'llaniladigan shkala.',
  mews_info_p2: 'Klinik injular: Taxipnoe (nafas tezlashishi) yuqori sezuvchanlikka ega va ko\'pincha tizimli stress yoki metabolik atsidozning eng birinchi ko\'rsatkichidir. Harorat yolg\'iz o\'zi eng kam prognoz ahamiyatiga ega.',
  mews_info_p3: 'Keyingi qadamlar: ≥5 ball zudlik bilan Tibbiy Tez Yordam Jamoasi (RRT) ni chaqirishni talab qiladi va ORIT ga o\'tkazish ehtimoli yuqori ekanligini bildiradi.',

  r_centor_lo: 'Strep ehtimoli past (Virusli).', a_centor_lo: '• Tomoqdan surtma shart emas.', rx_centor_lo_n: 'Simptomatik Davolash', rx_centor_lo_d: 'Ibuprofen. Antibiotik BERILMAYDI.',
  r_centor_md: 'Strep mumkin.', a_centor_md: '• Ekspress-test qilish.', rx_centor_md_n: 'Kutish', rx_centor_md_d: 'Test musbat bo\'lsa antibiotik berish.',
  r_centor_hi: 'Strep ehtimoli yuqori.', a_centor_hi: '• Empirik antibiotiklar boshlash mumkin.', rx_centor_hi_n: 'Antibiotikoterapiya', rx_centor_hi_d: 'Penitsillin V yoki Amoksitsillin 10 kun.',
  centor_info_title: 'Tahlil: Centor mezonlari',
  centor_info_p1: 'Umumiy ma\'lumot: O\'zgartirilgan Centor qoidasi faringitning A guruhi beta-gemolitik Streptokokk (GAS) tomonidan kelib chiqish ehtimolini hisoblaydi.',
  centor_info_p2: 'Klinik injular: Uning asosiy kuchi manfiy prognoz qiymatidadir — ya\'ni, Streptokokkni INKOR ETISH va keraksiz antibiotiklarni oldini olish uchun xizmat qiladi. 3 yoshgacha bo\'lgan bolalarda tasdiqlanmagan.',
  centor_info_p3: 'Ko\'rsatmalar: 0-1 ball: test va antibiotiklar kerak emas. 2-3 ball: Ekspress Strep Testini o\'tkazing. 4-5 ball: Revmatik isitmani oldini olish uchun empirik Amoksitsillin asosli.',

  r_nihss_mi: 'Yengil insult.', a_nihss_mi: '• Insult bo\'limiga yotqizish.', rx_nihss_mi_n: 'Antiagregant', rx_nihss_mi_d: 'Aspirin 300 mg.',
  r_nihss_mo: 'O\'rtacha insult.', a_nihss_mo: '• IV Trombolizisga ko\'rsatma.', rx_nihss_mo_n: 'Reperfuziya', rx_nihss_mo_d: 'Agar < 4.5 soat o\'tgan bo\'lsa Alteplaza.',
  r_nihss_ms: 'O\'rta-og\'ir insult.', a_nihss_ms: '• Trombektomiya jamoasini chaqirish.', rx_nihss_ms_n: 'Qo\'shma Terapiya', rx_nihss_ms_d: 'Trombolizis va Trombektomiya.',
  r_nihss_se: 'Og\'ir insult.', a_nihss_se: '• Miya shishi va gemorragik transformatsiya xavfi.', rx_nihss_se_n: 'ORIT', rx_nihss_se_d: 'Qon bosimini qat\'iy nazorat qilish.',
  nihss_info_title: 'Tahlil: NIHSS shkalasi',
  nihss_info_p1: 'Umumiy ma\'lumot: O\'tkir insult bilan bog\'liq nevrologik defitsitning og\'irligini tezkor baholash uchun xalqaro "oltin standart" (15 banddan iborat).',
  nihss_info_p2: 'Klinik injular: Shkala asosan oldingi qon aylanish havzasi (SMA) insultlariga moyil. Miya ustuni yoki miyachadagi (orqa) insultlarda ballar sun\'iy ravishda past chiqishi mumkin.',
  nihss_info_p3: 'Keyingi qadamlar: Tez yordam, Qabul bo\'limi va Nevrologiya o\'rtasidagi aloqani standartlashtiradi. IV Alteplaza (tPA) va Endovaskulyar Trombektomiya (EVT) uchun yaroqlilikni aniqlashda muhim ahamiyatga ega.',

  r_sofa_lo: 'Past xavf.', a_sofa_lo: '• Infeksiya o\'chog\'ini topish.', rx_sofa_lo_n: 'Antibiotiklar', rx_sofa_lo_d: 'Gumon qilingan manbaga qarab tayinlash.',
  r_sofa_md: 'A\'zolar disfunksiyasi (Sepsis).', a_sofa_md: '• Sepsis-3 tashxisi tasdiqlandi.', rx_sofa_md_n: 'Reanimatsiya', rx_sofa_md_d: 'Keng spektrli v/i antibiotiklar. Suyuqlik.',
  r_sofa_hi: 'Septik Shok.', a_sofa_hi: '• Zudlik bilan ORIT.<br>• Markaziy vena kateteri.', rx_sofa_hi_n: 'Vazopressorlar', rx_sofa_hi_d: 'Norepinefrin (Maqsadli MAP > 65).',
  sofa_info_title: 'Tahlil: SOFA shkalasi',
  sofa_info_p1: 'Umumiy ma\'lumot: Sepsis-3 diagnostika mezonlarining asosi bo\'lib, ORIT dagi o\'lim va poliorgan yetishmovchiligi darajasini kuzatib boradi.',
  sofa_info_p2: 'Klinik injular: Tezkor qSOFA dan farqli o\'laroq, to\'liq SOFA shkalasi 6 ta a\'zolar tizimidagi disfunksiyani ob\'ektivlashtirish uchun keng qamrovli laboratoriya ma\'lumotlarini (Trombotsitlar, Bilirubin, Kreatinin, ABG) talab qiladi.',
  sofa_info_p3: 'Ko\'rsatmalar: SOFA balining bazaviy darajadan ≥ 2 ballga o\'tkir ko\'tarilishi Sepsisning klinik tashxisini rasmiy ravishda tasdiqlaydi (minimal 10% o\'lim xavfi bilan).',

  r_ranson_lo: 'Yengil pankreatit.', a_ranson_lo: '• Umumiy bo\'limga yotqizish.', rx_ranson_lo_n: 'Simptomatik Terapiya', rx_ranson_lo_d: 'Suyuqliklar va Og\'riq qoldiruvchilar.',
  r_ranson_md: 'O\'rtacha-og\'ir pankreatit.', a_ranson_md: '• Agressiv infuzion terapiya.', rx_ranson_md_n: 'Agressiv Infuziya', rx_ranson_md_d: 'Ringer laktat yoki Hartman.',
  r_ranson_hi: 'Og\'ir pankreatit.', a_ranson_hi: '• Majburiy ORIT.<br>• Jarroh konsultatsiyasi.', rx_ranson_hi_n: 'ORIT', rx_ranson_hi_d: 'Antibiotiklar faqat nekroz infeksiyalansa.',
  ranson_info_title: 'Tahlil: Ranson mezonlari',
  ranson_info_p1: 'Umumiy ma\'lumot: Yallig\'lanish va metabolik markerlar asosida o\'tkir pankreatitda o\'lim va og\'irlik darajasini taxmin qilish uchun 1974 yildagi original prognostik model.',
  ranson_info_p2: 'Klinik injular: Baholash to\'liq 48 soatni talab qiladi. Massiv suyuqlik sekvestratsiyasi (>6L) va gipokalsemiya kabi markerlar kuchli retroperitoneal nekrozni aks ettiradi.',
  ranson_info_p3: 'Keyingi qadamlar: ≥3 ball og\'ir o\'tkir pankreatitni anglatadi. Zamonaviy amaliyot ORIT da kunlik dinamik kuzatuv uchun Ransonni ko\'pincha APACHE II yoki BISAP bilan birlashtiradi.',

  r_psi_1: 'I Sinf (Past xavf).', a_psi_1: '• Uyda davolanish.', rx_psi_1_n: 'Peroral Antibiotik', rx_psi_1_d: 'Makrolid yoki Doksitsiklin.',
  r_psi_2: 'II Sinf (Past xavf).', a_psi_2: '• Uyda davolanish.', rx_psi_2_n: 'Peroral Antibiotik', rx_psi_2_d: 'Amoksitsillin yoki Makrolid.',
  r_psi_3: 'III Sinf (O\'rtacha).', a_psi_3: '• Qisqa muddatli kasalxonada kuzatuv.', rx_psi_3_n: 'Qisqa muddatli V/I', rx_psi_3_d: 'Ftorxinolon yoki Beta-laktam + Makrolid.',
  r_psi_4: 'IV Sinf (Yuqori xavf).', a_psi_4: '• Kasalxonaga yotqizish.', rx_psi_4_n: 'Vena ichiga Agressiv Terapiya', rx_psi_4_d: 'Seftriakson + Azitromitsin.',
  r_psi_5: 'V Sinf (Juda Yuqori).', a_psi_5: '• Zudlik bilan Reanimatsiya (ORIT).', rx_psi_5_n: 'Keng Spektrli (ORIT)', rx_psi_5_d: 'Beta-laktam + Makrolid. MRSA ni yopish.',
  psi_info_title: 'Tahlil: PSI/PORT shkalasi',
  psi_info_p1: 'Umumiy ma\'lumot: Kasalxonadan tashqari pnevmoniya bilan kasallangan bemorlar uchun 30 kunlik o\'lim ehtimolini hisoblash uchun yoshga qarab moslashtirilgan klinik qoida.',
  psi_info_p2: 'Klinik injular: Garchi u CURB-65 dan ko\'ra ancha murakkabroq bo\'lsa ham (20 ta o\'zgaruvchini talab qiladi), PSI xavfsiz tarzda uydan javob berilishi mumkin bo\'lgan past xavfli bemorlarni aniqlashda ancha ustunroqdir.',
  psi_info_p3: 'Ko\'rsatmalar: I va II sinflarni xavfsiz ravishda uyga javob berish mumkin. III sinf klinik kuzatuvni talab qiladi. IV va V sinflar mutlaqo kasalxonaga yotqizishni (ko\'pincha ORIT) talab qiladi.'
}
};

window.t = function(key) {
    var lang = localStorage.getItem('wardcalc_lang') || 'en';
    var dict = (window.T && window.T[lang]) ? window.T[lang] : (window.T ? window.T.en : {});
    return dict[key] || (window.T.en ? window.T.en[key] : key) || key;
};
