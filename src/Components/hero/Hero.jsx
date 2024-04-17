import React from 'react'
import './Hero.css'
import hero from '../Assets/hero.png'
import arrow from '../Assets/arrow.png'
import action_14 from '../Assets/action_14.jpg'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>East books are not far from here</h2>
            <div>
                <div className="hand--with-food">
                    <p>Find your Book</p>
                </div>
                <p>Books are Available</p>
                <p>for everyone</p>
            </div>
            <div className="hero--check-bnt">
                <div>Books Available</div>
                <img src={arrow}/>
            </div>
        </div>
        <div className="hero-right">
            <img src={action_14}/>
        </div>
    </div>
  )
}
