/**
 * TradeNexa — Shared JavaScript Utilities
 * Include on all pages: <script src="shared.js"></script>
 */

// ===== LOAD CONFIG =====
// Config is available globally from config.js

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// ===== MOBILE MENU =====
function openMobile() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobile() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(r => obs.observe(r));
}

// ===== FAQ ACCORDION =====
function toggleFAQ(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => {
    i.classList.remove('open');
    const q = i.querySelector('.faq-question');
    if (q) q.setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    item.classList.add('open');
    el.setAttribute('aria-expanded', 'true');
  }
}

function buildFAQ(faqs, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  faqs.forEach((f, i) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <div class="faq-question" tabindex="0" role="button" aria-expanded="false" onclick="toggleFAQ(this)">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-inner">${f.a}</div>
      </div>
    `;
    item.querySelector('.faq-question').addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFAQ(e.currentTarget); }
    });
    container.appendChild(item);
  });
}

// ===== PRICING TOGGLE =====
function setPricing(plan, event) {
  if (event) {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
  }
  const mc = document.getElementById('monthlyCard');
  const lc = document.getElementById('lifetimeCard');
  if (!mc || !lc) return;
  if (plan === 'lifetime') {
    mc.style.opacity = '0.55';
    mc.style.transform = 'scale(0.97)';
    mc.style.transition = 'all 0.35s ease';
    lc.style.opacity = '1';
    lc.style.transform = 'scale(1.02)';
    lc.style.transition = 'all 0.35s ease';
  } else {
    mc.style.opacity = '1';
    mc.style.transform = 'scale(1)';
    mc.style.transition = 'all 0.35s ease';
    lc.style.opacity = '0.55';
    lc.style.transform = 'scale(0.97)';
    lc.style.transition = 'all 0.35s ease';
  }
}

// Auto-detect plan from URL params
function detectPlanFromURL() {
  const params = new URLSearchParams(window.location.search);
  const plan = params.get('plan');
  if (plan === 'lifetime') {
    const btn = document.querySelector('.toggle-btn:last-child');
    if (btn) btn.click();
  }
}

// ===== FORM VALIDATION =====
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;
  let valid = true;

  // Clear previous errors
  form.querySelectorAll('.form-group.error').forEach(g => g.classList.remove('error'));

  // Check required fields
  form.querySelectorAll('[required]').forEach(field => {
    const group = field.closest('.form-group');
    if (!field.value.trim()) {
      if (group) group.classList.add('error');
      valid = false;
    }
  });

  // Validate email fields
  form.querySelectorAll('input[type="email"]').forEach(field => {
    const group = field.closest('.form-group');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (field.value && !emailRegex.test(field.value)) {
      if (group) group.classList.add('error');
      valid = false;
    }
  });

  return valid;
}

// ===== PASSWORD STRENGTH =====
function checkPasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score; // 0-4
}

function updateStrengthBars(password, barsContainerId) {
  const container = document.getElementById(barsContainerId);
  if (!container) return;
  const bars = container.querySelectorAll('.strength-bar');
  const score = checkPasswordStrength(password);
  bars.forEach((bar, i) => {
    bar.className = 'strength-bar';
    if (i < score) {
      if (score <= 1) bar.classList.add('weak');
      else if (score <= 2) bar.classList.add('medium');
      else bar.classList.add('strong');
    }
  });
}

// ===== PASSWORD SHOW/HIDE =====
function togglePasswordVisibility(inputId, toggleId) {
  const input = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);
  if (!input || !toggle) return;
  if (input.type === 'password') {
    input.type = 'text';
    toggle.textContent = 'Hide';
  } else {
    input.type = 'password';
    toggle.textContent = 'Show';
  }
}

// ===== COPY TO CLIPBOARD =====
async function copyToClipboard(text, buttonEl) {
  try {
    await navigator.clipboard.writeText(text);
    const original = buttonEl.textContent;
    buttonEl.textContent = 'Copied!';
    buttonEl.style.color = 'var(--buy)';
    setTimeout(() => {
      buttonEl.textContent = original;
      buttonEl.style.color = '';
    }, 2000);
  } catch (err) {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

// ===== DASHBOARD SIDEBAR MOBILE =====
function initDashboardSidebar() {
  const sidebar = document.getElementById('dashboardSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (!sidebar) return;

  window.openSidebar = function() {
    sidebar.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeSidebar = function() {
    sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (overlay) overlay.addEventListener('click', closeSidebar);
}

// ===== NUMBER COUNTER ANIMATION =====
function animateCounter(el, from, to, duration) {
  const start = Date.now();
  const run = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (to - from) * eased).toLocaleString();
    if (progress < 1) requestAnimationFrame(run);
  };
  requestAnimationFrame(run);
}

// ===== FORMAT DATE =====
function formatDate(date) {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric'
  }).format(date);
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initDashboardSidebar();
  detectPlanFromURL();

  // Auto-apply today's date to any [data-today] elements
  document.querySelectorAll('[data-today]').forEach(el => {
    el.textContent = formatDate(new Date());
  });
});

