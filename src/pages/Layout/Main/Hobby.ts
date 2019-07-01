import { field } from '@mobx-form-constructor/core'

function parseInt(value: string | number) {
    return value === '' ? '' : Number(value)
}

class Hobby {
    @field({ normalize: [parseInt] })
    hobbyId = 1

    @field()
    hobbyName = 'dev'
}

export default Hobby
