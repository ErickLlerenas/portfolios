import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Resume from "./views/Resume";
import Works from "./views/Works";

import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Home />} index></Route>
          <Route element={<Resume />} path="/resume"></Route>
          <Route element={<Works />} path="/works"></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
