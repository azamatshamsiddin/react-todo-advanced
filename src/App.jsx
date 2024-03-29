import Aside from "./components/Aside";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
	return (
		<div className="App">
			<div className="container">
				<AuthContextProvider>
					<Navbar />
					<MainContainer />
					<Aside />
				</AuthContextProvider>
			</div>
		</div>
	);
}

export default App;
