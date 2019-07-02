import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

function ExamplesLayout(props: RouteConfigComponentProps) {
    return <>{renderRoutes(props.route!.routes)}</>
}

export default ExamplesLayout
