import { RouteConfig } from 'react-router-config'

import * as containers from './containers'

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: containers.GitForksLayout,
  },
  {
    path: '/:userName/:repoName',
    exact: true,
    component: containers.GitForksLayout,
  },
]

export default routes
