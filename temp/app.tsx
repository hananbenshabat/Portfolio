import { useState } from 'react';
import Navbar from './components/navbar';
import Seo from './components/seo';
import HomeContainer from './containers/home.container';
import { ThemeContext, ThemeContextProps } from './context/theme-provider';
import { IMAGE, KEYWORDS, NAME, TITLE, URL } from './data/data';

function App() {
    const [Theme, setTheme] = useState('winter');
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
                title={NAME(' ')}
                author={NAME(' ')}
                theme={Theme}
            />
            <Navbar menuShow={menuShow} showMenu={showMenu} />

            <HomeContainer />
        </ThemeContext.Provider>
    );
}

export default App;
