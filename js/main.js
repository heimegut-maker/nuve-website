/* ========== PARALLAX ========== */
(function () {
  const ghostElements = document.querySelectorAll('[data-parallax]');

  function handleParallax() {
    const scrollY = window.scrollY;

    // Ghost text parallax
    ghostElements.forEach(function (el) {
      const speed = parseFloat(el.dataset.parallax);
      const rect = el.parentElement.getBoundingClientRect();
      const offset = (scrollY - el.parentElement.offsetTop) * speed;
      el.style.transform =
        el.classList.contains('contact-ghost')
          ? 'scaleX(-1) translateY(' + offset + 'px)'
          : 'translateY(' + offset + 'px)';
    });
  }

  window.addEventListener('scroll', handleParallax, { passive: true });
})();

/* ========== SCROLL FADE-IN ========== */
(function () {
  const targets = document.querySelectorAll(
    '.spec-inner, .services-inner, .clients, .contact-header, .contact-columns'
  );

  targets.forEach(function (el) {
    el.classList.add('fade-in');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();


/* ========== CONTACT FORM ========== */
(function () {
  var form = document.getElementById('contactForm');
  var thanks = document.getElementById('formThanks');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    thanks.classList.add('visible');
    form.reset();
    setTimeout(function () {
      thanks.classList.remove('visible');
    }, 4000);
  });
})();
