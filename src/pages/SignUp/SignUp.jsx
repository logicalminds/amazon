import React from 'react';
import { Helmet } from 'react-helmet';

import '../SignUp/SignUp.css';

export default function Login() {
	return (
		<div className='container'>
			<Helmet>
				<title>Signup</title>
			</Helmet>
			<div className='signup-page'>
				<h2 className='signup-head'>Signup</h2>
				<label htmlFor='username' className='input-text'>
					Username
				</label>
				<input
					type='text'
					name='username'
					placeholder='Enter your username'
					className='signup-input'
					autoComplete='off'
				/>
				<label htmlFor='email' className='input-text'>
					Email address
				</label>
				<input
					type='email'
					name='email'
					placeholder='Enter your email address'
					className='signup-input'
					autoComplete='off'
				/>
				<label htmlFor='password' className='input-text'>
					Password
				</label>
				<input
					type='password'
					name='password'
					placeholder='Enter your password'
					className='signup-input'
					autoComplete='off'
				/>
				<label htmlFor='confirm-password' className='input-text'>
					Confirm Password
				</label>
				<input
					type='password'
					name='confirm-password'
					placeholder='Enter your password again'
					className='signup-input'
					autoComplete='off'
				/>
				<button type='submit' className='btn rounded-pill bg-warning mx-1 my-5'>
					Signup
				</button>
			</div>
		</div>
	);
}
