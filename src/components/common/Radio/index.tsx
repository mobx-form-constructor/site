import React from 'react'

interface IProps {
  checked: boolean
  error: any
  onChange: (e: React.ChangeEvent) => void
  onFocus: () => void
  onBlur: () => void
  label: string
}

function Radio({ error, label, ...props }: React.PropsWithChildren<IProps>) {
  return (
    <div>
      <label>
        {label}
        <input type="radio" {...props} />
      </label>
      <span>{error}</span>
    </div>
  )
}

export { Radio }
