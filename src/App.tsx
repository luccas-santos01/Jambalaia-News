import "./App.css";
import Header from "./components/Header/index.module";
import LatestNews from "./components/LatestNews/index.module";
import NavigationMenu from "./components/NavigationMenu/index.module";
import NewsSection from "./components/NewsSection/index.module";
import FavoriteSection from "./components/FavoriteSection/index.module";
import NoticeSection from "./components/NoticeSection/index.module";
import ReleaseSection from "./components/ReleaseSection/index.module";
import SearchBar from "./components/SearchBar/index.module";
import SearchedNews from './components/SearchedNews/index.module';
import { useState } from "react";

function App() {
  const [activeButton, setActiveButton] = useState("Mais recentes");
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (inputValue: string) => {
    setSearchValue(inputValue);
  };

  let content;
  if (searchValue !== "") {
    content = <SearchedNews searchValue={searchValue} />;
  } else if (activeButton === "Favoritas") {
    content = <FavoriteSection />;
  } else if (activeButton === "Notícias") {
    content = <NoticeSection />;
  } else if (activeButton === "Releases") {
    content = <ReleaseSection />;
  } else {
    content = <NewsSection />;
  }

  return (
    <div>
      <Header />
      <LatestNews />
      <NavigationMenu
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <SearchBar onInputChange={handleInputChange} />
      {content}
    </div>
  );
}

export default App;
