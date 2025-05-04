import { useParams } from 'react-router';

const NotFound = () => {
	const { '*': splat } = useParams();

	return (
		<>
			<h1>PAGE NOT FOUND</h1>;
			<p>Could not find page "/{splat}". Did you make a typo?</p>
		</>
	);
};

export default NotFound;
