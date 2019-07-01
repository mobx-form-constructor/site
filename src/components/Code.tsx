import React, { useState, useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-tsx'

import { Wrap } from './Code.styled'

interface IProps {
    import: Promise<any>
    fileName: string
}

function Code(props: IProps) {
    const [source, setSource] = useState('')

    useEffect(() => {
        setFile()
    }, [])

    const header = `// ${props.fileName}\n\n`

    async function setFile() {
        try {
            const result = await props.import
            setSource(result.default)
        } catch (e) {
            setSource(`// :( couldn't load file ${props.fileName}`)
        }
    }

    return (
        <Wrap>
            <h4>{props.fileName}</h4>
            <pre className="language-tsx">
                <code
                    className="language-tsx"
                    dangerouslySetInnerHTML={{
                        __html: Prism.highlight(header + source, Prism.languages.tsx, 'tsx')
                    }}
                />
            </pre>
        </Wrap>
    )
}

export default Code
