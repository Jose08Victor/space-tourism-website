import { Title } from "../../components/title"
import { Main } from "./styles"

export const Crew = () => {
    return (
        <Main>
            <Title strong={2} title="MEET YOUR CREW" />

            <section>
                <div>
                    <h4>COMMANDER</h4>

                    <h2>DOUGLAS HURLEY</h2>

                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>

                    <div>
                        <span></span>

                        <span></span>

                        <span></span>

                        <span></span>
                    </div>
                </div>
                
                <img src="https://github.com/Jose08Victor/space-tourism-website/blob/main/src/assets/crew/image-douglas-hurley.webp?raw=true" alt="Douglas Hurley" />
            </section>

        </Main>
    )
}