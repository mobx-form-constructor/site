import React from 'react'
import { useForm, Field } from '@mobx-form-constructor/react'
import { observer } from 'mobx-react-lite'

import { FormWrap, FormControl, FormActions } from '../../styled'

import FieldArrayModel from './FieldArray.model'

function FieldArrayForm() {
  const form = useForm(FieldArrayModel, {
    name: 'FieldArrayExample',
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
        <label>Company:</label>
        <div>
          <Field component="input" field={form.fields.company} placeholder="Company" />
          <span>{(form.fields.company.touched || form.submitFailed) && form.fields.company.error}</span>
        </div>
      </FormControl>
      <FormControl>
        <label>Customers:</label>
        <div>
          <button
            onClick={() => {
              form.fields.customers.push({ firstName: '', lastName: '' })
            }}
            type="button"
          >
            add customer
          </button>

          {form.fields.customers.map((customer, index) => (
            <div key={index}>
              <FormControl>
                <label>First name:</label>
                <div>
                  <Field component="input" field={customer.firstName} placeholder="First name" />
                  <span>{(customer.firstName.touched || form.submitFailed) && customer.firstName.error}</span>
                </div>
              </FormControl>
              <FormControl>
                <label>Last name:</label>
                <div>
                  <Field component="input" field={customer.lastName} placeholder="Last name" />
                  <span>{(customer.lastName.touched || form.submitFailed) && customer.lastName.error}</span>
                </div>
              </FormControl>
            </div>
          ))}
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

export default observer(FieldArrayForm)
