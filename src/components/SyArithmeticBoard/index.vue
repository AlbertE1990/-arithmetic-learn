<script lang="ts" setup name="ArithmeticBoard">
import { symbolMap } from '~/config/symbol'
import { computeExpr } from '~/utils'

interface CardOpt {
  type: 'number' | 'symbol' | 'blank'
  modelValue?: string
  maxLen?: number
}

const props = defineProps<{
  expression: (string | number)[]
}>()

const cardOptions = ref<CardOpt[]>()

function handleChar(expression: (string | number)[]) {
  const reg = /\?+/
  cardOptions.value = expression.map((char, i) => {
    let type
    let maxLen
    let modelValue
    if (!isNaN(Number(char))) {
      type = 'number'
      modelValue = char
    }
    else if (reg.test(char.toString())) {
      maxLen = char.toString().length
      type = 'blank'
    }
    else if (char in symbolMap) {
      const _key = char as keyof typeof symbolMap
      modelValue = symbolMap[_key]
      type = 'symbol'
    }
    return {
      type,
      maxLen,
      modelValue,
    } as CardOpt
  })
}

const submit = () => {
  const expr = cardOptions.value?.map(item => item.modelValue!)
  console.log('expr--', expr)
  return computeExpr(expr!)
}

watch(() => props.expression, (expr) => {
  handleChar(expr)
}, { immediate: true })

defineExpose({ submit })
</script>

<template>
  <div class="p-40px rounded shadow w-800px  bg-blue-gray-100 text-center">
    <div class="flex items-center justify-between">
      <SyArithmeticCard
        v-for="(opt, i) in cardOptions"
        :key="i"
        v-bind="opt"
        v-model="opt.modelValue"
      />
    </div>
  </div>
</template>

<style>
.small-card{
  width: 120px;
  height: 120px;
  padding:20px;
  border-radius: 6px;
  text-align: center;
  user-select: none;
  line-height: 80px;
  font-size: 60px;
}
.number-card{
  background-color: aquamarine;

}
.symbol{
  font-size: 80px;
}
</style>
