import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import Paths from './Paths';
import Bio from './pages/subpages/Bio';
import NotFoundPage from './pages/404';
import AboutMe from './pages/AboutMe';
import Employment from './pages/subpages/Employment';
import Educations from './pages/subpages/Educations';
import { LayoutProvider } from './contexts';

const App = () => {
  return (
    <LayoutProvider>
      <Layout>
        <Routes>
          <Route path={Paths.home} element={<Home />} />
          <Route path={Paths.aboutMe.base} element={<AboutMe />}>
            <Route index element={<Bio />} />
            <Route path={Paths.aboutMe.bio} element={<Bio />} />
            <Route path={Paths.aboutMe.employment} element={<Employment />} />
            <Route path={Paths.aboutMe.educations} element={<Educations />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path={Paths.projects} element={<Projects />} />
          <Route path={Paths.contact} element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </LayoutProvider>
  );
};

export default App;
