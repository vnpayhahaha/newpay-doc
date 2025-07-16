---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true
 
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
titleTemplate: Hi, finally I've waited for you
editLink: true
lastUpdated: true
 
hero:
    name: Quickly connect to payment documents
    text: Maintain standards and efficiency.
    tagline: This document serves as an interface specification for the payment system, aiming to standardize and expedite the process of assisting partners in completing payment integrations.
    image:
        # 首页右边的图片
        src: /images/logo.png
        # 图片的描述
        alt: avatar
    # 按钮相关
    actions:
    - theme: brand
      text: Get Started
      link: /en/documentation
# 按钮下方的描述
features:
  - icon: 🎨
    title: Preparation Before Development
    details: Basic specification description, environmental requirements, material preparation, signature encryption rules
    link: /en/documentation
  - icon: 🧩
    title: Interface Support
    details: Receipt, payment, bill inquiry, callback notification
  - icon: 📙
    title: Data Dictionary
    details: Error code, status code, enumeration field
---