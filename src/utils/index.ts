export const computeExpr = (exp: string[]) => {
  const i = exp.findIndex(item => item === '=')
  if (i === -1)
    return false
  const leftExp = exp.slice(0, i).join('')
  console.log('leftExp-', leftExp)

  const rightExp = exp.slice(i + 1).join('')
  console.log('rightExp-', rightExp)

  // eslint-disable-next-line no-eval
  return eval(leftExp) === eval(rightExp)
}

export function randomBetween([min, max]: [number, number], fix = 0): number {
  return Number((Math.random() * (max - min) + min).toFixed(fix))
}
