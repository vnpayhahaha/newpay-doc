import { h } from 'vue'
import type { Theme } from 'vitepress'
import EnvVar from './components/EnvVar.vue'
import OpenApi from './components/OpenApi.vue'
// 1. import vitepress theme
import escookTheme from '@escook/vitepress-theme'
// 2. import matching CSS styles (this step cannot be omitted)
import '@escook/vitepress-theme/style.css'
// import your custom styles
// import './style.css'


export default {
  // 3. specify the theme to inherit and perform secondary extensions based on this theme
  extends: escookTheme,
  Layout: () => {
    return h(escookTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
      // expand custom features...
      app.component('EnvVar', EnvVar);
      app.component('OpenApi', OpenApi);
  }
} satisfies Theme