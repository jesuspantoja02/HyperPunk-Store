document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-tienda, .nav-productos');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));
            nav.classList.toggle('is-open');
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('is-open');
            });
        });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-tienda a, .nav-productos a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.endsWith(currentPage) || (currentPage === 'index.html' && href.endsWith('index.html')))) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});
