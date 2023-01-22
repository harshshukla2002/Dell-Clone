import { Route, Routes } from "react-router-dom"
import AdminPage from "../Pages/AdminPage";
import CreateAccount from "../Pages/CreateAccount";
import ForBusinessLaptop from "../Pages/ForBusiness";
import ForHomeLaptop from "../Pages/ForHome";
import HomePage from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/forhome" element={<ForHomeLaptop />} />
            <Route path="/forbusiness" element={<ForBusinessLaptop />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path='/admin/*' element={<PrivateRoutes><AdminPage /></PrivateRoutes>} />
        </Routes>
    )
}

export default AllRoutes;