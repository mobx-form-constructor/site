import { Field, ValidateType } from '@mobx-form-constructor/core'

export const minLength = (length: number = 1) => ({ value }: Field) =>
  value.length < length ? `Minimum length ${length}` : ''

export const maxLength = (length: number = 64) => ({ value }: Field) =>
  value.length > length ? `Maximum length ${length}` : ''

export const isEmail = () => ({ value }: Field) =>
  !/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/gi.test(value) ? 'Incorrect email' : ''

export const required = (errorText = 'Required field') => ({ value }: Field) => {
  switch (typeof value) {
    case 'boolean':
      return !value ? errorText : ''

    case 'string':
      return !value.length ? errorText : ''

    case 'number':
      return !String(value).length ? errorText : ''

    case 'object': {
      if (Array.isArray(value) && value.length === 0) return errorText

      return ''
    }

    default:
      return ''
  }
}

export const minValue = (value: number = 1) => (field: Field) => (field.value < value ? `Minimum value ${value}!` : '')

export const spaceCheck = () => ({ value }: Field) => (/\s/.test(value) ? 'Space forbidden' : '')

export const isDateMask = (): ValidateType => ({ value }) =>
  !/^(20|21|19)[0-9]{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value) ? 'Format date YYYY-MM-DD' : ''
