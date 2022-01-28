import Typed from 'typed.js';

const loadDynamicBannerText = () => {

  const banner = document.querySelector('.banner');
  if (banner) {
    new Typed('#banner-typed-text', {
      strings: ["Besoin d'un petit coup de pouce ?"],
      typeSpeed: 50,
      loop: false
    });
  }
}

export { loadDynamicBannerText };
