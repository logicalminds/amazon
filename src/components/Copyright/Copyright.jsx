import React from 'react';
import './Copyright.css';

export default function Copyright() {
	return (
		<div className='text-center privacy-conditions-wrapper'>
			<p>
				<a href='https://amazon.in' className='privacy-conditions'>
					Conditions of Use
				</a>
				<a href='https://amazon.in' className='privacy-conditions'>
					Privacy Notice
				</a>
				<a href='https://amazon.in' className='privacy-conditions'>
					Help
				</a>
			</p>
			<p className='signin-copyright'>
				© 1996-2021, Amazon.com, Inc. or its affiliates
			</p>
		</div>
	);
}
