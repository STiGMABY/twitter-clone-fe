import React, { ReactNode } from 'react'
import { Home } from './pages/Home/Home'
import { SignIn } from './pages/SignIn/SignIn'

interface IRoute {
  path: string,
  component: React.ComponentType | ReactNode
}

enum RouteNames {
  HOME = '/',
  SIGH_IN = '/signIn'
}

export const router: IRoute[] = [
  {path: RouteNames.HOME, component: Home},
  {path: RouteNames.SIGH_IN, component: SignIn},
]