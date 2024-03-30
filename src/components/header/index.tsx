import { useRef } from "react";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export const Header = () => {
    const headerRef = useRef<HTMLElement | null>(null);

    const handleClick = () => {
        headerRef.current?.classList.toggle('active');
        document.querySelector('main')?.classList.toggle('active');
    };

    const removeclass = () => headerRef.current?.classList.remove('active');

    return (
        <HeaderContainer ref={headerRef} data-testid="header">
            <img src="https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/shared/logo.svg" alt="Logo" />

            <hr />

            <div>
                <img src="https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/shared/icon-hamburger.svg" alt="Icon Hamburger" onClick={handleClick} />

                <img src="https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/shared/icon-close.svg" alt="Icon Close" onClick={handleClick} />
            </div>

            <nav>
                <NavLink to="/space-tourism-website" onClick={removeclass} >
                    <p><strong>00</strong> HOME</p>
                </NavLink>

                <NavLink to="/destination" onClick={removeclass}>
                    <p><strong>01</strong> DESTINATION</p>
                </NavLink>

                <NavLink to="/crew" onClick={removeclass}>
                    <p><strong>02</strong> CREW</p>
                </NavLink>

                <NavLink to="/technology" onClick={removeclass}>
                    <p><strong>03</strong> TECHNOLOGY</p>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}