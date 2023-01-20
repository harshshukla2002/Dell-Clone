import Content from "../Components/Homepage/Content";
import DropDownList from "../Components/Homepage/DropDownLists";
import Navbar from "../Components/Homepage/Navbar";
import Selection from "../Components/Homepage/selection";
import "../CSS/homePage.css"
import '../CSS/navbar.css'
import '../CSS/footer.css'


function HomePage() {
    return (
        <>
            <Navbar />
            <DropDownList />
            <hr />
            <div className="selection">
                <Selection />
            </div>
            <Content />
        </>
    )
}

export default HomePage;