const supportedLanguages = ['en', 'ur', 'ar'];

function readNestedValue(object, path) {
  return path.split('.').reduce((value, key) => value?.[key], object);
}

async function applyLanguage(language) {
  const selectedLanguage = supportedLanguages.includes(language) ? language : 'en';

  try {
    const response = await fetch(`locales/${selectedLanguage}.json`);
    if (!response.ok) throw new Error(`Could not load ${selectedLanguage}.json`);

    const translations = await response.json();

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = readNestedValue(translations, element.dataset.i18n);
      if (typeof value === 'string') element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const value = readNestedValue(translations, element.dataset.i18nHtml);
      if (typeof value === 'string') element.innerHTML = value;
    });

    const isRtl = selectedLanguage === 'ur' || selectedLanguage === 'ar';
    document.documentElement.lang = selectedLanguage;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    localStorage.setItem('portfolio-language', selectedLanguage);
    document.getElementById('languageSwitcher').value = selectedLanguage;

    if (typeof window.renderTerminal === 'function') {
      window.renderTerminal(selectedLanguage);
    }
  } catch (error) {
    console.error('Language loading error:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const savedLanguage = localStorage.getItem('portfolio-language') || 'en';

  languageSwitcher.addEventListener('change', (event) => {
    applyLanguage(event.target.value);
  });

  applyLanguage(savedLanguage);
});
