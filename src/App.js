import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPhotos } from './Redux/actions/cardAction';
import Home from './pages/Home/Home';
import Credentials from './pages/Signin/Credentials/Credentials';
import Login from './pages/Signin/Login/Login';
import AllDeals from './pages/AllDeals/AllDeals';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import './index.css';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPhotos());
	}, [dispatch]);

	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/signin'>
						<Login />
					</Route>
					<Route path='/signin/:id'>
						<Credentials />
					</Route>
					<Route path='/alldeals'>
						<AllDeals />
					</Route>
					<Route path='/cart'>
						<Cart />
					</Route>
					<Route exact path='/:productdetail'>
						<ProductDetail />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
