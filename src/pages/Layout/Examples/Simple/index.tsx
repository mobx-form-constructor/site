import React from 'react'

import { Wrap } from '../styled'

import SimpleForm from './SimpleForm'
import SourceCode from './SourceCode'

function Simple() {
    return (
        <Wrap>
            <SimpleForm />
            <SourceCode />
        </Wrap>
    )
}

export default Simple
