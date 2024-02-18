import styles from "./LatestNews.module.css";
import useFetchIBGENews from "../../hooks/useFetchIBGENews";
import useFavorites from "../../hooks/useFavorites";
import moment from "moment";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

function LatestNews() {
  const { data, loading } = useFetchIBGENews();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading || !data) {
    return <div>Carregando...</div>;
  }

  const latestNews = data.items[0];

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

  const handleFavoriteClick = () => {
    if (isFavorite(latestNews.id)) {
      removeFavorite(latestNews.id);
    } else {
      addFavorite(latestNews.id);
    }
  };

  return (
    <div className={styles.card}>
      <h1>Notícia mais recente</h1>
      <img
        className={styles.image}
        src={fullImageUrl}
        alt={latestNews.titulo}
      />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{latestNews.titulo}</h2>
        <p>{latestNews.resumo}</p>
        <p>{timeSincePublication} dia atrás</p>
        <button onClick={handleFavoriteClick}>
          {isFavorite(latestNews.id) ? <IoMdHeart /> : <IoIosHeartEmpty />}
        </button>
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
