import "./App.css";
import Header from "./components/Header/index.module";
import LatestNews from "./components/LatestNews/index.module";
import NavigationMenu from "./components/NavigationMenu/index.module";
import NewsSection from "./components/NewsSection/index.module";
import FavoriteSection from "./components/FavoriteSection/index.module";
import { useState } from 'react';

function App() {
  const [activeButton, setActiveButton] = useState("Mais recentes");

  return (
    <div>
      <Header />
      <LatestNews />
      <NavigationMenu
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      {activeButton === "Favoritas" ? <FavoriteSection /> : <NewsSection />}
    </div>
  );
}

export default App;
