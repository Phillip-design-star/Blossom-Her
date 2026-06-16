// ========== CLINIC DATA ==========
const clinicsData = [
    {
        name: 'University Teaching Hospital (UTH)',
        province: 'lusaka',
        location: 'Lusaka • Youth Corner • Free Services',
        services: 'HIV testing, contraception, STI treatment, counseling',
        status: 'open',
        icon: '🏥'
    },
    {
        name: 'Kamwala Health Centre',
        province: 'lusaka',
        location: 'Lusaka • Adolescent-Friendly',
        services: 'Family planning, antenatal, HIV care',
        status: 'open',
        icon: '🏥'
    },
    {
        name: 'Ndola Teaching Hospital',
        province: 'copperbelt',
        location: 'Ndola, Copperbelt • Youth Services',
        services: 'Comprehensive SRH, peer counseling',
        status: 'busy',
        icon: '🏥'
    },
    {
        name: 'Livingstone General Hospital',
        province: 'southern',
        location: 'Livingstone, Southern • Youth Corner',
        services: 'HIV testing, condoms, pregnancy testing',
        status: 'open',
        icon: '🏥'
    },
    {
        name: 'Chipata General Hospital',
        province: 'eastern',
        location: 'Chipata, Eastern',
        services: 'HIV testing, STI screening, family planning',
        status: 'open',
        icon: '🏥'
    },
    {
        name: 'Kabwe General Hospital',
        province: 'central',
        location: 'Kabwe, Central • Adolescent Clinic',
        services: 'Sexual health, contraception, HIV counseling',
        status: 'open',
        icon: '🏥'
    },
    {
        name: 'Kasama General Hospital',
        province: 'northern',
        location: 'Kasama, Northern • Youth Friendly',
        services: 'HIV testing, reproductive health, STI care',
        status: 'open',
        icon: '🏥'
    },
    {
        name: 'Solwezi General Hospital',
        province: 'northwestern',
        location: 'Solwezi, Northwestern',
        services: 'Family planning, HIV testing, counseling',
        status: 'open',
        icon: '🏥'
    },
    {
        name: 'Mongu General Hospital',
        province: 'western',
        location: 'Mongu, Western • Youth Corner',
        services: 'Sexual health, contraception, HIV care',
        status: 'open',
        icon: '🏥'
    },
    {
        name: 'Chilenje Community Health Centre',
        province: 'lusaka',
        location: 'Lusaka • Community Based',
        services: 'General health, referrals, counseling',
        status: 'open',
        icon: '🏥'
    },
    {
        name: 'Kituwe Health Centre',
        province: 'copperbelt',
        location: 'Kitwe, Copperbelt',
        services: 'HIV testing, antenatal, STI screening',
        status: 'open',
        icon: '🏥'
    },
    {
        name: 'Mazabuka District Hospital',
        province: 'southern',
        location: 'Mazabuka, Southern',
        services: 'Reproductive health, HIV care, counseling',
        status: 'open',
        icon: '🏥'
    }
];

// ========== MYTH BUSTER DATA ==========
const mythsData = [
    {
        statement: 'You can get HIV from kissing someone with HIV.',
        isTrue: false,
        explanation: 'FALSE: HIV is not transmitted through kissing. It spreads through blood, sexual fluids, and breast milk.'
    },
    {
        statement: 'Using a condom correctly every time prevents both HIV and pregnancy.',
        isTrue: true,
        explanation: 'TRUE: When used correctly, condoms are 98% effective at preventing both HIV and pregnancy.'
    },
    {
        statement: 'A young person under 18 cannot get HIV testing without parental consent in Zambia.',
        isTrue: false,
        explanation: 'FALSE: Young people have the right to confidential HIV testing and treatment in Zambia.'
    },
    {
        statement: 'PrEP (Pre-exposure prophylaxis) is a medication that can prevent HIV infection.',
        isTrue: true,
        explanation: 'TRUE: PrEP is a daily medication for HIV-negative people at high risk of getting HIV.'
    },
    {
        statement: 'If you have HIV and take ARVs consistently, you cannot pass HIV to a sexual partner.',
        isTrue: true,
        explanation: 'TRUE: This is called "Undetectable = Untransmittable" (U=U). People with undetectable viral loads cannot transmit HIV sexually.'
    },
    {
        statement: 'Menstrual period blood can transmit HIV more easily than other blood.',
        isTrue: false,
        explanation: 'FALSE: Menstrual blood does not transmit HIV any differently than other blood. Only blood-to-blood contact transmits HIV.'
    },
    {
        statement: 'Adolescents should be at least 16 before they can access contraception in Zambia.',
        isTrue: false,
        explanation: 'FALSE: Young people have the right to sexual and reproductive health services regardless of age.'
    },
    {
        statement: 'PEP (Post-exposure prophylaxis) must be taken within 72 hours of potential HIV exposure.',
        isTrue: true,
        explanation: 'TRUE: PEP is most effective when started within 72 hours of possible HIV exposure.'
    },
    {
        statement: 'STIs and HIV are the same thing.',
        isTrue: false,
        explanation: 'FALSE: STIs (Sexually Transmitted Infections) are different from HIV. You can have one without the other.'
    },
    {
        statement: 'Birth control pills protect against HIV.',
        isTrue: false,
        explanation: 'FALSE: Birth control only prevents pregnancy, not STIs or HIV. You need condoms for protection.'
    }
];

// ========== FAQ DATA ==========
const faqData = [
    {
        question: 'When should I get tested for HIV?',
        answer: 'You should get tested if: You are sexually active, You have had unprotected sex, You want to know your status before starting a relationship, You are pregnant (all pregnant women should test), You have symptoms like fever, rash, or fatigue. Regular testing (at least annually) is recommended for sexually active people.'
    },
    {
        question: 'What do I do if I think I\'ve been exposed to HIV?',
        answer: 'Act immediately! PEP (Post-Exposure Prophylaxis) must be started within 72 hours of exposure. Go to any hospital or clinic and tell them you need PEP. Bring a trusted adult if you\'re under 18. PEP involves taking antiretroviral drugs for 28 days. It is free at government health facilities in Zambia.'
    },
    {
        question: 'Can I get pregnant the first time I have sex?',
        answer: 'YES! You can get pregnant the very first time you have sex. Pregnancy can happen at any point in a girl\'s cycle. The only sure way to prevent pregnancy is abstinence. Other methods include birth control pills, injections, implants, IUDs, and condoms (which also protect against STIs and HIV).'
    },
    {
        question: 'Are health services free for young people in Zambia?',
        answer: 'Yes! Youth-friendly health services are provided FREE at government health facilities in Zambia. This includes HIV testing, contraception, STI screening, and counseling. You do not need permission from your parents, and your information is confidential.'
    },
    {
        question: 'What are the signs of an STI?',
        answer: 'Common signs include: Unusual discharge from genitals, Burning or pain when urinating, Sores, bumps, or warts around genitals, Lower abdominal pain, Itching or redness. If you have any of these, visit a clinic. Many STIs can be cured with treatment!'
    },
    {
        question: 'Can girls and boys talk to peer educators anonymously?',
        answer: 'Yes! Our peer educators are trained to answer your questions confidentially and without judgment. You can chat via WhatsApp anonymously, and no one will know unless you tell them.'
    },
    {
        question: 'What should I do if I\'m in an abusive relationship?',
        answer: 'You can: Call 211 (toll-free) to report abuse, Text 211 if calling is not safe, Visit any health facility for help and counseling, Talk to a trusted adult. Remember: Abuse is never your fault, and you deserve to be safe.'
    },
    {
        question: 'Can I get HIV from sharing food or drinks?',
        answer: 'NO! HIV cannot be transmitted through sharing food, drinks, utensils, or toilets. It also cannot spread through coughing, sneezing, or being in the same room as someone with HIV. HIV can only spread through blood, sexual fluids, and breast milk.'
    }
];