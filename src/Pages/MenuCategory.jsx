import React from 'react'
import { Menu } from '../Components/Menu/Menu'
import { Feature } from '../Components/Feature/Feature'
import { Newsletter } from '../Components/Newsletter/Newsletter'
import './css/MeunCat.css'


export const MenuCategory = () => {
  return (
    <div className='menuCat'>
      <Feature/>
      <Menu/>
      <Newsletter/>
    </div>
  )
}


