import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar/index.module";
import { vi } from "vitest";

describe("SearchBar", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <SearchBar onInputChange={() => {}} />
    );
    expect(getByPlaceholderText("Buscar notícias...")).toBeInTheDocument();
  });

  it("calls onInputChange prop when input value changes", () => {
    const handleInputChange = vi.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onInputChange={handleInputChange} />
    );
    const input = getByPlaceholderText("Buscar notícias...");
    fireEvent.change(input, { target: { value: "teste" } });
    expect(handleInputChange).toHaveBeenCalledWith("teste");
  });
});
