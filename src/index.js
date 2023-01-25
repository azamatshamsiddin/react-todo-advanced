import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Canban from "./routes/Canban";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Notes from "./routes/Notes";
import Signin from "./routes/Signin";
import Todo from "./routes/Todo";




const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />} errorElement={<ErrorPage />}>
			<Route index element={<Home />} />
			<Route path="todo" element={<Todo />} />
			<Route path="notes" element={<Notes />} />
			<Route path="canban" element={<Canban />} />
			<Route path="signin" element={<Signin />} />
			<Route path="login" element={<Login />} />
		</Route>
	)
);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
