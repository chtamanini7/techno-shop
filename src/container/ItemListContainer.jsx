import React from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { products } from '../data/bucket';

export default function ItemListContainer({greeting}) {
  const [productList, setProductList] = useState([]);
  const { id  } = useParams();

  useEffect(() => {
    const fetchProducts = new Promise((resolve, reject) =>{
      setTimeout(() => resolve(products), 2000);
    })
    fetchProducts.then(result => {
      if(id){
        const filteredProducts = result.filter(product => product.category === id);
        setProductList(filteredProducts);
      }else{
        setProductList(result);
      }
    });
  }, [id])
  
  
  return (
    <Container className='mt-4'>
      <h2>{greeting}</h2>
      <h2 style={{ textAlign: "center"}}>{id}</h2>
      <ItemList products={productList} />
    </Container>
  )
}
