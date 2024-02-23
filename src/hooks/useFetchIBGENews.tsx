import { useState, useEffect } from "react";

export interface News {
  id: number;
  type: string;
  title: string;
  introduction: string;
  published_date: string;
  product_id: number;
  product: string;
  editorials: string;
  images: string;
  related_products: string;
  emphasis: boolean;
  link: string;
  resume: string;
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
