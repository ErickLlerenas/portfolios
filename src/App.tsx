import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./views/Home";
import Resume from "./views/Resume";
import Works from "./views/Works";

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
