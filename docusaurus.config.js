module.exports = {
  title: 'BlankOn Linux',
  tagline: 'BlankOn Linux',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'BlankOn', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'BlankOn',
      logo: {
        alt: 'BlankOn Linux Logo',
        src: 'img/logo.jpeg',
      },
      items: [
        {
          to: 'timpengembang',
          label: 'Tim Pengembang',
        },
        {
          to: 'produkblankon',
          label: 'Produk'
        }
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          path: 'wiki',
          editUrl: 'https://github.com/BlankOn/wiki/edit/master/',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
