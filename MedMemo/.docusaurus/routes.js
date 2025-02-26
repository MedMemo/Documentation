import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Documentation/blog',
    component: ComponentCreator('/Documentation/blog', 'fb2'),
    exact: true
  },
  {
    path: '/Documentation/blog/archive',
    component: ComponentCreator('/Documentation/blog/archive', 'b74'),
    exact: true
  },
  {
    path: '/Documentation/blog/authors',
    component: ComponentCreator('/Documentation/blog/authors', 'e57'),
    exact: true
  },
  {
    path: '/Documentation/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Documentation/blog/authors/all-sebastien-lorber-articles', 'd9d'),
    exact: true
  },
  {
    path: '/Documentation/blog/authors/yangshun',
    component: ComponentCreator('/Documentation/blog/authors/yangshun', '053'),
    exact: true
  },
  {
    path: '/Documentation/blog/first-blog-post',
    component: ComponentCreator('/Documentation/blog/first-blog-post', '730'),
    exact: true
  },
  {
    path: '/Documentation/blog/long-blog-post',
    component: ComponentCreator('/Documentation/blog/long-blog-post', '952'),
    exact: true
  },
  {
    path: '/Documentation/blog/mdx-blog-post',
    component: ComponentCreator('/Documentation/blog/mdx-blog-post', '301'),
    exact: true
  },
  {
    path: '/Documentation/blog/tags',
    component: ComponentCreator('/Documentation/blog/tags', 'db1'),
    exact: true
  },
  {
    path: '/Documentation/blog/tags/docusaurus',
    component: ComponentCreator('/Documentation/blog/tags/docusaurus', '4bc'),
    exact: true
  },
  {
    path: '/Documentation/blog/tags/facebook',
    component: ComponentCreator('/Documentation/blog/tags/facebook', 'dbb'),
    exact: true
  },
  {
    path: '/Documentation/blog/tags/hello',
    component: ComponentCreator('/Documentation/blog/tags/hello', 'bc2'),
    exact: true
  },
  {
    path: '/Documentation/blog/tags/hola',
    component: ComponentCreator('/Documentation/blog/tags/hola', '08d'),
    exact: true
  },
  {
    path: '/Documentation/blog/welcome',
    component: ComponentCreator('/Documentation/blog/welcome', '92b'),
    exact: true
  },
  {
    path: '/Documentation/markdown-page',
    component: ComponentCreator('/Documentation/markdown-page', 'f20'),
    exact: true
  },
  {
    path: '/Documentation/docs',
    component: ComponentCreator('/Documentation/docs', '25e'),
    routes: [
      {
        path: '/Documentation/docs',
        component: ComponentCreator('/Documentation/docs', '917'),
        routes: [
          {
            path: '/Documentation/docs',
            component: ComponentCreator('/Documentation/docs', '0b8'),
            routes: [
              {
                path: '/Documentation/docs/category/tutorial---basics',
                component: ComponentCreator('/Documentation/docs/category/tutorial---basics', '33c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/category/tutorial---extras',
                component: ComponentCreator('/Documentation/docs/category/tutorial---extras', 'bd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/intro',
                component: ComponentCreator('/Documentation/docs/intro', 'e18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Documentation/docs/tutorial-basics/congratulations', '29a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Documentation/docs/tutorial-basics/create-a-blog-post', '524'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Documentation/docs/tutorial-basics/create-a-document', '6bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Documentation/docs/tutorial-basics/create-a-page', '446'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Documentation/docs/tutorial-basics/deploy-your-site', 'aad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Documentation/docs/tutorial-basics/markdown-features', 'b27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Documentation/docs/tutorial-extras/manage-docs-versions', '88a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Documentation/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Documentation/docs/tutorial-extras/translate-your-site', 'ce7'),
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
    path: '/Documentation/',
    component: ComponentCreator('/Documentation/', 'a33'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
