import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Form, field, fieldArray } from '@mobx-form-constructor/core'

import StyledInput from '../../../components/common/MaterialInput'

import Hobby from './Hobby'
import Field from './Field'

function required({ value }: any) {
    return !value ? 'Required' : ''
}

function minLength(length: number) {
    return ({ value }: any) => (value.length < length ? `Min length ${length}` : '')
}

class UserFormModel {
    @field({ validate: [required, minLength(3)] })
    login = 'alex'

    @field({ validate: [required, minLength(10)] })
    password = 'password'

    @fieldArray({ model: Hobby })
    hobbies: Hobby[] = [{ hobbyId: 1, hobbyName: 'dev' }]

    @fieldArray()
    emails: string[] = ['olefirenk@gmail.com']

    @field()
    employed = true

    @field()
    sause = 'mustard'
}

function MainPage() {
    const [form] = useState(
        () =>
            new Form(UserFormModel, {
                initialValues: {
                    login: '',
                    password: ''
                },
                onSubmit(instance) {
                    console.log(instance)
                    console.log(JSON.stringify(instance.values))

                    return Promise.resolve()
                }
            })
    )

    const checkboxfield = form.fields.employed.bindCheckbox()

    console.log(JSON.stringify(form.values))
    console.log(JSON.stringify(form.initialValues))

    return (
        <div
            style={{
                fontFamily: 'Arial',
                width: '100wv',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div>
                <form onSubmit={form.handleSubmit} style={{ width: 400, height: 400 }}>
                    <Field component={StyledInput} field={form.fields.login} props={{ label: 'Login' }} />
                    <Field component={StyledInput} field={form.fields.password} props={{ label: 'Password' }} />
                    {form.fields.emails.map(f => (
                        <Field field={f} key={f.key} component={StyledInput} />
                    ))}

                    {form.fields.hobbies.map(f => (
                        <div key={f.hobbyId.key}>
                            <Field field={f.hobbyId} component={StyledInput} />
                            <Field field={f.hobbyName} component={StyledInput} />
                        </div>
                    ))}

                    <input type="checkbox" {...checkboxfield} />

                    <label>
                        <input type="radio" {...form.fields.sause.bindRadio('ketchup')} />
                        Ketchup
                    </label>
                    <label>
                        <input type="radio" {...form.fields.sause.bindRadio('mustard')} />
                        Mustard
                    </label>

                    <button>Submit</button>
                </form>
            </div>
            <div>pristine: {JSON.stringify(form.pristine)}</div>
        </div>
    )
}

export default observer(MainPage)
