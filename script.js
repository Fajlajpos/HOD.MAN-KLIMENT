/* ==========================================================================
   INTERAKTIVNÍ LOGIKA – PREMIUM COZY PORTFOLIO (JIŘÍ KLIMENT)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DYNAMIC MOUSE SPOTLIGHT (MAGIC GLOW EFFECT FOR CARDS & BENTO BOXES)
  // ==========================================================================
  const spotlightElements = document.querySelectorAll('.service-card, .bento-box');
  
  const updateSpotlight = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  };

  spotlightElements.forEach(el => {
    el.addEventListener('mousemove', (e) => updateSpotlight(e, el));
  });

  // ==========================================================================
  // 2. MOBILNÍ NAVIGACE (HAMBURGER DRAWER)
  // ==========================================================================
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMobile = document.getElementById('nav-mobile');
  const navMobileLinks = document.querySelectorAll('.nav-mobile-link');

  const toggleMobileMenu = () => {
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    hamburgerBtn.classList.toggle('active');
    
    navMobile.classList.toggle('active');
    navMobile.setAttribute('aria-hidden', isExpanded);
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  };

  if (hamburgerBtn && navMobile) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
    navMobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMobile.classList.contains('active')) {
          toggleMobileMenu();
        }
      });
    });
  }

  // ==========================================================================
  // 3. SCROLL EFEKTY (PROGRESS BAR & BACK TO TOP)
  // ==========================================================================
  const progressBar = document.getElementById('progress-bar');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Scroll Progress
    if (progressBar && docHeight > 0) {
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    }

    // Back to Top Button
    if (backToTopBtn) {
      if (scrollTop > 500) {
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

  // ==========================================================================
  // 4. SCROLL ANIMACE (REVEAL)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal-fade, .reveal-slide');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================================================
  // 5. ANIMOVANÉ POČÍTADLO STATISTIK (COUNT-UP S EXPONENCIÁLNÍM EASINGEM)
  // ==========================================================================
  const heroStatsSection = document.querySelector('.hero-stats');
  const statNumbers = document.querySelectorAll('.hero-stat-val');
  let statsAnimated = false;

  const animateStats = () => {
    statNumbers.forEach(num => {
      const target = parseInt(num.getAttribute('data-target'), 10);
      const duration = 2000;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Premium easeOutExpo curve for modern feel
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(easeProgress * target);
        
        num.textContent = currentCount.toLocaleString('cs-CZ');

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          num.textContent = target.toLocaleString('cs-CZ');
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        animateStats();
        statsAnimated = true;
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (heroStatsSection) {
    statsObserver.observe(heroStatsSection);
  }

  // ==========================================================================
  // 6. INTERAKTIVNÍ "PŘED / PO" IMAGE SLIDER (RESPONSIVE FIX)
  // ==========================================================================
  const slider = document.querySelector('.before-after-slider');
  
  if (slider) {
    const afterImageContainer = slider.querySelector('.slider-image.after');
    const afterImage = afterImageContainer.querySelector('img');
    const handle = slider.querySelector('.slider-handle');
    const rangeInput = slider.querySelector('.slider-range-input');

    const updateSliderWidth = () => {
      const sliderWidth = slider.clientWidth;
      afterImage.style.width = `${sliderWidth}px`;
      afterImage.style.maxWidth = `${sliderWidth}px`;
    };

    rangeInput.addEventListener('input', (e) => {
      const sliderValue = e.target.value;
      afterImageContainer.style.width = `${sliderValue}%`;
      handle.style.left = `${sliderValue}%`;
    });

    window.addEventListener('resize', updateSliderWidth);
    updateSliderWidth();
  }

  // ==========================================================================
  // 7. KALKULAČKA ORIENTAČNÍ CENY (S PODROBNÝM ROZPISEM)
  // ==========================================================================
  const calcHoursInput = document.getElementById('calc-hours');
  const hoursDisplay = document.getElementById('hours-display');
  const calcLocationRadios = document.getElementsByName('calc-location');
  const kmInputContainer = document.getElementById('km-input-container');
  const calcKmInput = document.getElementById('calc-km');
  
  const summaryWorkPrice = document.getElementById('summary-work-price');
  const summaryTransportPrice = document.getElementById('summary-transport-price');
  const calcTotalPrice = document.getElementById('calc-total-price');
  const calcCtaBtn = document.getElementById('calc-cta-btn');

  const getCzechHoursInflection = (hours) => {
    if (hours === 1) return '1 hodina';
    if (hours >= 2 && hours <= 4) return `${hours} hodiny`;
    return `${hours} hodin`;
  };

  const calculateEstimate = () => {
    if (!calcHoursInput) return;

    const hours = parseInt(calcHoursInput.value, 10);
    const hourlyRate = 500;
    const workPrice = hours * hourlyRate;
    let transportCost = 500; // Brno flat rate
    let isOutsideBrno = false;

    for (const radio of calcLocationRadios) {
      if (radio.checked && radio.value === 'mimo') {
        isOutsideBrno = true;
      }
    }

    if (isOutsideBrno) {
      if (kmInputContainer) kmInputContainer.classList.remove('hidden');
      const km = Math.max(0, parseInt(calcKmInput.value, 10) || 0);
      transportCost = 500 + (km * 10);
    } else {
      if (kmInputContainer) kmInputContainer.classList.add('hidden');
    }

    const total = workPrice + transportCost;
    
    if (summaryWorkPrice) summaryWorkPrice.textContent = `${workPrice.toLocaleString('cs-CZ')} Kč`;
    if (summaryTransportPrice) summaryTransportPrice.textContent = `${transportCost.toLocaleString('cs-CZ')} Kč`;
    if (calcTotalPrice) calcTotalPrice.textContent = `${total.toLocaleString('cs-CZ')} Kč`;
    if (hoursDisplay) hoursDisplay.textContent = getCzechHoursInflection(hours);

    if (calcCtaBtn) {
      calcCtaBtn.setAttribute('data-config', `Odhadovaná doba: ${hours} hod., Doprava: ${isOutsideBrno ? 'Mimo Brno (+ ' + calcKmInput.value + ' km)' : 'V Brně (paušál)'}, Celková odhadovaná cena: ${total} Kč`);
    }
  };

  if (calcHoursInput) {
    calcHoursInput.addEventListener('input', calculateEstimate);
    calcKmInput.addEventListener('input', calculateEstimate);
    calcLocationRadios.forEach(radio => radio.addEventListener('change', calculateEstimate));
    
    calcCtaBtn.addEventListener('click', (e) => {
      const config = calcCtaBtn.getAttribute('data-config');
      if (config) {
        // Save to localStorage to auto-populate form on contact.html
        localStorage.setItem('calculator_config', config);
      }
    });

    calculateEstimate();
  }

  // ==========================================================================
  // 8. FORMULÁŘ & JS VALIDACE (3 POLE + GDPR)
  // ==========================================================================
  const form = document.getElementById('poptavkovy-formular');
  const successBox = document.getElementById('form-success-box');
  const errorBox = document.getElementById('form-error-box');
  const formMessageTextarea = document.getElementById('form-message');

  // Check if there is calculator config stored in localStorage and auto-populate
  if (formMessageTextarea) {
    const savedConfig = localStorage.getItem('calculator_config');
    if (savedConfig) {
      formMessageTextarea.value = `Dobrý den, poptávám práce v rozsahu z kalkulačky:\n[${savedConfig}].\n\n(Doplňte prosím detaily práce...)`;
      // Clear after populating
      localStorage.removeItem('calculator_config');
    }
  }

  const validateInput = (inputElement, condition) => {
    const formGroup = inputElement.closest('.form-group') || inputElement.closest('.form-checkbox');
    if (!formGroup) return condition;

    if (condition) {
      formGroup.classList.remove('error');
      return true;
    } else {
      formGroup.classList.add('error');
      return false;
    }
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const contactInput = document.getElementById('form-contact');
      const messageInput = document.getElementById('form-message');
      const gdprCheckbox = document.getElementById('form-gdpr');

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/;

      const nameVal = nameInput.value.trim();
      const contactVal = contactInput.value.trim().replace(/\s/g, '');
      const messageVal = messageInput.value.trim();

      const isNameValid = validateInput(nameInput, nameVal.length > 1);
      const isContactValid = validateInput(contactInput, emailRegex.test(contactInput.value.trim()) || phoneRegex.test(contactVal));
      const isMessageValid = validateInput(messageInput, messageVal.length > 5);
      const isGdprChecked = validateInput(gdprCheckbox, gdprCheckbox.checked);

      const isFormValid = isNameValid && isContactValid && isMessageValid && isGdprChecked;

      if (isFormValid) {
        const submitBtn = form.querySelector('.form-submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Odesílám...</span>';
        if (errorBox) errorBox.classList.add('hidden');
        if (successBox) successBox.classList.add('hidden');

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
          if (successBox) successBox.classList.remove('hidden');
          form.reset();
          
          setTimeout(() => {
            if (successBox) successBox.classList.add('hidden');
          }, 8000);
          
        }, 1200);

      } else {
        if (errorBox) {
          errorBox.classList.remove('hidden');
          errorBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });

    form.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('blur', () => {
        if (input.id === 'form-name') {
          validateInput(input, input.value.trim().length > 1);
        }
        if (input.id === 'form-contact') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneRegex = /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/;
          const val = input.value.trim();
          validateInput(input, emailRegex.test(val) || phoneRegex.test(val.replace(/\s/g, '')));
        }
        if (input.id === 'form-message') {
          validateInput(input, input.value.trim().length > 5);
        }
        if (input.id === 'form-gdpr') {
          validateInput(input, input.checked);
        }
      });
    });
  }

  // ==========================================================================
  // 9. GDPR COOKIE CONSENT
  // ==========================================================================
  const cookieBar = document.getElementById('cookie-bar');
  const cookieAcceptAll = document.getElementById('cookie-accept-all');
  const cookieAcceptNecessary = document.getElementById('cookie-accept-necessary');

  const setCookieConsent = (consentType) => {
    localStorage.setItem('cookie_consent', consentType);
    if (cookieBar) {
      cookieBar.classList.remove('show');
      cookieBar.setAttribute('aria-hidden', 'true');
    }
  };

  const currentConsent = localStorage.getItem('cookie_consent');
  if (!currentConsent && cookieBar) {
    setTimeout(() => {
      cookieBar.classList.add('show');
      cookieBar.setAttribute('aria-hidden', 'false');
    }, 1500);
  }

  if (cookieAcceptAll) {
    cookieAcceptAll.addEventListener('click', () => setCookieConsent('all'));
  }
  if (cookieAcceptNecessary) {
    cookieAcceptNecessary.addEventListener('click', () => setCookieConsent('necessary'));
  }
});
