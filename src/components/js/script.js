export function setupMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            const open = navbar.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', String(open));
        });
    }
}

export function setupNavLinks() {
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');

    // close the mobile menu after choosing a destination
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // scroll-spy: highlight the nav link of the section in view
    const sections = [...navLinks]
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navLinks.forEach(link => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === `#${entry.target.id}`
                );
            });
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(section => observer.observe(section));
}

// json-card boot animation: the profile typewriter and the window
// title/body prints run only while .play is set — added when a card
// enters the viewport, removed once it fully leaves so the next
// scroll-in replays it from the start
export function setupCardReplay() {
    const cards = document.querySelectorAll('.terminal-typing, .window-anim');
    if (!cards.length) return;

    if (!('IntersectionObserver' in window)) {
        cards.forEach(card => card.classList.add('play'));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.2) {
                entry.target.classList.add('play');
            } else if (entry.intersectionRatio === 0) {
                entry.target.classList.remove('play');
            }
        });
    }, { threshold: [0, 0.2] });

    cards.forEach(card => observer.observe(card));
}

// fade-up + settle as elements enter the viewport, staggered per grid
// (progressive enhancement: without JS nothing is hidden, and
// reduced-motion users are left alone)
export function setupReveals() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = document.querySelectorAll(
        '.home-content > *, .home-visual, .section .kicker, .section h2, ' +
        '.window, .project-card, .skill-group, .footer'
    );

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
            // drop the stagger delay once revealed so hover transitions stay snappy
            setTimeout(() => { entry.target.style.transitionDelay = ''; }, 1100);
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });

    const perParent = new Map();
    targets.forEach(target => {
        const n = perParent.get(target.parentNode) || 0;
        perParent.set(target.parentNode, n + 1);
        target.classList.add('reveal');
        target.style.transitionDelay = n * 80 + 'ms';
        observer.observe(target);
    });
}

