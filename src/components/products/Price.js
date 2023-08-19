import React from 'react'
import products from '../data/Product'
const Price = () => {
  return (
    <>
    {products.map((data)=>{
     return data.price
    })}
    </>
  )
}

export default Price
