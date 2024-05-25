import { useState, useEffect } from "react";
import { NewsData } from "../types/news";

function useFetchIBGENews() {
  const [data, setData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100")
      .then((response) => response.json())
      .then((data: NewsData) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      });
  }, []);

  return { data, loading };
}

export default useFetchIBGENews;
