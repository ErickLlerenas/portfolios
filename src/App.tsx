import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Resume from "./views/Resume";

import Layout from "./layout";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route element={<Home />} index></Route>
					<Route element={<Resume />} path="/resume"></Route>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
