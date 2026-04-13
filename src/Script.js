// Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileMenuBtn.addEventListener('click'= () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
    // Initialize Lucide icons
    lucide.createIcons();

    // Theme toggle with proper functionality
    let currentTheme = 'dark';
    const html = document.documentElement;
    const themeBtn = document.getElementById('themeBtn');
    const sunIcon = document.getElementById('sunIcon');

    function setTheme(theme) {
      currentTheme = theme;
      if (theme === 'light') {
        html.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '<i data-lucide="moon"></i>';
      } else {
        html.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i data-lucide="sun"></i>';
      }
      lucide.createIcons();
      localStorage.setItem('theme', theme);
    }

    // Load theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });

    // Scroll reveal animation
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    scrollRevealElements.forEach(el => observer.observe(el));

    // Skill bars animation
    const skillItems = document.querySelectorAll('.skill-item');
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });

    skillItems.forEach(item => skillObserver.observe(item));

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Form submission
    function handleSubmit() {
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      if (email && message) {
        alert('Thank you for reaching out! I will get back to you soon.');
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      }
    }

    // Element SDK
    const defaultConfig = {
      hero_name: 'Alex Rivera',
      hero_tagline: 'Creative Developer & Designer',
      about_title: 'Building the future',
      about_text: 'I craft digital experiences that merge bold aesthetics with seamless functionality. With 5+ years in the industry, I\'ve helped startups and brands transform their vision into pixel-perfect reality. Every line of code is written with purpose.',
      contact_email: 'hello@alexrivera.dev'
    };

    window.elementSdk.init({
      defaultConfig,
      onConfigChange: async (config) => {
        const c = { ...defaultConfig, ...config };
        
        // Update text content
        document.querySelector('.hero h1').innerHTML = `Welcome to my<br><span class="gradient-text">Creative Space</span>`;
        document.getElementById('heroTagline').textContent = c.hero_tagline;
        document.getElementById('aboutText').textContent = c.about_text;

        // Update logo with initials
        const parts = c.hero_name.split(' ');
        document.getElementById('logo').textContent = parts.map(p => p[0]).join('');
      },
      mapToCapabilities: (config) => ({
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
      }),
      mapToEditPanelValues: (config) => new Map([
        ['hero_name', config.hero_name || defaultConfig.hero_name],
        ['hero_tagline', config.hero_tagline || defaultConfig.hero_tagline],
        ['about_title', config.about_title || defaultConfig.about_title],
        ['about_text', config.about_text || defaultConfig.about_text],
        ['contact_email', config.contact_email || defaultConfig.contact_email]
      ])
    });
    (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9eb2241567ea3390',t:'MTc3NTk5NTk2NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();