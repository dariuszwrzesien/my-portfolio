import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
