import React, { useState } from 'react';
import './CategoriesBar.css';

export default function CategoriesBar() {
	const [primeHover, setPrimeHover] = useState(false);

	return (
		<div className='categories-container'>
			<div className='categories'>
				<p>All</p>
				<p>Mobiles</p>
				<p>Best Sellers</p>
				<p>Audible</p>
				<p>Electronics</p>
				<p>Fashion</p>
				<p>Customer Service</p>
				<p>Prime</p>
				{/* <div className='prime-wrapper'>
					<p className='prime-text' onMouseOver={() => setPrimeHover(true)}>
						Prime <i className='fa fa-caret-down categories-caret'></i>
					</p>
					{primeHover ? (
						<input
							
							src='https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB442254244_.jpg'
							onMouseOver={() => setPrimeHover(true)}
							onMouseOut={() => setPrimeHover(false)}
							alt='prime image'
						/>
					) : null}
				</div> */}
				<p>Home & Kitchen</p>
				<p>Amazon Pay</p>
			</div>
		</div>
	);
}
