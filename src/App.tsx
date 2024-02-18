import "./App.css";
import Header from "./components/Header/index.module";
import LatestNews from "./components/LatestNews/index.module";
import NavigationMenu from "./components/NavigationMenu/index.module";
import NewsSection from "./components/NewsSection/index.module";

function App() {
  return (
    <div>
      <Header />
      <LatestNews />
      <NavigationMenu />
      <NewsSection />
    </div>
  );
}

export default App;
