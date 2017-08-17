# Anaylsis of BC211 Taxonomy

BC211 uses a custom taxonomy set. It is described like follows:
```json
{
    "who": "TERM",
    "what": "TERM",
    "why": "TERM
}
```

Below is a bit of analysis on these terms and the services they categorize. 

For each of the taxonomy types (WHO, WHAT, WHY), I have listed all the possible values for them as the first item, and the number of services that they tag as the second item. For example:
```json
[
    [ 
        "Children", 
        1031.0
    ],
    [ 
        "Service Providers", 
        515.0
    ]
]
```
This says that there are 1031 records tagged with a WHO of *CHILDREN* and 515 records tagged with a who of *Service Providers*.

## WHO
```
[
    [ 
        "Children", 
        1031.0
    ],
    [ 
        "Service Providers", 
        515.0
    ],
    [ 
        "French", 
        33.0
    ],
    [ 
        "Youth", 
        1755.0
    ],
    [ 
        "Parents", 
        479.0
    ],
    [ 
        "Refugees", 
        390.0
    ],
    [ 
        "Aboriginal", 
        332.0
    ],
    [ 
        "Victims", 
        819.0
    ],
    [ 
        "Women", 
        951.0
    ],
    [ 
        "Significant Others", 
        159.0
    ],
    [ 
        "Chinese", 
        74.0
    ],
    [ 
        "Veterans", 
        87.0
    ],
    [ 
        "Families", 
        381.0
    ],
    [ 
        "Immigrants/Ethnocultural Groups", 
        483.0
    ],
    [ 
        "Seniors", 
        831.0
    ],
    [ 
        "Caregivers", 
        66.0
    ],
    [ 
        "Offenders", 
        141.0
    ],
    [ 
        "Workers", 
        85.0
    ],
    [ 
        "Southeast Asian", 
        18.0
    ],
    [ 
        "South Asian", 
        32.0
    ],
    [ 
        "Korean", 
        12.0
    ],
    [ 
        "Men", 
        173.0
    ],
    [ 
        "Italian", 
        3.0
    ],
    [ 
        "Business/Industry", 
        37.0
    ],
    [ 
        "Grandparents", 
        9.0
    ],
    [ 
        "Babies", 
        57.0
    ],
    [ 
        "Christian", 
        36.0
    ],
    [ 
        "Employment Insurance Recipients", 
        20.0
    ],
    [ 
        "Middle Eastern", 
        18.0
    ],
    [ 
        "Nonprofit Agencies", 
        26.0
    ],
    [ 
        "Charities", 
        6.0
    ],
    [ 
        "Employers", 
        111.0
    ],
    [ 
        "Animals (pets)", 
        65.0
    ],
    [ 
        "Youth (in government care)", 
        56.0
    ],
    [ 
        "Students", 
        45.0
    ],
    [ 
        "Children (in government care)", 
        29.0
    ],
    [ 
        "Spanish", 
        19.0
    ],
    [ 
        "Missing Persons", 
        8.0
    ],
    [ 
        "Croatian", 
        3.0
    ],
    [ 
        "Inmates", 
        12.0
    ],
    [ 
        "Physicians", 
        2.0
    ],
    [ 
        "Black/African", 
        22.0
    ],
    [ 
        "Parents (young)", 
        33.0
    ],
    [ 
        "Parents (single)", 
        19.0
    ],
    [ 
        "Greek", 
        2.0
    ],
    [ 
        "Jewish", 
        25.0
    ],
    [ 
        "Tenants", 
        30.0
    ],
    [ 
        "Income Assistance Recipients", 
        41.0
    ],
    [ 
        "Animals (wildlife)", 
        12.0
    ],
    [ 
        "German", 
        1.0
    ],
    [ 
        "Animals", 
        10.0
    ],
    [ 
        "Military", 
        7.0
    ],
    [ 
        "Taiwanese", 
        7.0
    ],
    [ 
        "Metis", 
        8.0
    ],
    [ 
        "Japanese", 
        5.0
    ],
    [ 
        "Scandinavian", 
        2.0
    ],
    [ 
        "Estonian", 
        4.0
    ],
    [ 
        "Landladies/lords", 
        15.0
    ],
    [ 
        "Writers", 
        3.0
    ],
    [ 
        "Scottish", 
        3.0
    ],
    [ 
        "Buddhist", 
        1.0
    ],
    [ 
        "Muslim", 
        1.0
    ]
]
```

## WHAT
```
[
    [ 
        "CAMPS (residential)", 
        84.0
    ],
    [ 
        "INFANT DEVELOPMENT PROGRAMS", 
        24.0
    ],
    [ 
        "CONSULTING", 
        84.0
    ],
    [ 
        "HOUSING SEARCH ASSISTANCE", 
        30.0
    ],
    [ 
        "POSTAL SERVICES", 
        4.0
    ],
    [ 
        "INTERVENTION", 
        503.0
    ],
    [ 
        "COMMUNITY CENTRES", 
        200.0
    ],
    [ 
        "LIBRARIES", 
        175.0
    ],
    [ 
        "TUTORING", 
        41.0
    ],
    [ 
        "INFORMATION AND REFERRAL", 
        1446.0
    ],
    [ 
        "COUNSELLING", 
        1033.0
    ],
    [ 
        "TRAINING", 
        1091.0
    ],
    [ 
        "EDUCATION (alternative)", 
        29.0
    ],
    [ 
        "EDUCATION (upgrading)", 
        36.0
    ],
    [ 
        "COMMUNITY DEVELOPMENT", 
        121.0
    ],
    [ 
        "ACCOMPANIMENT", 
        236.0
    ],
    [ 
        "TRANSLATION/INTERPRETATION", 
        53.0
    ],
    [ 
        "ADVOCACY", 
        983.0
    ],
    [ 
        "RECREATION", 
        678.0
    ],
    [ 
        "EDUCATION (public awareness)", 
        1394.0
    ],
    [ 
        "EMPLOYMENT SEARCH ASSISTANCE", 
        193.0
    ],
    [ 
        "OUTREACH", 
        363.0
    ],
    [ 
        "CAMPS (day)", 
        72.0
    ],
    [ 
        "SUPPORT GROUPS", 
        589.0
    ],
    [ 
        "TRANSITION HOUSES (second stage)", 
        32.0
    ],
    [ 
        "SETTLEMENT ASSISTANCE", 
        157.0
    ],
    [ 
        "FESTIVALS/PUBLIC EVENTS", 
        47.0
    ],
    [ 
        "HOUSING (temporary)", 
        567.0
    ],
    [ 
        "EQUIPMENT", 
        154.0
    ],
    [ 
        "FINANCIAL ASSISTANCE", 
        550.0
    ],
    [ 
        "ARTS AND CULTURE", 
        48.0
    ],
    [ 
        "RENTAL SPACE", 
        65.0
    ],
    [ 
        "EDUCATION (continuing)", 
        30.0
    ],
    [ 
        "MEDIATION", 
        50.0
    ],
    [ 
        "DANCE", 
        7.0
    ],
    [ 
        "FOOD (meals)", 
        179.0
    ],
    [ 
        "COMMUNITY KITCHENS", 
        31.0
    ],
    [ 
        "VISUAL ARTS/CRAFTS", 
        29.0
    ],
    [ 
        "HOUSING", 
        285.0
    ],
    [ 
        "DAY PROGRAMS", 
        95.0
    ],
    [ 
        "PRESCHOOLS", 
        57.0
    ],
    [ 
        "TRANSPORTATION", 
        68.0
    ],
    [ 
        "FOOD (groceries)", 
        108.0
    ],
    [ 
        "DONATIONS ACCEPTED", 
        217.0
    ],
    [ 
        "COUNSELLING (peer/lay)", 
        139.0
    ],
    [ 
        "GARDENING", 
        21.0
    ],
    [ 
        "FOOD (snacks)", 
        16.0
    ],
    [ 
        "HOUSEKEEPING", 
        31.0
    ],
    [ 
        "DAY CARE", 
        108.0
    ],
    [ 
        "FUNDING", 
        198.0
    ],
    [ 
        "SHOPPING ASSISTANCE", 
        33.0
    ],
    [ 
        "NETWORKING", 
        162.0
    ],
    [ 
        "VISITING", 
        66.0
    ],
    [ 
        "STORES", 
        108.0
    ],
    [ 
        "NEIGHBOURHOOD HOUSES", 
        2.0
    ],
    [ 
        "VICTIM SERVICES (community-based)", 
        84.0
    ],
    [ 
        "EMPLOYMENT PREPARATION", 
        181.0
    ],
    [ 
        "CERTIFICATION AND LICENSING", 
        156.0
    ],
    [ 
        "DIRECTORIES", 
        61.0
    ],
    [ 
        "FORM COMPLETION ASSISTANCE", 
        207.0
    ],
    [ 
        "REPAIRS/MAINTENANCE", 
        52.0
    ],
    [ 
        "LEGAL SERVICES", 
        109.0
    ],
    [ 
        "HEALTH CARE (medical)", 
        711.0
    ],
    [ 
        "FREE MEDICAL CLINICS", 
        87.0
    ],
    [ 
        "REGULATION", 
        130.0
    ],
    [ 
        "ADMINISTRATION", 
        313.0
    ],
    [ 
        "RESIDENTIAL PROGRAMS", 
        107.0
    ],
    [ 
        "CLOTHING", 
        70.0
    ],
    [ 
        "VOLUNTEERING", 
        40.0
    ],
    [ 
        "DISPOSAL", 
        56.0
    ],
    [ 
        "TELEPHONE OUTREACH", 
        18.0
    ],
    [ 
        "NEEDLES", 
        56.0
    ],
    [ 
        "INVESTIGATION", 
        27.0
    ],
    [ 
        "MENTORING", 
        100.0
    ],
    [ 
        "CHAMBERS OF COMMERCE", 
        20.0
    ],
    [ 
        "CONDOMS", 
        39.0
    ],
    [ 
        "ASSESSMENT", 
        419.0
    ],
    [ 
        "TRANSITION HOUSES (first stage)", 
        36.0
    ],
    [ 
        "REGISTRIES", 
        58.0
    ],
    [ 
        "RESEARCH", 
        52.0
    ],
    [ 
        "EDUCATION (k-12)", 
        64.0
    ],
    [ 
        "CELL PHONES", 
        3.0
    ],
    [ 
        "COMMUNITY LIVING SUPPORT", 
        104.0
    ],
    [ 
        "RESPITE CARE", 
        93.0
    ],
    [ 
        "TEACHING MATERIALS", 
        16.0
    ],
    [ 
        "SPORTS", 
        24.0
    ],
    [ 
        "EDUCATION (post-secondary)", 
        39.0
    ],
    [ 
        "POLICE SERVICES", 
        87.0
    ],
    [ 
        "FITNESS", 
        31.0
    ],
    [ 
        "RECYCLING", 
        13.0
    ],
    [ 
        "GOVERNMENT (municipal)", 
        10.0
    ],
    [ 
        "BIG BROTHERS", 
        4.0
    ],
    [ 
        "COMMUNITY CORRECTIONS (restorative justice)", 
        13.0
    ],
    [ 
        "TAXES", 
        1.0
    ],
    [ 
        "BIG SISTERS", 
        5.0
    ],
    [ 
        "BOYS AND GIRLS CLUBS", 
        13.0
    ],
    [ 
        "PICK-UP", 
        24.0
    ],
    [ 
        "ELECTED REPRESENTATIVES", 
        81.0
    ],
    [ 
        "PALLIATIVE CARE", 
        35.0
    ],
    [ 
        "OMBUDSPERSON", 
        6.0
    ],
    [ 
        "HEALTH CARE (complementary)", 
        22.0
    ],
    [ 
        "TOYS", 
        18.0
    ],
    [ 
        "ART THERAPY", 
        3.0
    ],
    [ 
        "FAMILY PLACES", 
        23.0
    ],
    [ 
        "INTERNET", 
        25.0
    ],
    [ 
        "TRAVEL/TOURISM", 
        8.0
    ],
    [ 
        "GUARDIANSHIP", 
        43.0
    ],
    [ 
        "CUSTOMS SERVICES", 
        1.0
    ],
    [ 
        "VICTIM SERVICES (police-based)", 
        22.0
    ],
    [ 
        "PENSIONS", 
        85.0
    ],
    [ 
        "ANIMAL AIDES", 
        4.0
    ],
    [ 
        "MUSEUMS", 
        22.0
    ],
    [ 
        "HOME SUPPORT", 
        129.0
    ],
    [ 
        "HOSPICES", 
        18.0
    ],
    [ 
        "INSURANCE", 
        20.0
    ],
    [ 
        "SPEECH THERAPY", 
        7.0
    ],
    [ 
        "FUNDRAISING", 
        7.0
    ],
    [ 
        "EMPLOYMENT", 
        26.0
    ],
    [ 
        "FOSTER CARE", 
        16.0
    ],
    [ 
        "CLUBHOUSES", 
        8.0
    ],
    [ 
        "DOCUMENTS", 
        95.0
    ],
    [ 
        "SUBSTITUTION THERAPY", 
        27.0
    ],
    [ 
        "WISH-GRANTING", 
        7.0
    ],
    [ 
        "SEARCH/RESCUE", 
        42.0
    ],
    [ 
        "THEATRE", 
        21.0
    ],
    [ 
        "OCCUPATIONAL THERAPY", 
        105.0
    ],
    [ 
        "SHOWER/LAUNDRY FACILITIES", 
        22.0
    ],
    [ 
        "PERSONAL/ATTENDANT CARE", 
        11.0
    ],
    [ 
        "CRISIS LINES", 
        74.0
    ],
    [ 
        "PHYSIOTHERAPY", 
        101.0
    ],
    [ 
        "MEDICAL ALARMS", 
        5.0
    ],
    [ 
        "ADOPTION", 
        38.0
    ],
    [ 
        "EMPLOYEE ASSISTANCE PROGRAMS", 
        5.0
    ],
    [ 
        "DETOXIFICATION (residential)", 
        11.0
    ],
    [ 
        "FURNITURE/HOUSEHOLD GOODS", 
        30.0
    ],
    [ 
        "FORENSIC SERVICES", 
        11.0
    ],
    [ 
        "SAILING", 
        1.0
    ],
    [ 
        "HOSPITALS", 
        10.0
    ],
    [ 
        "ABORTION", 
        4.0
    ],
    [ 
        "SKIING", 
        1.0
    ],
    [ 
        "HAIRCUTS/GROOMING", 
        10.0
    ],
    [ 
        "CAMPING", 
        5.0
    ],
    [ 
        "PARKS", 
        4.0
    ],
    [ 
        "NURSING CARE", 
        64.0
    ],
    [ 
        "COMPENSATION", 
        4.0
    ],
    [ 
        "RACQUET COURTS", 
        13.0
    ],
    [ 
        "THERAPEUTIC BATHING", 
        2.0
    ],
    [ 
        "SWIMMING", 
        23.0
    ],
    [ 
        "LEGAL AID", 
        11.0
    ],
    [ 
        "VOICEMAIL SERVICE", 
        3.0
    ],
    [ 
        "ICE RINKS", 
        11.0
    ],
    [ 
        "SUPERVISION", 
        59.0
    ],
    [ 
        "COMPUTING", 
        62.0
    ],
    [ 
        "FUNERALS", 
        3.0
    ],
    [ 
        "COMMUNITY CORRECTIONS", 
        45.0
    ],
    [ 
        "MEDICAL BRACELETS", 
        1.0
    ],
    [ 
        "EMPLOYMENT RESOURCE CENTRES", 
        49.0
    ],
    [ 
        "GOVERNMENT", 
        3.0
    ],
    [ 
        "MEDIA", 
        10.0
    ],
    [ 
        "FILM/VIDEO", 
        2.0
    ],
    [ 
        "LIAISON", 
        8.0
    ],
    [ 
        "RESIDENTIAL CARE", 
        49.0
    ],
    [ 
        "HORSEBACK RIDING", 
        7.0
    ],
    [ 
        "MUSIC", 
        17.0
    ],
    [ 
        "BLANKETS/BEDDING", 
        4.0
    ],
    [ 
        "SAFE INJECTION SITES", 
        16.0
    ],
    [ 
        "CRITICAL INCIDENT RESPONSE", 
        1.0
    ],
    [ 
        "CASE MANAGEMENT", 
        50.0
    ],
    [ 
        "FREE DENTAL CLINICS", 
        5.0
    ],
    [ 
        "HEALTH UNITS", 
        38.0
    ],
    [ 
        "INTAKE", 
        228.0
    ],
    [ 
        "MENTAL HEALTH TEAMS", 
        11.0
    ],
    [ 
        "IMMUNIZATION", 
        38.0
    ],
    [ 
        "BOTANICAL GARDENS", 
        2.0
    ],
    [ 
        "FARMERS MARKETS", 
        1.0
    ],
    [ 
        "DELOUSING", 
        2.0
    ],
    [ 
        "CITIZENSHIP", 
        1.0
    ],
    [ 
        "YOGA", 
        4.0
    ],
    [ 
        "BUSINESS/INDUSTRY", 
        2.0
    ],
    [ 
        "MONEY MANAGEMENT/BUDGETING", 
        3.0
    ],
    [ 
        "COURTS", 
        16.0
    ],
    [ 
        "ACUPUNCTURE", 
        6.0
    ],
    [ 
        "DETOXIFICATION (non-residential)", 
        10.0
    ],
    [ 
        "AIRPORT", 
        1.0
    ],
    [ 
        "COOPERATIVES", 
        2.0
    ],
    [ 
        "GOVERNMENT (federal)", 
        1.0
    ],
    [ 
        "CAR SEATS", 
        1.0
    ],
    [ 
        "PODIATRY", 
        2.0
    ],
    [ 
        "MUSIC THERAPY", 
        1.0
    ],
    [ 
        "VICTIM SERVICES", 
        3.0
    ],
    [ 
        "CORRECTIONAL FACILITIES", 
        15.0
    ],
    [ 
        "CANNABIS", 
        2.0
    ],
    [ 
        "PARKING", 
        1.0
    ],
    [ 
        "COMMUNITY RESPONSE NETWORKS", 
        6.0
    ],
    [ 
        "ARBITRATION", 
        9.0
    ],
    [ 
        "HOUSING (shared)", 
        3.0
    ],
    [ 
        "ELECTIONS", 
        2.0
    ],
    [ 
        "FAMILY JUSTICE CENTRES", 
        13.0
    ],
    [ 
        "CROWN COUNSEL", 
        12.0
    ],
    [ 
        "TATTOOING", 
        3.0
    ],
    [ 
        "SOBERING CENTRE", 
        3.0
    ],
    [ 
        "GOVERNMENT (regional)", 
        1.0
    ],
    [ 
        "PASSPORTS", 
        13.0
    ],
    [ 
        "BANKING", 
        1.0
    ],
    [ 
        "MASSAGE THERAPY", 
        5.0
    ],
    [ 
        "MILITARY", 
        3.0
    ],
    [ 
        "FIREFIGHTING", 
        4.0
    ],
    [ 
        "DELIVERY", 
        1.0
    ],
    [ 
        "VICTIM SERVICES (court-based)", 
        5.0
    ],
    [ 
        "PHARMACY", 
        1.0
    ],
    [ 
        "CORRECTIONAL FACILITIES (pre-trial)", 
        2.0
    ]
]
```

## WHY
```
[
    [ 
        "disability", 
        679.0
    ],
    [ 
        "children", 
        162.0
    ],
    [ 
        "homelessness", 
        279.0
    ],
    [ 
        "behaviour problems", 
        106.0
    ],
    [ 
        "film/video", 
        15.0
    ],
    [ 
        "disability (learning)", 
        29.0
    ],
    [ 
        "adoption", 
        25.0
    ],
    [ 
        "youth (in government care)", 
        39.0
    ],
    [ 
        "sexuality", 
        13.0
    ],
    [ 
        "abuse (sexual)", 
        129.0
    ],
    [ 
        "parenting", 
        232.0
    ],
    [ 
        "language (english)", 
        113.0
    ],
    [ 
        "racism", 
        12.0
    ],
    [ 
        "crime", 
        312.0
    ],
    [ 
        "courts", 
        95.0
    ],
    [ 
        "disability (mental health)", 
        862.0
    ],
    [ 
        "overdose", 
        189.0
    ],
    [ 
        "french", 
        8.0
    ],
    [ 
        "addiction (alcohol and drug)", 
        614.0
    ],
    [ 
        "education (k-12)", 
        106.0
    ],
    [ 
        "health promotion", 
        59.0
    ],
    [ 
        "crosscultural awareness", 
        24.0
    ],
    [ 
        "legal issues", 
        117.0
    ],
    [ 
        "probation/parole", 
        133.0
    ],
    [ 
        "smoking", 
        57.0
    ],
    [ 
        "allergies", 
        2.0
    ],
    [ 
        "amyotrophic lateral sclerosis", 
        11.0
    ],
    [ 
        "alzheimers disease", 
        64.0
    ],
    [ 
        "developmental delay", 
        53.0
    ],
    [ 
        "funerals", 
        5.0
    ],
    [ 
        "body image", 
        6.0
    ],
    [ 
        "language (french)", 
        3.0
    ],
    [ 
        "youth", 
        104.0
    ],
    [ 
        "support groups", 
        21.0
    ],
    [ 
        "leadership", 
        68.0
    ],
    [ 
        "family violence", 
        395.0
    ],
    [ 
        "asthma", 
        3.0
    ],
    [ 
        "psychology", 
        5.0
    ],
    [ 
        "hate crimes", 
        6.0
    ],
    [ 
        "counselling", 
        24.0
    ],
    [ 
        "air quality", 
        6.0
    ],
    [ 
        "complaints", 
        38.0
    ],
    [ 
        "safety", 
        62.0
    ],
    [ 
        "rights", 
        90.0
    ],
    [ 
        "arts and culture", 
        127.0
    ],
    [ 
        "spondyloarthropathies", 
        1.0
    ],
    [ 
        "visual arts/crafts", 
        42.0
    ],
    [ 
        "health care (medical)", 
        156.0
    ],
    [ 
        "lupus", 
        2.0
    ],
    [ 
        "health conditions", 
        304.0
    ],
    [ 
        "fitness", 
        17.0
    ],
    [ 
        "settlement assistance", 
        81.0
    ],
    [ 
        "legal services", 
        25.0
    ],
    [ 
        "sex trade", 
        66.0
    ],
    [ 
        "gender identity", 
        108.0
    ],
    [ 
        "food (groceries)", 
        23.0
    ],
    [ 
        "arthritis", 
        14.0
    ],
    [ 
        "personal development", 
        63.0
    ],
    [ 
        "street involvement", 
        159.0
    ],
    [ 
        "language (vietnamese)", 
        1.0
    ],
    [ 
        "life skills", 
        127.0
    ],
    [ 
        "massage therapy", 
        7.0
    ],
    [ 
        "computing", 
        25.0
    ],
    [ 
        "families", 
        14.0
    ],
    [ 
        "bullying", 
        27.0
    ],
    [ 
        "vision impairment", 
        45.0
    ],
    [ 
        "abuse", 
        278.0
    ],
    [ 
        "disability (intellectual)", 
        342.0
    ],
    [ 
        "clothing", 
        114.0
    ],
    [ 
        "assault (sexual)", 
        184.0
    ],
    [ 
        "stalking", 
        95.0
    ],
    [ 
        "podiatry", 
        5.0
    ],
    [ 
        "seniors", 
        58.0
    ],
    [ 
        "social work", 
        5.0
    ],
    [ 
        "victims", 
        30.0
    ],
    [ 
        "financial assistance", 
        59.0
    ],
    [ 
        "home/garden", 
        14.0
    ],
    [ 
        "home support", 
        3.0
    ],
    [ 
        "service providers", 
        6.0
    ],
    [ 
        "post-traumatic stress disorder", 
        21.0
    ],
    [ 
        "camps (day)", 
        3.0
    ],
    [ 
        "cancer", 
        73.0
    ],
    [ 
        "camps (residential)", 
        13.0
    ],
    [ 
        "vocation/career", 
        191.0
    ],
    [ 
        "hiv/aids", 
        154.0
    ],
    [ 
        "sexually transmitted infections", 
        110.0
    ],
    [ 
        "environmental health", 
        30.0
    ],
    [ 
        "hepatitis", 
        46.0
    ],
    [ 
        "needles", 
        91.0
    ],
    [ 
        "condoms", 
        1.0
    ],
    [ 
        "pensions", 
        24.0
    ],
    [ 
        "torture", 
        1.0
    ],
    [ 
        "employment", 
        85.0
    ],
    [ 
        "neighbourhood houses", 
        1.0
    ],
    [ 
        "speech and language disorders", 
        40.0
    ],
    [ 
        "sexual orientation", 
        93.0
    ],
    [ 
        "drugs", 
        7.0
    ],
    [ 
        "first aid", 
        12.0
    ],
    [ 
        "optometry", 
        3.0
    ],
    [ 
        "chiropractic", 
        2.0
    ],
    [ 
        "day care", 
        57.0
    ],
    [ 
        "poison", 
        2.0
    ],
    [ 
        "violence", 
        27.0
    ],
    [ 
        "outreach", 
        1.0
    ],
    [ 
        "safe injection sites", 
        1.0
    ],
    [ 
        "business/industry", 
        106.0
    ],
    [ 
        "disability (physical)", 
        139.0
    ],
    [ 
        "foster care", 
        23.0
    ],
    [ 
        "advocacy", 
        4.0
    ],
    [ 
        "tuberculosis", 
        4.0
    ],
    [ 
        "substitution therapy", 
        75.0
    ],
    [ 
        "transportation", 
        51.0
    ],
    [ 
        "language (italian)", 
        1.0
    ],
    [ 
        "environment", 
        120.0
    ],
    [ 
        "animals (pets)", 
        33.0
    ],
    [ 
        "travel/tourism", 
        36.0
    ],
    [ 
        "hearing", 
        62.0
    ],
    [ 
        "immunization", 
        1.0
    ],
    [ 
        "training", 
        82.0
    ],
    [ 
        "children (in government care)", 
        31.0
    ],
    [ 
        "animals", 
        75.0
    ],
    [ 
        "human trafficking", 
        32.0
    ],
    [ 
        "police services", 
        38.0
    ],
    [ 
        "forestry", 
        5.0
    ],
    [ 
        "schizophrenia", 
        6.0
    ],
    [ 
        "parents", 
        6.0
    ],
    [ 
        "brain injury", 
        52.0
    ],
    [ 
        "housing", 
        77.0
    ],
    [ 
        "preschools", 
        8.0
    ],
    [ 
        "community development", 
        17.0
    ],
    [ 
        "repairs/maintenance", 
        12.0
    ],
    [ 
        "community living support", 
        4.0
    ],
    [ 
        "certification and licensing", 
        1.0
    ],
    [ 
        "equipment", 
        51.0
    ],
    [ 
        "neurofibromatosis", 
        2.0
    ],
    [ 
        "parkinsons disease", 
        13.0
    ],
    [ 
        "construction", 
        9.0
    ],
    [ 
        "weather", 
        9.0
    ],
    [ 
        "animals (wildlife)", 
        11.0
    ],
    [ 
        "regulation", 
        2.0
    ],
    [ 
        "cell phones", 
        3.0
    ],
    [ 
        "parks", 
        23.0
    ],
    [ 
        "significant others", 
        3.0
    ],
    [ 
        "foreign", 
        108.0
    ],
    [ 
        "respiratory conditions", 
        12.0
    ],
    [ 
        "nutrition", 
        58.0
    ],
    [ 
        "recreation", 
        62.0
    ],
    [ 
        "wilderness skills", 
        15.0
    ],
    [ 
        "fishing/hunting", 
        6.0
    ],
    [ 
        "eating disorders", 
        41.0
    ],
    [ 
        "adhd/add", 
        17.0
    ],
    [ 
        "science/technology", 
        13.0
    ],
    [ 
        "education (post-secondary)", 
        44.0
    ],
    [ 
        "heart disease", 
        40.0
    ],
    [ 
        "pregnancy", 
        148.0
    ],
    [ 
        "dental health", 
        61.0
    ],
    [ 
        "obesity", 
        8.0
    ],
    [ 
        "taxes", 
        67.0
    ],
    [ 
        "furniture/household goods", 
        99.0
    ],
    [ 
        "charities", 
        4.0
    ],
    [ 
        "form completion assistance", 
        1.0
    ],
    [ 
        "mood disorders", 
        25.0
    ],
    [ 
        "pro-life", 
        53.0
    ],
    [ 
        "disasters", 
        31.0
    ],
    [ 
        "government (municipal)", 
        74.0
    ],
    [ 
        "grief", 
        42.0
    ],
    [ 
        "life-threatening illness", 
        68.0
    ],
    [ 
        "parent-child conflict", 
        38.0
    ],
    [ 
        "epilepsy", 
        11.0
    ],
    [ 
        "tinnitus", 
        4.0
    ],
    [ 
        "anger management", 
        24.0
    ],
    [ 
        "parents (young)", 
        6.0
    ],
    [ 
        "counselling (peer/lay)", 
        5.0
    ],
    [ 
        "christmas", 
        53.0
    ],
    [ 
        "music", 
        38.0
    ],
    [ 
        "money management/budgeting", 
        17.0
    ],
    [ 
        "death/dying", 
        47.0
    ],
    [ 
        "emergency", 
        258.0
    ],
    [ 
        "food", 
        41.0
    ],
    [ 
        "unemployment", 
        67.0
    ],
    [ 
        "breast health", 
        7.0
    ],
    [ 
        "deaf and hard-of-hearing", 
        59.0
    ],
    [ 
        "missing persons", 
        1.0
    ],
    [ 
        "music therapy", 
        3.0
    ],
    [ 
        "celiac disease", 
        3.0
    ],
    [ 
        "funding", 
        36.0
    ],
    [ 
        "diabetes", 
        31.0
    ],
    [ 
        "spirituality", 
        6.0
    ],
    [ 
        "euthanasia", 
        5.0
    ],
    [ 
        "babies", 
        12.0
    ],
    [ 
        "haircuts/grooming", 
        4.0
    ],
    [ 
        "cystic fibrosis", 
        6.0
    ],
    [ 
        "williams syndrome", 
        1.0
    ],
    [ 
        "intestinal disorders", 
        10.0
    ],
    [ 
        "hemochromatosis", 
        1.0
    ],
    [ 
        "liver disease", 
        3.0
    ],
    [ 
        "obsessive compulsive disorder", 
        5.0
    ],
    [ 
        "palliative care", 
        8.0
    ],
    [ 
        "cars", 
        8.0
    ],
    [ 
        "social insurance", 
        17.0
    ],
    [ 
        "fetal alcohol and drug effects", 
        191.0
    ],
    [ 
        "immigration", 
        9.0
    ],
    [ 
        "chinese", 
        7.0
    ],
    [ 
        "language (chinese)", 
        4.0
    ],
    [ 
        "pain", 
        21.0
    ],
    [ 
        "autism", 
        198.0
    ],
    [ 
        "swimming", 
        1.0
    ],
    [ 
        "research", 
        3.0
    ],
    [ 
        "pharmacy", 
        3.0
    ],
    [ 
        "genetic disorders", 
        5.0
    ],
    [ 
        "suicide", 
        210.0
    ],
    [ 
        "administration", 
        1.0
    ],
    [ 
        "visiting", 
        15.0
    ],
    [ 
        "housing (condominium)", 
        2.0
    ],
    [ 
        "marriage", 
        4.0
    ],
    [ 
        "shopping assistance", 
        3.0
    ],
    [ 
        "debt/bankruptcy", 
        11.0
    ],
    [ 
        "property (intellectual)", 
        2.0
    ],
    [ 
        "heritage", 
        34.0
    ],
    [ 
        "birth", 
        19.0
    ],
    [ 
        "stress", 
        3.0
    ],
    [ 
        "tourette syndrome", 
        4.0
    ],
    [ 
        "injury", 
        62.0
    ],
    [ 
        "insurance", 
        5.0
    ],
    [ 
        "toys", 
        27.0
    ],
    [ 
        "employee assistance programs", 
        2.0
    ],
    [ 
        "pro-choice", 
        69.0
    ],
    [ 
        "social-economic issues", 
        31.0
    ],
    [ 
        "volunteering", 
        32.0
    ],
    [ 
        "government (regional)", 
        7.0
    ],
    [ 
        "stroke", 
        26.0
    ],
    [ 
        "addiction (gambling)", 
        29.0
    ],
    [ 
        "correctional facilities", 
        7.0
    ],
    [ 
        "reproductive health", 
        61.0
    ],
    [ 
        "health care (complementary)", 
        5.0
    ],
    [ 
        "libraries", 
        2.0
    ],
    [ 
        "food (meals)", 
        2.0
    ],
    [ 
        "neurological disorders", 
        3.0
    ],
    [ 
        "language (greek)", 
        1.0
    ],
    [ 
        "women", 
        22.0
    ],
    [ 
        "gangs", 
        20.0
    ],
    [ 
        "kidney disease", 
        8.0
    ],
    [ 
        "breastfeeding", 
        33.0
    ],
    [ 
        "inmates", 
        1.0
    ],
    [ 
        "guardianship", 
        21.0
    ],
    [ 
        "literacy", 
        42.0
    ],
    [ 
        "short stature", 
        2.0
    ],
    [ 
        "community centres", 
        13.0
    ],
    [ 
        "conflict resolution", 
        2.0
    ],
    [ 
        "anxiety", 
        10.0
    ],
    [ 
        "divorce/separation", 
        25.0
    ],
    [ 
        "prader-willi syndrome", 
        2.0
    ],
    [ 
        "postpartum depression", 
        6.0
    ],
    [ 
        "nonprofit agencies", 
        8.0
    ],
    [ 
        "government (federal)", 
        66.0
    ],
    [ 
        "government (provincial)", 
        60.0
    ],
    [ 
        "chronic fatigue syndrome", 
        2.0
    ],
    [ 
        "intervention", 
        24.0
    ],
    [ 
        "midwifery", 
        4.0
    ],
    [ 
        "recycling", 
        3.0
    ],
    [ 
        "fibromyalgia", 
        6.0
    ],
    [ 
        "myasthenia gravis", 
        5.0
    ],
    [ 
        "multiple sclerosis", 
        13.0
    ],
    [ 
        "muscular dystrophy", 
        9.0
    ],
    [ 
        "cushings syndrome", 
        1.0
    ],
    [ 
        "abortion", 
        10.0
    ],
    [ 
        "christian", 
        2.0
    ],
    [ 
        "theatre", 
        5.0
    ],
    [ 
        "neuromuscular conditions", 
        5.0
    ],
    [ 
        "internet", 
        9.0
    ],
    [ 
        "addisons disease", 
        1.0
    ],
    [ 
        "media", 
        3.0
    ],
    [ 
        "osteoporosis", 
        9.0
    ],
    [ 
        "lost and found", 
        3.0
    ],
    [ 
        "dance", 
        18.0
    ],
    [ 
        "sports", 
        23.0
    ],
    [ 
        "blood pressure", 
        8.0
    ],
    [ 
        "family planning", 
        98.0
    ],
    [ 
        "documents", 
        3.0
    ],
    [ 
        "transplants", 
        12.0
    ],
    [ 
        "polio", 
        4.0
    ],
    [ 
        "compensation", 
        8.0
    ],
    [ 
        "nursing care", 
        9.0
    ],
    [ 
        "retinitis pigmentosa", 
        2.0
    ],
    [ 
        "scleroderma", 
        3.0
    ],
    [ 
        "skin conditions", 
        3.0
    ],
    [ 
        "prostate disease", 
        2.0
    ],
    [ 
        "multiple births", 
        6.0
    ],
    [ 
        "addiction (sex)", 
        7.0
    ],
    [ 
        "body parts", 
        4.0
    ],
    [ 
        "residential care", 
        99.0
    ],
    [ 
        "respite care", 
        70.0
    ],
    [ 
        "noise", 
        4.0
    ],
    [ 
        "residential programs", 
        26.0
    ],
    [ 
        "parking", 
        3.0
    ],
    [ 
        "spina bifida/hydrocephalus", 
        6.0
    ],
    [ 
        "peace", 
        3.0
    ],
    [ 
        "citizenship", 
        4.0
    ],
    [ 
        "employment resource centres", 
        2.0
    ],
    [ 
        "childbirth", 
        37.0
    ],
    [ 
        "thalassemia", 
        2.0
    ],
    [ 
        "thyroid conditions", 
        1.0
    ],
    [ 
        "sleep disorders", 
        2.0
    ],
    [ 
        "tutoring", 
        4.0
    ],
    [ 
        "print handicap", 
        4.0
    ],
    [ 
        "ostomy", 
        3.0
    ],
    [ 
        "gardening", 
        25.0
    ],
    [ 
        "banking", 
        3.0
    ],
    [ 
        "art therapy", 
        6.0
    ],
    [ 
        "graffiti", 
        2.0
    ],
    [ 
        "language (sign)", 
        7.0
    ],
    [ 
        "urinary disorders", 
        3.0
    ],
    [ 
        "cerebral palsy", 
        11.0
    ],
    [ 
        "refugees", 
        11.0
    ],
    [ 
        "self-defense", 
        5.0
    ],
    [ 
        "down syndrome", 
        10.0
    ],
    [ 
        "huntington disease", 
        13.0
    ],
    [ 
        "government", 
        1.0
    ],
    [ 
        "assertiveness", 
        4.0
    ],
    [ 
        "cross-dressing", 
        1.0
    ],
    [ 
        "labour relations", 
        23.0
    ],
    [ 
        "deafblind", 
        10.0
    ],
    [ 
        "physiotherapy", 
        9.0
    ],
    [ 
        "naturopathy", 
        4.0
    ],
    [ 
        "employment search assistance", 
        59.0
    ],
    [ 
        "eyeglasses", 
        2.0
    ],
    [ 
        "justice system", 
        3.0
    ],
    [ 
        "occupational therapy", 
        6.0
    ],
    [ 
        "day programs", 
        45.0
    ],
    [ 
        "housing (temporary)", 
        16.0
    ],
    [ 
        "jewish", 
        5.0
    ],
    [ 
        "miscarriage", 
        3.0
    ],
    [ 
        "notary services", 
        3.0
    ],
    [ 
        "aboriginal", 
        9.0
    ],
    [ 
        "festivals/public events", 
        3.0
    ],
    [ 
        "premenstrual syndrome", 
        2.0
    ],
    [ 
        "infertility", 
        1.0
    ],
    [ 
        "paramedical services", 
        2.0
    ],
    [ 
        "privacy", 
        7.0
    ],
    [ 
        "consulting", 
        1.0
    ],
    [ 
        "hypnosis", 
        1.0
    ],
    [ 
        "wills", 
        3.0
    ],
    [ 
        "search/rescue", 
        10.0
    ],
    [ 
        "immigrants/ethnocultural groups", 
        5.0
    ],
    [ 
        "personal/attendant care", 
        1.0
    ],
    [ 
        "name change", 
        1.0
    ],
    [ 
        "personal identity", 
        37.0
    ],
    [ 
        "employment preparation", 
        1.0
    ],
    [ 
        "addiction (internet)", 
        4.0
    ],
    [ 
        "parents (single)", 
        1.0
    ],
    [ 
        "codependency", 
        11.0
    ],
    [ 
        "victim services (police-based)", 
        7.0
    ],
    [ 
        "turner syndrome", 
        1.0
    ],
    [ 
        "fraud", 
        7.0
    ],
    [ 
        "rare diseases", 
        6.0
    ],
    [ 
        "acupuncture", 
        3.0
    ],
    [ 
        "chinese medicine", 
        2.0
    ],
    [ 
        "education (public awareness)", 
        4.0
    ],
    [ 
        "advertising", 
        1.0
    ],
    [ 
        "homicide", 
        2.0
    ],
    [ 
        "property (real estate)", 
        7.0
    ],
    [ 
        "stuttering", 
        1.0
    ],
    [ 
        "encephalitis", 
        2.0
    ],
    [ 
        "education (upgrading)", 
        3.0
    ],
    [ 
        "endocrine disorders", 
        2.0
    ],
    [ 
        "translation/interpretation", 
        4.0
    ],
    [ 
        "pituitary disorders", 
        2.0
    ],
    [ 
        "bicycling", 
        14.0
    ],
    [ 
        "demographics", 
        1.0
    ],
    [ 
        "cooperatives", 
        2.0
    ],
    [ 
        "gambling", 
        9.0
    ],
    [ 
        "offenders", 
        1.0
    ],
    [ 
        "housing (cohousing)", 
        1.0
    ],
    [ 
        "spinal cord injury", 
        10.0
    ],
    [ 
        "information and referral", 
        2.0
    ],
    [ 
        "accounting", 
        5.0
    ],
    [ 
        "mediation", 
        9.0
    ],
    [ 
        "arbitration", 
        2.0
    ],
    [ 
        "telemarketing", 
        1.0
    ],
    [ 
        "burns", 
        8.0
    ],
    [ 
        "community corrections", 
        3.0
    ],
    [ 
        "driving", 
        24.0
    ],
    [ 
        "driving (impaired)", 
        10.0
    ],
    [ 
        "blood disease", 
        2.0
    ],
    [ 
        "homeopathy", 
        4.0
    ],
    [ 
        "fundraising", 
        1.0
    ],
    [ 
        "language (aboriginal)", 
        3.0
    ],
    [ 
        "speech therapy", 
        2.0
    ],
    [ 
        "balance disorders", 
        2.0
    ],
    [ 
        "victim services", 
        4.0
    ],
    [ 
        "temperomandibular disorder", 
        1.0
    ],
    [ 
        "books", 
        6.0
    ],
    [ 
        "south asian", 
        2.0
    ],
    [ 
        "southeast asian", 
        2.0
    ],
    [ 
        "giftedness", 
        2.0
    ],
    [ 
        "blankets/bedding", 
        3.0
    ],
    [ 
        "energy", 
        5.0
    ],
    [ 
        "abuse (financial)", 
        3.0
    ],
    [ 
        "military", 
        9.0
    ],
    [ 
        "tobacco", 
        2.0
    ],
    [ 
        "protection orders", 
        3.0
    ],
    [ 
        "writers", 
        2.0
    ],
    [ 
        "alcoholic beverages", 
        6.0
    ],
    [ 
        "language (swahili)", 
        1.0
    ],
    [ 
        "immunodeficiency (genetic/inherited)", 
        2.0
    ],
    [ 
        "japanese", 
        10.0
    ],
    [ 
        "family justice centres", 
        2.0
    ],
    [ 
        "detoxification (residential)", 
        1.0
    ],
    [ 
        "delousing", 
        18.0
    ],
    [ 
        "education (continuing)", 
        2.0
    ],
    [ 
        "hospices", 
        3.0
    ],
    [ 
        "west nile virus", 
        1.0
    ],
    [ 
        "facial differences/disfigurement", 
        5.0
    ],
    [ 
        "ataxia", 
        2.0
    ],
    [ 
        "celibacy", 
        1.0
    ],
    [ 
        "camping", 
        1.0
    ],
    [ 
        "workers", 
        16.0
    ],
    [ 
        "students", 
        16.0
    ],
    [ 
        "sjogrens syndrome", 
        1.0
    ],
    [ 
        "spanish", 
        3.0
    ],
    [ 
        "addiction (crime)", 
        1.0
    ],
    [ 
        "language (japanese)", 
        3.0
    ],
    [ 
        "cannabis", 
        1.0
    ],
    [ 
        "marine", 
        11.0
    ],
    [ 
        "sailing", 
        1.0
    ],
    [ 
        "community corrections (restorative justice)", 
        2.0
    ],
    [ 
        "supervision", 
        1.0
    ],
    [ 
        "victim services (community-based)", 
        3.0
    ],
    [ 
        "firefighting", 
        5.0
    ],
    [ 
        "mentoring", 
        1.0
    ]
]
```