import { pokeApi } from "./axios-config";

export async function getPokeList() {
  let list;
  await pokeApi
    .get(`pokemon`, {
      params: {
        offset: 0,
        limit: 21,
      },
    })
    .then((res) => {
      list = res.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
  return list;
}

export async function getPokeDetails(url) {
  try {
    const res = await pokeApi.get(url, {
      params: {
        offset: 0,
        limit: 21,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
