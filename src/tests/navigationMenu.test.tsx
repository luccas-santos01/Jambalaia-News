import { render, fireEvent } from "@testing-library/react";
import { vi } from 'vitest';
import NavigationMenu from "../components/NavigationMenu/index.module";

test("navigationMenu changes button when clicked", () => {
  const setActiveButton = vi.fn();
  const { getByRole } = render(
    <NavigationMenu activeButton="" setActiveButton={setActiveButton} />
  );

  const buttonMaisRecentes = getByRole("button", { name: /Mais recentes/i });
  const buttonReleases = getByRole("button", { name: /Releases/i });
  const buttonNoticias = getByRole("button", { name: /Notícias/i });
  const buttonFavoritas = getByRole("button", { name: /Favoritas/i });

  expect(buttonMaisRecentes).toBeInTheDocument();
  expect(buttonReleases).toBeInTheDocument();
  expect(buttonNoticias).toBeInTheDocument();
  expect(buttonFavoritas).toBeInTheDocument();

  fireEvent.click(buttonMaisRecentes);
  expect(setActiveButton).toHaveBeenCalledWith("Mais recentes");

  fireEvent.click(buttonReleases);
  expect(setActiveButton).toHaveBeenCalledWith("Releases");

  fireEvent.click(buttonNoticias);
  expect(setActiveButton).toHaveBeenCalledWith("Notícias");

  fireEvent.click(buttonFavoritas);
  expect(setActiveButton).toHaveBeenCalledWith("Favoritas");
});
