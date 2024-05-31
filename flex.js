function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

document.querySelector('.footer').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});