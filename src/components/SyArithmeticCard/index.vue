<script lang="ts" setup name="ArithmeiticBoard">
import { onMounted, ref } from 'vue'
import ArithmeticCard from './ArithmeticCard'
import { OperationalSymbolInter } from './types'

const props = withDefaults(defineProps<{
  character: string
  maxLen?: number
}>(), {
  maxLen: 1,
})
const emit = defineEmits<{
  (e: 'update:character', payload: string): void
}>()

const type = isNaN(Number(props.character)) ? 'symbol' : 'number'
const char = ref(props.character)
const handleInput = (val: string) => {
  char.value = val
  emit('update:character', val)
}
</script>

<template>
  <div
    v-if="type === 'symbol'"
    class="card symbol"
  />
  <input
    v-else
    class="card number-card"
    type="text"
    :maxlength="maxLen"
    :value="char"
    @input="handleInput(($event.target as HTMLInputElement).value)"
  >
</template>

<style>
.card{
  width: 140px;
  height: 140px;
  padding:20px;
  border-radius: 6px;
  text-align: center;
  user-select: none;
  line-height: 80px;
  font-size: 60px;
  box-sizing: border-box;
}
.number-card{
  background-color: aquamarine;

}
.symbol{
  font-size: 80px;
}
</style>
