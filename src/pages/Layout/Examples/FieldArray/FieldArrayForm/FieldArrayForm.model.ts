import { fieldArray, FieldArrayType } from '@mobx-form-constructor/core'

import Member from './Member.model'

class FieldArrayForm {
    @fieldArray({ model: Member })
    members = new FieldArrayType(Member, [])
}

export default FieldArrayForm
