import React from 'react'
import { Hero } from '../Components/hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Pub } from '../Components/Pub/Pub'
import { Newsletter } from '../Components/Newsletter/Newsletter'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Newsletter/>
    </div>
  )
}
