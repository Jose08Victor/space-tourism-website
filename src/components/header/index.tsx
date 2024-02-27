import { useRef } from "react";
import { HeaderContainer } from "./styles";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
    const headerRef = useRef<HTMLElement | null>(null);
    const home = useRef<HTMLAnchorElement | null>(null);
    const destination = useRef<HTMLAnchorElement | null>(null);
    const crew = useRef<HTMLAnchorElement | null>(null);
    const technology = useRef<HTMLAnchorElement | null>(null);

    const handleClick = () => {
        headerRef.current?.classList.toggle('active');
        document.querySelector('main')?.classList.toggle('active');
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | any) => {       
        headerRef.current?.classList.remove('active');
        document.querySelector('main')?.classList.remove('active');
        document.querySelectorAll('a')?.forEach((e) => e.classList.remove('active'));

        if(e.currentTarget === home.current) home.current?.classList.add('active');
        if(e.currentTarget === destination.current || e === "destination") destination.current?.classList.add('active');
        if(e.currentTarget === crew.current) crew.current?.classList.add('active');
        if(e.currentTarget === technology.current) technology.current?.classList.add('active');
    }

    const { state } = useLocation()
    if(state) handleLinkClick(state);

    return (
        <HeaderContainer ref={headerRef}>
            <img src="https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/shared/logo.svg" alt="Logo" />

            <hr />

            <div>
                <img src="https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/shared/icon-hamburger.svg" alt="Icon Hamburger" onClick={handleClick} />

                <img src="https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/shared/icon-close.svg" alt="Icon Close" onClick={handleClick} />
            </div>

            <nav>
                <Link to="/space-tourism-website" ref={home} onClick={(e) => handleLinkClick(e)} className="active">
                    <p><strong>00</strong> HOME</p>
                </Link>

                <Link to="/space-tourism-website/destination" ref={destination} onClick={(e) => handleLinkClick(e)}>
                    <p><strong>01</strong> DESTINATION</p>
                </Link>

                <Link to="/space-tourism-website/crew" ref={crew} onClick={(e) => handleLinkClick(e)}>
                    <p><strong>02</strong> CREW</p>
                </Link>

                <Link to="/space-tourism-website/technology" ref={technology} onClick={(e) => handleLinkClick(e)}>
                    <p><strong>03</strong> TECNOLOGY</p>
                </Link>
            </nav>
        </HeaderContainer>
    )
}