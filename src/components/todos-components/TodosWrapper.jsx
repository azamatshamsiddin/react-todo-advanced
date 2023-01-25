import React from "react";
import TodoItem from "./TodoItem";
import TodoStatusTitle from "./TodoStatusTitle";

const TodosWrapper = ({ todos, heading, status }) => {
	return (
		<div className="todos__wrapper">
			<TodoStatusTitle todos={todos} heading={heading} status={status} />
			<ul className="todo__list">
				{status == "completed" && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}

				{status == "non-completed" && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
			</ul>
		</div>
	);
};

export default TodosWrapper;
