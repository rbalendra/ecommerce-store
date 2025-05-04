import { useEffect } from 'react';
import './App.scss';
import { getAllProjects } from './services/project-services';
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import NotFound from './pages/NotFound/NotFound';

function App() {
	useEffect(() => {
		getAllProjects().then(console.log);
	}, []);

	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/ShopPage' element={<ShopPage />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
