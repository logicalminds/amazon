import React from 'react';
import './userNotAvailable.css';

export default function userNotAvailable(props) {
	return (
		<div className='signin-user-not-found d-flex'>
			<i class='fal fa-exclamation-triangle'></i>
			<div className='signin-user-not-found-text-wrapper'>
				<p className='signin-user-not-found-problem'>There was a problem</p>
				<p className='signin-user-account-not-found'>{props.errorMsg}</p>
			</div>
		</div>
	);
}
