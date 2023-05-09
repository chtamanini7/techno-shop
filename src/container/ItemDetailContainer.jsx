import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { products } from '../data/bucket';
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = new Promise((resolve, reject) => {
      setTimeout(() => resolve(products), 2000);
    });
    fetchProducts.then(result => {
        const idProduct = result.find(element => element.id == id);
        setProduct(idProduct);
  });
  }, [id]);

  return (
    <div>
        <ItemDetail item={product} />
    </div>
  );
}
