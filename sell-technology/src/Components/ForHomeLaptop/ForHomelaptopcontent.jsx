import { Button, Select, HStack } from "@chakra-ui/react";
import FilterPart from "./Filterpart";

function ForHomeLaptopContent() {
    const value = 1;
    return (
        <>
            <div className="laptop-2in1-wrapper">
                <div>
                    <h1 style={{ fontSize: "40px", margin: "10px" }}>Laptop Computers & 2-in-1 PCs</h1>
                    <p>Shop the best laptops & notebooks from Dell. See top laptop deals today.</p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/bN1zMt2t/Screenshot-2023-01-20-at-12-10-49-Laptops-Dell-India.png" alt="2in1-laptop" />
                </div>
            </div>
            <div className="forHomePageContent">
                <div className="filter-wrapper">
                    <FilterPart value={value}/>
                </div>
                <div className="home-laptop-wrapper">
                    <div className="inspiron-laptop">
                        <div>
                            <img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-inspiron-laptops-tile-right-facing.png" alt="Inspiron Laptop" />
                        </div>
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>Inspiron Laptop & 2-in-1 PCs.</h1>
                            <div className="horizontal-direction">
                                <h1>Versatile Performance</h1>
                                <div className="h-black-line"></div>
                                <h1>Starting at ₹ 33,989.99</h1>
                            </div>
                            <p>Create, consume and connect in style with versatile laptops and 2-in-1s.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Shop Inspiron</Button>
                                <Button colorScheme="blue" color="blue" variant="outline" m='10px'>Explore Inspiron</Button>

                            </div>
                        </div>
                    </div>
                    <div className="laptop-selection">
                        <h1 style={{ color: "blue", fontSize: "30px" }}>Which Laptop is Right For You</h1>
                        <div className="laptops-overview">
                            <div>
                                <Select m='10px' bg="white" fontWeight='bold'>
                                    <option> Inspiron  </option>
                                    <option> Alienware  </option>
                                    <option> G Series  </option>
                                </Select>
                                <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/pt-br/other/in5320nt-cnb-05000ff090-gy-fpr-cat-compare.png?$S7-png$&wid=800&hei=550&qlt=100,0&resMode=sharp2" alt="" />
                                <h1 style={{ fontSize: "20px", textAlign: "center" }}>Versatile Performance</h1>
                                <h1 style={{ textAlign: "center", margin: "10px" }}>Starting at ₹ 33,989.99</h1>
                                <ul style={{ margin: "10px" }}>
                                    <li>Perform personal & home office tasks</li>
                                    <li>Stream, browse and multitask</li>
                                    <li>Video chat with enhanced audio & visuals</li>
                                    <li>Create social content</li>
                                </ul>
                                <Button colorScheme="blue" m='10px' variant='solid' color='white' w='80%'>Shop Inspiron</Button> <br />
                                <Button colorScheme="blue" m='10px' variant='outline' w='80%'>Explore Inspiron</Button>
                            </div>
                            <div>
                                <Select m='10px' bg="white" fontWeight='bold'>
                                    <option> Vostro  </option>
                                    <option> Alienware  </option>
                                    <option> G Series  </option>
                                </Select>
                                <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/category-pages/latam/dv7620nt-cnb-05000ff090-nonfpr-bk.png?$S7-png$&wid=800&hei=550&qlt=100,0&resMode=sharp2" alt="" />
                                <h1 style={{ fontSize: "20px", textAlign: "center" }}>Small Business Productivity</h1>
                                <h1 style={{ textAlign: "center", margin: "10px" }}>Starting at ₹ 41,989.99</h1>
                                <ul style={{ margin: "10px" }}>
                                    <li>Protect data with essential security</li>
                                    <li>Power business applications</li>
                                    <li>Collaborate with video conferencing</li>
                                </ul>
                                <br />
                                <Button colorScheme="blue" m='10px' variant='solid' color='white' w='80%'>Shop Vostro</Button> <br />
                                <Button colorScheme="blue" m='10px' variant='outline' w='80%'>Explore Vostro</Button>
                            </div>
                            <div>
                                <Select m='10px' bg="white" fontWeight='bold'>
                                    <option> XPS  </option>
                                    <option> Alienware  </option>
                                    <option> G Series  </option>
                                </Select>
                                <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/xps/prod-2011-tablet-xps-13-9315-blue-folio-800x550.png?fmt=png-alpha&wid=800&hei=550" alt="" />
                                <h1 style={{ fontSize: "20px", textAlign: "center" }}>Creators and Creativity</h1>
                                <h1 style={{ textAlign: "center", margin: "10px" }}>Starting at ₹ 1,04,989.98</h1>
                                <ul style={{ margin: "10px" }}>
                                    <li>Multitask between intensive programs</li>
                                    <li>Produce video, photography and music</li>
                                    <li>Create & edit digital content</li>
                                    <li>Be productive anywhere</li>
                                </ul>
                                <Button colorScheme="blue" m='10px' variant='solid' color='white' w='80%'>Shop XPS</Button> <br />
                                <Button colorScheme="blue" m='10px' variant='outline' w='80%'>Explore XPS</Button>
                            </div>
                        </div>
                    </div>
                    <div className="inspiron-laptop">
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>Vostro Laptop</h1>
                            <div className="horizontal-direction">
                                <h1>Small Business Productivity</h1>
                                <div className="h-black-line"></div>
                                <h1>Starting at ₹ 41,989.99</h1>
                            </div>
                            <p>Power your small business with laptops built to deliver security, performance and enhanced video conferencing.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Shop Vostro</Button>
                                <Button colorScheme="blue" color="blue" variant="outline" m='10px'>Explore Vostro</Button>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-vostro-laptops-tile-left-facing.png" alt="Vostro Laptop" />
                        </div>
                    </div>
                    <div className="inspiron-laptop" style={{ backgroundColor: "#ffe5ec" }}>
                        <div>
                            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/prod-2024-notebook-xps-13-9320-nt-13-9315-nt-tablet-13-9315-2-in-1-800x620-v2.png?fmt=png-alpha&wid=800&hei=620" alt="XPS Laptop" />
                        </div>
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>XPS Laptops & 2-in-1 PCs.</h1>
                            <div className="horizontal-direction">
                                <h1>Creators & Creativity</h1>
                                <div className="h-black-line"></div>
                                <h1>Starting at ₹ 1,04,989.98</h1>
                            </div>
                            <p>Power your creativity with premium, high-performing and beautifully-crafted laptops with innovative features.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Shop XPS</Button>
                                <Button colorScheme="blue" color="blue" variant="outline" m='10px'>Explore XPS</Button>
                            </div>
                        </div>
                    </div>
                    <div className="inspiron-laptop">
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>Alienware Gaming Laptops.</h1>
                            <div className="horizontal-direction">
                                <h1>Immersive Gaming Experiences</h1>
                                <div className="h-black-line"></div>
                                <h1>Starting at ₹ 1,59,990.01</h1>
                            </div>
                            <p>Experience high-performance gaming with iconic designs and intelligently engineered laptops.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Shop Alienware</Button>
                                <Button colorScheme="blue" color="blue" variant="outline" m='10px'>Explore Alienware</Button>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-alienware-laptops-tile-left-facing.png" alt="Alienware" />
                        </div>
                    </div>
                    <div className="inspiron-laptop" style={{ backgroundColor: "#ffe5ec" }}>
                        <div>
                            <img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-g-series-laptops-tile-right-facing.png" alt="Alienware" />
                        </div>
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>G Series Gaming Laptops.</h1>
                            <div className="horizontal-direction">
                                <h1>Gaming Performance</h1>
                                <div className="h-black-line"></div>
                                <h1>Starting at ₹ 86,989.97</h1>
                            </div>
                            <p>Take your game to the next level with split-second responsiveness and dynamic gameplay.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Shop G Series</Button>
                                <Button colorScheme="blue" color="blue" variant="outline" m='10px'>Explore G Series</Button>
                            </div>
                        </div>
                    </div>
                    <div className="inspiron-laptop">
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>Laptop Deals</h1>
                            <h1>Our best-priced laptop computers</h1>
                            <p>Take advantage of limited-time savings on select laptops. Shop our exclusive deals and get the best for less.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Shop Deals</Button>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-laptop-deals-left-facing.png" alt="Alienware" />
                        </div>
                    </div>
                    <div className="inspiron-laptop" style={{ backgroundColor: "#ffe5ec" }}>
                        <div>
                            <img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/in5420ntcnb00055rf110gyfpr2.png" alt="Student Laptop" />
                        </div>
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>Student Laptop Deals</h1>
                            <h1>Student Special</h1>
                            <p>Take advantage of limited-time deals on a wide range of Inspiron, Vostro and more. Shop our exclusive deals and get the best for less | Buy directly from Dell.com</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Shop Student Deals</Button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-div-forHome">
                        <div>
                            <div>
                                <h1 style={{ color: "teal" }}>Give Your Device A Second Life</h1>
                                <p style={{ margin: "10px" }}>Recycling your old tech helps us create responsible solutions for us all.</p>
                                <p style={{ fontSize: "12px", margin: "10px" }}>*T&C Apply</p>
                                <Button colorScheme="blue" m='30px 0px'>Get Started</Button>
                            </div>
                            <div>
                                <img src="https://i.postimg.cc/cCHBTYDV/Screenshot-2023-01-20-at-16-37-23-Laptops-Dell-India.png" alt="dell" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 style={{ color: "teal" }}>Be Free To Be More</h1>
                                <p style={{ margin: "10px" }}>Celebrate Republic Day with 10% cashback up to ₹5,000 on Citi cards & Alienware headset at ₹1.</p>
                                <p style={{ fontSize: "12px", margin: "10px" }}>*T&C Apply</p>
                                <Button colorScheme='blue' m='30px 0px'>Shop Now</Button>
                            </div>
                            <div>
                                <img width='200%' src="https://i.postimg.cc/yd5PNjXv/Screenshot-2023-01-20-at-16-41-15-Laptops-Dell-India.png" alt="dell" />
                            </div>
                        </div>
                    </div>
                    <div className="rating">
                        <h1>How easy is it to find what you are looking for?</h1>
                        <HStack className="hstack-section">
                            <h1>Very Difficult</h1>
                            <h1 className="round-wrapper">1</h1>
                            <h1 className="round-wrapper">2</h1>
                            <h1 className="round-wrapper">3</h1>
                            <h1 className="round-wrapper">4</h1>
                            <h1 className="round-wrapper">5</h1>
                            <h1 className="round-wrapper">6</h1>
                            <h1 className="round-wrapper">7</h1>
                            <h1>Very Easy</h1>
                        </HStack>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForHomeLaptopContent; 