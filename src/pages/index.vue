<script setup lang="ts" generic="T extends any, O extends any">
import { randomBetween } from '~/utils'

defineOptions({
  name: 'IndexPage',
})
const boardRef = ref()
const expression = ref<(string | number)[]>([])

const genNewProblem = () => {
  const expr = [randomBetween([1, 9]), '*', randomBetween([1, 9]), '=', '??']
  expression.value = expr
}
genNewProblem()

const handleSubmit = () => {
  const message = useMessage()
  if (boardRef.value) {
    const res = boardRef.value.submit()
    if (res)
      message.success('正确')

    else
      message.error('错误')
  }
}
</script>

<template>
  <div class="relative h-full flex justify-center items-center">
    <sy-arithmetic-board
      ref="boardRef"
      :expression="expression"
    />
    <sy-keyboard class="absolute bottom-0 p-16px box-border" />
    <div>
      <n-button
        type="primary"
        @click="handleSubmit()"
      >
        确定
      </n-button>
      <n-button
        type="info"
        @click="genNewProblem()"
      >
        下一题
      </n-button>
    </div>
  </div>
</template>
