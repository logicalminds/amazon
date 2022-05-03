import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { userCredentials } from '../../../Redux/actions/signinAction';
import { users_api } from '../../../api/index';
import UserNotAvailable from '../../../components/userNotAvailable/userNotAvailable';
import ConditionsOfUse from '../../../components/ConditionsOfUse/ConditionsOfUse';
import Copyright from '../../../components/Copyright/Copyright';
import '../Credentials/Credentials.css';
import { Link } from 'react-router-dom';

let usersData = [];

export default function Signin() {
	const [needHelpState, setNeedHelpState] = useState({
		forgotPassword: '',
		otherIssues: '',
	});
	const [userLoginInputEmail, setUserLoginInputEmail] = useState('');
	const [loginValidation, setLoginValidation] = useState('');
	const [inputField, setInputField] = useState('success');
	const [isUserAvailable, setIsUserAvailable] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		getUserData();
	}, []);

	const getUserData = async () => {
		usersData = await axios.get(users_api).then((res) => res.data);
	};

	const handleCredentials = () => {
		if (userLoginInputEmail !== '') {
			if (
				usersData.some(
					(e) =>
						e.email === userLoginInputEmail || e.phone === userLoginInputEmail
				)
			) {
				dispatch(userCredentials(userLoginInputEmail));
				console.log('success logging in');
				setIsUserAvailable('Yes');
				history.push('/signin');
			} else {
				console.log('error logging in');
				setIsUserAvailable('No');
			}
		} else {
			setLoginValidation('! Enter your email or mobile phone number');
			setInputField('error');
		}
	};

	const needHelp = () => {
		if (
			needHelpState.forgotPassword === '' &&
			needHelpState.otherIssues === ''
		) {
			setNeedHelpState({
				forgotPassword: 'Forgot Password',
				otherIssues: 'Other issues with Sign-In',
			});
		} else {
			setNeedHelpState({
				forgotPassword: '',
				otherIssues: '',
			});
		}
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
						<UserNotAvailable errorMsg='We cannot find an account with that email address' />
					) : (
						''
					)}

					<div className='signin-section'>
						<div>
							<h3 className='signin-text'>Sign-In</h3>
						</div>

						<div className='signin-inputs'>
							<label htmlFor='signin-email' className='signin-email-text'>
								Email or mobile phone number
							</label>
							<input
								type='text'
								className={`signin-email-${inputField}`}
								autoFocus
								autoComplete='on'
								value={userLoginInputEmail}
								onChange={(e) => setUserLoginInputEmail(e.target.value)}
							/>
							<p className='login-validation-text'>{loginValidation}</p>
							<button
								className='signin-continue'
								onClick={() => handleCredentials()}>
								Sign-In
							</button>

							<ConditionsOfUse />

							<div>
								{needHelpState.forgotPassword === '' &&
								needHelpState.otherIssues === '' ? (
									<i className='fas fa-caret-right credentials-caret-right'></i>
								) : (
									<i className='fas fa-caret-down credentials-caret-down'></i>
								)}
								<a href='#' className='need-help' onClick={() => needHelp()}>
									Need help?
								</a>
							</div>
							<a href='https://amazon.in' className='need-help-password'>
								{needHelpState.forgotPassword}
							</a>
							<a href='https://amazon.in' className='need-help-password'>
								{needHelpState.otherIssues}
							</a>
						</div>
					</div>

					<div className='new-to-amazon-section'>
						<hr />
						<p className='new-to-amazon'>New to Amazon?</p>
					</div>

					<button className='signin-create-account'>
						Create your Amazon account
					</button>
				</section>
				<Copyright />
			</div>
		</div>
	);
}
