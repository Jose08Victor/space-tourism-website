import { Title } from "../../components/title";
import { Main, Div1 } from "./styles";

export const Technology = () => {
    return (
        <Main>
            <Title strong={3} title="SPACE LAUNCH 101" />

            <section>
                <Div1>
                    <div>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>

                    <div>
                        <h4>THE TERMINOLOGY…</h4>

                        <h2>LAUNCH VEHICLE</h2>

                        <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                </Div1>

                <picture>
                    <source srcSet="https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/technology/image-launch-vehicle-portrait.jpg" media="(min-width: 900px)" />

                    <img src="https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/technology/image-launch-vehicle-landscape.jpg" alt="Image Launch Vehicle Landscape" />
                </picture>
            </section>
        </Main>
    )
}