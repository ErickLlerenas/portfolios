import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Resume, Works, Contact } from "./views";

import Layout from "./layout";

const App: FC = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route element={<About />} index></Route>
					<Route element={<Resume />} path="/resume"></Route>
					<Route element={<Works />} path="/works"></Route>
					<Route element={<Contact />} path="/Contact"></Route>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
