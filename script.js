/* ============================================================
   SHIV CATERERS v2 — Global JavaScript
   ============================================================ */
(function () {
  'use strict';

  /* ── Mobile nav toggle ── */
  var toggle  = document.getElementById('navToggle');
  var mobile  = document.getElementById('navMobile');
  var nav     = document.getElementById('siteNav');

  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      var open = mobile.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobile.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Nav shadow on scroll ── */
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* ── Active link highlight ── */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

  /* ── Scroll reveal ── */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(function (el) { obs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Gallery slider ── */
  var track   = document.getElementById('galleryTrack');
  var prev    = document.getElementById('galleryPrev');
  var next    = document.getElementById('galleryNext');
  var dotsWrap = document.getElementById('galleryDots');

  if (track) {
    var slides   = track.querySelectorAll('.gallery-slide');
    var cur      = 0;
    var total    = slides.length;

    function perView() {
      return window.innerWidth >= 900 ? 3 : window.innerWidth >= 600 ? 2 : 1;
    }
    function maxIdx() { return Math.max(0, total - perView()); }

    /* Build dots */
    if (dotsWrap) {
      for (var i = 0; i <= maxIdx(); i++) {
        (function (idx) {
          var dot = document.createElement('button');
          dot.className = 'gallery-dot' + (idx === 0 ? ' active' : '');
          dot.setAttribute('aria-label', 'Slide ' + (idx + 1));
          dot.addEventListener('click', function () { goTo(idx); });
          dotsWrap.appendChild(dot);
        })(i);
      }
    }

    function slideW() {
      if (!slides[0]) return 0;
      return slides[0].getBoundingClientRect().width + 20; /* gap 1.25rem ≈ 20px */
    }

    function updateDots() {
      if (!dotsWrap) return;
      dotsWrap.querySelectorAll('.gallery-dot').forEach(function (d, idx) {
        d.classList.toggle('active', idx === cur);
      });
    }

    function goTo(idx) {
      cur = Math.max(0, Math.min(idx, maxIdx()));
      track.style.transform = 'translateX(-' + (cur * slideW()) + 'px)';
      updateDots();
    }

    if (prev) prev.addEventListener('click', function () { goTo(cur - 1); });
    if (next) next.addEventListener('click', function () { goTo(cur + 1); });

    var timer = setInterval(function () { goTo(cur >= maxIdx() ? 0 : cur + 1); }, 4200);
    track.addEventListener('mouseenter', function () { clearInterval(timer); });

    var tx = 0;
    track.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend',   function (e) {
      var dx = tx - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) goTo(dx > 0 ? cur + 1 : cur - 1);
    }, { passive: true });

    window.addEventListener('resize', function () { goTo(Math.min(cur, maxIdx())); }, { passive: true });
  }

  /* ── FAQ accordion ── */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item   = this.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (el) {
        el.classList.remove('open');
        el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) { item.classList.add('open'); this.setAttribute('aria-expanded', 'true'); }
    });
  });

})();