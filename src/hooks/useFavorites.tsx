import { useState, useEffect } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = (id: number) => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (!storedFavorites.includes(id)) {
      const newFavorites = [...storedFavorites, id];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  const removeFavorite = (id: number) => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const newFavorites = storedFavorites.filter(
      (favoriteId: number) => favoriteId !== id
    );
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const isFavorite = (id: number) => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    return storedFavorites.includes(id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
}

export default useFavorites;
