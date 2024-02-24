import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewsSection from "../components/NewsSection/index.module";
import useFetchIBGENews from "../hooks/useFetchIBGENews";
import useFavorites from "../hooks/useFavorites";
import { vi } from "vitest";

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

test("renders loading state", () => {
  (useFetchIBGENews as jest.Mock).mockImplementation(() => ({
    data: null,
    loading: true,
  }));

  render(<NewsSection />);
  expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();
});

test("renders no data message", () => {
  (useFetchIBGENews as jest.Mock).mockImplementation(() => ({
    data: null,
    loading: false,
  }));

  render(<NewsSection />);
  expect(screen.getByText(/Não há dados disponíveis/i)).toBeInTheDocument();
});
