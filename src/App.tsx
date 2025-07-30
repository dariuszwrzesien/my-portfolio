import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Paths from "./Paths";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={Paths.home} element={<Home />} />
        <Route path={Paths.about.base} element={<About />}>
          <Route index element={<div>Bio Content</div>} />
          <Route path={Paths.about.bio} element={<div>Bio Content</div>} />
          <Route
            path={Paths.about.employment}
            element={<div>Employment Content</div>}
          />
          <Route
            path={Paths.about.educations}
            element={<div>Educations Content</div>}
          />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
        <Route path={Paths.projects} element={<Projects />} />
        <Route path={Paths.contact} element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
