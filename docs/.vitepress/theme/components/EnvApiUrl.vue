<script setup>
const env = {
  API_URL: import.meta.env.VITE_API_URL || 'https://fallback.api'
};
</script>

<template>
    <slot v-bind="env" />
</template>