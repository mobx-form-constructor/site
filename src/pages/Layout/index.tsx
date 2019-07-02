import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'
import { useMedia } from 'use-media'

import { Wrap, Container, Aside } from './styled'
import Sidebar from './Sidebar'
import Debugger from './Debugger'

function Layout(props: RouteConfigComponentProps) {
    const isWide = useMedia({ minWidth: 1620 })

    return (
        <Wrap>
            <Aside>
                <Sidebar />
            </Aside>
            <Container>{renderRoutes(props.route!.routes)}</Container>
            <Debugger fixed={!isWide} />
        </Wrap>
    )
}

export default Layout
