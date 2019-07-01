import React, { useState } from 'react'
import { Form } from '@mobx-form-constructor/core'
import { __MOBX_FORM_CONSTRUCTOR_HOOK__ } from '@mobx-form-constructor/react/constants'

import Collapsible from './Collapsible'
import FormDebugger from './FormDebugger'

function Debugger() {
    const [forms, setForms] = useState<Form[]>([])

    if (!window[__MOBX_FORM_CONSTRUCTOR_HOOK__]) {
        window[__MOBX_FORM_CONSTRUCTOR_HOOK__] = {
            registerForm(form: Form) {
                setForms([...forms, form])
                return () => {
                    setForms(forms.filter(f => f !== form))
                }
            }
        }
    }

    return (
        <Collapsible openOnInit={forms.length > 0}>
            <FormDebugger forms={forms} />
        </Collapsible>
    )
}

export default React.memo(Debugger)
