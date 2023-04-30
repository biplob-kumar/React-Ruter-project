import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { getProductData } from '../../Data/ProductData';
const Product = () => {

  const [products,setProducts] = useState(getProductData)
  return (
    <div className='product-area-full'> 
      <h2>Products</h2>

   <div className='product-area'>
   {
        products.map((products,index)=>(
        <div key={index} className='product-single'> 
          <p> 
          <img src={products.image} style={{ width: 'auto',height:'100' }} alt="" />
          </p>
          <h3>{products.title} </h3>
          <h3>{products.price} BDT </h3>
          <p>
          <Link to={`/products/${products.id}`} className="product-button">
               Products Details
            </Link>
          </p>
          
           </div>
      ))
    }
    
   </div>
    </div>
  )
}

export default Product