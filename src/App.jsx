import { useEffect } from 'react';
import './App.scss';
import { getAllProjects } from './services/project-services';
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import NotFound from './pages/NotFound/NotFound';
import AboutPage from './pages/AboutPage/AboutPage';
import CartContextProvider from '../src/context/CartContextProvider';
import ProductPage from './pages/ProductPage/ProductPage'; // Importing the ProductPage component
import Footer from './components/Footer/Footer'; // Importing the Footer component

function App() {
	useEffect(() => {
		getAllProjects().then(console.log);
	}, []);

	return (
		<div className='appContainer'>
			<CartContextProvider>
				{/* Wrapping the entire app with CartContextProvider to provide cart context to all components */}
				<BrowserRouter>
					<NavBar />
					<main>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/ShopPage' element={<ShopPage />} />
							<Route path='/AboutPage' element={<AboutPage />} />
							<Route path='/product/:id' element={<ProductPage />} />
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
