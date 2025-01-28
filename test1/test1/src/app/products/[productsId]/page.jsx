

import React from 'react'
//import { useEffect, useState } from 'react';

export const generateMetadata = async({params}) => {
    const {productsId} = await params;
    return {
        title: `Product ${productsId}`,
    }
}

const ProductsId =  async({params}) => {

    const id = (await params).productsId;

    // const [paramsId, setParamsId] = useState(null)

    // useEffect(() => {
    //     setParamsId(params.productsId)
    //   console.log(params.productsId);
    // }, [params])

   
    

    


  return (
    <div>ProductsId {id}</div>
  )
}

export default ProductsId