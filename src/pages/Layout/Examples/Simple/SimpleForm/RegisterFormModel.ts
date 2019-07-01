import { field } from '@mobx-form-constructor/core'
import { minLength, required } from '@utils/validators'

class RegisterFormModel {
    @field({ validate: [required(), minLength(3)] })
    username: string

    @field({ validate: [required(), minLength(10)] })
    password: string

    @field()
    employed: boolean

    @field()
    sause: string

    @field()
    gender: 'male' | 'female'

    @field()
    flavor: string[]
}

export default RegisterFormModel
