import styled from 'styled-components'

export const Chip = styled.span`
    background: #2a2f3a;
    padding: 5px 10px;
    color: #ececec;
    position: absolute;
    z-index: 1000;
    top: 25px;
    left: -43px;
    cursor: pointer;
    border-radius: 5px 5px 0 0;
    transform: rotate(0.75turn);

    &:hover {
        filter: brightness(120%);
    }
`

export const Content = styled.div<{ isOpen: boolean }>`
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? '300' : '0')}px;
    transition: 0.15s ease-in-out;
`

export const Wrap = styled.div`
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
`
