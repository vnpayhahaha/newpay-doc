import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
//引入以上配置 是英文界面需要修改zh为en
import getNavs  from "../nav/en";
import {sidebar} from '../sidebar/en'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
      lastUpdatedText: 'Last Update',
      returnToTopLabel: 'TOP',
      // 文档页脚文本配置
      docFooter: {
        prev: 'prev',
        next: 'next'
      },
      //   editLink: {
      //     pattern: '路径地址',
      //     text: '对本页提出修改建议',
      //   },
      logo: "/images/logo.png",

      nav: getNavs(),

      sidebar,

      outline: {
        level: [2, 6], // 右侧大纲标题层级
        label: "catalogue", // 右侧大纲标题文本配置
      },
    },
  }