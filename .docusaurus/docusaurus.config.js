export default {
  "title": "Light Limit Changer for MA",
  "tagline": "MA前提 アバター明るさ変更ツール",
  "url": "https://azukimochi.github.io/LLC-Docs/",
  "baseUrl": "/LLC-Docs/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "Azukimochi",
  "projectName": "LLC-Docs",
  "plugins": [
    [
      "@docusaurus/plugin-client-redirects",
      {
        "fromExtensions": [
          "html",
          "htm"
        ],
        "toExtensions": [
          "exe",
          "zip"
        ],
        "redirects": [
          {
            "to": "/docs/newDoc",
            "from": "/docs/oldDoc"
          },
          {
            "to": "/docs/newDoc2",
            "from": [
              "/docs/oldDocFrom2019",
              "/docs/legacyDocFrom2016"
            ]
          }
        ]
      }
    ]
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "F:\\Docsaurus\\LLC-Docs\\sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/main/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/main/website/blog/"
        },
        "theme": {
          "customCss": "F:\\Docsaurus\\LLC-Docs\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "gtag": {
      "trackingID": "G-QT38MBWWKD",
      "anonymizeIP": true
    },
    "navbar": {
      "title": "Light Limit Changer",
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "説明書"
        },
        {
          "href": "https://github.com/Azukimochi/LightLimitChangerForMA",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "ドキュメント",
          "items": [
            {
              "label": "説明書",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "リンク",
          "items": [
            {
              "label": "Github",
              "href": "https://github.com/Azukimochi/LightLimitChangerForMA"
            },
            {
              "label": "X",
              "href": "https://twitter.com/azukimochi25"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2024 Azukimochi25, Inc. Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};