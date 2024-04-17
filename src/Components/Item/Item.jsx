import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        <p>{props.title}</p>
        <div className='item-price'>
            <div className="item-price-new">
                {props.price} UGX
            </div>
            <div className="item-price-old">
                {props.author} UGX
            </div>
        </div>
    </div>
  )
}
