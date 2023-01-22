import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { WebContext } from "../Context/websiteContext";

function PrivateRoutes({ children }) {
    const { isAuth } = useContext(WebContext);
    console.log(isAuth)

    if (!isAuth) {
        return <Navigate to='/' />
    }

    return children
}

export default PrivateRoutes;