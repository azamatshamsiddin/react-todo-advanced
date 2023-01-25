import React from "react";

const TodoStatusTitle = ({ todos, heading, status }) => {
	return (
		<div className="todos__title">
			<h2 className="heading-2">
				{heading}{" "}
				{status == "completed" ? (
					<span className={`status status--completed`}>{todos.filter((todo) => todo.isCompleted).length}</span>
				) : (
					<span className={`status status--non-completed`}>{todos.filter((todo) => !todo.isCompleted).length}</span>
				)}
			</h2>
		</div>
	);
};

export default TodoStatusTitle;
