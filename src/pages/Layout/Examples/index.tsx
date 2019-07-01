import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

import { Container } from './styled'

function ExamplesLayout(props: RouteConfigComponentProps) {
    return <Container>{renderRoutes(props.route!.routes)}</Container>
}

export default ExamplesLayout
