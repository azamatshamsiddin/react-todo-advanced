import React from "react";
import ClockComponent from "../utils/ClockComponent";

const Home = () => {
	return (
		<div className="home">

			<h1 className="home__heading">Welcome to our site! 🚀</h1>
			<p className="home__description">This is an analogue of the <b>Notion</b> application</p>

			<div className="clock">
				<ClockComponent/>
			</div>
		</div>
	)
};
export default Home;
