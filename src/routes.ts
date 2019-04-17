import { RouteConfig } from 'react-router-config'

import MainLayout from 'components/MainLayout'
import NotFound from 'components/NotFound'
import { gitForksRoutes } from 'features/gitForks'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: MainLayout,
    routes: [
      ...gitForksRoutes,
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
]

export default routes
