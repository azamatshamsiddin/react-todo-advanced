import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
	const { googleSignIn } = UserAuth();
	const navigate = useNavigate();
	const handleSignIn = async () => {
		try {
			await googleSignIn();
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<h1 className="heading-1">Sing in</h1>
			<button onClick={handleSignIn}>Google btn</button>
		</div>
	);
};

export default Signin;
