import { useState } from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/magnifying-glass.png";

interface SearchBarProps {
  onInputChange: (inputValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    onInputChange(inputValue);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Buscar notícias..."
        className={styles.searchBar}
      />
      <img
        src={searchIcon}
        alt="Buscar"
        onClick={handleSearchClick}
        className={styles.searchButton}
      />
    </div>
  );
};

export default SearchBar;
