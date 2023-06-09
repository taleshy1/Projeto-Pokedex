import { useState } from "react";
import { pokeApi } from "../api/axios-config";
import { useEffect } from "react";

export default function useRequest(id, initialState) {
  const [data, setData] = useState(initialState)
  const [isLoading, setIsLoading] = useState(true)

  if (!id) {
    useEffect(() => {
      pokeApi
        .get(`/pokemon/`, {
          params: {
            limit: 200,
          },
        })
        .then((res) => {
          Promise.all(res.data.results.map((res) => pokeApi.get(res.url))).then(
            (res) => {
              setData(res.map((res) => res.data));
              setIsLoading(false)
            }
          );
        });
    }, []);
  } else {
    useEffect(() => {
      pokeApi
        .get(`/pokemon/${id}`)
        .then((res) => {
          setData(res.data)
          setIsLoading(false)
        });
    }, []);
  }


  return { data, isLoading }
}
