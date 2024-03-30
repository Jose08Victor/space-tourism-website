import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Header } from ".";
import { BrowserRouter } from "react-router-dom";

const renderComponent = () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
}

const clickNavLinkAndCheckNavigation = async (text: string, expectedPath: string) => {
    fireEvent.click(screen.getByText(text));
    await waitFor(() => {
        expect(window.location.pathname).toBe(expectedPath);
    });
}

const clickNavLinkAndHideMenu = (text: string) => {
    const navLink = screen.getByText(text);
    const header = screen.getByTestId('header');
    fireEvent.click(navLink);
    expect(header).not.toHaveClass('active');
}

test('renders elements on the screen', () => {
    renderComponent();
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByAltText("Icon Hamburger")).toBeInTheDocument();
    expect(screen.getByAltText("Icon Close")).toBeInTheDocument();
});
 
test('correct navigation when clicking on NavLink', () => {
    renderComponent();
    clickNavLinkAndCheckNavigation("HOME", '/space-tourism-website');
    clickNavLinkAndCheckNavigation("DESTINATION", '/destination');
    clickNavLinkAndCheckNavigation("CREW", '/crew');
    clickNavLinkAndCheckNavigation("TECHNOLOGY", '/technology');
});

test('hide the menu when clicking a navlink', () => {
    renderComponent();

    clickNavLinkAndHideMenu('HOME');
    clickNavLinkAndHideMenu('DESTINATION');
    clickNavLinkAndHideMenu('CREW');
    clickNavLinkAndHideMenu('TECHNOLOGY')
});

test('toggle menu by clicking hamburger icon', () => {
    renderComponent();

    const hamburgerIcon = screen.getByAltText('Icon Hamburger');
    const header = screen.getByTestId('header');

    fireEvent.click(hamburgerIcon);
    expect(header).toHaveClass('active');

    fireEvent.click(hamburgerIcon);
    expect(header).not.toHaveClass('active');
});

test('hide the menu when clicking the close icon', () => {
    renderComponent();

    const hamburgerIcon = screen.getByAltText('Icon Hamburger');
    const closeIcon = screen.getByAltText('Icon Close');
    const header = screen.getByTestId('header');

    fireEvent.click(hamburgerIcon);
    fireEvent.click(closeIcon);

    expect(header).not.toHaveClass('active');
});