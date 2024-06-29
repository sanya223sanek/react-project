import {useEffect, useState} from "react";
import axios from "axios";

export function useGetCardList() {
  const [paintings, setPaintings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://83269b457ab19128.mokky.dev/paintings')
      .then(response => setPaintings(response.data))
      .catch(error => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, []);

  return {paintings, error};
}
