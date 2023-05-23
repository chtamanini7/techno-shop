import React from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import loadcat from '../img/loadcat.gif'
import { getFirestore,  collection, getDocs, query, limit, where } from "firebase/firestore"

export default function ItemListContainer({greeting}) {
  const [productList, setProductList] = useState([]);
  const { id  } = useParams();
  const db = getFirestore();

  
  useEffect(() => {
    let selectProducts;
    if(id){
      selectProducts = query(collection(db, "items"), where("category", "==", id),  limit(9));

    }else{
      selectProducts = query(collection(db, "items"), limit(9));
    }
    getDocs(selectProducts).then(evidence => {
      setProductList(evidence.docs.map(doc => {  return{id: doc.id, data: doc.data()}  }));
    })
            
  }, [id,db])
  
  if(productList.length < 1){
    return <Container style={{ textAlign: 'center'}}><img src={loadcat} alt='gatogordo' /></Container>
  }
  
  return (
    <Container className='mt-4'>
      <h2>{greeting}</h2>
      <h2 style={{ textAlign: "center"}}>{id}</h2>
      <ItemList products={productList} />
    </Container>
  )
}
