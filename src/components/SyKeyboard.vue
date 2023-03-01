<script lang="ts" setup>

</script>

<template>
  <n-grid cols="2 400:4 600:6 " :x-gap="12" :y-gap="12">
    <n-grid-item v-for="i in 12" :key="i">
      <div class="bg-green-100 h-80px rounded flex items-center justify-center key ">
        {{ i - 1 }}
      </div>
    </n-grid-item>
  </n-grid>
</template>

<style lang="css" scoped>
.key {
  user-select: none;
  font-size: 40px;
  font-weight: bold;
  color: rgb(175, 173, 173);
  cursor: pointer;
}

.key:active {
  /* position: relative;
  top: 1px;
  left: 1px; */
  /* border-color: #e5e5e5; */
  box-shadow:0.1em 0.1em 0.1em rgba(0, 0, 0, 0.2),0 0 0 0.05em rgba(0, 0, 0, 0.4),-0.025em -0.05em 0.025em rgba(255, 255, 255, 0.8) inset;
}
</style>
