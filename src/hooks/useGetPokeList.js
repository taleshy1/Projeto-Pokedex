import { useContext, useState } from "react";
import { pokeApi } from "../api/axios-config";
import { useEffect } from "react";
import { Global } from "../context/global/globalContext";

export default function useRequest(id, initialState) {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const { page, setGlobalLoading } = useContext(Global);
  if (!id) {
    useEffect(() => {
      setIsLoading(true);
      pokeApi
        .get(page ? page : `/pokemon/`, {
          params: {
            limit: 21,
          },
        })
        .then((res) => {
          setNext(res.data.next);
          setPrevious(res.data.previous);
          Promise.all(res.data.results.map((res) => pokeApi.get(res.url))).then(
            (res) => {
              setData(res.map((res) => res.data));

              setTimeout(() => {
                setIsLoading(false);
                setGlobalLoading(false);
              }, 1000);
            }
          );
        });
    }, [page]);
  } else {
    useEffect(() => {
      setIsLoading(true);

      pokeApi.get(`/pokemon/${id}`).then((res) => {
        setData(res.data);

        setTimeout(() => {
          setIsLoading(false);
          setGlobalLoading(false);
        }, 1000);
      });
    }, [page]);
  }

  return { data, isLoading, next, previous };
}
