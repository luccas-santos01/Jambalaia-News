import useFavorites from "../hooks/useFavorites";

const useHandleFavoriteClick = () => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = (id: number) => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return handleFavoriteClick;
};

export default useHandleFavoriteClick;
