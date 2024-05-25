import moment from "moment";
import { IoMdHeart, IoIosHeartEmpty } from "react-icons/io";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
  news: any;
  handleFavoriteClick: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
  news,
  handleFavoriteClick,
  isFavorite,
}) => {
  const publicationDate = moment(news.data_publicacao, "DD/MM/YYYY HH:mm:ss");
  const timeSincePublication = moment().diff(publicationDate, "days");

  const imagensObj = JSON.parse(news.imagens);
  const imageUrl = imagensObj.image_intro.replace(/\\/g, "");
  const fullImageUrl = `https://agenciadenoticias.ibge.gov.br/${imageUrl}`;

  return (
    <div className={styles.newsCard}>
      <div className={styles.imageContainer}>
        <img
          src={fullImageUrl}
          alt={news.titulo}
          className={styles.newsImage}
        />
      </div>
      <h2>{news.titulo}</h2>
      <p>Publicado há {timeSincePublication} dias</p>
      <p>{news.introducao}</p>
      <div className={styles.buttonWrapper}>
        <button
          onClick={() => window.open(news.link, "_blank")}
          className={styles.readNewsButton}
        >
          Ler Notícia
        </button>
        <button
          onClick={() => handleFavoriteClick(news.id)}
          className={styles.favoriteButton}
        >
          {isFavorite(news.id) ? (
            <IoMdHeart size={24} />
          ) : (
            <IoIosHeartEmpty size={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
