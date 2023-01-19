import { HStack } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from "@chakra-ui/icons";

function DropDownList() {
    return (
        <HStack p="10px">
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white" fontWeight="100px">
                    Apex
                </MenuButton>
                <MenuList>
                    <MenuItem>View All Apex</MenuItem>
                    <MenuItem>Computer & HCI</MenuItem>
                    <MenuItem>Storage</MenuItem>
                    <MenuItem>Cyber & Data Protection</MenuItem>
                    <MenuItem>Create a Custom Solution</MenuItem>
                    <MenuItem>Resorces</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white" fontWeight="100px">
                    Products
                </MenuButton>
                <MenuList>
                    <MenuItem>Laptop</MenuItem>
                    <MenuItem>Desktop & All-in-one</MenuItem>
                    <MenuItem>Gaming</MenuItem>
                    <MenuItem>Work Stations</MenuItem>
                    <MenuItem>Thin Client</MenuItem>
                    <MenuItem>Data Storage</MenuItem>
                    <MenuItem>Data Protection</MenuItem>
                    <MenuItem>Networking</MenuItem>
                    <MenuItem>Hyperconverged Infrastructure</MenuItem>
                    <MenuItem>Monitor</MenuItem>
                    <MenuItem> Electronice & Accessories</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white" fontWeight="100px">
                    Solution
                </MenuButton>
                <MenuList>
                    <MenuItem>View All Solution</MenuItem>
                    <MenuItem>Cloud Solutions</MenuItem>
                    <MenuItem>Dev OPs Tools & Solutions</MenuItem>
                    <MenuItem>Edge Soluitions</MenuItem>
                    <MenuItem>Industry Solutions</MenuItem>
                    <MenuItem>Infrastructure Solutions</MenuItem>
                    <MenuItem>Mid-Market Solutions</MenuItem>
                    <MenuItem>OEM Solutions</MenuItem>
                    <MenuItem>Security Solutions</MenuItem>
                    <MenuItem>Small Business</MenuItem>
                    <MenuItem> WorkForce Solutions</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white" fontWeight="100px">
                    Services
                </MenuButton>
                <MenuList>
                    <MenuItem>View All Services</MenuItem>
                    <MenuItem>Consulting Services</MenuItem>
                    <MenuItem>Deployment Services</MenuItem>
                    <MenuItem>Support Services</MenuItem>
                    <MenuItem>Residency Services</MenuItem>
                    <MenuItem>Education Services</MenuItem>
                    <MenuItem>Services Technology</MenuItem>
                    <MenuItem>Payment & Consuption Solutions</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white" fontWeight="100px">
                    Deals
                </MenuButton>
                <MenuList>
                    <MenuItem>Laptop Deals</MenuItem>
                    <MenuItem>Desktop Deals</MenuItem>
                    <MenuItem>Gaming PCs Deals</MenuItem>
                    <MenuItem>XPS Deals</MenuItem>
                    <MenuItem>WorkStations Deals</MenuItem>
                    <MenuItem>Server,Storage & Networking Deals</MenuItem>
                    <MenuItem> Monitor Deals</MenuItem>
                    <MenuItem>Computer & Accessories Deals</MenuItem>
                    <MenuItem>Employee Discount</MenuItem>
                    <MenuItem>Student Purchase Program</MenuItem>
                    <MenuItem>Dell Professional Association</MenuItem>
                </MenuList>
            </Menu>
            <span className="find-store">Find A Store</span>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white" fontWeight="100px">
                    About US
                </MenuButton>
                <MenuList>
                    <MenuItem>What we do</MenuItem>
                    <MenuItem>Who we are</MenuItem>
                    <MenuItem>Newsroom</MenuItem>
                    <MenuItem>XPS Deals</MenuItem>
                    <MenuItem>ESG & Impact</MenuItem>
                    <MenuItem>Recycling</MenuItem>
                    <MenuItem> Investors</MenuItem>
                    <MenuItem>Dell Technology Capital</MenuItem>
                    <MenuItem>Careers</MenuItem>
                    <MenuItem>Perspective</MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    )
}

export default DropDownList;