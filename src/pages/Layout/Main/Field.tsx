import React from 'react'
import { Field as IField } from '@mobx-form-constructor/core'
import { observer } from 'mobx-react-lite'

interface IProps<T extends React.FC<any>> {
    field: IField<any, any>
    component: T
    props?: Parameters<T>[0]
    type: 'input' | 'checkbox' | 'radio'
    value?: string
}

function Field<T extends React.FC<any>>({ field, component, props, type = 'input', value }: IProps<T>) {
    const bindings =
        type === 'radio' ? field.bindRadio(value) : type === 'checkbox' ? field.bindCheckbox() : field.bind()

    const error = (field.touched || field.form.submitFailed) && field.error

    const Component: React.FC<any> = component

    return <Component {...bindings} {...props} error={error} />
}
