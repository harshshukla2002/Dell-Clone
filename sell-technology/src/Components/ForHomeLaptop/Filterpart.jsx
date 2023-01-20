import { Checkbox, Radio, RadioGroup } from "@chakra-ui/react";

function FilterPart() {
    return (

        <>
            <div className="filter-heading">Filter Result</div>
            <div>
                <h2>Refined By</h2>
                <RadioGroup value="1">
                    <Radio value="1">For Home</Radio> <br />
                    <Radio value="2">For Business</Radio>
                </RadioGroup>
            </div>
            <div>
                <h2>Product Line</h2>
                <Checkbox>Inspiron</Checkbox> <br />
                <Checkbox>Vostro</Checkbox> <br />
                <Checkbox>XPS</Checkbox> <br />
                <Checkbox>G Series</Checkbox> <br />
                <Checkbox>Alienware</Checkbox> <br />
            </div>
            <div>
                <h2>Screen Size</h2>
                <Checkbox>43.18cm (17Inch)</Checkbox> <br />
                <Checkbox>40.60cm (16Inch)</Checkbox> <br />
                <Checkbox>38.10cm (15Inch)</Checkbox> <br />
                <Checkbox>35.56cm (14Inch)</Checkbox> <br />
                <Checkbox>33.02cm (13Inch)</Checkbox> <br />
            </div>
            <div>
                <h2>From Factor</h2>
                <Checkbox> 2 in 1 and/or detachable</Checkbox> <br />
                <Checkbox>Detachable</Checkbox> <br />
                <Checkbox>Laptop</Checkbox> <br />
            </div>
            <div>
                <h2>Processors</h2>
                <Checkbox>All Intel Processors</Checkbox> <br />
                <Checkbox>Intel core i9 K Series</Checkbox> <br />
                <Checkbox>Intel core i9</Checkbox> <br />
                <Checkbox>Intel core i7</Checkbox> <br />
                <Checkbox>Intel core i5</Checkbox> <br />
            </div>
            <div>
                <h2>Processors Generation</h2>
                <Checkbox>12th Gen Intel Core</Checkbox> <br />
                <Checkbox>11th Gen Intel Core</Checkbox> <br />
                <Checkbox>AMD Ryzen 6000 Series</Checkbox> <br />
                <Checkbox>AMD Ryzen 6000 Series</Checkbox> <br />
            </div>
            <div>
                <h2>Processors Platform</h2>
                <Checkbox>Intel Evo</Checkbox> <br />
            </div>
            <div>
                <h2>Price</h2>
                <Checkbox>₹30,000 - ₹40,000</Checkbox> <br />
                <Checkbox>₹40,000 - ₹50,000</Checkbox> <br />
                <Checkbox>₹50,000 - ₹60,000</Checkbox> <br />
                <Checkbox>₹60,000 - ₹70,000</Checkbox> <br />
                <Checkbox>₹70,000 - ₹80,000</Checkbox> <br />
            </div>
            <div>
                <h2>Memory Ram</h2>
                <Checkbox>32Gb or More</Checkbox> <br />
                <Checkbox>16Gb</Checkbox> <br />
                <Checkbox>8Gb</Checkbox> <br />
            </div>
            <div>
                <h2>Storage Size</h2>
                <Checkbox>1TB or More</Checkbox> <br />
                <Checkbox>1TB</Checkbox> <br />
                <Checkbox>512GB</Checkbox> <br />
                <Checkbox>256GB or Less</Checkbox> <br />
            </div>
            <div>
                <h2>Storage Type</h2>
                <Checkbox>Dual Drive</Checkbox> <br />
                <Checkbox>SSD</Checkbox> <br />
            </div>
            <div>
                <h2>Operating System</h2>
                <Checkbox>Windows 11 Home</Checkbox> <br />
            </div>
            <div>
                <h2>Features</h2>
                <Checkbox>Backlit Keyboard</Checkbox> <br />
                <Checkbox>Fingerprint Reader</Checkbox> <br />
                <Checkbox>Lightweight</Checkbox> <br />
                <Checkbox>Numeric Keyboard</Checkbox> <br />
                <Checkbox>Touch Screen</Checkbox> <br />
            </div>
            <div>
                <h2>Graphics</h2>
                <Checkbox>All Intel Graphics</Checkbox> <br />
                <Checkbox>All NVIDIA Graphics</Checkbox> <br />
                <Checkbox>All AMD Graphics</Checkbox> <br />
                <Checkbox>Intel Iris Xe</Checkbox> <br />
                <Checkbox>NVIDIA GeForce RTX 3080 Ti</Checkbox> <br />
            </div>
            <div>
                <h2>Shipping</h2>
                <Checkbox>In Stock For Fast Delivery</Checkbox> <br />
                <Checkbox>Standard Shipping</Checkbox> <br />
            </div>
            <div>
                <h2>Color Options</h2>
                <Checkbox>Grey</Checkbox> <br />
                <Checkbox>Black</Checkbox> <br />
                <Checkbox>Silver</Checkbox> <br />
                <Checkbox>Green</Checkbox> <br />
                <Checkbox>Blue</Checkbox> <br />
            </div>
            <div>
                <h2>Financing Offers</h2>
                <Checkbox>No Cost EMI</Checkbox> <br />
            </div>
            <div>
                <h2>Rating</h2>
                <Checkbox>4 & UP</Checkbox> <br />
                <Checkbox>3 & UP</Checkbox> <br />
                <Checkbox>2 & UP</Checkbox> <br />
            </div>
            <div>
                <h2>Offers</h2>
                <Checkbox>Headset</Checkbox> <br />
                <Checkbox>Cashback</Checkbox> <br />
                <Checkbox> UPI</Checkbox> <br />
                <Checkbox> Netbanking</Checkbox> <br />
            </div>
            <div>
                <h2>Offers</h2>
                <Checkbox>Headset</Checkbox> <br />
                <Checkbox>Cashback</Checkbox> <br />
                <Checkbox> UPI</Checkbox> <br />
                <Checkbox> Netbanking</Checkbox> <br />
            </div>
            <div>
                <h2>Screen Resolution</h2>
                <Checkbox>UHD</Checkbox> <br />
                <Checkbox>QHD</Checkbox> <br />
                <Checkbox>3K</Checkbox> <br />
                <Checkbox>FHD+</Checkbox> <br />
                <Checkbox>FHD</Checkbox> <br />
            </div>
            <div>
                <h2>Sort by Use</h2>
                <Checkbox>Customize & Buy</Checkbox> <br />
                <Checkbox>Thin & Light</Checkbox> <br />
                <Checkbox>Professional</Checkbox> <br />
                <Checkbox>Casual Gaming</Checkbox> <br />
                <Checkbox>Photo & video Editing</Checkbox> <br />
            </div>
        </>
    )
}

export default FilterPart;