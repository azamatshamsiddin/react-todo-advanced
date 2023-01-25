import React from "react";
import TodoStatusTitle from "../components/todos-components/TodoStatusTitle";
import TodoItem from "../components/todos-components/TodoItem";
import AddContainer from "../components/todos-components/AddContainer";
import { useFetchTodos } from "../hooks/useFetchTodos";

const Todo = () => {
	const todos = useFetchTodos("todos");
	return (
		<div className="todo">
			<h1 className="heading-1">Todos</h1>
			<AddContainer />
			<div className="todos__wrapper">
				<TodoStatusTitle todos={todos} heading="Non-completed" status="non-completed" />
				<ul className="todo__list">{todos.map((todo) => (!todo.isCompleted ? <TodoItem key={todo.id} todo={todo} /> : null))}</ul>
			</div>

			<div className="todos__wrapper">
				<TodoStatusTitle todos={todos} heading="Completed" status="completed" />
				<ul className="todo__list">{todos.map((todo) => (todo.isCompleted ? <TodoItem key={todo.id} todo={todo} /> : null))}</ul>
			</div>
		</div>
	);
};

export default Todo;
