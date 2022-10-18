import './CharacterCard.css';

export const CharacterCard = ({ character }) => {
	return (
		<div className="character">
			<div>
				<img src={character.img} alt={character.img} />
			</div>
			<div className="NameAndStatus">
				<h3>{character.name}</h3>
				<button
					className={character.status === 'Alive' ? 'btn-alive' : 'btn-dead'}
				>
					{character.status}
				</button>
			</div>
			<div>
				<p className="nickname">{character.nickname}</p>
			</div>
			<div>
				<p className="occupation">Occupation</p>
			</div>
			<hr className="hr" />
			<div>
				<ul>
					{character.occupation.map((list) => (
						<li key={list}>{list}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
