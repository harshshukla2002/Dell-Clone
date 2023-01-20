import DropDownList from "../Components/Homepage/DropDownLists";
import Navbar from "../Components/Homepage/Navbar";
import Selection from "../Components/Homepage/selection";
import "../CSS/homePage.css"
import '../CSS/navbar.css'
import '../CSS/footer.css'
import '../CSS/ForHomeLaptop.css'
import Footer from "../Components/Homepage/footer";
import ForBusinessLaptopContent from "../Components/ForBusinessLaptop/ForBusinessLaptopContent";

function ForBusinessLaptop() {
    return (
        <>
            <Navbar />
            <DropDownList />
            <hr />
            <div className="selection">
                <Selection />
            </div>
            <ForBusinessLaptopContent />
            <div className="footer">
                <Footer />
            </div>
            <div className="same-footer">
                <div className="about-dell">
                    <h2>Dell.com</h2>
                    <h2>Dell Technology</h2>
                    <h2>Premier</h2>
                </div>
                <div className="about-dell-bottom">
                    <p className="footer-hover">Copyright 2023 Dell Inc.</p>
                    <p className="footer-hover">Term And sales</p>
                    <p className="footer-hover">Privacy Statement</p>
                    <p className="footer-hover">Legal & Regulatory</p>
                    <p className="footer-hover">Accessibilty</p>
                </div>
            </div>
        </>
    )
}

export default ForBusinessLaptop;