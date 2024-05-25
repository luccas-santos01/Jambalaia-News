export interface NewsItem {
  id: number;
  image_url: string;
  title: string;
  description: string;
  url: string;
  published_at: string;
}

export interface News {
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
export interface NewsData {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  items: News[];
}
