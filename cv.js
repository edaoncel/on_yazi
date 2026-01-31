function openModal(id) {
    const targetModal = document.getElementById(id);
    if (targetModal) {
        targetModal.classList.add('active');
        document.body.classList.add('modal-open');
    }
}

function closeModal(id) {
    const targetModal = document.getElementById(id);
    if (targetModal) {
        targetModal.classList.remove('active');
        
        if (!document.querySelector('.modal.active')) {
            document.body.classList.remove('modal-open');
        }

        const iframe = targetModal.querySelector('iframe');
        if (iframe) {
            const src = iframe.src;
            iframe.src = src;
        }
    }
}

async function changeLanguage(lang) {
    try {
        const response = await fetch('lang.json');
        const data = await response.json();
        const content = data[lang];

        // Header & Hakkımda
        document.querySelector('.cv-name').innerText = content.header_name;
        document.querySelector('.cv-title').innerText = content.header_title;
        document.querySelector('.lang-about-title').innerText = content.about_h2;
        document.querySelector('.lang-about-text').innerText = content.about_p;

        // Eğitim & Deneyim
        document.querySelector('.lang-edu-title').innerText = content.edu_h2;
        document.querySelector('.lang-edu-dept').innerText = content.edu_dept;
        document.querySelector('.lang-edu-pedagogy').innerText = content.edu_pedagogy;
        document.querySelector('.lang-exp-title').innerText = content.exp_h2;
        document.getElementById('exp-1').innerHTML = content.exp_1;
        document.getElementById('exp-2').innerHTML = content.exp_2;
        document.getElementById('exp-3').innerHTML = content.exp_3;
        document.getElementById('exp-4').innerHTML = content.exp_4;
        document.getElementById('exp-5').innerHTML = content.exp_5;

        // Diğer Başlıklar
        document.querySelector('.lang-cert-title').innerText = content.cert_h2;
        document.querySelector('.lang-contact-title').innerText = content.contact_h2;
        document.querySelector('.lang-skills-title').innerText = content.skills_h2;
        document.querySelector('.lang-projects-title').innerText = content.projects_h2;
        document.querySelector('.lang-langs-title').innerText = content.lang_h2;
        document.querySelector('.lang-accounts-title').innerText = content.acc_h2;
        document.querySelector('.lang-en-level').innerText = content.lang_en_level;
        document.querySelector('.lang-skills-db').innerHTML = content.skills_db;
        document.querySelector('.lang-skills-ai').innerHTML = content.skills_ai;

        // Proje Modalları
        document.querySelector('.lang-proj1-title').innerText = content.proj1_title;
        document.querySelector('.lang-proj2-title').innerText = content.proj2_title;
        document.querySelector('.lang-proj1-modal-title').innerText = content.proj1_modal_title;
        document.querySelector('.lang-proj1-desc').innerText = content.proj1_desc;
        document.querySelector('.lang-proj2-modal-title').innerText = content.proj2_modal_title;
        document.querySelector('.lang-proj2-desc').innerText = content.proj2_desc;
        
        // GitHub Butonları & PDF & QR
        document.querySelectorAll('.lang-github-text').forEach(btn => btn.innerHTML = content.github_text);
        document.querySelector('.lang-download-btn').innerHTML = content.download_btn;
        document.querySelector('.qr-hint').innerHTML = content.qr_code;

        // Dil Değiştirme Butonları
        document.getElementById('btn-en').style.display = lang === 'en' ? 'none' : 'inline-flex';
        document.getElementById('btn-tr').style.display = lang === 'tr' ? 'none' : 'inline-flex';

        localStorage.setItem('selectedLang', lang);
    } catch (e) { console.error("Dil yükleme hatası:", e); }
}

function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-icon').classList.replace('fa-moon', 'fa-sun');
    }
};

function downloadCV() {
    window.scrollTo(0, 0);

    const element = document.querySelector('.cv-wrapper');
    
    const opt = {
        margin: 0,
        filename: 'Eda_Oncel_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true, 
            scrollY: 0, 
            windowWidth: document.documentElement.offsetWidth,
            letterRendering: true
        },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save();
}

function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.classList.add('modal-open');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.classList.remove('modal-open');
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
};