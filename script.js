
// Smooth scrolling para links internos
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        menuBtn.className = 'fas fa-times';
    } else {
        menuBtn.className = 'fas fa-bars';
    }
}

// Close mobile menu
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    mobileMenu.classList.remove('active');
    menuBtn.className = 'fas fa-bars';
}

// WhatsApp button functionality
function initWhatsAppButton() {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    
    whatsappBtn.addEventListener('click', function() {
        const phoneNumber = "5511999999999"; // Substitua pelo número real
        const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os cursos da SmartWay Idioms.");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        window.open(whatsappUrl, '_blank');
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Validação básica
        if (!name || !email || !phone) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        // Simulação de envio
        showFormSuccess();
        contactForm.reset();
    });
}

// Show form success message
function showFormSuccess() {
    // Criar elemento de sucesso
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.innerHTML = `
        <div style="
            background: #10b981;
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            margin: 16px 0;
            text-align: center;
            font-weight: 600;
            animation: fadeIn 0.3s ease;
        ">
            <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
            Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
    `;
    
    const form = document.getElementById('contact-form');
    form.appendChild(successDiv);
    
    // Remover mensagem após 5 segundos
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(12px)';
        }
        
        lastScroll = currentScroll;
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.feature-card, .service-card, .stat-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Phone number formatting
function formatPhoneInput() {
    const phoneInput = document.getElementById('phone');
    
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length >= 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 7) {
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        }
        
        e.target.value = value;
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initWhatsAppButton();
    initContactForm();
    initHeaderScroll();
    initSmoothScroll();
    initAnimations();
    formatPhoneInput();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobileMenu();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Any scroll-based animations or effects can go here
}, 16)); // ~60fps
