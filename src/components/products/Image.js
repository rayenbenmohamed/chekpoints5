import React from 'react'
import products from '../data/Product'

const Image = () => {
  return (
    <>
    {products.map((data)=>{
     return <img src={data.image} />  
    })}
    </>
  )
}

export default Image
