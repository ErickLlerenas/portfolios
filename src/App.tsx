import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./views/Home";
import Resume from "./views/Resume";

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
