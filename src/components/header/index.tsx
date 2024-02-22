import { HeaderContainer, Hamburger, IconX } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer className="active">
            <img src="https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/shared/logo.svg" alt="Logo" />

            <hr />

            <Hamburger src="https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/shared/icon-hamburger.svg" alt="Icon Hamburger" />

            <IconX src="https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/shared/icon-close.svg" alt="Icon Close" />

            <nav>
                <a href="#">
                    <p><strong>00</strong> HOME</p>
                </a>

                <a href="#">
                    <p><strong>01</strong> DESTINATION</p>
                </a>

                <a href="#">
                    <p><strong>02</strong> CREW</p>
                </a>

                <a href="#">
                    <p><strong>03</strong> TECNOLOGY</p>
                </a>
            </nav>
        </HeaderContainer>
    )
}