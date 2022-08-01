module.exports = {
  siteMetadata: {
    title: 'no-typescript',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: [
            'auto',
            'webp',
            'avif',
          ],
          placeholder: 'dominantColor',
          quality: 50,
          breakpoints: [
            750,
            1080,
            1366,
            1920,
          ],
          backgroundColor: 'transparent',
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-postcss',
  ],
};
