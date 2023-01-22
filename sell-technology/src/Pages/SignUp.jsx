import { Button, FormLabel, Heading, Input, } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/signup.css'
import axios from 'axios'
import { useEffect } from 'react';
import { useContext } from 'react';
import { WebContext } from '../Context/websiteContext';
const emptyForm = {
    email: '',
    password: ''
}

function SignUp() {
    const [passwordShow, setPasswordShow] = useState(false);
    const [loginUsersData, setloginUsersData] = useState([]);
    const [loginFormState, setLoginFormState] = useState(emptyForm);
    const { handlesetName } = useContext(WebContext);
    const navigate = useNavigate();


    const FetchLoggedInUsers = () => {
        axios.get('https://636f1cdbbb9cf402c81008d8.mockapi.io/users')
            .then((res) => setloginUsersData(res.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        FetchLoggedInUsers()
    }, [])

    const handleSignUp = () => {
        let log = false;
        loginUsersData.forEach(item => {
            if (loginFormState.email === item.email && loginFormState.password === item.password) {
                handlesetName(item.firstname);
                log = true;
            }
        })
        if (log === true) {
            alert("Logged In");
            navigate('/')
        } else {
            alert('User Not Found')
        }
    }

    const handleTogglePassword = () => {
        setPasswordShow(!passwordShow);
    }
    const { email, password } = loginFormState;
    return (
        <>
            <div className='signup-page'>
                <div className="signin-wrapper">
                    <div className="logo">
                        <img onClick={() => navigate('/')} style={{ cursor: "pointer" }} src="https://i.postimg.cc/15GLg3Zc/Black-Modern-Laptop-Logo.png" alt="sell-technology" />
                    </div>
                    <h1 style={{ fontSize: "35px" }}>Sign IN</h1>
                    <div className='signup-form-wrapper'>
                        <div className='google'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="google" />
                            <p>Google Sign In</p>
                        </div>
                        <div className='form'>
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
                                <h1>
                                    Don't remember your password? <span className='forget-password-text'>Create or Reset password</span>
                                </h1>
                            </div>
                            <div className='buttons'>
                                <Button colorScheme='blue' color='white' w='70%' m='20px' fontSize='20px' fontWeight='100px' onClick={() => {
                                    handleSignUp()
                                }}>Sign In</Button>
                                <h1 style={{ margin: "10px", fontSize: "20px" }}>or</h1>
                                <Button colorScheme='blue' fontWeight='100px' variant='outline' color='blue' w='70%' m='20px' fontSize='20px'>Set One-Time Password</Button>
                            </div>
                            <div className='forget-password' style={{ margin: "10px" }}>
                                <h1>
                                    Don't have a Dell account? <span className='forget-password-text' onClick={() => navigate('/createaccount')}>Create an Account</span>
                                </h1>
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

export default SignUp;