import React from 'react'
import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/IgniteLogo.svg';
import { Timer, Scroll } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoIgnite} width="35" height="35"  alt="" />
        <nav>
          <NavLink to="/" title='Timer'><Timer size={24}/></NavLink>
          <NavLink to="/history" title="Histórico"><Scroll size={24}/></NavLink>
        </nav>
    </HeaderContainer>
  )
}
