interface OperationalSymbolInter {
  readonly ADD: string
  readonly SUB: string
  readonly MUL: string
  readonly DIV: string
  readonly EQ: string
}

export const operationalSymbols: OperationalSymbolInter = {
  ADD: '+',
  SUB: '-',
  MUL: '×',
  DIV: '÷',
  EQ: '=',
}

export const symbolMap = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷',
  '=': '=',
}
