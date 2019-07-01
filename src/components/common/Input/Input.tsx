import React, { useState, useRef, useEffect } from 'react'

import { Label, Error, Extra, Wrap } from './styled'

export interface IInputType {
    label?: string | React.ReactNode | number
    error?: React.ReactNode | string
    className?: string
    placeholder?: string
    value?: any
    extra?: any
    innerRef?(node: any): any
    onFocus?(e: any): any
    onBlur?(e: any): any
}

export interface IStateType {
    active?: boolean
    focus: boolean
}

function Input(props: IInputType) {
    const [state, setState] = useState({
        active: !!props.value,
        focus: false
    })

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const active = !!props.value

        if (state.active !== active) {
            setState({
                ...state,
                active
            })
        }
    })

    function handleFocus(e: React.ChangeEvent) {
        setState({
            ...state,
            focus: true
        })

        if (props.onFocus) {
            props.onFocus(e)
        }
        if (!state.active) {
            setState({
                ...state,
                active: true
            })
        }
    }

    function handleBlur(e: React.ChangeEvent) {
        setState({
            ...state,
            focus: false
        })

        if (props.onBlur) {
            props.onBlur(e)
        }

        if (!inputRef.current!.value) {
            setState({
                ...state,
                active: false
            })
        }
    }

    const { className, label, placeholder, error, extra, ...rest } = props

    return (
        <Wrap error={!!props.error}>
            <Label active={state.focus || state.active} error={props.error}>
                {props.label}
            </Label>
            <input
                type="text"
                {...rest}
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={inputRef}
                autoComplete="off"
            />
            {extra && <Extra>{extra}</Extra>}
            <Error extra={extra} show={!!error}>
                {error}
            </Error>
        </Wrap>
    )
}

export default Input
