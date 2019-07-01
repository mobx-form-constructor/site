import React from 'react'
import { Field, Form, useForm } from '@mobx-form-constructor/react'
import { observer } from 'mobx-react-lite'

import { FormControl, FormWrap, FormActions, Block } from '../../styled'

import RegisterFormModel from './RegisterFormModel'

function SimpleForm() {
    const form = useForm(
        () =>
            new Form(RegisterFormModel, {
                name: 'Registration',
                initialValues: {
                    username: 'alex',
                    password: 'Password123',
                    gender: 'male',
                    flavor: ['lime'],
                    sause: 'mustard',
                    employed: false
                },
                onSubmit({ values }) {
                    return new Promise(res => {
                        setTimeout(() => {
                            res()
                            alert(JSON.stringify(values, null, 2))
                        }, 1000)
                    })
                }
            })
    )

    function handleClear() {
        form.reset({})
    }

    function handleReset() {
        form.reset()
    }

    return (
        <>
            <h1>Simple form</h1>

            <Block>
                <a
                    href="https://github.com/mobx-form-constructor/site/src/pages/Layout/Examples/SimpleForm/index.tsx"
                    target="_blank"
                >
                    Link to github with source
                </a>
            </Block>

            <FormWrap onSubmit={form.handleSubmit}>
                <FormControl>
                    <label>Username:</label>
                    <div>
                        <Field component="input" field={form.fields.username} placeholder="Email" />
                        <span>{(form.fields.username.touched || form.submitFailed) && form.fields.username.error}</span>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Password:</label>
                    <div>
                        <Field component="input" field={form.fields.password} placeholder="Password" />
                        <span>{(form.fields.password.touched || form.submitFailed) && form.fields.password.error}</span>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Employed:</label>
                    <div>
                        <Field component="input" field={form.fields.employed} type="checkbox" />
                    </div>
                </FormControl>

                <FormControl>
                    <label>Gender:</label>
                    <div>
                        <Field component="select" field={form.fields.gender} type="input">
                            <option value="" disabled>
                                select value
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Field>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Pick your favorite flavor:</label>
                    <div>
                        <Field component="select" field={form.fields.flavor} multiple="multiple">
                            <option value="" disabled>
                                select value
                            </option>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </Field>
                        <span>{(form.fields.flavor.touched || form.submitFailed) && form.fields.flavor.error}</span>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Choose your favorite sause:</label>
                    <div>
                        <label>
                            Mustard
                            <Field
                                component="input"
                                field={form.fields.sause}
                                type="radio"
                                value="mustard"
                                name="Mustard"
                            />
                        </label>
                        <label>
                            Ketcup
                            <Field component="input" field={form.fields.sause} type="radio" value="ketchup" />
                        </label>
                    </div>
                </FormControl>

                <FormActions>
                    <button type="button" onClick={handleClear}>
                        clear
                    </button>
                    <button type="button" onClick={handleReset}>
                        reset
                    </button>
                    <button type="submit" className="primary" disabled={form.submitting || form.invalid}>
                        {form.submitting ? 'submitting...' : 'Submit'}
                    </button>
                </FormActions>
            </FormWrap>
        </>
    )
}

export default observer(SimpleForm)
