import {X} from "lucide-react";
import DrawerCart from "./DrawerCart.jsx";
import PurchasePanel from "./PurchasePanel.jsx";
import {useGetDrawer} from "/src/Hooks/useGetDrawer.js";
import {useEffect, useRef} from "react";
import autoAnimate from "@formkit/auto-animate";

export default function Drawer({isVisible, onClose}) {
  const {cartItems, handleDelete} = useGetDrawer(isVisible);

  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [isVisible]);

  // Function to convert price string with spaces to a number
  const convertPriceToNumber = (priceString) => {
    // Remove spaces and parse as float
    return parseFloat(priceString.replace(/\s/g, ""));
  };

  // Calculate total price of all items in the cart
  const totalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + convertPriceToNumber(item.price);
    }, 0);
  };

  return (
    <div
      className={`fixed right-0 top-0 h-full bg-white shadow-lg transform transition-transform ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
      style={{width: "300px"}}
    >
      <div className="flex justify-between items-center p-4 bg-emerald-50 text-white">
        <h2 className="text-xl font-bold text-emerald-900">Корзина</h2>
        <button onClick={onClose} className="text-2xl text-black">
          <X/>
        </button>
      </div>
      <div className="flex flex-col h-full">
        <div ref={parentRef} className="p-4 items-center flex-grow overflow-auto">
          {cartItems.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <DrawerCart
                  key={index}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="p-4">
            <PurchasePanel totalPrice={totalPrice()}/>
          </div>
        )}
      </div>
    </div>
  );
}
