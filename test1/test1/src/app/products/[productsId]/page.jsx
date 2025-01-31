import Link from 'next/link';

import React from 'react'
//import { useEffect, useState } from 'react';

export const generateMetadata = async({params}) => {
    const {productsId} = await params;
    return {
        title: `Product ${productsId}`,
    }
}

async function randomNumber(number){
  const newNumber = Math.floor(Math.random() * number);
  return(newNumber);
  
}


const ProductsId =  async({params}) => {

    const id = (await params).productsId;

    // const [paramsId, setParamsId] = useState(null)

    // useEffect(() => {
    //     setParamsId(params.productsId)
    //   console.log(params.productsId);
    // }, [params])

    
    const number = await randomNumber(2);
    console.log(number)
    if(number === 1){
      throw new Error("no products with this id"); 
    }
   
    

    


  return (
    <div>ProductsId {id}
    <Link href="/">Back</Link>
    </div>
  )
}

export default ProductsId