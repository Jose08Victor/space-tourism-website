import { createContext, useState } from "react";
import Data from "../json/data.json";
import { Idata, ContextType } from "../types";

export const DataContext = createContext<ContextType | undefined>(undefined)

export const Provider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const [data] = useState<Idata>(Data)

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    )
}