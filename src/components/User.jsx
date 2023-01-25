import React from "react";
import { BiUser } from "react-icons/bi";
import { UserAuth } from "../context/AuthContext";

const User = () => {
	const { user } = UserAuth();
	return (
		<div className="user">
			<div className="user__container">
				<div className="user__img">
					<BiUser className="user__icon" />
				</div>
				<div className="user__info">
					<p className="user__fullname">{user ? user?.displayName : "Anonymous"}</p>
					<p className="user__mail">{user?.email.length > 10 ? user?.email.substr(0, 20) + "..." : user?.email}</p>
				</div>
			</div>
		</div>
	);
};

export default User;
