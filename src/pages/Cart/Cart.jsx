import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import './Cart.css';
import { Checkbox } from '@material-ui/core';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
	Button,
	OneLineText,
} from '../../components/SingleComponents/SingleComponents';
import {
	addToCart,
	addToCartData,
	addQuantity,
	removeAllCartItems,
	deleteCartItem,
} from '../../Redux/actions/cartAction';
import { Rating } from '@mui/material';

export default function Cart() {
	const [productQuantity, setProductQuantity] = useState();
	const cartItems = useSelector((state) => state.cartDataReducer);
	const cartCount = useSelector((state) => state.cartReducer.cartQuantity);
	const subtotal = cartItems.totalCartAmount.toFixed(2);
	const { cards } = useSelector((state) => state.cardsData);
	const dispatch = useDispatch();

	return (
		<div className='cart-container'>
			<Helmet>
				<title>Amazon.in Shopping cart</title>
			</Helmet>
			<Header />
			<CategoriesBar />

			{cartItems.cartData == 0 ? (
				<div className='flex px-3 py-4 space-x-5'>
					<section className='w-9/12'>
						<div className='card px-3 py-4  cart-section-cart'>
							<p className='text-3xl'>Your Amazon Cart is empty.</p>
							<p className='text-sm mt-1'>
								Your shopping cart is waiting. Give it purpose – fill it with
								groceries, clothing, household supplies, electronics and more.
								<br />
								Continue shopping on the Amazon.in homepage, learn about today's
								deals, or visit your Wish List.
							</p>
						</div>
					</section>
					<section className='card p-3 w-3/12 mr-2 rounded-lg'>
						<p className='font-semibold text-sm'>More items to explore</p>
						{cards.slice(0, 4).map((e) => (
							<div className='flex py-3' key={e.id}>
								<div>
									<input
										src={e.image}
										alt={e.title}
										className='cart-more-items-image'
									/>
								</div>

								<div className='ml-3'>
									<Link to='/'>
										<OneLineText text={e.title} className='text-sm' />
									</Link>
									<div className='flex items-center'>
										<Rating
											size='small'
											readOnly
											value={e.rating.rate}
											precision={0.1}
										/>
										<p className='text-sm ml-1'>{e.rating.count}</p>
									</div>
									<p>
										&#8377; <strong>{e.price}</strong>
									</p>
									<Button
										name='Add to Cart'
										className='text-xs px-2 py-1 rounded-lg'
										onClick={() => {
											console.log('button clicked');
											dispatch(addToCart());
											dispatch(addToCartData(e.id));
										}}
									/>
								</div>
							</div>
						))}
					</section>
				</div>
			) : (
				<section className='flex px-3 py-4 space-x-5'>
					<div className='w-9/12 card p-3 cart-section-cart'>
						<p className='text-3xl'>Shopping Cart</p>
						<p
							className='text-sm mt-1 w-3/12 cart-deselect'
							onClick={() => dispatch(removeAllCartItems())}>
							Deselect all items
						</p>
						<p className='text-sm text-right'>Price</p>
						<hr />
						{cartItems.cartData.map((e) => (
							<>
								<div className='flex py-3 justify-between'>
									<div className='self-center contents'>
										<Checkbox
											defaultChecked
											style={{ color: '#1e7185' }}
											size='small'
										/>
									</div>

									<input
										src={e.image}
										alt={e.title}
										className='cart-product-image'
									/>

									<div className='flex-1 pl-2 pr-20'>
										<p className='text-lg '>{e.title}</p>
										<p className='text-xs'>In Stock</p>
										<p className='text-sm'>Eligible for free shipping</p>
										<div className='flex'>
											<input
												src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png'
												alt=''
												className='img-fluid'
											/>

											<div className='flex items-center'>
												<input
													type='checkbox'
													className='checked:bg-blue-600 checked:border-transparent'
												/>

												<div>
													<span className='text-xs'>This will be a gift</span>
													<a className='text-xs hover:text-color-#fcbd69'>
														Learn more
													</a>
												</div>
											</div>
										</div>

										<div className='d-flex divide-x divide-gray-400 items-center contents'>
											<select
												name='quantity'
												value={productQuantity}
												onChange={(e) => {
													setProductQuantity(e.target.value);
													dispatch(addQuantity(parseInt(productQuantity)));
												}}>
												<option value={1}>1</option>
												<option value={2}>2</option>
												<option value={3}>3</option>
												<option value={4}>4</option>
												<option value={5}>5</option>
												<option value={6}>6</option>
												<option value={7}>7</option>
												<option value={8}>8</option>
												<option value={9}>9</option>
												<option value={10}>10+</option>
											</select>
											{console.log(e.id)}
											<p
												className='text-xs'
												onClick={() => dispatch(deleteCartItem(e.id))}>
												Delete
											</p>
											<p className='text-xs'>Save for later</p>
											<p className='text-xs'>See more like this</p>
										</div>
									</div>
									<div className='float-right contents'>
										<p className='text-right'>
											&#8377; <strong>{e.price}</strong>
										</p>
									</div>
								</div>
								<hr />
							</>
						))}

						{cartCount <= 1 ? (
							<p className='text-lg mt-3 text-right'>
								{`Subtotal (${cartCount} item):`} &#8377;{' '}
								<strong>{subtotal}</strong>
							</p>
						) : (
							<p className='text-lg mt-3 text-right'>
								{`Subtotal (${cartCount} items):`} &#8377;{' '}
								<strong>{subtotal}</strong>
							</p>
						)}
					</div>
					<div className='w-3/12 mr-2'>
						<div>
							<input
								src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png'
								alt=''
							/>
							<div className='card p-3 cart-subtotal my-2'>
								<div className='flex'>
									<CheckCircleIcon
										sx={{ fontSize: 20 }}
										className='cart-subtotal-checkedCircle'
									/>

									<p className='cart-subtotal-order-eligible'>
										Your order is eligible for FREE Delivery. Select this option
										at checkout. Details
									</p>
								</div>
								<div>
									{cartCount <= 1 ? (
										<p className='text-lg mt-3'>
											{`Subtotal (${cartCount} item):`} &#8377;{' '}
											<strong>{subtotal}</strong>
										</p>
									) : (
										<p className='text-lg mt-3'>
											{`Subtotal (${cartCount} items):`} &#8377;{' '}
											<strong>{subtotal}</strong>
										</p>
									)}

									<div className='flex items-center'>
										<input type='checkbox' />

										<div className='ml-1'>
											<span className='text-sm'>
												This order contains a gift
											</span>
										</div>
									</div>
								</div>

								<button className='btn rounded-lg w-100 text-sm p-1 my-3 proceed-btn'>
									Proceed to buy
								</button>
							</div>
						</div>
					</div>
				</section>
			)}
		</div>
	);
}
