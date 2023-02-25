import { useState } from "react";
import Navbar from "./components/Navbar";
import Seo from "./components/Seo";
import HomeContainer from "./containers/HomeContainer";
import { ThemeContext, ThemeContextProps } from "./context/ThemeProvider";
import { TITLE, IMAGE, KEYWORDS, NAME, URL } from "./data/data";

function App() {
  const [Theme, setTheme] = useState("light");
  const value: ThemeContextProps = { theme: Theme, setTheme };
  const [menuShow, showMenu] = useState(false);

  return (
    <ThemeContext.Provider value={value}>
      <Seo
        url={URL}
        lang="en"
        metaDescription={TITLE}
        keywords={KEYWORDS}
        image={IMAGE}
        title={NAME(" ")}
        author={NAME(" ")}
        theme={Theme}
      />
      <Navbar menuShow={menuShow} showMenu={showMenu} />

      <HomeContainer />
    </ThemeContext.Provider>
  );
}

export default App;
