import {Facebook, Instagram, Youtube} from 'lucide-react'


export default function Footer() {


  return (
    <div className="bg-emerald-50 shadow-md w-full">
      <div className="flex items-center py-6 px-6">
        <div className="flex items-center space-x-3">
          <svg className='mb-14' width="36" height="35" viewBox="0 0 36 35" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 0L20.4652 9.10444L27.4612 2.77806L24.6128 11.77L33.9186 10.2302L26.6609 16.2547L35.3219 19.9905L25.9593 21.1349L31.2256 28.9601L22.7306 24.861L22.9303 34.2911L18 26.25L13.0697 34.2911L13.2694 24.861L4.77438 28.9601L10.0407 21.1349L0.678125 19.9905L9.33906 16.2547L2.08144 10.2302L11.3872 11.77L8.53879 2.77806L15.5348 9.10444L18 0Z"
              fill="#598D66"/>
          </svg>
          <div className="flex flex-col">
            <h1 className="text-emerald-600 font-bold text-2xl mb-1">
              <a href='#home'>
                Ink.House
              </a>
            </h1>
            <h2 className="text-xl">+7 (999) 999-99-99</h2>
            <h2 className="text-xl">Мастерская</h2>
          </div>
        </div>
        <nav className="ml-72 mt-5">
          <ul className="flex flex-col md:flex-row md:items-start md:space-x-12">
            <li>
              <a href="#reproductions" className="text-emerald-600 hover:text-emerald-800 text-2xl">Репродукции</a>
              <ul className="text-emerald-600 text-sm">
                <li className='text-xl'><a href="#">Франция</a></li>
                <li className='text-xl'><a href="#">Германия</a></li>
                <li className='text-xl'><a href="#">Англия</a></li>
              </ul>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                 className="text-emerald-600 hover:text-emerald-800 text-2xl">Новинки</a>
              <ul className="text-emerald-600 text-sm">
                <li className='text-xl'><a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">2023</a></li>
                <li className='text-xl'><a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">2024</a></li>
              </ul>
            </li>
            <li><a href="#about" className="text-emerald-600 hover:text-emerald-800 text-2xl">О нас</a></li>
          </ul>
        </nav>
        <nav className="ml-auto mb-2">
          <ul className='flex gap-5 cursor-pointer'>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank"
                 rel="noopener noreferrer">
                <Youtube/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank"
                 rel="noopener noreferrer">
                <Instagram/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank"
                 rel="noopener noreferrer">
                <Facebook/>
              </a>
            </li>
          </ul>
          <ul className="flex flex-col ">
            <li className=" text-xl text-emerald-900">Ink.House®</li>
            <li className="  text-xl text-emerald-900">All rights reserved</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
