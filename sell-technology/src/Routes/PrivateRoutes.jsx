import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WebContext } from "../Context/websiteContext";

function PrivateRoutes({ children }) {
    const { isAuth } = useContext(WebContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            return navigate('/')
        }

        return children
    }, [isAuth,children,navigate])
}

export default PrivateRoutes;