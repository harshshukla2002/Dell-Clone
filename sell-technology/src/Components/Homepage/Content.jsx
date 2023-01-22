import { Button } from "@chakra-ui/react"
import { useContext } from "react";
import { WebContext } from "../../Context/websiteContext";
import Footer from "./footer";

function Content() {
    const { userName } = useContext(WebContext);
    return (
        <>
            <div className="republic-day">
                <div>
                    <h3 style={{ color: "teal", fontWeight: "100px" }}>REPUBLIC DAY OFFERS</h3>
                    <h1 style={{ color: "teal", fontWeight: "200px", fontSize: "35px" }}>Be Free To Be More</h1>
                    <p>Get 10% cashback up to ₹5,000 on Citi cards & 2 years onsite warranty at ₹1*</p>
                    <Button colorScheme="blue" variant="solid" m='10px'>Shop Deals</Button>
                    <Button colorScheme="blue" variant='outline' m='10px'>Monitor Deals</Button>
                </div>
                <div>
                    <img src="https://i.postimg.cc/Bnpj9Hbk/Screenshot-2023-01-19-at-15-44-58-Laptops-PC-Desktop-Computers-Monitors-Dell-India.png" alt="republic-day" />
                </div>
            </div>
            <div className="welcome-section">
                <h3>Welcome Back {userName}</h3>
                <div className="your-info">
                    <div>
                        <p style={{ fontSize: "20px" }}>Best Seller</p>
                        <hr />
                        <div className="best-seller">
                            <img src="https://i.dell.com/sites/csimages/UberHomePage_Imagery/all/xpss.png" alt="" />
                            <h3>Get our best laptops for less.</h3>
                        </div> <br /><br />
                        <p style={{ color: "purple", fontSize: "20px" }}>Shop Now</p>
                    </div>
                    <div>
                        <p style={{ fontSize: "20px" }}>Cart (2 items)</p>
                        <hr />
                        <div>
                            <p style={{ color: "purple", fontSize: "25px" }}>Price</p> <br />
                            <h3 style={{ fontSize: "20px" }}>Buisness Cart (1 item) </h3> <br /><br />
                            <p style={{ color: "purple", fontSize: "20px" }}>View Cart</p>
                            <p style={{ color: "purple", fontSize: "20px" }}>Home Cart (1 item)</p>
                        </div>
                    </div> <div>
                        <p style={{ fontSize: "20px" }}>Access My Account</p>
                        <hr />
                        <div>
                            <h3>Sign in to your account to track & view your orders.</h3>
                            <br /><br /><br /><br /><br />  <br />
                            <p style={{ color: "purple", fontSize: "20px" }}>Sign In</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inspiron-laptop">
                <div>
                    <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/republic-day-cons-dell-inspiron-5420nt-uhp-2304-12-homepage-module-rf-1023x842-lr.png?fmt=png-alpha&wid=1023&hei=842" alt="" />
                </div>
                <div>
                    <h4 style={{ fontSize: "18px" }}>Inspiron Laptops</h4>
                    <h2 style={{ fontSize: "35px", margin: "10px" }}>Power Your Success Story</h2>
                    <p>Give yourself a tech edge with 10% cashback on Citi cards or instant discounts on UPI & headsets.</p>
                    <span>*T&C apply.</span>
                    <div className="inspiron-shop-now">
                        <p style={{ color: "purple" }}>Shop Now</p>
                        <span className="v-line"></span>
                        <p style={{ color: "purple" }}>Learn More</p>
                    </div>
                </div>
            </div>
            <div className="alienware">
                <div>
                    <h4 style={{ fontSize: "18px" }}>ALIENWARE 27 GAMING MONITOR</h4>
                    <h2 style={{ fontSize: "35px", margin: "10px" }}>Outshine Everyone</h2>
                    <p>Built-in bragging rights with premium performance, overclockable refresh rates up to 280Hz and more.</p>
                    <div className="alienware-shop-now">
                        <p style={{ color: "purple" }}>Shop Now</p>
                        <span className="v-line"></span>
                        <p style={{ color: "purple" }}>Learn More</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/monitor-aw2723df-1.png?fmt=png-alpha&wid=1023&hei=842" alt="" />
                </div>
            </div>
            <div className="dell-support">
                <div className="dell-support-left">
                    <h1>Dell Support</h1>
                    <p>Get Your Question Answered</p>
                </div>
                <div className="dell-support-right">
                    <div className="queries-wrapper">
                        <div>
                            <img src="https://imgs.search.brave.com/T-DOY1r5hbDwXektRk6Hcionu1sXpGH-DgBAE5Rsgjw/rs:fit:256:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/c2lDRlVYV3M5Z0h0/YW8tTTZmVGN3QUFB/QSZwaWQ9QXBp" alt="" />
                        </div>
                        <div>
                            <h1 style={{ color: "blue" }}>Contact Support</h1>
                            <p>Let us assist you with any product or service questions</p>
                        </div>
                    </div>
                    <hr
                        style={{
                            background: "blue",
                            height: "2px",
                            border: "none",
                            margin: "5px"
                        }}
                    />
                    <div className="queries-wrapper">
                        <div>
                            <img src="https://imgs.search.brave.com/M9fVDpVcI_aVQxEHbpa9MS39jJ1aPIFgFmEEvpx8LIk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/NlRoazB6eDJQcXJS/ZG5nalRvQ01nSGFI/YSZwaWQ9QXBp" alt="" />
                        </div>
                        <div>
                            <h1 style={{ color: "blue" }}> Warranty & Contracts</h1>
                            <p>Check warranty of the product</p>
                        </div>
                    </div>
                    <hr
                        style={{
                            background: "blue",
                            height: "2px",
                            border: "none",
                            margin: "5px"
                        }}
                    />
                    <div className="queries-wrapper">
                        <div>
                            <img src="https://imgs.search.brave.com/fvfnU3M9Iw6_uMTFM7IjBvIDTjn2p311pACQo1R3frk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/cFk5ME84TTRFOUc5/WnYwMnJtT3RnSGFI/YSZwaWQ9QXBp" alt="" />
                        </div>
                        <div>
                            <h1 style={{ color: "blue" }}> Product Support</h1>
                            <p>Expertise. Convenience. Quality Support.</p>
                        </div>
                    </div>
                    <hr
                        style={{
                            background: "blue",
                            height: "2px",
                            border: "none",
                            margin: "5px"
                        }}
                    />
                    <div className="queries-wrapper">
                        <div>
                            <img src="https://imgs.search.brave.com/kHOOvoghk1t1e2935HxHmvffLPKcxDThMUmTpl9jjPE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/UU9SMmc0QTJmMDd0/aFIycFVyYk9nSGFI/YSZwaWQ9QXBp" alt="" />
                        </div>
                        <div>
                            <h1 style={{ color: "blue" }}> Drivers & Downloads</h1>
                            <p>Get the latest Drivers and Softwares</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inspiron-laptop">
                <div>
                    <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/modules/republic-day-cons-dell-vostro-3525nt-uhp-2304-12-in-homepage-module-rf-1023x842.png?fmt=png-alpha&wid=1023&hei=842" alt="" />
                </div>
                <div>
                    <h4 style={{ fontSize: "18px" }}>VOSTRO LAPTOPS</h4>
                    <h2 style={{ fontSize: "35px", margin: "10px" }}>Empower Your Business Today</h2>
                    <p>More power to you with 10% cashback on Citi cards & Alienware headsets.</p>
                    <div className="inspiron-shop-now">
                        <p style={{ color: "purple" }}>Shop Now</p>
                        <span className="v-line"></span>
                        <p style={{ color: "purple" }}>Learn More</p>
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <div className="republic-day-offer">
                    <div>
                        <h4 style={{ fontSize: "18px" }}>Republic day offer</h4>
                        <h2 style={{ fontSize: "35px", margin: "10px" }}>Set Your Creativity Free</h2>
                        <p>Celebrate Republic Day with 10% cashback on Citi cards or instant discounts on UPI & headsets.*T&C apply</p>
                        <p style={{ color: "purple", fontSize: "20px" }}>For Home</p>
                    </div>
                    <div>
                        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/2-ups/republic-day-cons-dell-inspiron-5420nt-uhp-2304-12-in-homepage-2up-module-800x400.png?fmt=pjpg&pscan=auto&scl=1&wid=800&hei=400&qlt=100,0&resMode=sharp2&size=800,400&op_usm=1.75,0.3,2,0" alt="" />
                    </div>
                </div>
                <span className="small-line"></span>
                <div className="accessories">
                    <div>
                        <h4 style={{ fontSize: "18px" }}>COMPUTER ELECTRONICS AND ACCESSORIES</h4>
                        <h2 style={{ fontSize: "35px", margin: "10px" }}>Overprepared For Everything</h2>
                        <p>Whether you're looking for a keyboard, mouse, docking station or something else, we've got you covered.</p>
                        <p style={{ color: "purple", fontSize: "20px" }}>Learn More</p>
                    </div>
                    <br />
                    <div>
                        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/banners/q4w1-con-warm-2updeal2-wl5022-km7321w-mh3021p-800x400.jpg?fmt=pjpg&pscan=auto&scl=1&wid=800&hei=400&qlt=100,0&resMode=sharp2&size=800,400&op_usm=1.75,0.3,2,0" alt="" />
                    </div>
                </div>
            </div>
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

export default Content;