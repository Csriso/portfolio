import { createContext, useState } from "react"
import { useLocation } from "react-router"

const UtilityContext = createContext()

function UtilityWrapper(props) {

    // todos los estados y funciones
    const [firstEnter, setFirstEnter] = useState(true)
    const location = useLocation();
    if (location.pathname !== "/" && firstEnter === true) {
        setFirstEnter(false);
    }
    const utilPassedContext = {
        firstEnter,
        setFirstEnter
    }

    return (
        <UtilityContext.Provider value={utilPassedContext} >
            {props.children}
        </UtilityContext.Provider>
    )
}

export { UtilityContext, UtilityWrapper }


