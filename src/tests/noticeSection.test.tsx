import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NoticeSection from "../components/NoticeSection/index.module";
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

describe("NoticeSection", () => {
  it('should render "Carregando..." when loading', () => {
    (useFetchIBGENews as jest.Mock).mockImplementation(() => ({
      data: null,
      loading: true,
    }));

    render(<NoticeSection />);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });
  it('should render "Nenhum dado encontrado" when no data', () => {
    (useFetchIBGENews as jest.Mock).mockImplementation(() => ({
      data: null,
      loading: false,
    }));

    render(<NoticeSection />);
    expect(screen.getByText("Nenhum dado encontrado")).toBeInTheDocument();
  });
});
