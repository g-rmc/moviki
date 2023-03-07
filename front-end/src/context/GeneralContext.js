import { createContext, useState } from "react";
import { movikiAPI } from "../services/moviki";

export const GeneralContext = createContext();

export function GeneralContextProvider ({ children }) {
    const [ movieObj, setMovieObj ] = useState({})

    return (
        <GeneralContext.Provider value={{ movieObj, setMovieObj, movikiAPI }}>
            {children}
        </GeneralContext.Provider>
    )
}