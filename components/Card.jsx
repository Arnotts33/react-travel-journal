function Card(props) {
	console.log(props);
	return (
		<div className="card">
			<div>
				<img
					src={`/assets/images/${props.coverImg}`}
					className="card--cover-image"
					alt="japan"
				/>
			</div>
			<section className="card--info">
				<p className="card--country">{props.country}</p>
				<h1 className="card--location">{props.location}</h1>
				<p className="card--date">{props.date}</p>
				<p>{props.description}</p>
			</section>
		</div>
	);
}

export default Card;
