import React from 'react'
import products from '../data/Product'

const Description = () => {
  return (
    <>
      {products.map((data)=>{
       return data.description
      })}
    </>
  )
}

export default Description
