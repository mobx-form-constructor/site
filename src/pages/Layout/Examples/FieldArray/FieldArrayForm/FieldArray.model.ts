import { fieldArray, FieldArrayType, field } from '@mobx-form-constructor/core'
import { required } from '@utils/validators'

import Customer from './Customer.model'

class FieldArrayModel {
  @field({ validate: [required()] })
  company: string

  @fieldArray({ model: Customer })
  customers = new FieldArrayType(Customer, [])
}

export default FieldArrayModel
