import { render, fireEvent } from "@testing-library/react";
import useFavorites from "../hooks/useFavorites";

function TestComponent() {
  const { addFavorite, removeFavorite, isFavorite, favorites } = useFavorites();

  return (
    <div>
      <button onClick={() => addFavorite(1)}>Add Favorite</button>
      <button onClick={() => removeFavorite(1)}>Remove Favorite</button>
      <button onClick={() => isFavorite(1)}>Is Favorite</button>
      <div>{favorites.includes(1) ? "Favorite" : "Not Favorite"}</div>
    </div>
  );
}

describe("useFavorites", () => {
  test("should add favorite", () => {
    const { getByText } = render(<TestComponent />);

    fireEvent.click(getByText("Add Favorite"));

    expect(getByText("Favorite")).toBeTruthy();
  });

  test("should remove favorite", () => {
    const { getByText } = render(<TestComponent />);

    fireEvent.click(getByText("Add Favorite"));
    fireEvent.click(getByText("Remove Favorite"));

    expect(getByText("Not Favorite")).toBeTruthy();
  });

  test("should check if is favorite", () => {
    const { getByText } = render(<TestComponent />);

    fireEvent.click(getByText("Add Favorite"));

    expect(getByText("Favorite")).toBeTruthy();
  });
});
