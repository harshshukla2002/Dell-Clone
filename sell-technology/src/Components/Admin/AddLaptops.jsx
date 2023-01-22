import { Button, Checkbox, FormLabel, Input, Select } from "@chakra-ui/react";

function AddLaptops() {
    return (
        <div className="add-laptop-form">
            <div>
                <FormLabel>Company</FormLabel>
                <Input placeholder="Enter Company Name" />
            </div>
            <div>
                <FormLabel>Model</FormLabel>
                <Input placeholder="Enter Model Name" />
            </div>
            <div>
                <FormLabel>Price</FormLabel>
                <Input placeholder="Enter Price" />
            </div>
            <div>
                <FormLabel>Ram</FormLabel>
                <Select>
                    <option>32GB</option>
                    <option>16GB</option>
                    <option>8GB</option>
                    <option>4GB</option>
                </Select>
            </div>
            <div>
                <FormLabel>Rom</FormLabel>
                <div className="rom-selection">
                    <Select>
                        <option>HDD</option>
                        <option>SSD</option>
                    </Select>
                    <Select>
                        <option>2TB</option>
                        <option>1TB</option>
                        <option>512GB</option>
                        <option>256GB</option>
                    </Select>
                </div>
            </div>
            <div>
                <FormLabel>Serial Number</FormLabel>
                <Input placeholder="Enter Serial Number" />
            </div>
            <div>
                <FormLabel>Operating System</FormLabel>
                <Select>
                    <option>Windows 11 Home Pro</option>
                    <option>Windows 11 Home</option>
                    <option>Windows 10 Home</option>
                    <option>Windows 10</option>
                </Select>
            </div>
            <div>
                <FormLabel>Processor</FormLabel>
                <Select>
                    <option>i7</option>
                    <option>i5</option>
                    <option>i3</option>
                </Select>
            </div>
            <div>
                <FormLabel>Generation</FormLabel>
                <Select>
                    <option>12th Generation</option>
                    <option>11th Generation</option>
                    <option>10th Generation</option>
                </Select>
            </div>
            <div>
                <FormLabel>Graphics</FormLabel>
                <Select>
                    <option>AMD</option>
                    <option>Iris Xe</option>
                    <option>NVIDIA</option>
                    <option>Intel</option>
                </Select>
            </div>
            <div>
                <Checkbox /><span>Backlit Keyboard</span>
            </div>
            <div style={{textAlign:"center"}}>
                <Button colorScheme='orange' p='10px 80px' fontSize='20px'>ADD Data</Button>
            </div>
        </div>
    )
}

export default AddLaptops;