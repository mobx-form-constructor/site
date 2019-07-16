import styled from 'styled-components'

export const FormControl = styled.div`
  display: flex;
  flex: 0 0 300px;
  > label {
    min-width: 300px;
    display: inline-block;
    font-size: 14px;
    color: #16181d;
    font-weight: 500;
    padding: 0.5rem;
  }

  input:not([type]),
  input[type='text'],
  select {
    width: 100%;
    border: 1px solid #ced5ea;
    border-radius: 5px;
    padding: 7px 7px 7px 0px;
    text-indent: 7px;
    color: #1d1c1c;
    font-size: 14px;
    box-sizing: border-box;
    transition: 0.3s;

    &:focus {
      outline: none;
      border: 1px solid #ced5ea;
      box-shadow: 0 0 5px #a3b0d6;
    }
    &::placeholder {
      font-size: 14px;
      color: #a8abaf;
    }
    min-height: 33px;
  }
  select {
    padding: 0;
  }
  input + span {
    color: #fb2222;
    font-size: 11px;
    display: block;
    padding: 5px 0;
  }
  input[type='checkbox'],
  input[type='radio'] {
    margin: 12px;
  }
  margin-bottom: 1rem;
  > div {
    flex: 1;
  }
`

export const FormWrap = styled.form`
  width: 100%;
`

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  > button {
    padding: 7px 10px;
    background: white;
    border-radius: 4px;
    border: 1px solid #ced5ea;
    margin: 1rem 0.5rem;
    text-transform: capitalize;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    &:last-child {
      margin-right: 0;
    }

    &:first-child {
      margin-left: 0;
    }
    &:hover {
      filter: brightness(90%);
    }
    &.primary {
      background: #51aef5;
      border: #51aef5;
      color: white;
      &:hover {
        filter: brightness(110%);
      }
    }
    transition: 0.3s;
    &:disabled {
      cursor: not-allowed;
    }
  }
`
