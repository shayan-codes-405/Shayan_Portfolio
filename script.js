document.addEventListener('DOMContentLoaded', () => {

    // Loader logic
    const loader = document.getElementById('loader');
    
    // Hide loader after smooth animation
    setTimeout(() => {
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 600);
        }
    }, 2000);

    // Navbar Scroll & Sticky Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Menu Trigger
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if(navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });

    // Active Section Scroll Highlight
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 250)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Scroll Animations (Intersection Observer for Fade-ins)
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(el => appearOnScroll.observe(el));

    // Global Modal System Logic
    const modalTriggers = document.querySelectorAll('.trigger-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    // Open precise modal on trigger click
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            const targetModal = document.getElementById(modalId);
            if(targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Stop background jump scroll
            }
        });
    });

    // Close on specific 'X' button
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            modal.classList.remove('active');
            document.body.style.overflow = ''; 
        });
    });

    // Backdrop click close wrapper handler
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Esc Keypress logic for modal safety exit
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if(activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // Enforce single unified theme
    document.body.classList.remove('light-mode');
    localStorage.removeItem('portfolio-theme');

    // EmailJS Contact Form Handling
    // SETUP INSTRUCTIONS:
    // 1. Go to https://www.emailjs.com/ and create a free account
    // 2. Create an email service (Gmail, Outlook, etc.)
    // 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}, {{to_email}}
    // 4. Replace the placeholders below with your actual EmailJS credentials
    (function() {
        // Initialize EmailJS with your public key
        emailjs.init('kCaNXdADA_YXV_lzo'); // Your EmailJS public key
        
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                
                // Show loading state
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Prepare template parameters
                const templateParams = {
                    from_name: contactForm.from_name.value,
                    from_email: contactForm.from_email.value,
                    message: contactForm.message.value,
                    to_email: 'shayanakhtar405@gmail.com' // Your email address
                };
                
                // Send email using EmailJS
                emailjs.send('service_bscsxgb', 'template_trd7opx', templateParams) // Your service and template IDs
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        
                        // Show success message
                        contactForm.innerHTML = `
                            <div style="text-align: center; padding: 2rem;">
                                <i class="fas fa-check-circle" style="font-size: 3rem; color: #10b981; margin-bottom: 1rem;"></i>
                                <h3 style="color: var(--text-primary); margin-bottom: 1rem;">Thank You!</h3>
                                <p style="color: var(--text-secondary);">Your message has been sent successfully. I'll get back to you soon!</p>
                            </div>
                        `;
                    }, function(error) {
                        console.log('FAILED...', error);
                        
                        // Show error message
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        
                        alert('Sorry, there was an error sending your message. Please try again or contact me directly at shayanakhtar405@gmail.com');
                    });
            });
        }
    })();

    // ----------------------------------------------------
    // Toast Notification System
    // ----------------------------------------------------
    function showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toast-container');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icon = type === 'success' ? 'fa-check-circle' : 'fa-info-circle';
        toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
        
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'toastSlideOut 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }

    // Attach toast to Download CV buttons
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
            'Developer + Data Enthusiast',
            'Software Engineer',
            'Data Analyst',
            'Java & Python Programmer',
            'Problem Solver'
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 40;
            } else {
                typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 90;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 1800; // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400; // Pause before typing next word
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }

    // ----------------------------------------------------
    // Interactive Canvas Particles Background in Hero
    // ----------------------------------------------------
    const canvas = document.getElementById('hero-particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = canvas.parentElement.offsetWidth;
        let height = canvas.height = canvas.parentElement.offsetHeight;

        let particles = [];
        const particleCount = Math.min(Math.floor(width / 25), 45);
        let mouse = { x: null, y: null, radius: 120 };

        window.addEventListener('resize', () => {
            if (!canvas.parentElement) return;
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
        });

        const heroSection = document.getElementById('home');
        if (heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });

            heroSection.addEventListener('mouseleave', () => {
                mouse.x = null;
                mouse.y = null;
            });
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.radius = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        const angle = Math.atan2(dy, dx);
                        const force = (mouse.radius - dist) / mouse.radius;
                        this.x -= Math.cos(angle) * force * 2;
                        this.y -= Math.sin(angle) * force * 2;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);

            // Connect nearby particles
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 110) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.25 * (1 - dist / 110)})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }

    // ----------------------------------------------------
    // Project Filtering Logic
    // ----------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('filter-hidden');
                } else {
                    card.classList.add('filter-hidden');
                }
            });
        });
    });

    // ----------------------------------------------------
    // Dynamic Mouse Spotlight Effect on Glass Cards
    // ----------------------------------------------------
    const glassCards = document.querySelectorAll('.glass-card');
    glassCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ----------------------------------------------------
    // Modal Gallery Navigation (Next/Prev buttons)
    // ----------------------------------------------------
    const modalGalleries = document.querySelectorAll('.modal-gallery');
    modalGalleries.forEach(gallery => {
        const images = gallery.querySelectorAll('img');
        if (images.length > 1) {
            // Wrap in modal-gallery-wrapper if not already
            const wrapper = document.createElement('div');
            wrapper.className = 'modal-gallery-wrapper';
            gallery.parentNode.insertBefore(wrapper, gallery);
            wrapper.appendChild(gallery);

            const prevBtn = document.createElement('button');
            prevBtn.className = 'gallery-control-btn prev-btn';
            prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
            prevBtn.ariaLabel = 'Previous image';

            const nextBtn = document.createElement('button');
            nextBtn.className = 'gallery-control-btn next-btn';
            nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
            nextBtn.ariaLabel = 'Next image';

            wrapper.appendChild(prevBtn);
            wrapper.appendChild(nextBtn);

            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                gallery.scrollBy({ left: -gallery.clientWidth, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                gallery.scrollBy({ left: gallery.clientWidth, behavior: 'smooth' });
            });
        }
    });

});

