import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { router } from './router'
import { Home } from './pages/Home/Home'
import { SignIn } from './pages/SignIn/SignIn'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/signIn" element={ <SignIn/> }/>

        {/*{*/}
        {/*  router.map((route) =>*/}
        {/*    <Route*/}
        {/*      key={ route.path }*/}
        {/*      path={ route.path }*/}
        {/*      element={ route.component }*/}
        {/*    />)*/}
        {/*}*/}
      </Routes>
    </>
  )
}