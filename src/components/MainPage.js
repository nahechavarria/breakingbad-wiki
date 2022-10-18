import { useState } from 'react';

import { Error } from './Error';

import { useCharacters } from '../hooks/useCharacters';
import { CharacterCard } from './CharacterCard';
import { SkeletonLoader } from './SkeletonLoader';
import './MainPage.css';

export const MainPage = () => {
	const [search, setSearch] = useState('');
	const { characters, loading, error } = useCharacters(search);

	if (error) return <Error error={error} />;

	return (
		<div className="app">
			<div className="header">
				<h1 className="mb10">Breaking Bad-Wiki</h1>
				<hr className="mb10" />
				<input
					className="mb10"
					type="text"
					name="search"
					id="search"
					placeholder="Walter White"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div className="body">
				{loading ? (
					<div className="container">
						{Array(9)
							.fill(0)
							.map((value, index) => (
								<SkeletonLoader key={index} />
							))}
					</div>
				) : characters && characters.length > 0 ? (
					<div className="container">
						{characters.map((character) => (
							<CharacterCard key={character.char_id} character={character} />
						))}
					</div>
				) : (
					<div className="empty">
						<h2>No characters found</h2>
					</div>
				)}
			</div>
		</div>
	);
};
