// 1. import the defineConfigWithTheme function
import { defineConfigWithTheme ,loadEnv} from 'vitepress'
// 2. import configuration objects that need to be inherited
import escookConfig from '@escook/vitepress-theme/config'

// import { nav } from './relaConf/index'
//配置的英文文档设置
import { enConfig } from './src/config/en'
//配置的中文文档设置
import { zhConfig } from './src/config/zh'
const env = loadEnv('', "./")
export default defineConfigWithTheme({
    // 3. specify the configuration to inherit via extended
    extends: escookConfig,
    title: env.VITE_APP_NAME,
    description: env.VITE_APP_NAME,
    themeConfig: {
      // musicBall: {
      //   src: '/music/森林狂想曲.mp3',
      //   autoplay: false,
      // },
      logo: '/images/logo.png',
      // nav: nav,
      // sidebar: [
      //   {
      //     text: 'Examples',
      //     items: [
      //       { text: 'Markdown Examples', link: '/markdown-examples' },
      //       { text: 'Runtime API Examples', link: '/api-examples' }
      //     ]
      //   }
      // ],
      // outline: {
      //   level: [2, 6], // 锚点导航只能配置h2-h6级的标题
      //   label: '快捷导航'
      // },
      i18nRouting: false,
      search: {
        // 本地离线搜索
        provider: "local",
        // 多语言搜索配置
        options: {
          locales: {
            /* 默认语言 */
            zh: {
              translations: {
                button: {
                  buttonText: "搜索",
                  buttonAriaLabel: "搜索文档",
                },
                modal: {
                  noResultsText: "无法找到相关结果",
                  resetButtonTitle: "清除查询结果",
                  footer: {
                    selectText: "选择",
                    navigateText: "切换",
                  },
                },
              },
            },
            en: {
              translations: {
                button: {
                  buttonText: "Search",
                  buttonAriaLabel: "Search for Documents",
                },
                modal: {
                  noResultsText: "Unable to find relevant results",
                  resetButtonTitle: "Clear Query Results",
                  footer: {
                    selectText: "select",
                    navigateText: "switch",
                  },
                },
              },
            },
          },
        },
      },
    },
    locales: {
      // root: {
      //   label: '中文',
      //   lang: 'zh-CN',
      // },
      zh: {
        label: '中文',
        lang: 'zh-CN', // 可选，将作为 `lang` 属性添加到 `html` 标签中
        link: '/index', // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
        ...zhConfig
      },
      en: {
        label: 'English',
        lang: 'en-US', // 可选，将作为 `lang` 属性添加到 `html` 标签中
        link: '/en/index', // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
        ...enConfig
      },
    }
  })