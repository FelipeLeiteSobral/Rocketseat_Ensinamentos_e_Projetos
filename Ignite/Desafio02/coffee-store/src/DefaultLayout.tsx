import React from 'react'
import { Header } from './components/Header'
import { Outlet } from 'react-router'

export const DefaultLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}
