import React from 'react'
import { observer } from 'mobx-react-lite'
import { useForm, Field } from '@mobx-form-constructor/react'

import { FormControl, FormWrap, FormActions } from '../../styled'

import RegisterModel from './Register.model'

function SimpleForm() {
  const form = useForm(RegisterModel, {
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
        }, 300)
      })
    }
  })

  function handleClear() {
    form.reset({})
  }

  function handleReset() {
    form.reset()
  }

  return (
    <FormWrap onSubmit={form.handleSubmit}>
      <FormControl>
        <label>Username:</label>
        <div>
          <Field component="input" field={form.fields.username} />
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
          <Field component="select" field={form.fields.flavor} multiple>
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
            <Field component="input" field={form.fields.sause} type="radio" value="mustard" name="Mustard" />
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
  )
}

export default observer(SimpleForm)
