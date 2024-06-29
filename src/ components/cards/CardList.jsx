import {useEffect, useRef, useState} from "react";
import Card from "./Card.jsx";
import {useGetCardList} from "/src/Hooks/useGetCardList.js";
import autoAnimate from "@formkit/auto-animate";

export default function CardList() {
  const {paintings, error} = useGetCardList();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const parentRef = useRef(null);

  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current);
  }, [parentRef]);

  if (error) {
    return <div>Ошибка загрузки данных: {error.message}</div>;
  }

  const filteredPaintings = paintings.filter((painting) => {
    const matchesCountry = selectedCountry ? painting.country.toLowerCase() === selectedCountry.toLowerCase() : true;
    const matchesSearchItem = searchItem
      ? painting.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      painting.author.toLowerCase().includes(searchItem.toLowerCase()) ||
      painting.feature.toLowerCase().includes(searchItem.toLowerCase())
      : true;
    return matchesCountry && matchesSearchItem;
  });

  const getButtonClass = (country) => {
    return selectedCountry.toLowerCase() === country.toLowerCase()
      ? "rounded-3xl bg-emerald-700 text-white p-2 pl-7 pr-7 text-lg"
      : "rounded-3xl bg-emerald-50 p-2 pl-7 pr-7 text-lg hover:bg-emerald-700 hover:text-white";
  };

  return (
    <div id="reproductions" className="container ml-80 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-5xl mt-16">Репродукции</h1>
        <div className="flex space-x-4 mr-64 mt-20">
          <input
            className="rounded-3xl border-2 border-emerald-700 p-2 pl-7 pr-20 text-lg mr-3 focus:border-b-emerald-950"
            placeholder="Поиск..."
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <button
            className={getButtonClass("france")}
            onClick={() => setSelectedCountry("france")}
          >
            Франция
          </button>
          <button
            className={getButtonClass("germany")}
            onClick={() => setSelectedCountry("germany")}
          >
            Германия
          </button>
          <button
            className={getButtonClass("england")}
            onClick={() => setSelectedCountry("england")}
          >
            Англия
          </button>
          <button
            className={selectedCountry === "" ? "rounded-3xl bg-emerald-700 text-white p-2 pl-7 pr-7 text-lg" : "rounded-3xl bg-emerald-50 p-2 pl-7 pr-7 text-lg hover:bg-emerald-700 hover:text-white"}
            onClick={() => setSelectedCountry("")}
          >
            Все страны
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mr-60 mb-12" ref={parentRef}>
        {filteredPaintings.length > 0 ? (
          filteredPaintings.map((painting) => (
            <Card
              key={painting.id}
              image={painting.image}
              author={painting.author}
              title={painting.title}
              feature={painting.feature}
              price={painting.price}
            />
          ))
        ) : (
          <div className="col-span-3 text-center text-2xl text-emerald-700 ">Ничего не найдено.</div>
        )}
      </div>
    </div>
  );
}
