import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Home } from ".";
import { BrowserRouter } from "react-router-dom";

const renderComponent = () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
}

test('renders elements on the screen', () => {
    renderComponent();
    expect(screen.getByText("SO, YOU WANT TO TRAVEL TO")).toBeInTheDocument();
    expect(screen.getByText("SPACE")).toBeInTheDocument();
    expect(screen.getByText("Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!")).toBeInTheDocument();
    expect(screen.getByText("EXPLORE")).toBeInTheDocument();
});

test('correct navigation when clicking on NavLink', async () => {
    renderComponent();
    fireEvent.click(screen.getByText("EXPLORE"));
    await waitFor(() => {
        expect(window.location.pathname).toBe("/destination");
    });
});