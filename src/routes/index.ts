import { RouteConfig } from 'react-router-config'
import Root from '@pages'
import Layout from '@pages/Layout'
import SimpleForm from '@pages/Layout/Examples/Simple'
import ExamplesLayout from '@pages/Layout/Examples'

const routes: RouteConfig[] = [
    {
        path: '/',
        component: Root,
        routes: [
            {
                path: '/',
                component: Layout,
                routes: [
                    {
                        path: '/examples',
                        component: ExamplesLayout,
                        routes: [
                            {
                                path: '/examples/simple',
                                component: SimpleForm
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

export default routes
