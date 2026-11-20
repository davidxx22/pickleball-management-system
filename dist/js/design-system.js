import { hydrateIcons } from './shared/icons.js';
import { createDialogController, showToast } from './shared/components.js';
import { repository } from './services/repository.js';

const business = await repository.getBusiness();
const vars = { '--brand': business.colors.primary, '--brand-hover': business.colors.primaryHover, '--accent': business.colors.accent, '--accent-ink': business.colors.accentInk };
Object.entries(vars).forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
hydrateIcons();
const dialog = createDialogController(document.querySelector('#app-dialog'));
document.querySelectorAll('[data-demo-toast]').forEach(button => button.addEventListener('click', () => showToast(`${button.dataset.demoToast} · no data submitted.`)));
document.querySelector('[data-open-demo]').addEventListener('click', () => dialog.open('A shared dialog', '<div class="notice">Frontend demonstration · Nothing is submitted.</div><p>Tab stays inside this dialog. Press Escape, click outside, or use the close button to return. Focus returns to the button that opened it.</p>'));
document.querySelectorAll('[data-sample-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-sample-filter]').forEach(item => { const selected = item === button; item.classList.toggle('selected', selected); item.setAttribute('aria-pressed', String(selected)); });
  showToast(`Example filter: ${button.textContent}. No court data on this reference page.`);
}));
document.querySelector('#sample-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#form-result').textContent = 'Example validated locally. Nothing was saved or sent. The email field illustrates an error style only.';
});
