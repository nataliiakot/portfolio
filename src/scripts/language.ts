import { translations } from '../content/translations';
type Language = 'en' | 'uk';
const buttons = document.querySelectorAll<HTMLButtonElement>('[data-language]');
const nodes: { node: Text; original: string }[] = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode as Text;
  if (node.textContent?.trim() && !node.parentElement?.closest('script, style, [data-language]')) {
    nodes.push({ node, original: node.data });
  }
}
const attributes = [...document.querySelectorAll('[aria-label], meta[content], title')].flatMap(element =>
  ['aria-label', 'content'].filter(name => element.hasAttribute(name)).map(name => ({ element, name, original: element.getAttribute(name)! }))
);
const originalTitle = document.title;
function translate(text: string) {
  const key = text.trim();
  if (translations[key]) return text.replace(key, translations[key]);
  // CV combines existing content into single text nodes.
  return text.split(/( · | — )/).map(part => translations[part.trim()] ? part.replace(part.trim(), translations[part.trim()]!) : part).join('');
}
function setLanguage(language: Language) {
  document.documentElement.lang = language;
  nodes.forEach(({ node, original }) => { node.data = language === 'uk' ? translate(original) : original; });
  attributes.forEach(({ element, name, original }) => element.setAttribute(name, language === 'uk' ? translate(original) : original));
  document.title = language === 'uk' ? translate(originalTitle) : originalTitle;
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'uk' ? 'uk_UA' : 'en_US');
  document.dispatchEvent(new Event('portfolio:language-change'));
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  try { localStorage.setItem('portfolio-language', language); } catch {}
}
let language: Language = 'en';
try { if (localStorage.getItem('portfolio-language') === 'uk') language = 'uk'; } catch {}
setLanguage(language);
buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language === 'uk' ? 'uk' : 'en')));
