// favoriteSection.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FavoriteSection from "../components/FavoriteSection/index.module";
import useFetchIBGENews from "../hooks/useFetchIBGENews";
import useFavorites from "../hooks/useFavorites";
import { vi } from 'vitest';

vi.mock("../hooks/useFavorites");
vi.mock("../hooks/useFetchIBGENews");

const mockData = {
  count: 1,
  page: 1,
  totalPages: 1,
  nextPage: 1,
  previousPage: 1,
  showingFrom: 1,
  showingTo: 1,
  items: [
    {
      id: 1,
      tipo: "tipo",
      titulo: "titulo",
      introducao: "introducao",
      data_publicacao: "data_publicacao",
      produto_id: 1,
      produtos: "produtos",
      editorias: "editorias",
      imagens: "imagens",
      produtos_relacionados: "produtos_relacionados",
      destaque: true,
      link: "link",
      resumo: "resumo",
    },
  ],
};

beforeEach(() => {
  (useFavorites as jest.Mock).mockImplementation(() => ({
    favorites: [],
    addFavorite: vi.fn(),
    removeFavorite: vi.fn(),
    isFavorite: vi.fn(() => false),
  }));

  (useFetchIBGENews as jest.Mock).mockImplementation(() => ({
    data: mockData,
    loading: false,
  }));
});

describe("FavoriteSection Component", () => {
  test("renders loading state", async () => {
    (useFetchIBGENews as jest.Mock).mockImplementation(() => ({
      data: null,
      loading: true,
    }));
    render(<FavoriteSection />);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });
  test("renders favorite news correctly", async () => {
    render(<FavoriteSection />);
    waitFor(() => {
      const newsTitle = screen.getByRole("heading", {
        name: /titulo/i,
      });
      expect(newsTitle).toBeInTheDocument();
    });
  });
});
