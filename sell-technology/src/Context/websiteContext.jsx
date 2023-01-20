import { useState } from "react";
import { createContext } from "react"

export const WebContext = createContext();

function WebsiteContext({ children }) {
    const [homepage, setHomepage] = useState(true);
    const [forhomelaptop, setForHomeLaptop] = useState(false);
    const [forbusinesslaptop, setForBusinessLaptop] = useState(false);

    const handleHomePage = () => {
        setHomepage(true);
        setForHomeLaptop(false);
        setForBusinessLaptop(false);
    }

    const handleforHomeLaptop = () => {
        setHomepage(false);
        setForHomeLaptop(true);
        setForBusinessLaptop(false);
    }

    const handleforBuisnessLaptop = () => {
        setHomepage(false);
        setForHomeLaptop(false);
        setForBusinessLaptop(true);
    }

    return (
        <WebContext.Provider value={{ homepage, forhomelaptop, handleHomePage, handleforHomeLaptop, forbusinesslaptop, handleforBuisnessLaptop }}>{children}</WebContext.Provider>
    )
}

export default WebsiteContext;