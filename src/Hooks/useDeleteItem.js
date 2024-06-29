// /src/hooks/useDeleteItem.jsx
import {useCallback} from "react";
import axios from "axios";

export function useDeleteItem() {
  const deleteItem = useCallback(async (id, onDelete) => {
    try {
      const response = await axios.delete(`https://83269b457ab19128.mokky.dev/inDrawer/${id}`);
      console.log('Товар удален', response.data);
      onDelete(id);
    } catch (error) {
      console.error('Ошибка в удалении товара', error);
    }
  }, []);

  return {deleteItem};
}
