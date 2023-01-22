import { Button, Select, HStack } from "@chakra-ui/react";
import FilterPart from "../ForHomeLaptop/Filterpart";

function ForBusinessLaptopContent() {
    const value = 2;
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
                            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/15-7510-non-touch/pdp/410-v7510-images-notebook-vostro-15-7510nt-800x620-rf.png?fmt=png-alpha&wid=800&hei=620" alt="Inspiron Laptop" />
                        </div>
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
                    </div>
                    <div className="laptop-selection">
                        <h1 style={{ color: "blue", fontSize: "30px" }}>Which Laptop is Right For You</h1>
                        <div className="laptops-overview">
                            <div>
                                <Select m='10px' bg="white" fontWeight='bold'>
                                    <option> Vostro  </option>
                                    <option> XPS  </option>
                                    <option> Precision </option>
                                    <option> Chromebook Enterprise </option>
                                    <option> Education  </option>
                                    <option> Alienware </option>
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
                                    <option> Latitude  </option>
                                    <option> XPS  </option>
                                    <option> Precision </option>
                                    <option> Chromebook Enterprise </option>
                                    <option> Education  </option>
                                    <option> Alienware </option>
                                </Select>
                                <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-9430/spi/non-touch/ng/notebook-latitude-14-9430-gray-800x550.png?fmt=png-alpha&wid=800&hei=550&scl=0.8&extend=0,0,0,30" alt="" />
                                <h1 style={{ fontSize: "20px", textAlign: "center" }}>Business Performance and Collaboration</h1>
                                <h1 style={{ textAlign: "center", margin: "10px" }}>Starting at ₹ 64,381.62</h1>
                                <ul style={{ margin: "10px" }}>
                                    <li>Collaborate with privacy & security</li>
                                    <li>Enhance performance with Dell Optimizer</li>
                                    <li>Work seamlessly with intelligent connectivity</li>
                                    <li>Support sustainable business initiatives</li>
                                </ul>
                                <Button colorScheme="blue" m='10px' variant='solid' color='white' w='80%'>Shop Latitude</Button> <br />
                                <Button colorScheme="blue" m='10px' variant='outline' w='80%'>Explore Latitude</Button>
                            </div>
                            <div>
                                <Select m='10px' bg="white" fontWeight='bold'>
                                    <option> Inspiron  </option>
                                    <option> XPS  </option>
                                    <option> Precision </option>
                                    <option> Chromebook Enterprise </option>
                                    <option> Education  </option>
                                    <option> Alienware </option>
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
                        </div>
                    </div>
                    <div className="inspiron-laptop">
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>Latitude Laptops & 2-in-1 PCs</h1>
                            <div className="horizontal-direction">
                                <h1>Business Performance & Collaboration</h1>
                                <div className="h-black-line"></div>
                                <h1>Starting at ₹ 64,381.62</h1>
                            </div>
                            <p>Work from anywhere with our most intelligent and secure business laptops sustainably designed for productivity on the go.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Shop Latitude</Button>
                                <Button colorScheme="blue" color="blue" variant="outline" m='10px'>Explore Latitude</Button>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-9430/spi/touch/spi-0181-notebook-latitude-14-9430-800x620.png?fmt=png-alpha&wid=800&hei=620" alt="Vostro Laptop" />
                        </div>
                    </div>
                    <div className="inspiron-laptop" style={{ backgroundColor: "#ffe5ec" }}>
                        <div>
                            <img src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/page/category/banner/laptop/inspiron/inspiron-laptops-800x620.png?fmt=png-alpha&wid=800&hei=620" alt="XPS Laptop" />
                        </div>
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>Inspiron Laptops</h1>
                            <div className="horizontal-direction">
                                <h1>Versatile Performance</h1>
                                <div className="h-black-line"></div>
                                <h1>Starting at ₹ 55,490.00</h1>
                            </div>
                            <p>Create, consume and connect in style with versatile laptops and 2-in-1s.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Shop Inspiron</Button>
                                <Button colorScheme="blue" color="blue" variant="outline" m='10px'>Explore Inspiron</Button>
                            </div>
                        </div>
                    </div>
                    <div className="inspiron-laptop">
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>XPS Laptops & 2-in-1 Laptops.</h1>
                            <div className="horizontal-direction">
                                <h1>Creators & Creativity</h1>
                                <div className="h-black-line"></div>
                                <h1>Starting at ₹ 1,17,480.00</h1>
                            </div>
                            <p>Power your creativity with premium, high-performing and beautifully-crafted laptops with innovative features.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Shop XPS</Button>
                                <Button colorScheme="blue" color="blue" variant="outline" m='10px'>Explore XPS</Button>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/prod-2024-notebook-xps-13-9320-nt-13-9315-nt-tablet-13-9315-2-in-1-800x620-v2.png?fmt=png-alpha&wid=800&hei=620" alt="Alienware" />
                        </div>
                    </div>
                    <div className="inspiron-laptop" style={{ backgroundColor: "#ffe5ec" }}>
                        <div>
                            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/products/workstations/precision/prod-1630-workstation-notebook-precision-15-5570-17-5770-800x620-v1.png?fmt=png-alpha&wid=800&hei=620" alt="Alienware" />
                        </div>
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>Precision Mobile Workstations</h1>
                            <div className="horizontal-direction">
                                <h1>Advanced Users & Applications</h1>
                                <div className="h-black-line"></div>
                                <h1> Starting at ₹ 91,213.55</h1>
                            </div>
                            <p>Take your ideas to the next level with our #1 workstations; optimized for performance, reliability and user experience.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Shop Precision</Button>
                                <Button colorScheme="blue" color="blue" variant="outline" m='10px'>Explore Precision</Button>
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
                            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-multiple-products/laptop/la7410t_la5400nt_la5300t_fnb_shot01_gy.png?fmt=png-alpha&wid=800&hei=620" alt="Student Laptop" />
                        </div>
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>Chromebook Enterprise Laptops</h1>
                            <h1>Cloud Performance & Collaboration</h1>
                            <p>Power your cloud-native workplaces with laptops optimized for Google applications, web development and business security.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Explore Chromebook Enterprise </Button>
                            </div>
                        </div>
                    </div>
                    <div className="inspiron-laptop">
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>Education Chromebooks & Laptops</h1>
                            <h1>Engaged Learning</h1>
                            <p>Empower student learning with best-in-class durability, all-day battery life and easy serviceability.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Explore Education </Button>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-multiple-products/laptop/new-category-page-notebook-education-chromebook-11-3100-latitude-13-3310-800x620.png?fmt=png-alpha&wid=800&hei=620" alt="Student Laptop" />
                        </div>
                    </div>
                    <div className="inspiron-laptop" style={{ backgroundColor: "#ffe5ec" }}>
                        <div>
                            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/aw-module-800x620.png?qlt=95&fit=constrain,1&hei=620&wid=800&fmt=png-alpha" alt="Alienware" />
                        </div>
                        <div>
                            <h1 style={{ color: "blue", fontSize: "35px" }}>AlienWare Gaming Laptops</h1>
                            <div className="horizontal-direction">
                                <h1>Immersive Gaming Experiences</h1>
                                <div className="h-black-line"></div>
                                <h1>  Starting at ₹ 1,59,990.00</h1>
                            </div>
                            <p>Experience high-performance gaming with iconic designs and intelligently engineered laptops.</p>
                            <div className="buttons">
                                <Button colorScheme="blue" color="white" variant="solid" m='10px'>Shop AlienWare</Button>
                                <Button colorScheme="blue" color="blue" variant="outline" m='10px'>Explore AlienWare</Button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-div-forHome">
                        <div>
                            <div>
                                <h1 style={{ color: "teal", fontSize: "20px" }}>Your Moment to Own It.</h1>
                                <p style={{ margin: "10px" }}>Take productivity & security to the next level with 10% cashback on Citi cards, No Cost EMI, UPI Discounts & more.*</p>
                                <p style={{ fontSize: "12px", margin: "10px" }}>*T&C Apply</p>
                                <Button colorScheme="blue" m='30px 0px'>Shop Now</Button>
                            </div>
                            <div>
                                <img src="https://i.postimg.cc/0ybFY7vS/Screenshot-2023-01-20-at-18-39-52-Dell-PC-Laptop-Computers-for-Business-Dell-India.png" alt="dell" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 style={{ color: "teal" }}>SMALL BUSINESS SOLUTIONS</h1>
                                <p style={{ margin: "10px" }}>Advice & Expertise to help your business grow.</p>
                                <Button colorScheme='blue' m='30px 0px'>Learn More</Button>
                            </div>
                            <div>
                                <img src="https://i.postimg.cc/ydbSZqyc/Screenshot-2023-01-20-at-18-41-34-Dell-PC-Laptop-Computers-for-Business-Dell-India.png" alt="dell" />
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

export default ForBusinessLaptopContent; 