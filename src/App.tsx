import "./App.css";
import Header from "./components/Header/index.module";
import LatestNews from "./components/LatestNews/index.module";
import NavigationMenu from "./components/NavigationMenu/index.module";

function App() {
  return (
    <div>
      <Header />
      <LatestNews />
      <NavigationMenu />
    </div>
  );
}

export default App;
