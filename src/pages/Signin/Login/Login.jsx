import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { userSignin } from '../../../Redux/actions/signinAction';
import { users_api } from '../../../api/index';
import '../Login/Login.css';
import UserNotAvailable from '../../../components/userNotAvailable/userNotAvailable';
import Copyright from '../../../components/Copyright/Copyright';
import { ChangeCredentials } from '../../../components/SignIn/SignIn';
import { Link } from 'react-router-dom';

let singleUserData = [];

export default function Signin() {
	const [userLoginPassword, setuserLoginPassword] = useState('');
	const [loginValidation, setLoginValidation] = useState('');
	const [inputField, setInputField] = useState('success');
	const [isUserAvailable, setIsUserAvailable] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();
	const { credential } = useSelector((state) => state.userSigninReducer);

	useEffect(() => {
		getSingleUserData();
	}, []);

	const getSingleUserData = async () => {
		singleUserData = await axios
			.get(`${users_api}/?q=${credential}`)
			.then((res) => res.data);
	};

	const handleSignIn = () => {
		if (userLoginPassword !== '') {
			if (singleUserData[0].username === userLoginPassword) {
				let name = singleUserData[0].name;
				let address = singleUserData[0].address;
				dispatch(userSignin({ name, userLoginPassword, address }));
				history.push('/');
			} else {
				console.log('wrong password');
				setIsUserAvailable('No');
			}
		} else {
			setLoginValidation('! Enter your email or mobile phone number');
			setInputField('error');
		}
	};

	const logUserIn = () => {
		setIsUserAvailable('');
	};

	return (
		<div className='signin-container'>
			<Helmet>
				<title>Amazon Sign In</title>
			</Helmet>

			<div>
				<section className='signin-conditions'>
					<div className='text-center'>
						<Link to='/'>
							<input
								className='signin-amazon-logo'
								src='https://pngimg.com/uploads/amazon/amazon_PNG24.png'
								alt='Amazon logo'
							/>
						</Link>
					</div>

					{isUserAvailable === 'No' ? (
						<UserNotAvailable errorMsg='Your password is incorrect' />
					) : (
						''
					)}

					<div className='signin-section'>
						<div>
							<h3 className='signin-text'>Sign-In</h3>
						</div>

						<ChangeCredentials userCredential={credential} />

						<div className='signin-inputs'>
							<label htmlFor='signin-email' className='signin-email-text'>
								<div>
									Password
									<span
										className='signin-forgot-userCredential'
										onClick={() => logUserIn()}>
										Forgot Password
									</span>
								</div>
							</label>
							<input
								type='password'
								className={`signin-email-${inputField}`}
								autoFocus
								value={userLoginPassword}
								onChange={(e) => setuserLoginPassword(e.target.value)}
							/>
							<p className='login-validation-text'>{loginValidation}</p>
							<button
								className='signin-continue'
								onClick={() => handleSignIn()}>
								Continue
							</button>

							<div className='signin-keep-signed-wrapper'>
								<input type='checkbox' name='keep-me-signed' />
								<label htmlFor='keep-me-signed' className='signin-keep-signed'>
									Keep me signed in.
								</label>
								<span className='signin-keep-signed-details'>
									Details
									<i className='fas fa-caret-down login-caret-down'></i>
								</span>
							</div>
						</div>
					</div>

					<div className='new-to-amazon-section'>
						<hr />

						<p className='new-to-amazon-or'>or</p>
					</div>

					<button className='signin-create-account'>
						Get an OTP on your phone
					</button>

					<div className='signin-dataCharges'>
						<div>
							<i className='fas fa-info'></i> Message and Data rates may apply.
						</div>
					</div>
				</section>
				<Copyright />
			</div>
		</div>
	);
}
