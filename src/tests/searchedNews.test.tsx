import { render, screen } from "@testing-library/react";
import SearchedNews from "../components/SearchedNews/index.module";

describe("SearchedNews", () => {
  it("renders correctly", () => {
    render(<SearchedNews searchValue="teste" />);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });
});
