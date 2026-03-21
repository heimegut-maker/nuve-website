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

/* ========== INFINITE GRID (Specialization background) ========== */
(function () {
  var gridBg = document.querySelector('.spec-grid-bg');
  if (!gridBg) return;

  var canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.inset = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  gridBg.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  var cellSize = 40;
  var offsetX = 0;
  var offsetY = 0;
  var driftSpeed = 0.15;
  var mouseX = -1000;
  var mouseY = -1000;
  var revealRadius = 300;
  var animId;

  function resize() {
    canvas.width = gridBg.clientWidth;
    canvas.height = gridBg.clientHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  gridBg.parentElement.addEventListener('mousemove', function (e) {
    var rect = gridBg.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  gridBg.parentElement.addEventListener('mouseleave', function () {
    mouseX = -1000;
    mouseY = -1000;
  });

  function drawGrid(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    offsetX = (time * driftSpeed * 0.01) % cellSize;
    offsetY = (time * driftSpeed * 0.008) % cellSize;

    var w = canvas.width;
    var h = canvas.height;

    for (var x = -cellSize + offsetX; x <= w + cellSize; x += cellSize) {
      for (var y = -cellSize + offsetY; y <= h + cellSize; y += cellSize) {
        var dx = x - mouseX;
        var dy = y - mouseY;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var alpha = 0.03;

        if (dist < revealRadius) {
          var t = 1 - dist / revealRadius;
          alpha = 0.03 + t * 0.05;
        }

        ctx.strokeStyle = 'rgba(10, 10, 10, ' + alpha + ')';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(x, y, cellSize, cellSize);
      }
    }

    animId = requestAnimationFrame(drawGrid);
  }

  // Only animate when section is visible
  var gridObserver = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        animId = requestAnimationFrame(drawGrid);
      } else {
        cancelAnimationFrame(animId);
      }
    },
    { threshold: 0 }
  );

  gridObserver.observe(gridBg.parentElement);
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
