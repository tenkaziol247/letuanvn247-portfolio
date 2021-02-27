import { createContext, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.scss';
import AboutMe from './containers/AboutMe';
import Header from './containers/Header';
import Home from './containers/Home';
import Resume from './containers/Resume';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';

AOS.init({
    offset: 100,
});

export const LanguageContext = createContext({});

export default function App() {
    const [language, setLanguage] = useState('eng');

    const handleLanguage = (value) => {
        setLanguage(value);
    };

    return (
        <LanguageContext.Provider value={{ language, handleLanguage }}>
            <div className='app'>
                <Header />
                <main>
                    <Home />
                    <AboutMe />
                    <Resume />
                    <Portfolio />
                    <Contact />
                </main>
                {/* footer */}
            </div>
        </LanguageContext.Provider>
    );
}
