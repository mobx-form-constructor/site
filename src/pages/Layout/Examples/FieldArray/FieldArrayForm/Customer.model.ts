import { field } from '@mobx-form-constructor/core'
import { required } from '@utils/validators'

class Customer {
  @field({ validate: [required()] })
  firstName: string

  @field({ validate: [required()] })
  lastName: string
}

export default Customer
