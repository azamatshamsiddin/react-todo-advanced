import { update, ref, remove } from "firebase/database";
import { useState } from "react";
import { AiFillCheckCircle, AiOutlineCheckCircle, AiOutlineEdit } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { db } from "../../firebase";

const TodoItem = (props) => {
	const { todo } = props;
	const [newValue, setNewValue] = useState(todo.description);
	const [isEdit, setIsEdit] = useState(false);
	const [tempUuid, setTempUuid] = useState("");
	const [isCompleted, setIsCompeleted] = useState(false);

	// update
	const handleUpdate = (todo) => {
		setIsEdit(true);
		setTempUuid(todo.id);
	};

	const handleSubmitChange = () => {
		update(ref(db, `todos/${tempUuid}`), {
			description: newValue,
			id: tempUuid,
		});

		setIsEdit(false);
	};

	//delete
	const handleDelete = (todo) => {
		remove(ref(db, `todos/${todo.id}`));
	};

	// complete
	const handleChangeComplate = (todo) => {
		setIsCompeleted(!isCompleted);
		update(ref(db, `todos/${todo.id}`), {
			isCompleted: isCompleted,
		});
	};

	return (
		<li className="todo__item">
			<span onClick={() => handleChangeComplate(todo)}>{todo.isCompleted ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}</span>
			<div>
				<p className={`todo__description ${todo.isCompleted && "completed"}`}>
					{isEdit ? (
						<input type="text" value={newValue} onChange={(e) => setNewValue(e.target.value.length > 3 ? e.target.value : alert("Please enter more than 3 characters!"))} />
					) : (
						<span>{newValue}</span>
					)}
				</p>
				<p className="todo__date">{todo.createdDate}</p>
			</div>

			<div className="todo__btns">
				{isEdit ? <BiSave onClick={handleSubmitChange} /> : <AiOutlineEdit onClick={() => handleUpdate(todo)} />}

				<FaTrash onClick={() => handleDelete(todo)} />
			</div>
		</li>
	);
};

export default TodoItem;
