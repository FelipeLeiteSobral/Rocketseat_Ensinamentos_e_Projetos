import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import React from 'react'
import { LayoutContainer } from "./styles";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
        <Header/>
        <Outlet/>
    </LayoutContainer>
  )
}
