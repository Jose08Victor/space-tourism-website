import { Title } from "../../components/title";
import { Main, Div1 } from "./styles";
import { useContext, useState } from "react";
import { changeClass } from "../../utils";
import { DataContext } from "../../contexts";

export const Technology = () => {
    const Context = useContext(DataContext);

    const [currentTechnology, setCurrentTechnology] = useState(Context?.data.technology[0]);

    return (
        <Main>
            <Title strong={3} title="SPACE LAUNCH 101" />

            <section>
                <Div1>
                    <ul>
                        {
                            Context?.data.technology.map((technology, index) => (index === 0) ?
                                <li className="active" key={index} onClick={(e) => { setCurrentTechnology(technology), changeClass(e) }} >{index + 1}</li>
                                : <li key={index} onClick={(e) => { setCurrentTechnology(technology), changeClass(e) }} >{index + 1}</li>)
                        }
                    </ul>

                    <div>
                        <h4>THE TERMINOLOGY…</h4>

                        <h2>{currentTechnology?.name}</h2>

                        <p>{currentTechnology?.description}</p>
                    </div>
                </Div1>

                <picture>
                    <source srcSet={currentTechnology?.images.portrait} media="(min-width: 900px)" />

                    <img src={currentTechnology?.images.landscape} alt={currentTechnology?.name} />
                </picture>
            </section>
        </Main>
    )
}