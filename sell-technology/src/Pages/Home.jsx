import Content from "../Components/Content";
import DropDownList from "../Components/DropDownLists";
import Navbar from "../Components/Navbar";
import Selection from "../Components/selection";
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