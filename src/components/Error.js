import './Error.css';
import { FiXOctagon } from 'react-icons/fi';

const Error = ({ error }) => {
	return (
		<div className="errorContainer">
			<FiXOctagon size={100} />
			<h1>{error.name}</h1>
			<h5>{error.message}</h5>
		</div>
	);
};

export { Error };
