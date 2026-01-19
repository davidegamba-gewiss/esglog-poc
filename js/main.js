// =====================================================
// ESGlog - Main JavaScript
// =====================================================

document.addEventListener('DOMContentLoaded', function() {

    // =====================================================
    // MENU MOBILE TOGGLE
    // =====================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);

            // Animazione hamburger
            const spans = menuToggle.querySelectorAll('span');
            if (isExpanded) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Chiudi menu mobile quando si clicca su un link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // =====================================================
    // MODAL LOGIN
    // =====================================================
    const loginBtn = document.getElementById('loginBtn');
    const loginLink = document.getElementById('loginLink');
    const loginModal = document.getElementById('loginModal');
    const closeModal = loginModal ? loginModal.querySelector('.close') : null;

    function openModal() {
        if (loginModal) {
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModalFunc() {
        if (loginModal) {
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    if (loginBtn && loginBtn.textContent === 'Accedi') {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    if (loginModal) {
        loginModal.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                closeModalFunc();
            }
        });
    }

    // ESC key per chiudere modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && loginModal && loginModal.classList.contains('active')) {
            closeModalFunc();
        }
    });

    // =====================================================
    // SMOOTH SCROLL
    // =====================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#registrazione') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // =====================================================
    // HEADER SCROLL EFFECT
    // =====================================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
        }

        lastScroll = currentScroll;
    });

    // =====================================================
    // FORM VALIDATION FEEDBACK
    // =====================================================
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], select[required]');

        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.style.borderColor = '#f56565';
                } else {
                    this.style.borderColor = '#48bb78';
                }
            });

            input.addEventListener('input', function() {
                if (this.value.trim() !== '') {
                    this.style.borderColor = '#48bb78';
                }
            });
        });

        // Email validation
        const emailInputs = form.querySelectorAll('input[type="email"]');
        emailInputs.forEach(input => {
            input.addEventListener('blur', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.value)) {
                    this.style.borderColor = '#f56565';
                } else {
                    this.style.borderColor = '#48bb78';
                }
            });
        });
    });

    // =====================================================
    // ANIMATIONS ON SCROLL
    // =====================================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Applica animazioni a card ed elementi
    const animatedElements = document.querySelectorAll('.esg-card, .mission-grid, .dashboard-card, .plan-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // =====================================================
    // DASHBOARD SIDEBAR ACTIVE STATE
    // =====================================================
    const currentPage = window.location.pathname.split('/').pop();
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    sidebarLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'dashboard.html')) {
            link.classList.add('active');
        }
    });

    // =====================================================
    // USER GREETING
    // =====================================================
    const userGreeting = document.getElementById('userGreeting');
    if (userGreeting && auth && auth.isAuthenticated()) {
        const user = auth.getCurrentUser();
        userGreeting.textContent = `Benvenuto, ${user.companyName}`;
    }

    // =====================================================
    // PLAN BADGE
    // =====================================================
    const planBadge = document.getElementById('currentPlan');
    if (planBadge && auth && auth.isAuthenticated()) {
        const user = auth.getCurrentUser();
        planBadge.textContent = user.plan.toUpperCase();
        planBadge.className = 'badge badge-' + (user.plan === 'free' ? 'info' : user.plan === 'pro' ? 'warning' : 'success');
    }

    // =====================================================
    // TOOLTIPS (semplici)
    // =====================================================
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip-popup';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                font-size: 0.9rem;
                z-index: 1000;
                white-space: nowrap;
            `;
            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
            tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';

            this._tooltip = tooltip;
        });

        el.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });

    // =====================================================
    // NEWSLETTER POPUP (opzionale - dopo 30 secondi)
    // =====================================================
    setTimeout(function() {
        const newsletterShown = sessionStorage.getItem('newsletterShown');
        if (!newsletterShown && !auth.isAuthenticated()) {
            // Potresti mostrare un popup newsletter qui
            sessionStorage.setItem('newsletterShown', 'true');
        }
    }, 30000);

    // =====================================================
    // CONSOLE INFO
    // =====================================================
    console.log('%cESGlog PoC', 'color: #2d9f7c; font-size: 24px; font-weight: bold;');
    console.log('%cQuesta è una versione PoC (Proof of Concept) per Business Plan Competition', 'color: #2c5aa0; font-size: 14px;');
    console.log('%cDati salvati in localStorage - non utilizzare dati reali', 'color: #ed8936; font-size: 12px;');
});
