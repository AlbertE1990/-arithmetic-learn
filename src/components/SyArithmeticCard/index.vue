<script lang="ts" setup name="ArithmeticBoard">
const props = defineProps<{
  modelValue?: string | number
  type: 'number' | 'symbol' | 'blank'
  maxLen?: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', payload: string): void
}>()

const data = useVModel(props, 'modelValue', emit)
</script>

<template>
  <div
    v-if="type === 'symbol'"
    class="card symbol"
    v-text="modelValue"
  />
  <div
    v-else-if="type === 'number'"
    class="card number-card"
    v-text="modelValue"
  />
  <input
    v-else
    v-model="data"
    class="card number-card"
    type="text"
    :maxlength="maxLen"
  >
</template>

<style>
.card{
  width: 140px;
  height: 140px;
  padding:20px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  line-height: 80px;
  font-size: 60px;
  box-sizing: border-box;
  text-align: center;
}
.number-card{
  background-color: aquamarine;

}
.symbol{
  font-size: 80px;
}
</style>
