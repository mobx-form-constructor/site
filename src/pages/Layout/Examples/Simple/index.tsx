import React from 'react'

import { Content, Block } from '../../styled'

import SimpleForm from './SimpleForm'
import SourceCode from './SourceCode'

function Simple() {
    return (
        <Content>
            <h1>Simple form</h1>

            <Block>
                <a
                    // tslint:disable-next-line:max-line-length
                    href="https://github.com/mobx-form-constructor/site/blob/master/src/pages/Layout/Examples/Simple/SimpleForm/index.tsx"
                    target="_blank"
                >
                    Link to github with source
                </a>
            </Block>

            <SimpleForm />
            <SourceCode />
        </Content>
    )
}

export default Simple
