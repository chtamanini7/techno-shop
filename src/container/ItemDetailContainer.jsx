import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc,  doc } from "firebase/firestore"
import { Container } from "react-bootstrap";
import loadcat from '../img/loadcat.gif'
import CartContextProvider from "../context/CartContext";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const db = getFirestore();

  useEffect(() => {
    const selectProduct = doc(db, "items",  id);
    getDoc(selectProduct).then(d => {
      setProduct({id: id, data: d.data()});
    });
    
  }, [db,id]);
  
  if(product.length < 1){
    return <Container style={{ textAlign: 'center'}}><img src={loadcat} alt='gatogordo' /></Container>
  }
  
  return (
      <div>
          <CartContextProvider children={<ItemDetail item={product} />} />
      </div>
  );
}
