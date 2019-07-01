import styled from 'styled-components'

export const Wrap = styled.div`
    display: flex;
    height: 100vh;
`

export const Aside = styled.div`
    flex: 0 0 300px;
    height: 100%;
`

export const Content = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    @media (min-width: 1920px) {
        justify-content: center;
    }
    overflow-y: scroll;
`
