import React from "react";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
	return (
		<main>
			<Outlet />
		</main>
	);
};

export default MainContainer;
