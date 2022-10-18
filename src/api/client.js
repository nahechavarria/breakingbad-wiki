const url = 'https://breakingbadapi.com/api';

const fetchData = async (endpoint) => {
	try {
		const result = await fetch(`${url}/${endpoint}`);
		return result.json();
	} catch (error) {
		throw new Error('Error fetching the data with the API');
	}
};

export { fetchData };
