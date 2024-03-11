import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/LLC-Docs/markdown-page',
    component: ComponentCreator('/LLC-Docs/markdown-page', '9cb'),
    exact: true
  },
  {
    path: '/LLC-Docs/docs',
    component: ComponentCreator('/LLC-Docs/docs', 'ee9'),
    routes: [
      {
        path: '/LLC-Docs/docs',
        component: ComponentCreator('/LLC-Docs/docs', 'c8a'),
        routes: [
          {
            path: '/LLC-Docs/docs',
            component: ComponentCreator('/LLC-Docs/docs', 'd4e'),
            routes: [
              {
                path: '/LLC-Docs/docs/changelog',
                component: ComponentCreator('/LLC-Docs/docs/changelog', 'e62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LLC-Docs/docs/disc/disc_additional',
                component: ComponentCreator('/LLC-Docs/docs/disc/disc_additional', '1a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LLC-Docs/docs/disc/disc_general',
                component: ComponentCreator('/LLC-Docs/docs/disc/disc_general', '437'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LLC-Docs/docs/disc/disc_param',
                component: ComponentCreator('/LLC-Docs/docs/disc/disc_param', '4d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LLC-Docs/docs/discription/disc_advanced',
                component: ComponentCreator('/LLC-Docs/docs/discription/disc_advanced', 'eb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LLC-Docs/docs/discription/disc_param',
                component: ComponentCreator('/LLC-Docs/docs/discription/disc_param', 'ff7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LLC-Docs/docs/faq',
                component: ComponentCreator('/LLC-Docs/docs/faq', 'aef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LLC-Docs/docs/howtouse/howtouse-basic',
                component: ComponentCreator('/LLC-Docs/docs/howtouse/howtouse-basic', '37f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LLC-Docs/docs/howtouse/howtouse-basic-old',
                component: ComponentCreator('/LLC-Docs/docs/howtouse/howtouse-basic-old', '736'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LLC-Docs/docs/intro',
                component: ComponentCreator('/LLC-Docs/docs/intro', '4ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/LLC-Docs/docs/tutorial/howtouse-basic',
                component: ComponentCreator('/LLC-Docs/docs/tutorial/howtouse-basic', '18c'),
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
    path: '/LLC-Docs/',
    component: ComponentCreator('/LLC-Docs/', '725'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
