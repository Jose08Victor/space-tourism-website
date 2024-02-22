import { Title } from "../../components/title"
import { Div1, Div2, Main } from "./styles"

export const Destination = () => {
    return (
        <Main>
            <Title strong={1} title="PICK YOUR DESTINATION" />

            <section>
                <img src="https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/destination/image-moon.webp" alt="Moon" />

                <Div1>
                    <nav>
                        <ul>
                            <li>MOON</li>
                            <li>MARS</li>
                            <li>EUROPA</li>
                            <li>TITAN</li>
                        </ul>
                    </nav>

                    <h2>MOON</h2>

                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

                    <Div2>
                        <div>
                            <p>AVG. DISTANCE</p>
                            <p>384,400 KM</p>
                        </div>

                        <div>
                            <p>EST. TRAVEL TIME</p>
                            <p>3 DAYS</p>
                        </div>
                    </Div2>
                </Div1>
            </section>
        </Main>
    )
}