import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AddLaptops from "../Components/Admin/AddLaptops";
import UsersDetails from "../Components/Admin/usersDetails";
import { WebContext } from "../Context/websiteContext";
import '../CSS/admin.css'

function AdminPage() {
    const navigate = useNavigate();
    const { LogoutUser } = useContext(WebContext)
    return (
        <>
            <div className="logo">
                <img onClick={() => navigate('/')} style={{ cursor: "pointer", width: "50%" }} src="https://i.postimg.cc/15GLg3Zc/Black-Modern-Laptop-Logo.png" alt="sell-technology" />
            </div>
            <h1 style={{
                fontSize: "30px", margin: "auto",
                background: "tomato", width: "15%", marginTop: "10px", marginBottom: "30px", borderRadius: "10px"
            }}>Admin Page</h1>
            <Button onClick={() => LogoutUser()} colorScheme='blue' p="10px 40px">
                Log Out
            </Button>
            <div className="admin-navbar">
                <NavLink className='link-hover' to='/admin/userdetails' style={({ isActive }) => ({ background: isActive ? "#e5e5e5" : "none", margin: "5px 30px", borderRadius: "10px" })} > User Details </NavLink>
                <NavLink className='link-hover' to='/admin/addlaptops' style={({ isActive }) => ({ background: isActive ? "#e5e5e5" : "none", borderRadius: "10px" })} > ADD Laptop </NavLink>
            </div>
            <hr />
            <Routes>
                <Route path='/userdetails' element={<UsersDetails />} />
                <Route path="/addlaptops" element={<AddLaptops />} />
            </Routes>
        </>
    )
}

export default AdminPage;