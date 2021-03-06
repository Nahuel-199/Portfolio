import { useContext } from "react";
import About from "./components/AboutMe/About";
import Contact from "./components/ContactMe/Contact";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import Skills from "./components/Skills/Skills";
import Toggle from "./components/Toggle/Toggle"
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Home />
      <About />
      <Skills/>
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;