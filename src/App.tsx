import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import { ThemeProvider } from "./components";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
