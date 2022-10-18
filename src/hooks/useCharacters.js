import { useState, useEffect } from 'react';
import { fetchData } from '../api';

export const useCharacters = (search) => {
	const [characters, setCharacters] = useState();
	const [dbCharacters, setDbCharacters] = useState();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true);
				setDbCharacters(await fetchData('characters'));
				setError(null);
				setLoading(false);
			} catch (error) {
				setError(error);
				setCharacters();
				setLoading(false);
			}
		};

		getData();
	}, []);

	useEffect(() => {
		const filterData = () => {
			let result = dbCharacters;
			if (search) {
				result = result.filter((el) =>
					el.name.toLowerCase().includes(search.toLowerCase())
				);
			}

			setCharacters(result);
		};

		filterData();
	}, [search, dbCharacters]);

	return { characters, error, loading };
};
