module.exports = {
  title: 'BlankOn Linux',
  tagline: 'BlankOn Linux',
  url: 'https://dev.blankonlinux.or.id',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'BlankOn', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    algolia: {
      apiKey: '288fe504a4624b981c1975ce5c5f0f64',
      indexName: 'blankonlinux',
    },
    navbar: {
      title: 'BlankOn',
      hideOnScroll: true,
      logo: {
        alt: 'BlankOn Linux Logo',
        src: 'img/logo.jpeg',
      },
      items: [
        {
          position: 'left',
          to: 'Partisipasi',
          label: 'Tim Pengembang',
        },
        {
          position: 'left',
          to: 'ProdukBlankOn/README',
          label: 'Produk'
        },
        {
          href: 'https://github.com/BlankOn',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'BlankOn Wiki',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'BlankOn Linux',
        src: 'img/logo-hitam.png',
        href: 'https://blankonlinux.or.id',
      },
      copyright: `Copyright © ${new Date().getFullYear()} BlankOn Linux. Built with Docusaurus.`,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'Wiki',
          editUrl: 'https://github.com/BlankOn/wiki/edit/master/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
