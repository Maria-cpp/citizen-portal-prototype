/* ============================================================
   ROUTER & APP LOGIC — Pakistan Citizen Portal Prototype
   ============================================================ */

const routes = {
  'landing': 'page-landing',
  'login': 'page-login',
  'register': 'page-register',
  'register-inland': 'page-register-inland',
  'forgot-password': 'page-forgot-password',
  'dashboard': 'page-dashboard',
  'complaints': 'page-complaints',
  'complaint-create': 'page-complaint-create',
  'complaint-detail': 'page-complaint-detail',
  'profile': 'page-profile',
  'admin-dashboard': 'page-admin-dashboard',
  'admin-complaints': 'page-admin-complaints',
  'admin-complaint-detail': 'page-admin-complaint-detail',
  'admin-departments': 'page-admin-departments',
  'admin-reports': 'page-admin-reports',
  'contact': 'page-contact',
};

function navigateTo(route) {
  window.location.hash = route;
}

function handleRoute() {
  const hash = window.location.hash.slice(1) || 'landing';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pageId = routes[hash];
  if (pageId) {
    const el = document.getElementById(pageId);
    if (el) el.classList.add('active');
  }
  // Update sidebar active states
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll(`.nav-item[data-route="${hash}"]`).forEach(n => n.classList.add('active'));
  // Close mobile sidebar
  document.querySelector('.sidebar')?.classList.remove('open');
  document.querySelector('.sidebar-overlay')?.classList.remove('active');
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', () => {
  handleRoute();

  // Toggle buttons
  document.querySelectorAll('.toggle-group').forEach(group => {
    group.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  // Filter chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => chip.classList.toggle('active'));
  });

  // Mobile menu
  document.querySelectorAll('.menu-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.sidebar')?.classList.toggle('open');
      document.querySelector('.sidebar-overlay')?.classList.toggle('active');
    });
  });

  document.querySelectorAll('.sidebar-overlay').forEach(ov => {
    ov.addEventListener('click', () => {
      document.querySelector('.sidebar')?.classList.remove('open');
      ov.classList.remove('active');
    });
  });

  // Wizard steps
  document.querySelectorAll('[data-wizard-next]').forEach(btn => {
    btn.addEventListener('click', () => {
      const wizard = btn.closest('.wizard-content');
      const steps = wizard.querySelectorAll('.wizard-panel');
      const stepIndicators = wizard.closest('.page').querySelectorAll('.wizard-step');
      const connectors = wizard.closest('.page').querySelectorAll('.wizard-connector');
      let current = wizard.querySelector('.wizard-panel.active');
      let idx = Array.from(steps).indexOf(current);
      if (idx < steps.length - 1) {
        current.classList.remove('active');
        steps[idx + 1].classList.add('active');
        stepIndicators[idx].classList.remove('active');
        stepIndicators[idx].classList.add('done');
        stepIndicators[idx + 1].classList.add('active');
        if (connectors[idx]) connectors[idx].classList.add('done');
      }
    });
  });

  document.querySelectorAll('[data-wizard-prev]').forEach(btn => {
    btn.addEventListener('click', () => {
      const wizard = btn.closest('.wizard-content');
      const steps = wizard.querySelectorAll('.wizard-panel');
      const stepIndicators = wizard.closest('.page').querySelectorAll('.wizard-step');
      const connectors = wizard.closest('.page').querySelectorAll('.wizard-connector');
      let current = wizard.querySelector('.wizard-panel.active');
      let idx = Array.from(steps).indexOf(current);
      if (idx > 0) {
        current.classList.remove('active');
        steps[idx - 1].classList.add('active');
        stepIndicators[idx].classList.remove('active');
        stepIndicators[idx - 1].classList.remove('done');
        stepIndicators[idx - 1].classList.add('active');
        if (connectors[idx - 1]) connectors[idx - 1].classList.remove('done');
      }
    });
  });
});
