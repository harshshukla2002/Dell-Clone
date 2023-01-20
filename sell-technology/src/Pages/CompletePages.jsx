import { useContext } from "react";
import { WebContext } from "../Context/websiteContext";
import HomePage from "./Home";
import ForHomeLaptop from "./ForHome";
import ForBusinessLaptop from "./ForBusiness";

function CompleteApp() {
    const { forhomelaptop, forbusinesslaptop } = useContext(WebContext);

    return (
        <>
            {forhomelaptop ? <ForHomeLaptop /> : forbusinesslaptop ? <ForBusinessLaptop /> : <HomePage />}
        </>
    )
}

export default CompleteApp;