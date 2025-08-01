import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Paths from "./Paths";
import Bio from "./pages/subpages/Bio";
import NotFoundPage from "./pages/404";
import AboutMe from "./pages/AboutMe";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={Paths.home} element={<Home />} />
        <Route path={Paths.aboutMe.base} element={<AboutMe />}>
          <Route index element={<Bio />} />
          <Route path={Paths.aboutMe.bio} element={<Bio />} />
          <Route
            path={Paths.aboutMe.employment}
            element={<div>Employment Content</div>}
          />
          <Route
            path={Paths.aboutMe.educations}
            element={<div>Educations Content</div>}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path={Paths.projects} element={<Projects />} />
        <Route path={Paths.contact} element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
