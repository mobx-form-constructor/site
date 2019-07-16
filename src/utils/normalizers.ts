import { NormalizeType } from '@mobx-form-constructor/core'

export function toPrecision(precision: number = 2): NormalizeType<number, any> {
  const regex = new RegExp(`^\\d+?(.?)?\\d{0,${precision}}$`)

  function formatter(value: number) {
    return Number(Intl.NumberFormat('en-US', { maximumFractionDigits: precision }).format(value))
  }

  return nextValue => {
    return regex.test(nextValue.toString()) || !nextValue ? nextValue : formatter(nextValue)
  }
}

export function digit(): NormalizeType<number, any> {
  return (nextValue: number, { value }) => {
    return /^\d*\.?\d*$/.test(nextValue.toString()) || !nextValue ? nextValue : value
  }
}
