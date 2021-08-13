const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'KlPalace', 
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lukexiaoyu', // Usually your GitHub org/user name.
  projectName: 'Docusaurus_blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'KL  ',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'HTML5',
        },

      
        {to: '/angular/index', label: 'Angular', position: 'left'},
        {to: '/django/index', label: 'Django', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
       
        
        
        {
          href: 'https://github.com/lukexiaoyu/Docusaurus_blog',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://space.bilibili.com/79985728',
          label: 'BiliBili',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '百度',
              href: 'https://www.baidu.com',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // docId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/lukexiaoyu/Docusaurus_blog/edit/main/',
        },
       
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/lukexiaoyu/Docusaurus_blog/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local'),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'angular',
        path: 'angular',
        routeBasePath: 'angular',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl:
            'https://github.com/lukexiaoyu/Docusaurus_blog/edit/main/',
        
        
        // ... other options
      },
      
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'django',
        path: 'django',
        routeBasePath: 'django',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl:
            'https://github.com/lukexiaoyu/Docusaurus_blog/edit/main/',
        
        
        // ... other options
      },
      
    ],
  ],
};
