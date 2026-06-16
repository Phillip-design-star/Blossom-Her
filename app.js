// ========== SECTION NAVIGATION ==========
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        window.scrollTo(0, 0);
    }
    closeMobileMenu();
}

// ========== MOBILE MENU ==========
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.style.display = mobileNav.style.display === 'none' ? 'flex' : 'none';
}

function closeMobileMenu() {
    document.getElementById('mobileNav').style.display = 'none';
}

// ========== KEYBOARD NAVIGATION ==========
function handleKeyPress(event, section) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        if (typeof section === 'function') {
            section();
        } else if (section) {
            showSection(section);
        } else {
            toggleMobileMenu();
        }
    }
}

// ========== HIV RISK CALCULATOR ==========
function togglePartnerFields() {
    const sexuallyActive = document.getElementById('sexuallyActive').value;
    document.getElementById('partnersGroup').style.display = sexuallyActive === 'high' ? 'block' : 'none';
    document.getElementById('condomGroup').style.display = sexuallyActive === 'high' ? 'block' : 'none';
}

function calculateRisk(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const residence = document.getElementById('residence').value;
    const sexuallyActive = document.getElementById('sexuallyActive').value;
    const tested = document.getElementById('tested').value;
    const statusKnown = document.getElementById('statusKnown').value;

    let riskScore = 0;
    riskScore += (age === 'high' ? 3 : age === 'medium' ? 2 : 0);
    riskScore += (residence === 'high' ? 2 : 0);
    riskScore += (sexuallyActive === 'high' ? 3 : 0);

    if (sexuallyActive === 'high') {
        const partners = document.getElementById('partners').value;
        const condomUse = document.getElementById('condomUse').value;
        riskScore += (partners === 'high' ? 2 : partners === 'medium' ? 1 : 0);
        riskScore += (condomUse === 'high' ? 2 : 0);
    }

    riskScore += (tested === 'high' ? 2 : tested === 'medium' ? 1 : 0);
    riskScore += (statusKnown === 'high' ? 2 : 0);

    const resultBox = document.getElementById('riskResult');
    resultBox.style.display = 'block';

    if (riskScore >= 12) {
        resultBox.className = 'result-box result-high';
        document.getElementById('riskTitle').textContent = '🔴 HIGH RISK';
        document.getElementById('riskText').textContent = 'Based on your answers, you may be at higher risk. Please consider: Getting tested immediately, Talking to a health worker about PrEP if sexually active, Using condoms consistently';
    } else if (riskScore >= 7) {
        resultBox.className = 'result-box result-medium';
        document.getElementById('riskTitle').textContent = '🟡 MODERATE RISK';
        document.getElementById('riskText').textContent = 'You should: Get tested if you haven\'t recently, Use protection consistently, Consider talking to a health worker about your sexual health';
    } else {
        resultBox.className = 'result-box result-low';
        document.getElementById('riskTitle').textContent = '🟢 LOWER RISK';
        document.getElementById('riskText').textContent = 'Keep up the good practices! Continue using protection, Get tested regularly (at least annually), Stay informed about sexual health';
    }

    document.getElementById('riskActions').innerHTML = '<a href="#clinics" onclick="showSection(\'clinics\')" style="color: inherit; text-decoration: underline; cursor: pointer;">→ Find a clinic near you</a>';
}

// ========== CLINIC FINDER ==========
function filterClinics() {
    const province = document.getElementById('provinceSelect').value;
    const clinicItems = document.querySelectorAll('.clinic-item');
    let visibleCount = 0;

    clinicItems.forEach(item => {
        if (province === 'all' || item.getAttribute('data-province') === province) {
            item.style.display = 'block';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    document.getElementById('noClinicMessage').style.display = visibleCount === 0 ? 'block' : 'none';
}

// ========== MYTH BUSTER GAME ==========
let currentMythIndex = 0;
let mythScore = 0;
let mythsAnswered = 0;

function initMythGame() {
    if (typeof mythsData !== 'undefined' && mythsData.length > 0) {
        currentMythIndex = 0;
        mythScore = 0;
        mythsAnswered = 0;
        showMyth();
    }
}

function showMyth() {
    if (typeof mythsData === 'undefined' || mythsData.length === 0) return;

    const myth = mythsData[currentMythIndex];
    document.getElementById('mythStatement').textContent = myth.statement;
    updateMythScore();
}

function answerMyth(userAnswer) {
    if (typeof mythsData === 'undefined' || mythsData.length === 0) return;

    const myth = mythsData[currentMythIndex];
    if (userAnswer === myth.isTrue) {
        mythScore++;
    }
    mythsAnswered++;
    currentMythIndex = (currentMythIndex + 1) % mythsData.length;
    showMyth();
}

function updateMythScore() {
    document.getElementById('scoreDisplay').textContent = `Score: ${mythScore}/${mythsAnswered}`;
}

function resetMythGame() {
    initMythGame();
}

// ========== FAQ SECTION ==========
function initFAQ() {
    if (typeof faqData === 'undefined' || faqData.length === 0) return;

    const faqContainer = document.getElementById('faqContainer');
    faqContainer.innerHTML = '';

    faqData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <button class="faq-question" onclick="toggleFAQ(this)" aria-expanded="false">
                <span>${item.question}</span>
                <span class="faq-toggle">▼</span>
            </button>
            <div class="faq-answer">${item.answer}</div>
        `;
        faqContainer.appendChild(faqItem);
    });
}

function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isOpen = faqItem.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
    if (!isOpen) {
        faqItem.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
    } else {
        button.setAttribute('aria-expanded', 'false');
    }
}

// ========== QUESTION SUBMISSION ==========
function submitQuestion(event) {
    event.preventDefault();

    const questionText = document.getElementById('questionText').value;
    const category = document.getElementById('questionCategory').value;

    // Validate question
    if (!questionText.trim()) {
        alert('Please enter your question.');
        return;
    }

    // Save to localStorage (for demo purposes)
    const questions = JSON.parse(localStorage.getItem('questions')) || [];
    questions.push({
        question: questionText,
        category: category,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('questions', JSON.stringify(questions));

    // Show success message
    document.getElementById('questionSuccess').style.display = 'block';
    document.getElementById('questionForm').reset();

    setTimeout(() => {
        document.getElementById('questionSuccess').style.display = 'none';
    }, 5000);
}

// ========== PEER EDUCATOR ==========
function showPeerEducator() {
    const modal = document.getElementById('peerEducatorModal');
    modal.style.display = 'flex';
    modal.classList.add('show');
}

function closePeerEducator() {
    const modal = document.getElementById('peerEducatorModal');
    modal.style.display = 'none';
    modal.classList.remove('show');
}

window.onclick = function (event) {
    const modal = document.getElementById('peerEducatorModal');
    if (event.target === modal) {
        closePeerEducator();
    }
};

// ========== CLINIC INITIALIZATION ==========
function initClinics() {
    if (typeof clinicsData === 'undefined' || clinicsData.length === 0) return;

    const clinicList = document.getElementById('clinicList');
    clinicList.innerHTML = '';

    clinicsData.forEach(clinic => {
        const clinicItem = document.createElement('div');
        clinicItem.className = 'clinic-item';
        clinicItem.setAttribute('data-province', clinic.province);
        clinicItem.innerHTML = `
            <div class="clinic-info">
                <h4>${clinic.icon} ${clinic.name}</h4>
                <div class="clinic-meta">${clinic.location}</div>
                <div class="clinic-meta">Services: ${clinic.services}</div>
            </div>
            <span class="clinic-status ${clinic.status === 'open' ? 'status-open' : 'status-busy'}">
                ${clinic.status === 'open' ? 'Open Now' : 'Busy'}
            </span>
        `;
        clinicList.appendChild(clinicItem);
    });
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initMythGame();
    initFAQ();
    initClinics();
});