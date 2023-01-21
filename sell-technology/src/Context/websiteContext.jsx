import { useState } from "react";
import { createContext } from "react"

export const WebContext = createContext();

function WebsiteContext({ children }) {
    const [userName, setUserName] = useState("");
    const [isAuth, setAuth] = useState(false);

    const handlesetName = (name) => {
        setUserName(name);
        setAuth(true);
    }

    const LogoutUser = () => {
        setUserName('');
        setAuth(false);
    }

    return (
        <WebContext.Provider value={{ handlesetName, userName, LogoutUser, isAuth }}>{children}</WebContext.Provider>
    )
}

export default WebsiteContext;