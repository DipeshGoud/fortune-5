export interface InsurerHelpline {
  name: string;
  category: "General" | "Life";
  tollFree?: string;
  regularPhone?: string;
  seniorCitizenPhone?: string;
  roadsideAssistance?: string;
  abroadPhone?: string;
  whatsapp?: string;
  sms?: string;
  email?: string;
  website: string;
  notes?: string;
}

export interface ClaimCategoryData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  iconName: string;
  image: string;
  summaryHighlights: string[];
  keyRule: string;
  regulatoryNotice?: string;
  helplines: InsurerHelpline[];
  subsections: {
    title: string;
    description?: string;
    points: {
      headline?: string;
      text: string;
      highlight?: boolean;
    }[];
  }[];
  checklist: string[];
  rejectionReasons?: string[];
}

export const GOLDEN_RULES = [
  {
    step: "01",
    title: "Inform Insurer Immediately",
    description:
      "Call the insurer's helpline or register online through their app immediately. Always note and safely store the generated claim intimation number.",
    tag: "Immediate Intimation",
  },
  {
    step: "02",
    title: "Do Not Repair or Alter Damage",
    description:
      "Never repair, discard, or dispose of damaged parts or property until the insurer's deputed surveyor formally inspects and approves the estimate.",
    tag: "Surveyor Mandate",
  },
  {
    step: "03",
    title: "File Police Report (FIR) Promptly",
    description:
      "Mandatory for theft, burglary, and accidents involving third parties, personal injury, fatal casualties, or property damage.",
    tag: "Legal Compliance",
  },
  {
    step: "04",
    title: "Preserve Originals & Photo Evidence",
    description:
      "Photograph all damage from multiple angles before anything is shifted. Keep originals and multiple clear copies of all bills, FIRs, and medical papers.",
    tag: "Evidence Integrity",
  },
  {
    step: "05",
    title: "Policy Terms & Conditions Prevail",
    description:
      "Review your policy wording for coverage terms, deductibles, sub-limits, waiting periods, and filing deadlines — it strictly governs claim admissibility.",
    tag: "Policy Superiority",
  },
];

export const MOTOR_HELPLINES: InsurerHelpline[] = [
  {
    name: "Bajaj General Insurance",
    category: "General",
    tollFree: "1800-209-5858",
    roadsideAssistance: "1800-103-5858 (24x7)",
    whatsapp: "+91 75072 45858",
    email: "careforyou@bajajgeneral.com",
    website: "https://www.bajajgeneralinsurance.com",
  },
  {
    name: "Generali Central Insurance",
    category: "General",
    tollFree: "1800 220 233",
    regularPhone: "1860 500 3333",
    roadsideAssistance: "1800 210 1212",
    email: "gcicare@generalicentral.com",
    website: "https://www.generalicentralinsurance.com",
  },
  {
    name: "ICICI Lombard",
    category: "General",
    tollFree: "1800 2666",
    roadsideAssistance: "1800 2666",
    whatsapp: "77382 82666",
    sms: "SMS CLAIM to 575758",
    email: "customersupport@icicilombard.com",
    website: "https://www.icicilombard.com",
  },
  {
    name: "Go Digit General Insurance",
    category: "General",
    tollFree: "1800-258-5956 (24x7)",
    roadsideAssistance: "1800-258-5956",
    whatsapp: "70260 61234",
    email: "hello@godigit.com",
    website: "https://www.godigit.com",
  },
  {
    name: "HDFC ERGO",
    category: "General",
    regularPhone: "022 6158 2020",
    roadsideAssistance: "022 6158 2020",
    email: "care@hdfcergo.com",
    website: "https://www.hdfcergo.com",
  },
  {
    name: "The Oriental Insurance Co.",
    category: "General",
    tollFree: "1800-118-485",
    regularPhone: "011-3320 8485",
    roadsideAssistance: "As printed on policy schedule",
    email: "csd@orientalinsurance.co.in",
    website: "https://orientalinsurance.org.in",
  },
];

export const TRAVEL_HELPLINES: InsurerHelpline[] = [
  {
    name: "Bajaj General Insurance",
    category: "General",
    abroadPhone: "+91-124-6174720 (Missed call; team calls back)",
    tollFree: "1800-209-5858 (From India)",
    email: "careforyou@bajajgeneral.com",
    website: "https://www.bajajgeneralinsurance.com",
  },
  {
    name: "Generali Central Insurance",
    category: "General",
    abroadPhone: "As stated on your policy schedule",
    tollFree: "1800 220 233 (From India)",
    email: "travel@generalicentral.com",
    website: "https://www.generalicentralinsurance.com",
  },
  {
    name: "ICICI Lombard",
    category: "General",
    abroadPhone: "USA & Canada: +1 844 871 1200 | Rest of World: +91 124 4498778",
    tollFree: "1800 102 5721 (From India)",
    website: "https://www.icicilombard.com",
  },
  {
    name: "Go Digit General Insurance",
    category: "General",
    abroadPhone: "+91-7799022308",
    email: "travelclaims@godigit.com",
    website: "https://www.godigit.com",
  },
  {
    name: "HDFC ERGO",
    category: "General",
    abroadPhone: "0120-6740895 (Medical Emergency Cashless)",
    regularPhone: "022 6158 2020 (Other Travel Claims)",
    email: "medical.services@allianz.com / travelclaims@hdfcergo.com",
    website: "https://www.hdfcergo.com",
  },
  {
    name: "The Oriental Insurance Co.",
    category: "General",
    abroadPhone: "Assistance number on policy schedule",
    tollFree: "1800-118-485 (From India)",
    website: "https://orientalinsurance.org.in",
  },
];

export const HEALTH_HELPLINES: InsurerHelpline[] = [
  {
    name: "Bajaj General Insurance",
    category: "General",
    tollFree: "1800-103-2529 (Toll Free Health/Cashless)",
    email: "careforyou@bajajgeneral.com",
    website: "https://www.bajajgeneralinsurance.com",
  },
  {
    name: "Generali Central Insurance",
    category: "General",
    tollFree: "1800 220 233",
    regularPhone: "1860 500 3333",
    email: "gcih@generalicentral.com",
    website: "https://www.generalicentralinsurance.com",
  },
  {
    name: "ICICI Lombard",
    category: "General",
    tollFree: "1800 2666 (Toll Free)",
    email: "customersupport@icicilombard.com",
    website: "https://www.icicilombard.com",
  },
  {
    name: "Go Digit General Insurance",
    category: "General",
    tollFree: "1800-258-4242 (24x7 Toll Free Health)",
    email: "healthclaims@godigit.com",
    website: "https://www.godigit.com",
  },
  {
    name: "HDFC ERGO",
    category: "General",
    regularPhone: "022 6158 2020",
    seniorCitizenPhone: "022 6158 2026 (Senior Citizens Dedicated)",
    email: "healthclaims@hdfcergo.com / preauth@hdfcergo.com",
    website: "https://www.hdfcergo.com",
  },
  {
    name: "The Oriental Insurance Co.",
    category: "General",
    tollFree: "1800-118-485 (Toll Free, or TPA on Health Card)",
    email: "csd@orientalinsurance.co.in",
    website: "https://orientalinsurance.org.in",
    notes: "Where a TPA is named on your card, contact the TPA helpline directly first.",
  },
];

export const PERSONAL_ACCIDENT_HELPLINES: InsurerHelpline[] = [
  {
    name: "Bajaj General Insurance",
    category: "General",
    tollFree: "1800-209-5858",
    email: "careforyou@bajajgeneral.com",
    website: "https://www.bajajgeneralinsurance.com",
  },
  {
    name: "Generali Central Insurance",
    category: "General",
    tollFree: "1800 220 233",
    email: "gcih@generalicentral.com",
    website: "https://www.generalicentralinsurance.com",
  },
  {
    name: "ICICI Lombard",
    category: "General",
    tollFree: "1800 2666",
    email: "customersupport@icicilombard.com",
    website: "https://www.icicilombard.com",
  },
  {
    name: "Go Digit General Insurance",
    category: "General",
    tollFree: "1800-258-4242",
    email: "hello@godigit.com",
    website: "https://www.godigit.com",
  },
  {
    name: "HDFC ERGO",
    category: "General",
    regularPhone: "022 6158 2020",
    email: "care@hdfcergo.com",
    website: "https://www.hdfcergo.com",
  },
  {
    name: "The Oriental Insurance Co.",
    category: "General",
    tollFree: "1800-118-485",
    email: "csd@orientalinsurance.co.in",
    website: "https://orientalinsurance.org.in",
  },
];

export const LIFE_HELPLINES: InsurerHelpline[] = [
  {
    name: "HDFC Life",
    category: "Life",
    regularPhone: "022-6844 6530",
    whatsapp: 'WhatsApp "Death Claim" to 82918 90569',
    email: "claims@hdfclife.com",
    website: "https://www.hdfclife.com",
  },
  {
    name: "Bajaj Life Insurance",
    category: "Life",
    regularPhone: "020 6712 1212",
    seniorCitizenPhone: "seniorcitizen.services@bajajlife.com",
    email: "claims@bajajlife.com",
    website: "https://www.bajajlifeinsurance.com",
  },
  {
    name: "ICICI Prudential Life",
    category: "Life",
    regularPhone: "1860 266 7766",
    whatsapp: 'WhatsApp "Claim" to 99206 67766',
    email: "claimsupport@iciciprulife.com",
    website: "https://www.iciciprulife.com",
  },
  {
    name: "LIC of India",
    category: "Life",
    regularPhone: "022-6827 6827",
    email: "Servicing branch of the policy",
    website: "https://licindia.in",
    notes: "Direct contact with the policy's home servicing branch is recommended.",
  },
];

export const CLAIM_CATEGORIES: ClaimCategoryData[] = [
  {
    id: "motor",
    slug: "motor",
    title: "Motor Insurance Claims",
    tagline: "Own Damage, Vehicle Theft, Third-Party MACT, and Roadside Assistance",
    badge: "MOTOR CLAIMS",
    iconName: "Car",
    image: "/services/vehicle-insurance.avif",
    summaryHighlights: [
      "Immediate intimation before moving vehicle",
      "Surveyor estimate approval required",
      "Cashless vs reimbursement garage protocol",
      "Critical flood warning: never crank engine",
    ],
    keyRule:
      "Call your insurer's motor claim helpline before moving the vehicle to any garage. The legal claim exists only once the insurer registers it and issues your official claim number.",
    helplines: MOTOR_HELPLINES,
    subsections: [
      {
        title: "Own Damage Claims (Accident, Fire, Flood, Vandalism)",
        points: [
          {
            headline: "Secure & Photograph Spot",
            text: "Move the vehicle safely. Capture clear photos of all damages, the accident spot, and the other vehicle's number plate before anything is disturbed.",
          },
          {
            headline: "Immediate Intimation",
            text: "Call the insurer's motor helpline or register via the app/website. Safely preserve the claim number provided.",
          },
          {
            headline: "Police FIR Requirement",
            text: "File an FIR immediately if anyone is injured or deceased, if a third-party is involved, or if damage resulted from riot or malicious vandalism.",
          },
          {
            headline: "Survey Before Repair",
            text: "Do NOT begin repairs prior to surveyor inspection. Tow the vehicle to a network garage for cashless repair, or any preferred workshop for reimbursement.",
          },
          {
            headline: "Surveyor Approval & Re-Inspection",
            text: "The appointed surveyor reviews and approves the repair estimate. Upon completion of major repairs, a secondary re-inspection may take place.",
          },
          {
            headline: "Cashless vs Reimbursement Settlement",
            text: "Cashless: Pay only your share (compulsory deductible, depreciation unless zero-dep is active, and non-covered consumables). Reimbursement: Pay the garage invoice upfront and submit original bills.",
          },
          {
            headline: "Critical Flood Precaution",
            text: "In waterlogged areas, NEVER attempt to crank or start the engine. Hydrostatic lock / engine seizure caused by starting a flooded vehicle is strictly excluded unless you have an active Engine-Protect add-on.",
            highlight: true,
          },
        ],
      },
      {
        title: "Theft Claims Procedure",
        points: [
          {
            headline: "Immediate Police FIR",
            text: "Report the theft to the local police station immediately to secure an FIR. Intimate your insurer on the exact same day.",
          },
          {
            headline: "Written RTO Intimation",
            text: "Formally notify your Regional Transport Office (RTO) in writing and preserve the official stamped acknowledgement.",
          },
          {
            headline: "Investigator & Non-Traceable Report",
            text: "The insurer appoints an investigator. Final settlement is processed once the police issue a final 'Non-Traceable' ('A' Summary) report.",
          },
          {
            headline: "Document & Key Handover",
            text: "Surrender all original ignition keys (including spare duplicate keys) and execute the RTO ownership transfer documents in favor of the insurer.",
          },
        ],
      },
      {
        title: "Third-Party Liability Claims (MACT)",
        points: [
          {
            headline: "A. When Your Vehicle Causes Injury or Property Damage",
            text: "Inform the police and your insurer immediately. Never admit liability, offer, or make payments without the insurer's written consent (doing so can void coverage). Immediately forward any legal summons or MACT petition to your insurer. Your insurer defends the case and settles awarded compensation within policy terms.",
            highlight: true,
          },
          {
            headline: "B. When You or Your Vehicle are Hit by Another Vehicle",
            text: "Note the registration number, make, and insurer of the offending vehicle. File a police FIR. Compensation for bodily injury or death can be petitioned against the other insurer through the local MACT tribunal. Damage to your own vehicle can be claimed under your own comprehensive policy irrespective of fault.",
          },
          {
            headline: "Hit-and-Run Compensation",
            text: "In unidentified hit-and-run accidents, statutory compensation is claimable under the Government of India Hit-and-Run Compensation Scheme through the local claims enquiry officer.",
          },
        ],
      },
    ],
    checklist: [
      "Signed claim form with full loss description",
      "Valid Policy Copy and Vehicle Registration Certificate (RC)",
      "Driving Licence of the individual driving at the time of incident",
      "Police FIR / Panchnama (mandatory for theft, injuries, third-party)",
      "Detailed photographic evidence of damages & accident site",
      "Initial garage repair estimate; final invoice & payment receipt (reimbursement)",
      "Cancelled cheque / bank mandate, PAN card, and KYC documents",
      "Theft cases: All original keys (with spare), police non-traceable report, stamped RTO intimation letter, signed RC transfer forms",
      "Commercial vehicles: Valid fitness certificate, road permit, and load challan where applicable",
      "Third-party claims: MACT court summons, FIR copy, and claimant details",
    ],
    rejectionReasons: [
      "Driving without a valid, active driving licence or driving under the influence of alcohol / drugs",
      "Using a private registered vehicle for commercial hire or reward",
      "Delay in intimation or commencing vehicle repair before the formal surveyor inspection",
      "Cranking engine in waterlogged water without specific Engine-Protect add-on",
      "Deductions on metal/plastic depreciation when Zero-Depreciation add-on was not selected",
    ],
  },
  {
    id: "travel",
    slug: "travel",
    title: "Travel Insurance Claims",
    tagline: "Overseas Medical Cashless, Trip Delays, Baggage Loss, and Passport Assistance",
    badge: "TRAVEL CLAIMS",
    iconName: "Plane",
    image: "/services/travel-insurance.jpg",
    summaryHighlights: [
      "24x7 overseas cashless hospitalisation hotline",
      "Property Irregularity Report (PIR) for baggage",
      "Airline delay certificates for flight claims",
      "Local police + Indian Embassy reports for passport loss",
    ],
    keyRule:
      "When traveling abroad, call the insurer's 24x7 international travel assistance hotline before visiting a hospital wherever possible — this is the mandatory requirement that activates cashless treatment. Always save the helpline on your mobile phone before flying.",
    helplines: TRAVEL_HELPLINES,
    subsections: [
      {
        title: "Cashless Medical Treatment Abroad (Hospitalisation)",
        points: [
          {
            headline: "Contact International TPA First",
            text: "Call the overseas assistance helpline printed on your policy schedule. State policy number, passport number, current geographic location, and hospital details.",
          },
          {
            headline: "Direct Payment Guarantee (GOP)",
            text: "The assistance team directs you to the closest accredited network hospital and issues a formal Guarantee of Payment (GOP) directly to the medical facility.",
          },
          {
            headline: "Hospital Admission",
            text: "Present your passport and travel policy copy at the reception. You pay only the standard policy deductible and non-medical exclusions.",
          },
          {
            headline: "Preserve Discharge Records",
            text: "Collect complete copies of the discharge summary, physician consultation notes, and all diagnostic test results before departure.",
          },
        ],
      },
      {
        title: "Reimbursement Travel Claims",
        points: [
          {
            headline: "Applicable Scenarios",
            text: "Used for outpatient (OPD) doctor consultations, emergency prescriptions, minor medical expenses, flight cancellations, baggage losses, and emergency delays.",
          },
          {
            headline: "Prompt Intimation",
            text: "Intimate the insurance claims desk as soon as possible, ideally within 24 hours of the incident or loss.",
          },
          {
            headline: "Preserve Original Bills",
            text: "Settle expenses directly and retain original itemised medical invoices, pharmacy receipts, prescriptions, and official statements.",
          },
          {
            headline: "Post-Travel Submission",
            text: "Upon returning to India, submit the signed claim form with required supporting documents online or via email within the policy timeline (usually 15–30 days).",
          },
        ],
      },
      {
        title: "Common Travel Emergency Situations",
        points: [
          {
            headline: "Doctor Consultations Abroad (OPD)",
            text: "Generally settled on a reimbursement basis. Retain doctor prescriptions, itemised bills, and receipts. Standard per-claim deductibles typically apply.",
          },
          {
            headline: "Flight Delays",
            text: "Obtain an official written Delay Certificate from the operating airline stating the exact hours of delay and reasons. Benefits apply only beyond the minimum deductible delay hours defined in the policy schedule.",
          },
          {
            headline: "Trip Cancellation or Interruption",
            text: "Preserve documented proof of reason (e.g. medical emergency certificate, family death certificate, official government advisory) alongside refund statements from airlines and hotels.",
          },
          {
            headline: "Checked-in Baggage Delay or Loss",
            text: "Obtain a Property Irregularity Report (PIR) directly from the airline baggage counter inside the airport terminal before leaving customs. Retain receipts for essential emergency purchases made during the delay.",
            highlight: true,
          },
          {
            headline: "Lost or Stolen Passport",
            text: "Report immediately to local police authorities and visit the nearest Indian Embassy / Consulate. Retain both official reports and receipts for new passport issuance or Emergency Certificates.",
          },
          {
            headline: "Missed Connections & Personal Liability",
            text: "Coverage depends strictly on policy plan tier — verify specific policy wordings for deductible limits and documentation requirements.",
          },
        ],
      },
    ],
    checklist: [
      "Signed travel claim form and copy of policy certificate",
      "Passport copy showing photo pages, visa, and entry/exit immigration stamps",
      "Original air tickets and boarding passes for all travel sectors",
      "Medical claims: Doctor's diagnosis reports, discharge summary, itemised hospital bills, pharmacy bills, and payment receipts",
      "Flight delay / cancellation: Airline's written certificate, revised itinerary, and receipts for necessary expenses",
      "Baggage delay / loss: Official PIR (Property Irregularity Report), airline settlement letter, and purchase bills of essentials",
      "Lost passport: Local police report, Indian Embassy intimation copy, and official payment receipts",
      "Trip cancellation: Certified proof of cause, cancellation invoices, and airline/hotel refund statements",
      "Bank details: Cancelled cheque / NEFT mandate, PAN card, and claimant KYC",
    ],
  },
  {
    id: "health",
    slug: "health",
    title: "Health Insurance Claims",
    tagline: "Cashless Hospitalisation, Reimbursement, IRDAI Master Circular Compliance",
    badge: "HEALTH CLAIMS",
    iconName: "HeartPulse",
    image: "/services/health-insurance.avif",
    summaryHighlights: [
      "IRDAI 1-hour pre-authorisation decision",
      "IRDAI 3-hour final discharge approval",
      "Reimbursement valid if cashless is declined",
      "Room rent proportionate cut & consumables advisory",
    ],
    keyRule:
      "Under IRDAI's Master Circular on Health Insurance (May 2024), insurance companies must decide on cashless pre-authorisation requests within 1 hour, and provide final discharge approval within 3 hours of the hospital sending the final bill.",
    regulatoryNotice:
      "IRDAI 2024 Timelines: 1 Hour Cashless Approval | 3 Hours Final Discharge Decision | Denial of cashless facility does NOT mean claim rejection — reimbursement remains fully valid.",
    helplines: HEALTH_HELPLINES,
    subsections: [
      {
        title: "Cashless Hospitalisation (Network Hospital)",
        points: [
          {
            headline: "1. Network Hospital Verification",
            text: "Confirm that the chosen hospital is in the insurer's / TPA's active network and NOT in their excluded or de-empanelled list (available on the insurer's website).",
          },
          {
            headline: "2. Hospital & TPA Intimation",
            text: "Planned admission: Intimate the insurer / TPA at least 48–72 hours in advance. Emergency admission: Intimate within 24 hours of hospitalisation.",
          },
          {
            headline: "3. TPA Helpdesk Submission",
            text: "Present your health card / e-card and photo ID at the hospital's insurance desk. The hospital transmits the pre-authorisation request with clinical notes and cost estimate.",
          },
          {
            headline: "4. Fast-Track Approval (IRDAI Mandate)",
            text: "Pre-auth approval is due within 1 hour. If treatment requirements expand during stay, the hospital submits an interim enhancement request.",
            highlight: true,
          },
          {
            headline: "5. Discharge Approval (Within 3 Hours)",
            text: "Upon discharge, the hospital sends the final invoice; final discharge approval is issued within 3 hours. You settle only non-payable items, co-pay, deductibles, or excess room-rent differences.",
          },
          {
            headline: "Important Safeguard",
            text: "If cashless authorization is denied by the insurer, you can still settle bills directly and claim reimbursement later — denial of cashless is NOT rejection of the insurance claim.",
            highlight: true,
          },
        ],
      },
      {
        title: "Reimbursement Health Claims Procedure",
        points: [
          {
            headline: "When Applicable",
            text: "Utilised when admitted to non-network hospitals, when cashless was declined, or for pre- and post-hospitalisation medical bills.",
          },
          {
            headline: "Intimation Timeline",
            text: "Intimate the insurer / TPA within 24 hours of emergency admission or prior to planned admission.",
          },
          {
            headline: "Preserve All Original Records",
            text: "Pay hospital bills directly and collect originals: final detailed bill, receipts, discharge summary, indoor case papers, and investigation reports.",
          },
          {
            headline: "Submission Within Timeline",
            text: "Submit the completed claim form and originals within the timeline stipulated in your policy (usually 15–30 days from hospital discharge).",
          },
          {
            headline: "Pre & Post-Hospitalisation Bills",
            text: "Submit OPD consultations, diagnostic tests, and pharmacy bills incurred prior to (typically 30–60 days) and following discharge (typically 60–180 days) as permitted by your policy terms.",
          },
        ],
      },
      {
        title: "Understanding Payable vs Non-Payable Items",
        points: [
          {
            headline: "Consumable & Administrative Exclusions",
            text: "Medical consumables (gloves, PPE kits, admission files, sanitizers, surgical tape, toiletries) are excluded from standard baseline policies unless you have opted for a specific Consumables Add-on Cover.",
          },
          {
            headline: "Room Rent Proportionate Deductions",
            text: "Selecting a room category higher than your policy's specified room-rent limit triggers proportionate reductions across all associated hospital charges (including doctor fees, surgery, and nursing fees).",
            highlight: true,
          },
          {
            headline: "Pre-Admission Advisory",
            text: "Before admission, request an itemised estimate of non-payable consumables from the hospital's TPA desk to avoid unexpected out-of-pocket expenses.",
          },
        ],
      },
    ],
    checklist: [
      "Duly filled and signed claim form (Part A signed by insured; Part B filled and stamped by treating hospital)",
      "Health Card / Digital E-Card copy along with patient's government photo ID (Aadhaar / Passport / PAN)",
      "Original hospital discharge summary detailing medical history, diagnosis, and course of treatment",
      "Final hospital bill with detailed itemised break-up and stamped payment receipts",
      "Original pharmacy bills accompanied by treating doctor's clinical prescriptions",
      "All medical investigation reports (blood, radiology, ECG, biopsy) with doctor's formal requisition slip",
      "Doctor's first consultation paper and Indoor Case Papers (ICPs) if requested by the insurer",
      "Surgical implant invoices and serial number stickers (for cardiac stents, orthopedic implants, lens)",
      "Police FIR / Medico-Legal Certificate (MLC) copy for accidental injury admissions",
      "Cancelled cheque / bank passbook copy with IFSC, PAN card, and KYC documents of primary insured",
    ],
  },
  {
    id: "personal-accident",
    slug: "personal-accident",
    title: "Personal Accident Insurance Claims",
    tagline: "Accidental Death, Permanent & Temporary Disability, Accident Medical Expenses",
    badge: "ACCIDENT CLAIMS",
    iconName: "ShieldAlert",
    image: "/services/personal-accident.jpg",
    summaryHighlights: [
      "100% Capital Sum Insured for accidental death",
      "Scheduled payouts for permanent total/partial disability",
      "Weekly compensation for temporary wage loss",
      "Police FIR/panchnama and medical board evaluation",
    ],
    keyRule:
      "Personal accident policies provide financial compensation for accidental death, permanent total/partial disablement, temporary total disablement (loss of income), and accident hospitalisation.",
    helplines: PERSONAL_ACCIDENT_HELPLINES,
    subsections: [
      {
        title: "Personal Accident Claims Process",
        points: [
          {
            headline: "Immediate Notice",
            text: "Formally notify the insurance company immediately upon the occurrence of any accidental injury or casualty.",
          },
          {
            headline: "Mandatory Police Reporting",
            text: "Report the incident to the police wherever required by law (road/rail accidents, workplace mishaps, falls, burns, electrocution, assault, drowning) and secure the FIR or police Panchnama.",
            highlight: true,
          },
          {
            headline: "Comprehensive Medical Trail",
            text: "Retain clinical notes, hospital records, and radiological scans from day one of treatment continuously.",
          },
          {
            headline: "Disability Assessment",
            text: "For permanent or partial disability claims, the insurer may request an authorized Medical Board certificate or depute an independent medical specialist to assess disability percentage.",
          },
        ],
      },
      {
        title: "Cover Types & Payout Criteria",
        points: [
          {
            headline: "Accidental Death Benefit",
            text: "100% of the Capital Sum Insured is disbursed directly to the designated nominee upon verification of accidental cause.",
          },
          {
            headline: "Permanent Total Disablement (PTD)",
            text: "100% of Sum Insured (or scheduled percentage) for irreversible loss of limbs, sight, speech, or hearing.",
          },
          {
            headline: "Permanent Partial Disablement (PPD)",
            text: "Pre-defined percentage of Sum Insured payable based on the IRDAI disability tariff schedule.",
          },
          {
            headline: "Temporary Total Disablement (TTD / Weekly Compensation)",
            text: "Weekly benefit compensating loss of wages during certified confinement; requires employer's leave certificate and fitness certification.",
          },
        ],
      },
    ],
    checklist: [
      "Signed Personal Accident claim form (executed by insured or designated nominee)",
      "Policy schedule copy and KYC documentation of both insured and claimant nominee",
      "Police FIR, Panchnama, or Medico-Legal Certificate (MLC) copy",
      "Complete hospital treatment records, discharge summary, X-rays, MRI/CT scans",
      "Permanent Disability: Disability certificate issued by treating surgeon or Government Medical Board stating specific percentage and nature of impairment",
      "Temporary Disability: Employer's certified leave certificate (stating absence from duty) and doctor's fitness certificate upon recovery",
      "Accidental Death: Official Municipal Death Certificate, Post-Mortem / Autopsy Report, Police Final Inquest Report, and Chemical Viscera Analysis Report (if performed)",
      "Cancelled bank cheque / NEFT mandate of the claimant nominee",
    ],
  },
  {
    id: "life",
    slug: "life",
    title: "Life Insurance Claims",
    tagline: "Death Claims, Policy Maturity & Survival Benefits, Critical Illness Riders",
    badge: "LIFE CLAIMS",
    iconName: "ShieldCheck",
    image: "/services/life-insurance.avif",
    summaryHighlights: [
      "IRDAI 15-day settlement for clean death claims",
      "IRDAI 45-day cap for investigated claims",
      "Section 45: 3-year verification is routine procedure",
      "Maturity discharge vouchers & rider claim protocols",
    ],
    keyRule:
      "Under IRDAI's Master Circular on Protection of Policyholders' Interests (September 2024), a life insurance death claim not requiring field investigation must be settled within 15 days of intimation; claims requiring investigation must be resolved within 45 days.",
    regulatoryNotice:
      "IRDAI 2024 Life Settlement Mandate: Clean death claims settled in 15 Days | Investigated claims settled in 45 Days | Routine verification within 3 years of policy inception is standard procedure under Section 45.",
    helplines: LIFE_HELPLINES,
    subsections: [
      {
        title: "Death Claims Procedure & Statutory Timelines",
        points: [
          {
            headline: "Prompt Nominee Intimation",
            text: "The registered nominee (or legal heir if no nominee exists) notifies the insurer via phone, online portal, email, or at the servicing branch.",
          },
          {
            headline: "Fast-Track Settlement (IRDAI Mandate)",
            text: "Clean claims without dispute are settled within 15 days of intimation. Claims requiring investigation must be resolved within 45 days.",
            highlight: true,
          },
          {
            headline: "Three-Year Contestability Rule (Section 45)",
            text: "Claims arising within 3 years of policy issue or revival routinely undergo field verification. This is standard compliance under Insurance Act Section 45 and is not an indication of rejection.",
          },
          {
            headline: "Direct Nominee Bank Transfer",
            text: "Claim proceeds are paid directly via electronic NEFT transfer to the verified bank account of the registered nominee.",
          },
        ],
      },
      {
        title: "Maturity & Survival Benefit Payouts",
        points: [
          {
            headline: "Advance Intimation",
            text: "Insurers typically dispatch maturity discharge notices 2–3 months prior to the maturity date.",
          },
          {
            headline: "Timely Submission",
            text: "Execute the maturity discharge voucher and submit policy documentation prior to the due date to ensure automatic credit on the exact maturity date.",
          },
          {
            headline: "ULIP Fund Value Decisions",
            text: "For market-linked ULIP policies, choose whether you prefer a single lump sum or phased settlement installments.",
          },
        ],
      },
      {
        title: "Critical Illness & Disability Rider Claims",
        points: [
          {
            headline: "Physician Certification",
            text: "Submit the specific rider claim form accompanied by the treating medical specialist's certificate confirming exact diagnosis or disability.",
          },
          {
            headline: "Survival Period Compliance",
            text: "Critical illness benefits are payable only upon completing the mandatory survival period (typically 14–30 days from diagnosis) as specified in the policy contract.",
          },
        ],
      },
    ],
    checklist: [
      "Death claim form / Claimant's formal statement (in insurer's prescribed format)",
      "Original Death Certificate issued by the local Municipal Corporation / Registrar of Births & Deaths",
      "Original Policy Document (or indemnity bond with loss affidavit if policy bond was misplaced)",
      "Nominee's identity proof (Aadhaar / Passport), address proof, and PAN Card / Form 60",
      "Nominee's cancelled bank cheque / updated passbook copy with IFSC / NEFT mandate form",
      "Natural Death: Attending physician's statement, medical cause of death certificate, and hospital inpatient case summary",
      "Accidental / Unnatural Death: Police FIR, Panchnama, Post-Mortem Autopsy Report, and Final Police Inquest Report",
      "Employed Life Assured: Employer's certificate regarding attendance / medical leave records (if requested)",
      "No Nominee / Nominee Pre-Deceased: Succession Certificate, Legal Heirship Certificate, or Court Will Probate",
      "Death Abroad: Death Certificate duly authenticated by the Indian Embassy / Consulate in the country of occurrence",
      "Maturity Claims: Signed maturity discharge voucher, original policy bond, policyholder ID proof, PAN, and cancelled cheque",
    ],
  },
];

export const DISPUTE_ESCALATION_LEVELS = [
  {
    level: "LEVEL 01",
    authority: "Insurer Grievance Redressal Cell (GRO)",
    turnaround: "Mandatory Resolution within 14 Days",
    description:
      "Write formally to the Grievance Redressal Officer of your insurance company (email and physical address on the insurer's website), quoting your registered claim number and reason for dissatisfaction.",
    action: "Contact Insurer GRO",
  },
  {
    level: "LEVEL 02",
    authority: "IRDAI Bima Bharosa Portal",
    turnaround: "Monitored Regulatory Escalation",
    description:
      "If the insurer fails to resolve your complaint within 14 days, escalate directly to the Insurance Regulatory and Development Authority of India (IRDAI) through the online Bima Bharosa portal, toll-free call, or email.",
    action: "bimabharosa.irdai.gov.in",
    contactDetails: "Toll Free: 155255 / 1800-4254-732 | Email: complaints@irdai.gov.in",
  },
  {
    level: "LEVEL 03",
    authority: "Insurance Ombudsman (CIO)",
    turnaround: "Binding Award within 3 Months",
    description:
      "If the insurer rejects your complaint or does not reply within 30 days, approach the Insurance Ombudsman of your jurisdiction within 1 year. The process is completely FREE, requires NO lawyer, and legally adjudicates claims up to ₹50 Lakhs. The Ombudsman's decision is binding on the insurer.",
    action: "cioins.co.in",
    contactDetails: "Council for Insurance Ombudsmen: cioins.co.in | Jurisdiction-based offices across India",
  },
  {
    level: "LEVEL 04",
    authority: "Consumer Disputes Redressal Commission",
    turnaround: "Judicial Redressal",
    description:
      "The District, State, or National Consumer Commission remains an available statutory avenue for claims exceeding ombudsman limits or where judicial adjudication is sought.",
    action: "e-Daakhil Portal",
  },
];

export const MASTER_INSURERS_DIRECTORY: InsurerHelpline[] = [
  ...MOTOR_HELPLINES,
  ...LIFE_HELPLINES,
];

