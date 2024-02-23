import { useState } from "react";
import moment from "moment";
import useFetchIBGENews from "../../hooks/useFetchIBGENews";
import useFavorites from "../../hooks/useFavorites";
import styles from "./ReleaseSection.module.css";
import { IoMdHeart, IoIosHeartEmpty } from "react-icons/io";

function ReleaseSection() {
  const { data, loading } = useFetchIBGENews();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [visible, setVisible] = useState(12);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!data) {
    return <div>Nenhum dado encontrado</div>;
  }

  const newsItems = data.items.filter((item) => item.tipo === "Release");

  const handleFavoriteClick = (id: number) => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      <div className={styles.releaseGrid}>
        {newsItems.slice(0, visible).map((news, index) => {
          const publicationDate = moment(
            news.data_publicacao,
            "DD/MM/YYYY HH:mm:ss"
          );
          const timeSincePublication = moment().diff(publicationDate, "days");

          return (
            <div key={index} className={styles.releaseCard}>
              <h2>{news.titulo}</h2>
              <p>Publicado há {timeSincePublication} dias</p>
              <p>{news.introducao}</p>
              <div className={styles.buttonWrapper}>
                <button
                  onClick={() => window.open(news.link, "_blank")}
                  className={styles.readReleaseButton}
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
        })}
      </div>
      {visible < newsItems.length && (
        <button
          onClick={() => setVisible(visible + 12)}
          className={styles.showMoreButton}
        >
          Mostrar mais
        </button>
      )}
    </div>
  );
}

export default ReleaseSection;
