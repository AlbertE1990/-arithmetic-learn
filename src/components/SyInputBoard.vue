<script lang="ts" setup name="SyInputBoard">
import type { Ref } from 'vue'

interface ArithmeticCard {
  maxLen: number
  character: Ref<string>
  type: 'number' | 'symbol'
  operationalSymbol: string
  length: number
  canInput: () => boolean
  input: (character: string) => number
  delete: () => number
}

interface OperationalSymbolInter {
  readonly ADD: string
  readonly SUB: string
  readonly MUL: string
  readonly DIV: string
  readonly EQ: string
}
const OperationalSymbol: OperationalSymbolInter = {
  ADD: '+',
  SUB: '-',
  MUL: '×',
  DIV: '÷',
  EQ: '=',
}

class ArithmeticCardImp implements ArithmeticCard {
  public maxLen: number
  public character: Ref<string>
  public type: 'number' | 'symbol'

  constructor(character: string, maxLen = 1) {
    this.type = isNaN(Number(character)) ? 'symbol' : 'number'
    this.character = ref(character)
    this.maxLen = maxLen
  }

  public get length() {
    return this.character.value.length
  }

  private canInput() {
    if (this.type === 'symbol')
      return false
    return this.maxLen > this.length
  }

  private canDelete() {
    if (this.type === 'symbol')
      return false
    return this.length
  }

  public input(character: string) {
    if (!this.canInput())
      return 0
    const inputLength = Math.min(this.maxLen - this.length, character.length)
    this.character.value += character.slice(0, inputLength)
    return inputLength
  }

  public delete() {
    if (!this.canDelete())
      return 0
    this.character.value = this.character.value.slice(0, -1)
    return 1
  }
}
interface InputBoardProp {

}
</script>

<template>
  <div class="p-40px rounded shadow w-800px  bg-blue-gray-100 text-center">
    <div class="flex items-center justify-between">
      <div class="small-card number-card">
        9
      </div>
      <div class="small-card symbol">
        ×
      </div>
      <div class="small-card number-card">
        9
      </div>
      <div class="small-card symbol">
        =
      </div>
      <div class="small-card number-card">
        99
      </div>
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
