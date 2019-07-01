import { fieldArray } from '@mobx-form-constructor/core'

import Member from './Member.model'

class FieldArrayForm {
    @fieldArray({ model: Member })
    members = new FieldArray(Member, [])
}

export default FieldArrayForm
