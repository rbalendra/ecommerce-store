import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import NotFound from './pages/NotFound/NotFound';
import AboutPage from './pages/AboutPage/AboutPage';
import CartContextProvider from '../src/context/CartContextProvider';
import ProductPage from './pages/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';
import CartPage from './pages/CartPage/CartPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';

function App() {
	return (
		<div className='appContainer'>
			<CartContextProvider>
				{/* Wrapping the entire app with CartContextProvider to provide cart context to all components */}
				<BrowserRouter basename='/ecommerce-store'>
					<NavBar />
					<main>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/ShopPage' element={<ShopPage />} />
							<Route path='/AboutPage' element={<AboutPage />} />
							<Route path='/product/:id' element={<ProductPage />} />
							<Route path='/cart' element={<CartPage />} />
							<Route path='/payment' element={<PaymentPage />} />
							<Route path='/*' element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</BrowserRouter>
			</CartContextProvider>
		</div>
	);
}

export default App;
