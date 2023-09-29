import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then((response) => {
        setItem(response);
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
        setItem(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return !isLoading ? (
    item ? (
      <ItemDetail item={item} isLoading={isLoading} />
    ) : (
      <div>No se encontró el producto.</div>
    )
  ) : (
    <div>Loading...</div>
  );

};

export default ItemDetailContainer;