const withFonts = require('next-fonts');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/clinicas': { page: '/clinicas' },
    '/tratamientos': { page: '/tratamientos' },
    '/blog': { page: '/blog' },
    '/equipo': { page: '/equipo' },
  }),
};

module.exports = withPlugins([
  [withCSS],
  [withFonts],
  [withImages],
], nextConfig);
// module.exports = withFonts(withImages(withCSS()));
