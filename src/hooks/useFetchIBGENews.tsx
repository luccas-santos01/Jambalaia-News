import { useState, useEffect } from "react";

interface News {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
  resumo: string;
}
interface NewsData {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  items: News[];
}

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
