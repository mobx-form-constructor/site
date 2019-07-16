import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrap = styled.div`
  height: 100vh;
  background: #fafafa;
  box-shadow: -4px 0px 6px 0px #353a47;
`

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  li {
    display: block;
    a {
      transition: 0.3s;
      display: block;
      padding: 15px 25px;
      color: #353a47;
      font-size: 18px;
      &.active {
        background-color: #e6e6e6;
      }

      &:hover {
        background-color: #d6d6d6;
      }
    }
  }
`

export const MenuDivider = styled.div`
  color: #afafaf;
  font-size: 12px;
  padding: 20px;
`

export const H1 = styled.h1`
  padding-bottom: 25px;
  font-size: 26px;
  color: #2d3038;
`

export const PageWrap = styled.div`
  padding: 25px;

  h2 {
    margin-bottom: 20px;
  }
  form {
    margin-bottom: 25px;
  }
`

export const Logo = styled(Link)`
  display: block;
  text-align: center;
  color: #e26f6f;
  font-size: 24px;
  padding: 20px 10px;
`

export const FieldWrap = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
  > span {
    padding-right: 20px;
    width: 200px;
  }
`

interface IFlex {
  justifyCenter: boolean
}

export const Flex = styled.div<IFlex>`
  display: flex;
  width: 100%;
  ${({ justifyCenter }) =>
    justifyCenter &&
    `
        justify-content: center;
    `};
`

export const Col = styled.div`
  flex: 1;
  padding: 0 16px;
`

export const Buttons = styled.div`
  margin-top: 20px;
  > * {
    margin-right: 10px;
  }
`

export const List = styled.ul`
  margin-left: 10px;
  li {
    display: block;
    margin-bottom: 10px;
  }
`

export const ListInlineBlock = styled.div`
  > * {
    margin-left: 10px;
  }
  > :first-child {
    margin-left: 0;
  }
  margin-bottom: 10px;
`
