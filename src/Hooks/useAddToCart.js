import {useCallback, useState} from "react";
import axios from "axios";

export function useAddToCart() {
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = useCallback(async (painting) => {
    try {
      const response = await axios.post("https://83269b457ab19128.mokky.dev/inDrawer", painting);
      console.log("Товар добавлен в корзину:", response.data);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000); // Закрыть уведомление через 5 секунд
    } catch (error) {
      console.error("Ошибка при добавлении товара в корзину:", error);
    }
  }, []);

  return {
    addToCart,
    showNotification,
    setShowNotification,
  };
}
