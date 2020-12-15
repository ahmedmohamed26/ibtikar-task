import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import Header from './shared/header/header';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import ProductDetails from './pages/product-details/product-details';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
	return (
		<Router>
			<Header />
			<div className='container'>
				<Redirect to='/home' />
				<Route path='/home' component={Home} exact />
				<Route path='/products/:id' component={ProductDetails} />
				<Route path='/cart' component={Cart} />
			</div>
		</Router>
	);
}

function AppWithStore() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}

export default AppWithStore;
