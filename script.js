document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------
    // Loader Logic (Fail-safe)
    // ----------------------------------------------------
    const hideLoader = () => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.pointerEvents = 'none';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    };

    setTimeout(hideLoader, 800);
    window.addEventListener('load', hideLoader);

    // ----------------------------------------------------
    // Navbar Scroll & Mobile Menu Toggle
    // ----------------------------------------------------
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.replace('fa-bars', 'fa-times');
                } else {
                    icon.classList.replace('fa-times', 'fa-bars');
                }
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (hamburger.querySelector('i')) {
                    hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
                }
            });
        });
    }

    // Active Section Link Highlight
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 250)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // ----------------------------------------------------
    // Intersection Observer for Smooth Fade-in Animations
    // ----------------------------------------------------
    const fadeElements = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        appearOnScroll.observe(el);
    });

    // ----------------------------------------------------
    // Project Category Filtering
    // ----------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('fade-out');
                    card.style.display = card.classList.contains('featured-project-card') ? 'grid' : 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.classList.add('fade-out');
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ----------------------------------------------------
    // Global Modal Popup System
    // ----------------------------------------------------
    const modalTriggers = document.querySelectorAll('.trigger-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            const targetModal = document.getElementById(modalId);
            if (targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // ----------------------------------------------------
    // Toast Notification System
    // ----------------------------------------------------
    function showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toast-container');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icon = type === 'success' ? 'fa-check-circle' : 'fa-info-circle';
        toast.innerHTML = `<i class="fas ${icon}" style="color: var(--accent-cyan);"></i> <span>${message}</span>`;
        
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'toastSlideOut 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }

    document.querySelectorAll('a[download]').forEach(btn => {
        btn.addEventListener('click', () => {
            showToast('Downloading Resume (PDF)...', 'success');
        });
    });

    // ----------------------------------------------------
    // Scroll Progress Bar & Back-to-Top Button
    // ----------------------------------------------------
    const scrollProgress = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            if (scrollProgress) scrollProgress.style.width = `${progress}%`;
        }

        if (backToTopBtn) {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ----------------------------------------------------
    // Typewriter Effect
    // ----------------------------------------------------
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        const words = [
            'Data Scientist & Data Analyst',
            'Machine Learning Engineer',
            'Data Science & Analytics',
            'Power BI & Python Analyst',
            'Data-Driven Problem Solver'
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 80;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 35;
            } else {
                typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 75;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }

    // ----------------------------------------------------
    // Interactive Hero Canvas Particles Background
    // ----------------------------------------------------
    const canvas = document.getElementById('hero-particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray = [];

        function setCanvasDimensions() {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        }

        setCanvasDimensions();
        window.addEventListener('resize', () => {
            setCanvasDimensions();
            initParticles();
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.8;
                this.speedY = (Math.random() - 0.5) * 0.8;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 14000);
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        function connectParticles() {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 110) {
                        const opacity = 1 - (distance / 110);
                        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(p => {
                p.update();
                p.draw();
            });
            connectParticles();
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();
    }

    // ----------------------------------------------------
    // EmailJS Contact Form Integration
    // ----------------------------------------------------
    (function() {
        if (typeof emailjs !== 'undefined') {
            emailjs.init('kCaNXdADA_YXV_lzo');
        }
        
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                const templateParams = {
                    from_name: contactForm.from_name.value,
                    from_email: contactForm.from_email.value,
                    message: contactForm.message.value,
                    to_email: 'shayanakhtar405@gmail.com'
                };
                
                if (typeof emailjs !== 'undefined') {
                    emailjs.send('service_bscsxgb', 'template_trd7opx', templateParams)
                        .then(function() {
                            contactForm.innerHTML = `
                                <div style="text-align: center; padding: 2.5rem 1rem;">
                                    <i class="fas fa-check-circle" style="font-size: 3.5rem; color: var(--accent-emerald); margin-bottom: 1.2rem;"></i>
                                    <h3 style="color: var(--text-primary); margin-bottom: 0.8rem; font-size: 1.5rem;">Message Sent Successfully!</h3>
                                    <p style="color: var(--text-secondary); line-height: 1.6;">Thank you for reaching out. I'll respond to your message shortly!</p>
                                </div>
                            `;
                        }, function(error) {
                            console.error('EmailJS Error:', error);
                            submitBtn.innerHTML = originalText;
                            submitBtn.disabled = false;
                            showToast('Failed to send message via EmailJS. Please email shayanakhtar405@gmail.com directly.', 'info');
                        });
                } else {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    showToast('Sending email... please try again.', 'info');
                }
            });
        }
    })();

    // ----------------------------------------------------
    // Project Image Auto-Slideshow (Cycles every 2 seconds)
    // ----------------------------------------------------
    const projectWrappers = document.querySelectorAll('[data-images]');
    projectWrappers.forEach(wrapper => {
        const rawImages = wrapper.getAttribute('data-images');
        if (!rawImages) return;
        const imagesList = rawImages.split(',').map(s => s.trim()).filter(Boolean);
        if (imagesList.length <= 1) return;

        let currentIndex = 0;
        const imgEl = wrapper.querySelector('img');

        if (imgEl) {
            setInterval(() => {
                currentIndex = (currentIndex + 1) % imagesList.length;
                imgEl.style.transition = 'opacity 0.35s ease';
                imgEl.style.opacity = '0.25';
                
                setTimeout(() => {
                    imgEl.src = imagesList[currentIndex];
                    imgEl.style.opacity = '1';
                }, 350);
            }, 2000);
        }
    });

    // Auto-scroll modal gallery images every 2 seconds when modal is active
    setInterval(() => {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            const gallery = activeModal.querySelector('.modal-gallery');
            if (gallery && gallery.children.length > 1) {
                const imgWidth = gallery.children[0].clientWidth + 16;
                if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 10) {
                    gallery.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    gallery.scrollBy({ left: imgWidth, behavior: 'smooth' });
                }
            }
        }
    }, 2000);

});
