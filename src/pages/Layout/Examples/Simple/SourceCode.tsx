import React from 'react'
import Code from '@components/Code'

function SourceCode() {
  return (
    <>
      <h2>Typescript Example</h2>
      <Code import={import('!!raw-loader!./SimpleForm/Register.model')} fileName="Register.model.ts" />
      <Code import={import('!!raw-loader!./SimpleForm')} fileName="index.tsx" />
    </>
  )
}

export default SourceCode
