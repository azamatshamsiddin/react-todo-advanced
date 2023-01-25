import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

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
		<div className="signin">
			<h1 className="heading-1">Sing in</h1>
			<button className="signin-btn" onClick={handleSignIn}> <FcGoogle/> Google btn</button>
		</div>
	);
};

export default Signin;
