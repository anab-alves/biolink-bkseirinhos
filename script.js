window.addEventListener('DOMContentLoaded', () => {
    // Fade-in nos elementos
    document.querySelectorAll('.fade-in').forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 300 + i * 200);
    });

    // Mensagem de boas-vindas temporária
    const welcome = document.querySelector('.welcome-message');
    setTimeout(() => {
        welcome.classList.add('visible');
    }, 200);
    setTimeout(() => {
        welcome.classList.remove('visible');
    }, 3200);
});