import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  markdown: {
    checkDeadLinks: true
  },
  lang: 'nl',
  locales: [{
      lang: 'nl',
      label: 'Nederlands',
    },
  ],
  root: path.join(__dirname, 'docs'),
  title: 'Paulus',
  description: 'Persoonlijke website van Paul Min',
  // icon: '/rspress-icon.png',
  // logo: {
  //   light: '/rspress-light-logo.png',
  //   dark: '/rspress-dark-logo.png',
  // },
  themeConfig: {
    search: false,
    outlineTitle: 'Op deze pagina',
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/paulusminus' },
    ],
  },
});
