import { Input, Icon, Button } from '@chakra-ui/react'
import { Search2Icon, ChevronDownIcon, LockIcon, PhoneIcon } from '@chakra-ui/icons'
import { HStack, Flex, Spacer } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { WebContext } from '../../Context/websiteContext'

function Navbar() {
    const navigate = useNavigate();
    const { userName, LogoutUser } = useContext(WebContext);

    return (
        <Flex alignItems="center" justifyContent="space-between">
            <div className='logo' style={{ margin: "20px", width: "20%" }}>
                <img onClick={() => navigate('/')} style={{ cursor: "pointer" }} src="https://i.postimg.cc/15GLg3Zc/Black-Modern-Laptop-Logo.png" alt="sell-technology" />
            </div>
            <HStack w="50%" m="10px" paddingLeft="70px">
                <Input placeholder="Search Sell" />
                <Icon as={Search2Icon} />
            </HStack>
            <Spacer />
            <HStack w="50%" paddingLeft="90px" p='10px'>
                <div style={{ margin: "20px" }}>
                    {userName.length !== 0
                        ?
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white">{userName}</MenuButton>
                            <MenuList>
                                <Button w='90%' fontWeight="100px" colorScheme="blue" onClick={() => LogoutUser()}>Log Out</Button>
                            </MenuList>
                        </Menu>
                        :
                        <Menu>
                            <MenuButton leftIcon={<LockIcon />} as={Button} rightIcon={<ChevronDownIcon />} bg="white">
                                Sign In
                            </MenuButton>
                            <MenuList>
                                <div style={{ textAlign: "justify", padding: "20px" }}>
                                    <h3 style={{ fontStyle: "20px" }}>Welcome to Dell</h3>
                                    <br />
                                    <br />
                                    My Account
                                    <ul>
                                        <li>Place orders quickly and easily</li>
                                        <li>View orders and track your shipping status</li>
                                        <li>Create and access a list of your products</li>
                                    </ul>
                                </div>
                                <br />
                                <Button w='90%' fontWeight="100px" colorScheme="blue" onClick={() => navigate('/signup')}>Sign In</Button>  <br /> <br />
                                <Button w='90%' fontWeight="100px" colorScheme="blue" variant='outline' onClick={() => navigate('/createaccount')}>Create an Account</Button> <br /> <br />
                                <Button w='90%' fontWeight="100px" colorScheme="blue" variant='outline'>Premier Sign In</Button> <br /> <br />
                                <Button w='90%' fontWeight="100px" colorScheme="blue" variant='outline'>Partner Program Sign In</Button><br /> <br />
                            </MenuList>
                        </Menu>
                    }
                </div>
                <div style={{ padding: "10px", width: "60%" }}>
                    <h3 className='contact'>
                        <PhoneIcon />
                        Contact-Us
                    </h3>
                </div>
                <div className='cart'>
                    <img src="https://imgs.search.brave.com/vtV0RbfYqECJkwsOBpmkIGmp59zScO1liIKeQLd83Sk/rs:fit:591:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/NlMyUVlpcFo1QUJ1/bWliUTJ3dkhRSGFG/OCZwaWQ9QXBp" alt="cart" />
                </div>
                <div className='admin-login'>
                    <Button colorScheme='teal' onClick={() => navigate('/admin')}> <LockIcon /> Admin Login</Button>
                </div>
            </HStack>
        </Flex>
    )
}

export default Navbar