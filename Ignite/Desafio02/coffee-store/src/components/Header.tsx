import React, { useContext } from 'react'
import { Button } from './Button/Button'
import { ButtonRemove } from './Button/ButtonRemove'
import { ButtonCart } from './Button/ButtonCart'
import { ButtonShoppingCart } from './Button/ButtonShoppingCart'
import { ButtonSelectQuantity } from './Button/ButtonSelectQuantity'
import { ButtonCreditCard } from './Button/ButtonCreditCard'
import { ButtonLocal } from './Button/ButtonLocal'

import { StateContext } from '../context/StateContext'

export const Header = () => {

  return (
    <header className="py-8 px-40 flex justify-between">
        <img src="../../src/assets/Logo.svg" alt="" />
        <div className="flex gap-6 items-center">
            <ButtonLocal/>
            <ButtonShoppingCart/>
        </div>
    </header>
  )
}
