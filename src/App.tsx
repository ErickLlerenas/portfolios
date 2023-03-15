import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./views/Home";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route element={<Home />} index></Route>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
