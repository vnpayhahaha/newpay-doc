---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true
 
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true
 
hero:
    name: 快速对接支付文档
    text: Maintain standards and efficiency.
    tagline: 本文档提供为支付系统接口文档说明， 旨在规范、快速的帮助合作伙伴们完成支付的对接。
    image:
        # 首页右边的图片
        src: /images/logo.png
        # 图片的描述
        alt: avatar
    # 按钮相关
    actions:
    - theme: brand
      text: 开始
      link: /zh/documentation
# 按钮下方的描述
features:
  - icon: 🎨
    title: 开发前的准备
    details: 基础规范说明、环境要求、材料准备、签名加密规则
    link: /zh/documentation
  - icon: 🧩
    title: 接口支持
    details: 收款、付款、账单查询、回调通知
  - icon: 📙
    title: 数据字典
    details: 错误码、状态码、枚举字段
---