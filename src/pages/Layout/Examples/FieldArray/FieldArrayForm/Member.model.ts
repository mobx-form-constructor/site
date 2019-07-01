import { fieldArray, field } from '@mobx-form-constructor/core'
import { required } from '@utils/validators'

class Member {
    @field({ validate: [required()] })
    name: string

    @fieldArray()
    hobbies: string[]
}

export default Member
