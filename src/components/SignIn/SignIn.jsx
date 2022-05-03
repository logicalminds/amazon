import React from 'react';
import { useHistory } from 'react-router';
import './SignIn.css';

export const AmazonLogo = () => {
	return (
		<div>
			<div className='text-center'>
				<input
					className='signin-amazon-logo'
					src='https://pngimg.com/uploads/amazon/amazon_PNG24.png'
					alt='Amazon logo'
				/>
			</div>
		</div>
	);
};

export const ChangeCredentials = (props) => {
	const history = useHistory();

	const changeFun = () => {
		history.push('/signin/credentials');
	};

	return (
		<div>
			<p className='signin-userCredential'>
				{props.userCredential}
				<span
					className='signin-change-userCredential'
					onClick={() => changeFun()}>
					Change
				</span>
			</p>
		</div>
	);
};
