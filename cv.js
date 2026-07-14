async function changeLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    
    const response = await fetch('lang.json');
    const data = await response.json();
    const content = data[lang];

    const enBtn = document.getElementById('en-btn');
    const trBtn = document.getElementById('tr-btn');
    
    if (enBtn && trBtn) {
        enBtn.style.display = (lang === 'tr') ? 'inline-block' : 'none';
        trBtn.style.display = (lang === 'en') ? 'inline-block' : 'none';
    }

    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (content[key]) {
            el.innerHTML = content[key];
        }
    });
}

function downloadCV() {
    window.print();
}

window.onload = () => {
    const savedLang = localStorage.getItem('selectedLang') || 'tr';
    changeLanguage(savedLang);
};