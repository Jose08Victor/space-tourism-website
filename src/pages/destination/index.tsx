import { Title } from "../../components/title";
import { Div1, Div2, Main } from "./styles";
import { useContext, useState } from "react";
import { changeClass } from "../../utils";
import { DataContext } from "../../contexts";

export const Destination = () => {
    const Context = useContext(DataContext);

    const [currentDestination, setCurrentDestination] = useState(Context?.data.destinations[0]);

    return (
        <Main>
            <Title strong={1} title="PICK YOUR DESTINATION" />

            <section>
                <img src={currentDestination?.image} alt={currentDestination?.name} />

                <Div1>
                    <nav>
                        <ul>
                            {
                                Context?.data.destinations.map((destination, index) => (index === 0) ?
                                    <li className="active" key={index} onClick={(e) => { setCurrentDestination(destination), changeClass(e) }} >{destination.name}</li>
                                    : <li key={index} onClick={(e) => { setCurrentDestination(destination), changeClass(e) }} >{destination.name}</li>)
                            }
                        </ul>
                    </nav>

                    <h2>{currentDestination?.name}</h2>

                    <p>{currentDestination?.description}</p>

                    <Div2>
                        <div>
                            <p>AVG. DISTANCE</p>
                            <p>{currentDestination?.distance}</p>
                        </div>

                        <div>
                            <p>EST. TRAVEL TIME</p>
                            <p>{currentDestination?.travel}</p>
                        </div>
                    </Div2>
                </Div1>
            </section>
        </Main>
    )
}