// src/Header.js
import {ShoppingCart} from "lucide-react";
import {useState} from "react";
import Drawer from "../Drawer/Drawer";

export default function Header() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  return (
    <div id="home" className="bg-emerald-50 shadow-md w-full">
      <div className="flex justify-between items-center py-7 px-6">
        <div className="flex items-center space-x-3 ml-48">
          <svg
            className='transform hover:scale-110'
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 0L20.4652 9.10444L27.4612 2.77806L24.6128 11.77L33.9186 10.2302L26.6609 16.2547L35.3219 19.9905L25.9593 21.1349L31.2256 28.9601L22.7306 24.861L22.9303 34.2911L18 26.25L13.0697 34.2911L13.2694 24.861L4.77438 28.9601L10.0407 21.1349L0.678125 19.9905L9.33906 16.2547L2.08144 10.2302L11.3872 11.77L8.53879 2.77806L15.5348 9.10444L18 0Z"
              fill="#598D66"
            />
          </svg>
          <h1 className="text-emerald-600 font-bold text-2xl transform hover:scale-105">Ink.House</h1>
        </div>
        <nav>
          <ul className="flex space-x-12 mr-72">
            <li>
              <h2 className='transform hover:scale-110'>
                <a
                  href="#reproductions"
                  className="text-emerald-600 hover:text-emerald-800 text-lg"
                >
                  Репродукции
                </a>
              </h2>
            </li>
            <li>
              <h2 className='transform hover:scale-110'>
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                  className="text-emerald-600 hover:text-emerald-800 text-lg"
                >
                  Новинки
                </a>
              </h2>
            </li>
            <li>
              <h2 className='transform hover:scale-110'>
                <a
                  href="#about"
                  className="text-emerald-600 hover:text-emerald-800 text-lg"
                >
                  О нас
                </a>
              </h2>
            </li>
            <li
              className="cursor-pointer hover:text-emerald-800 transform hover:scale-110"
              onClick={toggleDrawer}
            >
              <ShoppingCart/>
            </li>
          </ul>
        </nav>
      </div>
      <Drawer isVisible={isDrawerVisible} onClose={toggleDrawer}/>
    </div>
  );
}
