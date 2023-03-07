import { createContext, useState } from "react";
import { movikiAPI } from "../services/moviki";

export const GeneralContext = createContext();

export function GeneralContextProvider ({ children }) {
    const [search, setSearch] = useState("");
    const [ movieObj, setMovieObj ] = useState({Response: "False", Error: "Make a search first!"})

    return (
        <GeneralContext.Provider value={{ movieObj, setMovieObj, search, setSearch, movikiAPI }}>
            {children}
        </GeneralContext.Provider>
    )
}