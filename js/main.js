/**
 * main.js — Portfolio interactive features
 * 
 * Features:
 * 1. Light/dark theme toggle with localStorage persistence
 * 2. Scroll spy — highlights active nav item based on visible section
 * 3. Cascading rolling animation — letter-by-letter slide effect on hover
 * 4. Navbar name shrink — full name collapses to initials on scroll
 * 5. Contact Form AJAX submission
 */

document.addEventListener('DOMContentLoaded', function () {

    // =========================================
    // 1. Theme Toggle
    // =========================================
    const html = document.documentElement;
    const themeOptions = document.querySelectorAll('.theme-option');
    const saved = localStorage.getItem('theme');

    // Also update the meta theme-color for mobile browsers
    function updateMetaTheme(theme) {
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', theme === 'light' ? '#ffffff' : '#111');
    }

    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateMetaTheme(theme);
        // Update active states on toggle buttons
        themeOptions.forEach(function (btn) {
            var isActive = btn.getAttribute('data-theme-value') === theme;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
        });
    }

    // Apply saved preference (default: dark)
    if (saved) setTheme(saved);

    const themeSwitcher = document.querySelector('.theme-switcher');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', function () {
            const currentTheme = html.getAttribute('data-theme') || 'dark';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(nextTheme);
        });
    }

    // =========================================
    // 2. Scroll Spy
    // =========================================
    const sections = document.querySelectorAll('#intro, #about, #work, #contact');
    const navItems = {
        intro: null, // handled via logo glow
        about: document.querySelector('.about-nav-item'),
        work: document.querySelector('.work-nav-item'),
        contact: document.querySelector('.contact-nav-item')
    };
    const navbarCircle = document.querySelector('.navbar-circle');

    function clearActiveNav() {
        Object.values(navItems).forEach(function (item) {
            if (item) item.classList.remove('active');
        });
        if (navbarCircle) navbarCircle.classList.remove('glow');
    }

    // Use IntersectionObserver for efficient scroll detection
    var currentSection = 'intro';
    var sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                currentSection = entry.target.id;
                clearActiveNav();
                if (currentSection === 'intro') {
                    if (navbarCircle) navbarCircle.classList.add('glow');
                } else if (navItems[currentSection]) {
                    navItems[currentSection].classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-80px 0px 0px 0px' // offset for fixed navbar
    });

    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });

    // =========================================
    // 3. Cascading Hover Effect
    // =========================================
    document.querySelectorAll('.rotate-text').forEach(function (el) {
        var text = el.getAttribute('data-text');
        if (!text) return;
        el.innerHTML = ''; // clear existing static html
        for (var i = 0; i < text.length; i++) {
            var charSpan = document.createElement('span');
            charSpan.className = 'char-wrap';
            // Use non-breaking space for actual spaces so layout doesn't collapse
            var char = text[i] === ' ' ? '\u00A0' : text[i];
            charSpan.setAttribute('data-char', char);
            charSpan.style.setProperty('--delay', (i * 0.02) + 's');

            var innerSpan = document.createElement('span');
            innerSpan.className = 'char-inner';
            innerSpan.textContent = char;

            charSpan.appendChild(innerSpan);
            el.appendChild(charSpan);
        }
    });



    // Throttle scroll events for performance
    var ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                handleNavbarShrink();
                ticking = false;
            });
            ticking = true;
        }
    });

    // =========================================
    // 5. Navbar Name Shrink
    // =========================================

    // Split the brand text for letter-by-letter shrinking
    const fullNameSpan = document.querySelector('.brand .full-name');
    if (fullNameSpan) {
        const text = fullNameSpan.textContent.trim();
        fullNameSpan.innerHTML = '';

        let hideDelayIndex = 0;
        for (let i = 0; i < text.length; i++) {
            const charSpan = document.createElement('span');
            charSpan.className = 'brand-char';

            // Re-insert spaces as non-breaking spaces to preserve layout
            const char = text[i] === ' ' ? '\u00A0' : text[i];
            charSpan.textContent = char;

            // Keep 'M' (index 0) and 'S' (index 5 in "Manu Srirangarajan")
            if (i === 0 || i === 5) {
                charSpan.classList.add('keep');
            } else {
                charSpan.classList.add('hide');
                charSpan.style.setProperty('--delay', (hideDelayIndex * 0.02) + 's');
                hideDelayIndex++;
            }

            fullNameSpan.appendChild(charSpan);
        }
    }

    var introContainer = document.querySelector('.intro-container');

    function handleNavbarShrink() {
        if (!introContainer) return;
        var rect = introContainer.getBoundingClientRect();
        // Trigger shrink when intro section scrolls out of view
        if (rect.bottom < 80) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    }

    // =========================================
    // 6. Contact Form AJAX Submission
    // =========================================
    const contactForm = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success-msg');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;

            // Optional: Provide UI feedback during submission
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        contactForm.style.display = 'none';
                        if (successMsg) successMsg.style.display = 'block';
                    } else {
                        console.error(response);
                        alert("Something went wrong. Please try again.");
                    }
                })
                .catch(error => {
                    console.error(error);
                    alert("Something went wrong. Please try again.");
                })
                .finally(() => {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

    // Run once on load in case page is already scrolled
    handleNavbarShrink();
});
