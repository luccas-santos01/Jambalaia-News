import { render, screen } from "@testing-library/react";
import Header from "../components/Header/index.module";

describe("Header component", () => {
  it("should render the logo", () => {
    render(<Header />);
    const logoElement = screen.getByAltText("Logo");
    expect(logoElement).toBeInTheDocument();
  });

  it("should render the title", () => {
    render(<Header />);
    const titleElement = screen.getByText("JAMBALAIA NEWS");
    expect(titleElement).toBeInTheDocument();
  });
});
