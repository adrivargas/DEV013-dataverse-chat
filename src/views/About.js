import { header } from '../components/header.js';
export function About(props) {
  const viewEl = document.createElement('div');
  viewEl.classList.add('about');
  viewEl.textContent = 'This is the About page.';
  viewEl.appendChild(header());
  return viewEl;
}