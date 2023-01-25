import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment/moment";
import { set, ref } from "firebase/database";
import { db } from "../../firebase";

const AddContainer = () => {
	const [value, setValue] = useState("");

  const writeToDatabase = (value) => {
		if (!value.length) {
			return alert("Please fill in the line!");
		} else if (value.length < 4) {
			return alert("Please enter more than 3 characters!");
		}
		const uuid = uuidv4();
		set(ref(db, `todos/${uuid}`), {
			id: uuid,
			description: value,
			isCompleted: false,
			createdDate: moment().format("ll"),
		});
		setValue("");
	};

  const handleInputValue = (e) => setValue(e.target.value);
	return (
		<div className="add__container">
			<input className="add__input" type="text" onChange={handleInputValue} value={value} placeholder="Type your todos..." />
			<button className="add__btn" onClick={() => writeToDatabase(value)}>
				+
			</button>
		</div>
	);
};

export default AddContainer;
