import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AddLaptops from "../Components/Admin/AddLaptops";
import UsersDetails from "../Components/Admin/usersDetails";

function AdminLogin() {
    return (
        <>
            <Link to='/admin/userdetails'>Users Details</Link>
            <Link to='/admin/addlaptops'>ADD Laptops</Link>
            <hr />
            <Routes>
                <Route path='/admin/userdetails' element={<UsersDetails />} />
                <Route path="/admin/addlaptops" element={<AddLaptops />} />
            </Routes>
        </>
    )
}

export default AdminLogin;