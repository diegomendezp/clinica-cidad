const withFonts = require('next-fonts');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

// const exportPathMap = () => ({
//   '/': { page: '/' },
//   '/nosotros': { page: '/nosotros' },
//   '/tratamientos': { page: '/tratamientos' },
// });


module.exports = withPlugins([
  [withCSS],
  [withFonts],
  [withImages]
  // [exportPathMap],
]);
// module.exports = withFonts(withImages(withCSS()));
