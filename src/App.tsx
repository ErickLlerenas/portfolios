import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Home/components/Contact";
import FrontPage from "./views/Home/components/FrontPage";
import { Skills } from "./views/Home/components/Skills";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} index></Route>
				<Route element={<Skills />} path="/skills"></Route>
				<Route element={<FrontPage />} path="/frontPage"></Route>
				<Route element={<Contact />} path="/contact"></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
