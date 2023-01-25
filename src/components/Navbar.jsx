import React from "react";
import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
	// const { user, logOut } = UserAuth();
	// const navigate = useNavigate();
	let activeStyle = {
		textDecoration: "underline",
	};

	// const handleSignOut = async () => {
	// 	try {
	// 		await logOut();
	// 		navigate("/signin");
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<nav className="nav">
			{/* User */}
			{/* <div className="user">
				<div className="user__container">
					<div className="user__img">{user ? <img src={user?.photoURL} className="user__icon" alt="user image" /> : <BiUser className="user__icon" />}</div>
					<div className="user__info">
						<p className="user__fullname">{user?.displayName}</p>
						<p className="user__mail">{user?.email}</p>
					</div>
				</div>
			</div> */}

			{/* Todo section */}
			<ul className="menu__list">
				<li className="menu__item">
					<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to={"/"}>
						Home
					</NavLink>
				</li>
				<li className="menu__item">
					<NavLink to={"/todo"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
						Todo
					</NavLink>
				</li>
				<li className="menu__item">
					<NavLink to={"/canban"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
						Canban
					</NavLink>
				</li>
				<li className="menu__item">
					<NavLink to={"/pie"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
						Pie
					</NavLink>
				</li>
			</ul>

			{/* <button className="add__btn" onClick={handleSignOut}>
				Log out
			</button> */}
		</nav>
	);
};

export default Navbar;
