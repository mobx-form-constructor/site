import styled from 'styled-components'

interface ILabel {
  error?: any
  active?: boolean
}

export const Label = styled.label<ILabel>`
  height: 0.875rem;
  color: ${({ error }) => (error ? 'red' : '#a89baa')};
  display: block;
  transform: translateY(24px);
  transition: all 0.3s;
  padding-bottom: 3px;
  font-size: 15px;
  ${({ active }) =>
    active &&
    `
        transform: translateY(0);
        transition: all 0.3s;
        font-size: 0.75rem;
        color: #ccc;
    `};
`

export const Wrap = styled.div<{ error: boolean }>`
  position: relative;
  & + button {
    margin-top: 34px;
  }
  &:hover {
    ${Label} {
      color: #000;
    }
    ${({ error }) =>
      !error &&
      `
            input{
                border-bottom: 1px solid #000;
            }
        `};
  }
  input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid ${({ error }) => (error ? '#FC8080' : '#ccc')};
    transition: 0.3s;
    height: 31px;
    line-height: 31px;
    position: relative;
    font-size: 15px;
    color: #000;
    font-family: inherit;
    &:focus {
      outline: none;
    }
    &::placeholder {
      opacity: 0;
      transition: 0.3s;
    }
    &:focus {
      &::placeholder {
        opacity: 1;
      }
    }
    ${({ error }) =>
      !error &&
      `
            &:focus {
                border-bottom: 1px solid #000;
            }
        `};
  }
  transition: 0.3s;
  margin-bottom: 12px;
`

interface IError {
  show?: boolean
  extra?: any
}

export const Error = styled.div<IError>`
  max-height: 0;
  overflow: hidden;
  transition: 0.3s;
  ${({ show }) =>
    show &&
    `
        max-height: 6rem;
        padding-top: 0.3125rem;
    `};
  bottom: -1.375rem;
  left: 0;
  ${({ extra }) => extra && 'position: absolute;'};
  color: red;
  font-size: 0.75rem;
`

export const Extra = styled.div`
  position: absolute;
  right: 0;
  padding-top: 1.3rem;
  color: white;
  font-size: 0.75rem;
`
