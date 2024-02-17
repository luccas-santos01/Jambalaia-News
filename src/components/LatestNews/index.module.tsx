import styles from "./LatestNews.module.css";
import useFetchIBGENews from "../../hooks/useFetchIBGENews";
import moment from "moment";

interface NewsItem {
  id: number;
  tipo: string;
  titulo: string;
  data_publicacao: string;
  link: string;
  imagens: string;
  resumo: string;
  [key: string]: unknown;
}

interface NewsData {
  items: NewsItem[];
}

function LatestNews() {
  const { data, loading } = useFetchIBGENews();

  if (loading || !data) {
    return <div>Carregando...</div>;
  }

  const newsData: NewsData = data;
  const latestNews = newsData.items[0];

  if (!latestNews || !latestNews.data_publicacao) {
    return <div>Nenhuma notícia disponível</div>;
  }

  const publicationDate = moment(
    latestNews.data_publicacao,
    "DD/MM/YYYY HH:mm:ss"
  );
  const timeSincePublication = moment().diff(publicationDate, "days");

  const imagensObj = JSON.parse(latestNews.imagens);

  const imageUrl = imagensObj.image_fulltext.replace(/\\/g, "");

  const fullImageUrl = `https://agenciadenoticias.ibge.gov.br/${imageUrl}`;

  return (
    <div className={styles.card}>
      <h1>Notícia mais recente</h1> {/* Adiciona o destaque */}
      <img
        className={styles.image}
        src={fullImageUrl}
        alt={latestNews.titulo}
      />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{latestNews.titulo}</h2>
        <p>{latestNews.resumo}</p>
        <p>{timeSincePublication} dia atrás</p>
        <a
          className={styles.link}
          href={latestNews.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Leia a notícia aqui</button>
        </a>
      </div>
    </div>
  );
}

export default LatestNews;
