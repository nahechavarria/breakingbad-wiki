import './SkeletonLoader.css';

export const SkeletonLoader = () => {
	return (
		<>
			<div className="card">
				<div className="photo"></div>

				<div className="division">
					<div className="shortline"></div>
					<div className="shortline"></div>
				</div>
				<div className="shortline"></div>
				<div className="shortline"></div>
				<div className="fullline"></div>
				<div className="fullline"></div>
			</div>
		</>
	);
};
