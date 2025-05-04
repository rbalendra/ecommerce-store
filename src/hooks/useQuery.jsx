import { useEffect, useState } from 'react';

export default function useQuery({ fetchFn, args = [], dependencies = [] }) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [fetchStatus, setFetchStatus] = useState('PENDING');

	useEffect(() => {
		setFetchStatus('LOADING');
		fetchFn(...args)
			.then((result) => {
				setFetchStatus('SUCCESS');
				setData(result);
			})
			.catch((err) => {
				setFetchStatus('FAILURE');
				setError(err);
			});
	}, dependencies);

	return {
		data,
		error,
		isSuccess: fetchStatus === 'SUCCESS',
		isFail: fetchStatus === 'FAILURE',
		isLoading: fetchStatus === 'LOADING',
	};
}
// This custom hook is used to fetch data from an API. It takes a fetch function, arguments for that function, and dependencies for the useEffect hook. It returns the fetched data, any error that occurred, and the status of the fetch operation (success, failure, or loading).
