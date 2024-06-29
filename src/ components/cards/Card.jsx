import {useAddToCart} from "/src/Hooks/useAddToCart.js";
import Notification from "/src/ components/cards/Notification.jsx";

export default function Card({image, author, title, feature, price}) {
  const {addToCart, showNotification, setShowNotification} = useAddToCart();

  const handleAddToCart = () => {
    const painting = {image, author, title, feature, price};

    addToCart(painting);
  };

  return (
    <div className="max-w-sm bg-emerald-50 rounded-lg overflow-hidden shadow-lg mb-8">
      <div className="flex flex-col">
        <img
          src={image}
          className="w-11/12 h-full mt-5 ml-4 rounded"
          alt={title}
        />
        <div className="p-5">
          <p className="mb-1">{author}</p>
          <h5 className="font-bold mb-1 text-3xl">{title}</h5>
          <p className="mb-8">{feature}</p>
          <p className="mb-4 text-2xl text-emerald-800">
            {price} руб.
          </p>
          <button
            onClick={handleAddToCart}
            className="border-2 border-emerald-800 font-semibold py-4 px-4 rounded w-full hover:border-emerald-950"
          >
            В корзину
          </button>
        </div>
      </div>
      {showNotification && (
        <Notification
          message={`Картина "${title}" добавлена в корзину`}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
}
