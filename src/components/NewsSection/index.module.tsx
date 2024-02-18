import { useState } from "react";
import useFetchIBGENews from "../../hooks/useFetchIBGENews";
import styles from "./NewsSection.module.css";
import moment from "moment";

function NewsSection() {
  const { data, loading } = useFetchIBGENews();
  const [visible, setVisible] = useState(12);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!data) {
    return <div>Não há dados disponíveis</div>;
  }

  const newsItems = data.items.slice(1, visible + 1);

  return (
    <div>
      <div className={styles.newsGrid}>
        {newsItems.map((news, index) => {
          const publicationDate = moment(
            news.data_publicacao,
            "DD/MM/YYYY HH:mm:ss"
          );
          const timeSincePublication = moment().diff(publicationDate, "days");

          return (
            <div key={index} className={styles.newsCard}>
              <h2>{news.titulo}</h2>
              <p>Publicado há {timeSincePublication} dias</p>
              <p>{news.introducao}</p>
              <button onClick={() => window.open(news.link, "_blank")}>
                Ler Notícia
              </button>
            </div>
          );
        })}
      </div>
      {visible < data.items.length && (
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

export default NewsSection;
