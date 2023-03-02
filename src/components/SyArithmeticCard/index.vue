<script lang="ts" setup name="ArithmeticBoard">
import { symbolMap } from '~/config/symbol'

const props = defineProps<{
  modelValue: string | undefined
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', payload: string): void
}>()

const data = useVModel(props, 'modelValue', emit)
const type = ref<'symbol' | 'number' | 'blank'>()
const maxLen = ref(1)
const operationalSymbol = ref()
const editable = ref(false)
const showText = ref('')
function handleChar(char: string) {
  const reg = /\?+/
  if (!isNaN(Number(char))) {
    type.value = 'number'
    showText.value = char
  }
  else if (reg.test(char)) {
    maxLen.value = char.length
    type.value = 'blank'
  }
  else if (char in symbolMap) {
    const _key = char as keyof typeof symbolMap
    operationalSymbol.value = symbolMap[_key]
    type.value = 'symbol'
  }
}
onMounted(() => {
  handleChar(props.modelValue)
})
</script>

<template>
  <div
    v-if="type === 'symbol'"
    class="card symbol"
    v-text="operationalSymbol"
  />
  <div
    v-else-if="type === 'number'"
    class="card number-car"
    v-text="data"
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
