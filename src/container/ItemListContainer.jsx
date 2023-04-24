import React from 'react'
import ItemList from '../components/ItemList'
import { useState, useEffect } from 'react';
import { products } from '../data/bucket';

export default function ItemListContainer({greeting}) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((resolve, reject) =>{
      setTimeout(() => resolve(products), 2000);
    })
    fetchProducts.then(result => setProductList(result));
  }, [])
  
  
  return (
    <>
      <ItemList products={productList} />
    </>
  )
}
