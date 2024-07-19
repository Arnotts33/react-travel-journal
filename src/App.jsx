import Navbar from "../components/Navbar";
import Card from "../components/Card";
import data from "/data.js";

function App() {
	console.log(data);
	const cards = data.map((item) => {
		console.log(item.coverImg);
		return <Card key={item.id} {...item} />;
	});
	return (
		<>
			<Navbar />
			<section className="cards-list">{cards}</section>
		</>
	);
}

export default App;
