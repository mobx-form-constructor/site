import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

import { Wrap, Content, Aside } from './styled'
import Sidebar from './Sidebar'
import Debugger from './Debugger'

function Layout(props: RouteConfigComponentProps) {
    return (
        <Wrap>
            <Aside>
                <Sidebar />
            </Aside>
            <Content>{renderRoutes(props.route!.routes)}</Content>
            <Debugger />
        </Wrap>
    )
}

export default Layout
