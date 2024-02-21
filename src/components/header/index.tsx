import { HeaderContainer, Hamburger, IconX } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer className="active">
            <img src="https://github.com/Jose08Victor/space-tourism-website/blob/main/src/assets/shared/logo.svg?raw=true" alt="Logo" />

            <hr />

            <Hamburger src="https://github.com/Jose08Victor/space-tourism-website/blob/main/src/assets/shared/icon-hamburger.svg?raw=true" alt="Icon Hamburger" />

            <IconX src="https://github.com/Jose08Victor/space-tourism-website/blob/main/src/assets/shared/icon-close.svg?raw=true" alt="Icon Close" />

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