// /src/components/DrawerCart.jsx
import {X} from "lucide-react";
import {useDeleteItem} from "/src/Hooks/useDeleteItem.js";

export default function DrawerCart({id, image, title, price, onDelete}) {
  const {deleteItem} = useDeleteItem();

  const handleDelete = () => {
    deleteItem(id, onDelete);
  };

  return (
    <div className="flex items-center mb-4 bg-emerald-50 p-3 rounded-xl">
      <img src={image} alt={title} className="w-16 h-16 rounded mr-4"/>
      <div className="flex flex-col">
        <h5 className="text-lg font-semibold">{title}</h5>
        <p className="text-emerald-800">{price} руб.</p>
      </div>
      <div className='ml-auto'>
        <button onClick={handleDelete} className='transform hover:scale-110'>
          <X/>
        </button>
      </div>
    </div>
  );
}
