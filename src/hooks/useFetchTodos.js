import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export const useFetchTodos = (path) => {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		onValue(ref(db, `${path}/`), (snapshot) => {
			setTodos([]);
			const data = snapshot.val();
			if (data !== null) {
				Object.values(data).map((todo) => {
					setTodos((oldArray) => {
						return [...oldArray, todo];
					});
				});
			}
		});
	}, []);

	return todos;
};
