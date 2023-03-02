import type { Ref } from 'vue'

export default class ArithmeticCard {
  public maxLen: number
  public character: Ref<string>
  public type: 'number' | 'symbol'
  public operationalSymbol?: string | undefined

  constructor(character: string, maxLen = 1) {
    this.type = isNaN(Number(character)) ? 'symbol' : 'number'
    this.character = ref(character)
    this.maxLen = maxLen
    this.operationalSymbol = ''
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
    return this.length > 0
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
