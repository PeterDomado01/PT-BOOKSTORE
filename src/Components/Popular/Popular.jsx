import React from 'react'
import './Popular.css'
import data from '../Assets/data'
import { Item } from '../Item/Item'

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>Mostly Researched</h1>
        <div className="popular-item">
            {data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.title} image={item.image}/>
            })}
        </div>
    </div>
  )
}
