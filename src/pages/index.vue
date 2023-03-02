<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})

const name = $ref('')
</script>

<template>
  <div class="relative h-full flex justify-center items-center">
    <sy-arithmetic-board />
    <sy-keyboard class="absolute bottom-0 p-16px box-border" />
  </div>
</template>
