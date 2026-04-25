function navigate(pageId) {
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));

    setTimeout(() => {
        document.getElementById(pageId).classList.add('active');
    }, 10);

    const activeNav = document.getElementById('nav-' + pageId);
    if (activeNav) {
        activeNav.classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}