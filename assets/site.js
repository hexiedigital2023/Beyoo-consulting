// BEYOO Consulting — site behaviour (mobile nav, accordions, contact form)
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.hx-nav__toggle');
  const navLinks = document.querySelector('.hx-nav__links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Accordions
  document.querySelectorAll('[data-accordion]').forEach((item) => {
    const head = item.querySelector('.hx-accordion-head');
    const panel = item.querySelector('.hx-accordion-panel');
    const chevron = item.querySelector('.hx-accordion-chevron');
    const openMaxHeight = item.dataset.openMaxHeight || '400px';
    const openPaddingBottom = item.dataset.openPaddingBottom || '56px';
    if (!head || !panel) return;

    head.addEventListener('click', () => {
      const open = item.classList.toggle('is-open');
      panel.style.maxHeight = open ? openMaxHeight : '0px';
      panel.style.paddingBottom = open ? openPaddingBottom : '0px';
      if (chevron) chevron.style.transform = `translateY(-50%) rotate(${open ? '0deg' : '90deg'})`;
      head.setAttribute('aria-expanded', String(open));
    });
  });

  // Contact form (fake submission — no backend wired up yet)
  const form = document.querySelector('#contact-form');
  if (form) {
    const card = form.closest('[data-contact-card]');
    const thankYou = card ? card.querySelector('[data-thank-you]') : null;
    const nameInput = form.querySelector('#contact-name');
    const resetBtn = card ? card.querySelector('[data-reset]') : null;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (thankYou) {
        const name = nameInput && nameInput.value.trim();
        const nameEl = thankYou.querySelector('[data-thank-name]');
        if (nameEl) nameEl.textContent = name ? `, ${name}` : '';
        form.hidden = true;
        thankYou.hidden = false;
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        form.hidden = false;
        if (thankYou) thankYou.hidden = true;
      });
    }
  }
});
