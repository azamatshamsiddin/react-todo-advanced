import React from "react";
// import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { AiOutlineHome } from "react-icons/ai";
import { FcTodoList } from "react-icons/fc";
import { CgBoard } from "react-icons/cg";
import { MdOutlineNoteAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import User from "./User";

const Navbar = () => {
	const { logOut } = UserAuth();
	const navigate = useNavigate();
	let activeStyle = {
		textDecoration: "underline",
	};

	const handleSignOut = async () => {
		try {
			await logOut();
			navigate("/signin");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<nav className="nav">
			{/* User */}
			<User />
			{/* Todo section */}
			<ul className="menu__list">
				<li className="menu__item">
					<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to={"/"}>
						<AiOutlineHome />
						Home
					</NavLink>
				</li>
				<li className="menu__item">
					<NavLink to={"/todo"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
						<FcTodoList />
						Todo
					</NavLink>
				</li>
				<li className="menu__item">
					<NavLink to={"/canban"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
						<CgBoard />
						Canban
					</NavLink>
				</li>
				<li className="menu__item">
					<NavLink to={"/notes"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
						<MdOutlineNoteAdd />
						Notes
					</NavLink>
				</li>
			</ul>

			<button className="logout-btn" onClick={handleSignOut}>
				Log out
			</button>
		</nav>
	);
};

export default Navbar;
