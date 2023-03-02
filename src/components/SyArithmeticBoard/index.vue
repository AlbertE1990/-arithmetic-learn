<script lang="ts" setup name="ArithmeticBoard">
import { symbolMap } from '~/config/symbol'

interface CardOpt {
  type: 'number' | 'symbol' | 'blank'
  showText?: string
  maxLen?: number
}
const expression = ['55', '*', '66', '=', '??']
const expValue = ref<string[]>([])

const cardOptions = ref<CardOpt[]>()

function handleChar(expression: string[]) {
  const reg = /\?+/
  cardOptions.value = expression.map((char, i) => {
    let type
    let maxLen
    let showText
    if (!isNaN(Number(char))) {
      type = 'number'
      showText = char
      expValue.value[i] = char
    }
    else if (reg.test(char)) {
      maxLen = char.length
      type = 'blank'
      expValue.value[i] = ''
    }
    else if (char in symbolMap) {
      const _key = char as keyof typeof symbolMap
      showText = symbolMap[_key]
      type = 'symbol'
      expValue.value[i] = char
    }
    return {
      type,
      maxLen,
      showText,
    } as CardOpt
  })
}

handleChar(expression)

onMounted(() => {
  expression.forEach((i) => {

  })
})
</script>

<template>
  <div class="p-40px rounded shadow w-800px  bg-blue-gray-100 text-center">
    <div class="flex items-center justify-between">
      <template
        v-for="(opt, i) in cardOptions"
        :key="opt.showText + i"
      >
        <SyArithmeticCard
          v-if="opt.type === 'blank'"
          v-model="expValue[i]"
          :max-len="opt.maxLen"
        />
        <SyArithmeticCard
          v-else
          v-bind="opt"
        />
      </template>
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
