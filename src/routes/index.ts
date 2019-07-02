import { RouteConfig } from 'react-router-config'
import Root from '@pages'
import Layout from '@pages/Layout'
import SimpleForm from '@pages/Layout/Examples/Simple'
import ExamplesLayout from '@pages/Layout/Examples'
import IntroductionPage from '@pages/Layout/Introduction'

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
                        path: '/',
                        component: IntroductionPage,
                        exact: true
                    },
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
