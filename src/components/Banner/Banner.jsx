import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';

export default function Banner() {
	return (
		<Carousel infiniteLoop showIndicators={false} showThumbs={false} autoPlay>
			<img
				src='https://m.media-amazon.com/images/I/81H2oSomXqL._SX3000_.jpg'
				alt='Banner'
				className='banner-img'
			/>
			<img
				src='https://m.media-amazon.com/images/I/71eQp8UKqvL._SX3000_.jpg'
				alt='Banner'
				className='banner-img'
			/>
			<img
				src='https://m.media-amazon.com/images/I/71twYEgl94L._SX3000_.jpg'
				alt='Banner'
				className='banner-img'
			/>
			<img
				src='https://m.media-amazon.com/images/I/71nijFiRV+L._SX3000_.jpg'
				alt='Banner'
				className='banner-img'
			/>
			<input
				src='https://m.media-amazon.com/images/I/71yfGfqmO0L._SX3000_.jpg'
				alt='Banner'
				className='banner-img'
			/>
			<input
				src='https://m.media-amazon.com/images/I/71a+vEL5NCL._SX3000_.jpg'
				alt='Banner'
				className='banner-img'
			/>
			<input
				src='https://m.media-amazon.com/images/I/71CFyiB3TnL._SX3000_.jpg'
				alt='Banner'
				className='banner-img'
			/>
			<input
				src='https://m.media-amazon.com/images/I/71lbm+1JyNL._SX3000_.jpg'
				alt='Banner'
				className='banner-img'
			/>
		</Carousel>
	);
}
