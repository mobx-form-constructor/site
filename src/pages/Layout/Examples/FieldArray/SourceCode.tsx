import React from 'react'
import Code from '@components/Code'

function SourceCode() {
  return (
    <>
      <h2>Typescript Example</h2>
      <Code import={import('!!raw-loader!./FieldArrayForm/FieldArray.model.ts')} fileName="FieldArray.model.ts" />
      <Code import={import('!!raw-loader!./FieldArrayForm/Customer.model.ts')} fileName="Customer.model.ts" />
      <Code import={import('!!raw-loader!./FieldArrayForm')} fileName="index.tsx" />
    </>
  )
}

export default SourceCode
