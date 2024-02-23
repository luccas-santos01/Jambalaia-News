import { useState } from "react";
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onInputChange: (inputValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Buscar notícias..."
      className={styles.searchBar}
    />
  );
};

export default SearchBar;
