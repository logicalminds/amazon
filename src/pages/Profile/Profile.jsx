import React from 'react';
import { Helmet } from 'react-helmet';
import './Profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
	return (
		<div>
			<Helmet>
				<title>Profile</title>
			</Helmet>
			<div className='profile-page'>
				<label htmlFor='username' className='input-text'>
					Username
				</label>
				<input className='username' disabled />
				<label htmlFor='email' className='input-text'>
					Email address
				</label>
				<input className='email' disabled />
				<label htmlFor='password' className='input-text'>
					Password
				</label>
				<input type='password' className='password' disabled />
				<Link to='/update'>
					<button
						type='submit'
						className='profile-btn btn rounded-pill bg-warning'>
						Update Profile
					</button>
				</Link>
				<button
					type='submit'
					className='profile-btn btn rounded-pill bg-warning'>
					LOGOUT
				</button>
			</div>
		</div>
	);
}
