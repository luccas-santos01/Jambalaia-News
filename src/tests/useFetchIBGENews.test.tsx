import { render, waitFor, fireEvent } from "@testing-library/react";
import useFetchIBGENews from "../hooks/useFetchIBGENews";

type GlobalFetch = {
  (input: RequestInfo, init?: RequestInit): Promise<Response>;
};

// Mock global fetch function
(global.fetch as GlobalFetch) = function () {
  return Promise.resolve(
    new Response(
      JSON.stringify({
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
      })
    )
  );
};

function TestComponent() {
  const { data, loading } = useFetchIBGENews();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => data?.items[0].titulo}>Fetch News</button>
      <div>{data?.items[0].titulo}</div>
    </div>
  );
}

test("useFetchIBGENews performs fetch and sets data", async () => {
  const { getByText } = render(<TestComponent />);
  expect(getByText("Loading...")).toBeTruthy();
  await waitFor(() => fireEvent.click(getByText("Fetch News")));
  await waitFor(() => getByText("titulo"));
  expect(getByText("titulo")).toBeTruthy();
});
