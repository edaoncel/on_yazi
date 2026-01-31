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
