import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { products } from '../../api';
import { searchDatas } from '../../Redux/actions/cardAction';
import '../header/Header.css';

export default function Header() {
	const [search, setSearch] = useState();
	const { isLoggedIn, name, city, pincode } = useSelector(
		(state) => state.userSigninReducer
	);
	const cartCount = useSelector((state) => state.cartReducer.cartQuantity);
	const dispatch = useDispatch();

	return (
		<div className='container-fluid topSection-nav'>
			<div className='nav-contents'>
				<div className='header-address-section'>
					<Link to='/'>
						<img
							src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
							alt='logo'
							className='navbar-brand'
						/>
					</Link>

					{/* address */}

					<div className='navbar-items address-section'>
						<i className='fas fa-map-marker-alt'></i>
						<div className='address-wrapper'>
							<span className='hello hello-address'>
								{name === undefined || name === ''
									? 'Hello'
									: 'Deliver to ' + name}
							</span>
							<span className='header-address'>
								{(city === undefined || city === '') &&
								(pincode === undefined || pincode === '')
									? 'Select your address'
									: city + ' ' + pincode}
							</span>
						</div>
					</div>
				</div>

				{/* search bar */}

				<div className='search-wrapper'>
					<input
						type='search'
						className='header-search'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button className='btn header-search-button'>
						<i
							className='fas fa-search'
							onClick={() => {
								console.log('!!search', search);
								dispatch(searchDatas(search));
							}}></i>
					</button>
				</div>

				<div className='user-section-wrapper'>
					{/*Language */}

					<i className='fas fa-language'></i>

					{/*Sign in */}
					<div className='user-accounts'>
						<Link className='navbar-items nav-user' to='/signin/credentials'>
							<span className='hello'>
								Hello, {name === undefined || name === '' ? 'Sign in' : name}
							</span>
							<div className='accountsAndList-wrapper'>
								<span className='accounts'>Account & Lists</span>
								<span>
									<i className='fas fa-caret-down header-caret-down'></i>
								</span>
							</div>
						</Link>
					</div>

					{/* Returns */}
					<div>
						<Link
							className='navbar-items nav-user returns-wrapper'
							to={isLoggedIn ? `/orders` : '/signin/credentials'}>
							<span className='returns'>Returns</span>
							<span className='orders'>& Orders</span>
						</Link>
					</div>

					{/* Cart */}
					<div className='cart'>
						<Link to='/cart' className='navbar-items nav-user'>
							<i className='fas fa-shopping-cart'></i>
							<p className='header-cart-counter'>{cartCount}</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
