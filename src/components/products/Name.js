import React from 'react'
import products from '../data/Product'

const Name = () => {
  return (
    <>
    {products.map((data)=>{
     return data.name
    })}
    </>
  )
}

export default Name
