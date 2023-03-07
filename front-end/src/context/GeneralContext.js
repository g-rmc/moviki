import { createContext, useState } from "react";
import { movikiAPI } from "../services/moviki";

export const GeneralContext = createContext();

export function GeneralContextProvider ({ children }) {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const resetedMovieObj = {Response: "False", Error: "Type a title to find a movie!"};
    const [ movieObj, setMovieObj ] = useState(resetedMovieObj)

    function resetMovieObj() {
        setMovieObj(resetedMovieObj);
    }

    return (
        <GeneralContext.Provider value={{ movieObj, setMovieObj, resetMovieObj, loading, setLoading, search, setSearch, movikiAPI }}>
            {children}
        </GeneralContext.Provider>
    )
}