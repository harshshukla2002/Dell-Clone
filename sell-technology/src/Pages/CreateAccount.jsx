import { Button, Checkbox, FormLabel, Heading, Input, } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/signup.css'
import axios from 'axios'
import { InfoOutlineIcon } from "@chakra-ui/icons"
const emptyForm = {
    firstname: "",
    lastname: "",
    email: '',
    password: ''
}

function CreateAccount() {
    const [passwordShow, setPasswordShow] = useState(false);
    const [loginFormState, setLoginFormState] = useState(emptyForm);
    const navigate = useNavigate();

    const handleCreateAccount = () => {
        axios({
            method: "post",
            url: "https://636f1cdbbb9cf402c81008d8.mockapi.io/users",
            data: loginFormState
        }).then(() => {
            setLoginFormState(emptyForm);
            alert("Account Created")
        })
            .catch((error) => console.log(error))
    }

    const handleTogglePassword = () => {
        setPasswordShow(!passwordShow);
    }
    const { firstname, lastname, email, password } = loginFormState;
    return (
        <>
            <div className='signup-page'>
                <div className="signin-wrapper">
                    <div className="logo">
                        <img onClick={() => navigate('/')} style={{ cursor: "pointer" }} src="https://i.postimg.cc/15GLg3Zc/Black-Modern-Laptop-Logo.png" alt="sell-technology" />
                    </div>
                    <h1 style={{ fontSize: "35px" }}>Create Your Account</h1>
                    <div className='signup-form-wrapper'>
                        <h1>
                            Already have an account? <span className='forget-password-text' onClick={() => navigate('/signup')}>Sign In</span>
                        </h1>
                        <div className='form'>
                            <FormLabel> First Name</FormLabel>
                            <Input placeholder='Enter First Name' name='firstname' value={firstname} onChange={(e) => setLoginFormState({ ...loginFormState, [e.target.name]: e.target.value })} />
                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder='Enter Last Name' name='lastname' value={lastname} onChange={(e) => setLoginFormState({ ...loginFormState, [e.target.name]: e.target.value })} />
                            <FormLabel>Email Address</FormLabel>
                            <Input type='email' placeholder="Email Address" name='email' value={email} onChange={(e) => setLoginFormState({ ...loginFormState, [e.target.name]: e.target.value })} /> <br /> <br />
                            <FormLabel>Password</FormLabel>
                            <div className='show-hide-password-div'>
                                <Input style={{ border: 'none', outline: 'none' }} type={passwordShow ? "text" : 'password'} placeholder='Enter Password' name='password' value={password} onChange={(e) => setLoginFormState({ ...loginFormState, [e.target.name]: e.target.value })} />
                                {
                                    passwordShow
                                        ?
                                        <img className='password-image' src='https://www.pngitem.com/pimgs/m/495-4950508_show-password-show-password-icon-png-transparent-png.png' alt='hide password' onClick={() => handleTogglePassword()} />
                                        :
                                        <img className='password-image' src='https://static.thenounproject.com/png/772420-200.png' alt='show password' onClick={() => handleTogglePassword()} />
                                }
                            </div>
                            <div className='forget-password' style={{ margin: "10px" }}>
                                <h1> <InfoOutlineIcon /> Passwords must be between 8 and 20 characters in length and contain 1 upper case letter, 1 lower case letter, and 1 number. </h1>
                            </div>
                            <div>
                                <span style={{ color: "blue", textDecoration: "underline" }}>Dell Technologies and its group of companies</span> (“Dell”) would like to stay in touch and update you on products, services, solutions, exclusive offers, and special events. For more details about our information practices, see our <span style={{ color: "blue", textDecoration: "underline" }}>Privacy Statement</span>. You can unsubscribe at any time.
                            </div>
                            <div style={{ margin: "10px" }}>
                                <Checkbox /> <span> Yes, I would like Dell to send me email communications. <br />
                                    By clicking “Create Account”, you agree to our <span style={{ color: "blue", textDecoration: "underline" }}>Terms & Conditions</span>.</span>
                            </div>
                            <div className='buttons'>
                                <Button colorScheme='blue' color='white' w='70%' m='20px' fontSize='20px' fontWeight='100px' onClick={() => {
                                    handleCreateAccount()
                                }}>Create Account</Button>
                                <h1 style={{ margin: "5px", fontSize: "20px" }}>or</h1>
                                <Button colorScheme='blue' fontWeight='100px' variant='outline' color='blue' w='70%' m='20px' fontSize='20px'>Cancel</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dell-account-benefits">
                    <Heading as='h2' size='xl' fontWeight='100' mt='100px'>Dell Account Benifits</Heading>
                    <p style={{ fontSize: "15px", width: "80%", margin: "auto", marginTop: "10px" }}>My Account is an easy, more centralized way to manage your tech. Sign Up Now! </p>
                    <div className='dell-account-info'>
                        <div>
                            <img src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-1-tracking-36x36.png" alt="order-tracking" />
                            <h1>Order Tracking</h1>
                            <p>Manage orders, track shipping status and view support history </p>
                        </div>
                        <div>
                            <img src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-2-mail-36x36.png" alt='Manage Communication' />
                            <h1>Manage Communication</h1>
                            <p>Manage marketing and communications preferences  </p>
                        </div>
                        <div>
                            <img src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/icon-3-profile-36x36.png" alt="order-tracking" />
                            <h1>Profile Setting</h1>
                            <p>Save your favorite payment method and shipping details for quicker checkout </p>
                        </div>
                    </div>
                    <div className='dell-account-image'>
                        <img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/bannerimage460x460.png" alt="dell-laptop" />
                    </div>
                </div>
            </div>
            <hr />
            <div className='first-footer'>
                <div>
                    <p className='hover-underline'>About Us</p>
                    <p className='hover-underline'>Career</p>
                    <p className='hover-underline'>Community</p>
                    <p className='hover-underline'>Event</p>
                    <p className='hover-underline'>Partner Program</p>
                    <p className='hover-underline'>Premier</p>
                    <p className='hover-underline'>Dell Technology</p>
                </div>
            </div>
            <div className='second-footer'>
                <div>
                    <p className='hover-underline'>Copyright © 2023 Dell Inc.</p>
                    <p className='hover-underline'>Tetms of Sale</p>
                    <p className='hover-underline'>Privacy Statement</p>
                    <p className='hover-underline'>Subscribe/Unsbscribe</p>
                    <p className='hover-underline'>Legal & Regulatory</p>
                    <p className='hover-underline'>Site Terms</p>
                    <p className='hover-underline'>Accessibilty</p>
                    <p className='hover-underline'>Recycling</p>
                    <p className='hover-underline'>Site Map</p>
                </div>
            </div>
        </>
    )
}

export default CreateAccount;
