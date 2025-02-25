import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', '189'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/', '1d9'),
    exact: true
  },
  {
    path: '/blog/authors/',
    component: ComponentCreator('/blog/authors/', '347'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles/',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles/', 'a25'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun/',
    component: ComponentCreator('/blog/authors/yangshun/', 'c91'),
    exact: true
  },
  {
    path: '/blog/first-blog-post/',
    component: ComponentCreator('/blog/first-blog-post/', '08c'),
    exact: true
  },
  {
    path: '/blog/long-blog-post/',
    component: ComponentCreator('/blog/long-blog-post/', '447'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post/',
    component: ComponentCreator('/blog/mdx-blog-post/', 'bcc'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/', 'e17'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus/',
    component: ComponentCreator('/blog/tags/docusaurus/', '350'),
    exact: true
  },
  {
    path: '/blog/tags/facebook/',
    component: ComponentCreator('/blog/tags/facebook/', '187'),
    exact: true
  },
  {
    path: '/blog/tags/hello/',
    component: ComponentCreator('/blog/tags/hello/', '046'),
    exact: true
  },
  {
    path: '/blog/tags/hola/',
    component: ComponentCreator('/blog/tags/hola/', 'bf6'),
    exact: true
  },
  {
    path: '/blog/welcome/',
    component: ComponentCreator('/blog/welcome/', 'a11'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', '54d'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'acc'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '080'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '87b'),
            routes: [
              {
                path: '/docs/category/tutorial---basics/',
                component: ComponentCreator('/docs/category/tutorial---basics/', '52e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras/',
                component: ComponentCreator('/docs/category/tutorial---extras/', 'b8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/',
                component: ComponentCreator('/docs/intro/', 'e44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations/',
                component: ComponentCreator('/docs/tutorial-basics/congratulations/', 'a13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post/',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post/', '76f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document/',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document/', '991'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page/',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page/', '35f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site/',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site/', '775'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features/',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features/', '894'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions/',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions/', 'fa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site/',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site/', '3c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
