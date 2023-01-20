import { Menu, MenuButton, MenuList, Button, HStack } from "@chakra-ui/react"
import { useContext } from "react";
import { WebContext } from "../../Context/websiteContext";

function Selection() {
    const { handleforHomeLaptop, handleforBuisnessLaptop } = useContext(WebContext);

    return (
        <HStack spacing="10px">
            <div className="selection-div"> <Menu>
                <MenuButton as={Button} bg="none" fontWeight="100px">
                    <img src="https://imgs.search.brave.com/4U2WmfzyxLMkOpNNmAHDAiyoswUlwqm3P9w7NqfG7JA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC42Y19pSWxw/Q1RoS0UwX3BCTmdZ/Nm1RSGFIYSZwaWQ9/QXBp" alt="Laptop" />
                    Laptop
                </MenuButton>
                <MenuList>
                    <Button bg='white' onClick={() => handleforHomeLaptop()}>For Home</Button> <br />
                    <Button bg="white" onClick={() => handleforBuisnessLaptop()}>For Buisness</Button>
                </MenuList>
            </Menu></div>

            <div className="selection-div">
                <Menu>
                    <MenuButton as={Button} bg="none" fontWeight="100px">
                        <img src="https://imgs.search.brave.com/v4bWQQasR03_px98J_g1GzQ7oKkcSkHAbWPx1S3qaoo/rs:fit:521:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/UG1nRkNzNklzTlRQ/ZnNWdm5Ld0p3SGFH/diZwaWQ9QXBp" alt="Desktop" />
                        Desktop
                    </MenuButton>
                    <MenuList>
                        <Button bg='white'>For Home</Button> <br />
                        <Button bg="white">For Buisness</Button>
                    </MenuList>
                </Menu>
            </div>

            <div className="selection-div">
                <Menu>
                    <MenuButton as={Button} bg="none" fontWeight="100px">
                        <img src="https://imgs.search.brave.com/S6Jvsolo-K2ldsNxZfg8IQ8HvCMcMh66rCzpusqAGJ8/rs:fit:350:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/eHdhaE03dlZ3LTJS/TzlRX1V5RExBSGFL/QiZwaWQ9QXBp" alt="Alienware" />
                        AlienWare
                    </MenuButton>
                    <MenuList>
                        <Button bg='white'>For Home</Button> <br />
                        <Button bg="white">For Buisness</Button>
                    </MenuList>
                </Menu>
            </div>
            <div className="selection-div">
                <Menu>
                    <MenuButton as={Button} bg="none" fontWeight="100px">
                        <img src="https://imgs.search.brave.com/4U2WmfzyxLMkOpNNmAHDAiyoswUlwqm3P9w7NqfG7JA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC42Y19pSWxw/Q1RoS0UwX3BCTmdZ/Nm1RSGFIYSZwaWQ9/QXBp" alt="Vostro" />
                        Vostro
                    </MenuButton>
                    <MenuList>
                        <Button bg='white'>For Home</Button> <br />
                        <Button bg="white">For Buisness</Button>
                    </MenuList>
                </Menu>
            </div>
            <div className="selection-div">
                <Menu>
                    <MenuButton as={Button} bg="none" fontWeight="100px">
                        <img src="https://imgs.search.brave.com/6M7u8WU60EWHdj1VbPQbFEtmsS9HIWiCm2ttN7pt1HA/rs:fit:400:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/WUQwUVgxcGFMNURY/eWNPTURhWWhBQUFB/QSZwaWQ9QXBp" alt="Monitor" />
                        Monitor
                    </MenuButton>
                    <MenuList>
                        <Button bg='white'>For Home</Button> <br />
                        <Button bg="white">For Buisness</Button>
                    </MenuList>
                </Menu>
            </div>
            <div className="selection-div">
                <Menu>
                    <MenuButton as={Button} bg="none" fontWeight="100px">
                        <img src="https://imgs.search.brave.com/uqCrmvtvdr-cLtorKbuBb1Sg222Rj6ar42ssc7MdmmI/rs:fit:479:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/TXVQRF83eTBVUFhq/bUJ4ck4wWnV3SGFI/ViZwaWQ9QXBp" alt="Accessories" />
                        Accessories
                    </MenuButton>
                    <MenuList>
                        <Button bg='white'>For Home</Button> <br />
                        <Button bg="white">For Buisness</Button>
                    </MenuList>
                </Menu>
            </div>
        </HStack >
    )
}

export default Selection;