<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

// 默认值
const value = ref('');

// 只在客户端运行时获取环境变量
onMounted(() => {
  //console.log(props.name,import.meta.env,__VITE_ENV__ );
  if (typeof __VITE_ENV__ !== 'undefined') {
    value.value = __VITE_ENV__[`VITE_${props.name}`] || '';
  } else if (import.meta.env[`VITE_${props.name}`]) {
    value.value = import.meta.env[`VITE_${props.name}`];
  }
  // 最后尝试从全局 window 对象获取
  else if (typeof window !== 'undefined' && window.__VITE_ENV__) {
    value.value = window.__VITE_ENV__[`VITE_${props.name}`] || '';
  }
  
});
</script>

<template>
  <span>{{ value }}</span>
</template>