import React from 'react';
import '../Footer/Footer.css';

export default function Footer() {
	return (
		<div>
			<button className='back-to-top' onClick={() => window.scrollTo(0, 0)}>
				Back to top
			</button>
			<div className='footer'>
				<div>
					<div className='contact-list'>
						<div className='content footer-know-us'>
							<p className='text-lg font-semibold mb-1'>Get to know us</p>
							<p className='text-sm my-1'>About us</p>
							<p className='text-sm my-1'>Careers</p>
							<p className='text-sm my-1'>Press Releases</p>
							<p className='text-sm my-1'>Amazon Cares</p>
							<p className='text-sm my-1'>Gift a Smile</p>
						</div>
						<div className='content footer-connect-with-us'>
							<p className='text-lg font-semibold mb-1'>Connect with Us</p>
							<p className='text-sm my-1'>Facebook</p>
							<p className='text-sm my-1'>Twitter</p>
							<p className='text-sm my-1'>Instagram </p>
						</div>
						<div className='content footer-make-money'>
							<p className='text-lg font-semibold mb-1'>Sell on Amazon</p>
							<p className='text-sm my-1'>Sell under Amazon Accelerator</p>
							<p className='text-sm my-1'>Amazon Global Selling</p>
							<p className='text-sm my-1'>Become an Affiliate</p>
							<p className='text-sm my-1'>Fulfilment by Amazon</p>
							<p className='text-sm my-1'>Advertise Your Products</p>
							<p className='text-sm my-1'>Amazon Pay on Merchants</p>
						</div>
						<div className='content footer-help-you'>
							<p className='text-lg font-semibold mb-1'>Let Us Help You</p>
							<p className='text-sm my-1'>COVID-19 and Amazon</p>
							<p className='text-sm my-1'>Your Account</p>
							<p className='text-sm my-1'>Returns Centre</p>
							<p className='text-sm my-1'>100% Purchase Protection</p>
							<p className='text-sm my-1'>Amazon App Download</p>
							<p className='text-sm my-1'>Amazon Assistant Download</p>
							<p className='text-sm my-1'>Help </p>
						</div>
					</div>
					<div className='footer-copyight text-sm'>
						<a
							className='footer-links'
							rel='noreferrer'
							href='https://amazon.in'
							target='_blank'>
							<p className='items'>Privacy policies</p>
						</a>
						<a
							className='footer-links'
							rel='noreferrer'
							href='https://amazon.in'
							target='_blank'>
							<p className='items'>Copyright</p>
						</a>
						<a
							className='footer-links'
							rel='noreferrer'
							href='https://amazon.in'
							target='_blank'>
							<p className='items'>Conditions of Use & Sale</p>
						</a>
						<a
							className='footer-links'
							rel='noreferrer'
							href='https://amazon.in'
							target='_blank'>
							<p className='items'>
								© 1996-2021, Amazon.com, Inc. or its affiliates
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
