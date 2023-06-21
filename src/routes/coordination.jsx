export const GoToPokedex = (navigate) => {
  navigate("/pokedex");
};
export const GoToHome = (navigate) => {
  navigate("/");
};
export const GoToDetails = (navigate, id) => {
  navigate(`/details/${id}`);
};
