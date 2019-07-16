import React from 'react'

import { Content, Block } from '../../styled'

import FieldArrayForm from './FieldArrayForm'
import SourceCode from './SourceCode'

function FieldArray() {
  return (
    <Content>
      <h1>FieldArray form</h1>

      <Block>
        <a
          // tslint:disable-next-line:max-line-length
          href="https://github.com/mobx-form-constructor/site/blob/master/src/pages/Layout/Examples/FieldArray/FieldArrayForm/index.tsx"
          target="_blank"
        >
          Link to github with source
        </a>
      </Block>

      <FieldArrayForm />
      <SourceCode />
    </Content>
  )
}

export default FieldArray
