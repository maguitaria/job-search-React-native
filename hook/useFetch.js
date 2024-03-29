import { useEffect, useState } from "react";
import axios from "axios";
import {REACT_APP_API_KEY} from "@env"
const useFetch = (endpoint, query) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": REACT_APP_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
console.log(process.env.REACT_APP_API_KEY)
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      console.log(data)
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

const refetch = () => {
    setIsLoading(true)
    fetchData()
}
return {data, isLoading, error, refetch}
};
export default useFetch

