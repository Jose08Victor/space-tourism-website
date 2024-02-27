import { Title } from "../../components/title";
import { Main } from "./styles";
import { useContext, useState } from "react";
import { changeClass } from "../../utils";
import { DataContext } from "../../contexts";

export const Crew = () => {
    const Context = useContext(DataContext);

    const [currentCrew, setCurrentCrew] = useState(Context?.data.crew[0]);

    return (
        <Main>
            <Title strong={2} title="MEET YOUR CREW" />

            <section>
                <div>
                    <h4>{currentCrew?.role}</h4>

                    <h2>{currentCrew?.name}</h2>

                    <p>{currentCrew?.bio}</p>

                    <ul>
                        {
                            Context?.data.crew.map((crew, index) => (index === 0) ?
                                <li className="active" key={index} onClick={(e) => { setCurrentCrew(crew), changeClass(e) }} ></li>
                                : <li key={index} onClick={(e) => { setCurrentCrew(crew), changeClass(e) }} ></li>)
                        }
                    </ul>
                </div>

                <img src={currentCrew?.image} alt={currentCrew?.name} />
            </section>
        </Main>
    )
}