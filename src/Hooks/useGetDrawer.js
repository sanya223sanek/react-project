import {useEffect, useState} from "react";
import axios from "axios";

export function useGetDrawer(isVisible) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (isVisible) {
      axios.get("https://83269b457ab19128.mokky.dev/inDrawer")
        .then(response => {
          setCartItems(response.data);
        })
        .catch(error => {
          console.error("Ошибка при получении данных корзины:", error);
        });
    }
  }, [isVisible]);

  const handleDelete = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return {
    cartItems,
    handleDelete
  };
}
