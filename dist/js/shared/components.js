import { hydrateIcons } from './icons.js';

/** Escape external text before interpolating into component HTML. */
export function escapeHTML(value) { return String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]); }

export function badge(label, tone = 'neutral', dot = false) {
  const safeTone = ['success', 'warning', 'neutral'].includes(tone) ? tone : 'neutral';
  return `<span class="badge badge-${safeTone}">${dot ? '<span class="status-dot"></span>' : ''}${escapeHTML(label)}</span>`;
}

export function createDialogController(dialog) {
  let opener;
  const close = () => dialog.close();
  dialog.querySelector('[data-close-dialog]').addEventListener('click', close);
  // Keep the loop explicit, including dialogs with only a close button.
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]')].filter(el => !el.hidden && el.getClientRects().length);
    const first = focusable[0], last = focusable.at(-1);
    if (!first) { event.preventDefault(); return; }
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) close();
  });
  dialog.addEventListener('close', () => { if (opener?.isConnected) opener.focus(); });
  return {
    open(title, html) {
      if (!dialog.open) opener = document.activeElement;
      dialog.querySelector('#dialog-title').textContent = title;
      dialog.querySelector('#dialog-content').innerHTML = html;
      hydrateIcons(dialog);
      if (!dialog.open) dialog.showModal();
      dialog.querySelector('[data-close-dialog]').focus();
    },
    close,
  };
}

export function showToast(message) {
  const toast = document.querySelector('#toast');
  if (!toast) return;
  clearTimeout(showToast.timer);
  toast.textContent = message;
  toast.hidden = false;
  showToast.timer = setTimeout(() => { toast.hidden = true; }, 4500);
}

/** Contrast utility used by the live branding preview. */
export function contrastRatio(hexA, hexB) {
  const luminance = hex => {
    const channels = hex.match(/[a-f\d]{2}/gi).map(c => parseInt(c, 16) / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
    return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
  };
  const a = luminance(hexA), b = luminance(hexB);
  return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
}
