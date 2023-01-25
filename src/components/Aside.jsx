import React from "react";
import { useFetchTodos } from "../hooks/useFetchTodos";
import { Chart } from "react-google-charts";

export const data = [
	["Todo", "Count"],
	["Completed", 0],
	["Non-Completed", 0],
];

export const options = {
	title: "My Daily Activities",
	pieHole: 0.4,
	is3D: false,
	backgroundColor: "transparent",
	colors: ["rgb(83, 224, 83)", "rgb(190, 60, 60)"],
	legend: { position: "bottom", textStyle: { color: "#fff", fontSize: 16, maxLines: 1 } },
	pieSliceText: "value",
	pieSliceTextStyle: { color: "#fff", fontName: "Nunito", fontSize: 18 },
	titleTextStyle: {
		color: "#fff",
		fontSize: 18,
		fontName: "Nunito",
		bold: true,
	},
};
const Aside = () => {
	const todos = useFetchTodos("todos");
	data[1][1] = todos.filter((todo) => todo.isCompleted).length;
	data[2][1] = todos.filter((todo) => !todo.isCompleted).length;
	return (
		<aside className="aside">
			<h1 className="heading-2 aside__heading">Statistics</h1>
			<div className="aside__chart">
				<Chart className="aside__chart-item" chartType="PieChart" width="100%" height="300px" data={data} options={options} />
			</div>
		</aside>
	);
};

export default Aside;
