import Typed from 'typed.js';

const loadDynamicBannerText = () => {

  const banner = document.querySelector('.banner');
  if (banner) {
    new Typed('#banner-typed-text', {
      strings: ["Un petit coup de pouce ?"],
      typeSpeed: 50,
      loop: true
    });
  }
}

export { loadDynamicBannerText };
