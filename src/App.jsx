import { useEffect } from 'react';
import { getAllProjects } from './services/project-services';
import { BrowserRouter, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';

function App() {
	useEffect(() => {
		getAllProjects().then(console.log);
	}, []);

	return (
		<>
			<BrowserRouter>
				<NavBar />
				<HomePage />
				<Routes></Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
