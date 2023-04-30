import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductData } from '../../Data/ProductData';

const ProductSingle = () => {
    const {id}=useParams();
    const [product,setProduct] = useState(null)
    useEffect(() => {
      const filtered = getProductData().filter(product => product.id == id);

      if (filtered.length) {
          setProduct(filtered[0]);
      }
  }, []);

  return (
    <div className='product-d'> 
    <h2> product Details </h2>
    {
      product !== null &&
      <div>  
        <h3>{product.title}</h3>
        <h4>{product.price} DBT</h4>
      </div>
    }
  
       </div>
       
  )
}

export default ProductSingle