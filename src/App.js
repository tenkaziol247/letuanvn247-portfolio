import { createContext, useEffect, useRef, useState } from 'react';
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
import Footer from './containers/Footer';
import Preloader from './components/Preloader';

AOS.init({
    offset: 100,
});

export const LanguageContext = createContext({});
export const ScrollContext = createContext({});

export default function App() {
    const [language, setLanguage] = useState('eng');
    const [sectionActive, setSectionActive] = useState('');
    const [isPreload, setPreload] = useState(true);

    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const resumeRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const handleLanguage = (value) => {
        setLanguage(value);
    };

    const handleScrollToSection = (section) => {
        switch (section) {
            case 'aboutMe':
                window.scrollTo(0, aboutMeRef.current.offsetTop);
                break;
            case 'resume':
                window.scrollTo(0, resumeRef.current.offsetTop);
                break;
            case 'portfolio':
                window.scrollTo(0, portfolioRef.current.offsetTop);
                break;
            case 'contact':
                window.scrollTo(0, contactRef.current.offsetTop);
                break;
            default:
                window.scrollTo(0, 0);
                break;
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPreload(false);
        }, 4500);
        return () => {
            window.clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        if (!isPreload) {
            //compare window.scrollY vs offset top sections;
            const handleSecitonActive = () => {
                if (
                    window.scrollY >= contactRef.current.offsetTop ||
                    window.scrollY + window.innerHeight >=
                        document.body.offsetHeight
                ) {
                    setSectionActive('contact');
                } else if (window.scrollY >= portfolioRef.current.offsetTop) {
                    setSectionActive('portfolio');
                } else if (window.scrollY >= resumeRef.current.offsetTop) {
                    setSectionActive('resume');
                } else if (window.scrollY >= aboutMeRef.current.offsetTop) {
                    setSectionActive('aboutMe');
                } else {
                    setSectionActive('home');
                }
            };

            handleSecitonActive();

            //listen scroll event change section active
            window.addEventListener('scroll', handleSecitonActive);
            return () => {
                window.removeEventListener('scroll', handleSecitonActive);
            };
        }
    }, [isPreload]);

    return (
        <LanguageContext.Provider value={{ language, handleLanguage }}>
            <ScrollContext.Provider
                value={{ sectionActive, handleScrollToSection }}
            >
                {isPreload ? (
                    <Preloader />
                ) : (
                    <div className='app'>
                        <Header />
                        <main>
                            <Home ref={homeRef} />
                            <AboutMe ref={aboutMeRef} />
                            <Resume ref={resumeRef} />
                            <Portfolio ref={portfolioRef} />
                            <Contact ref={contactRef} />
                        </main>
                        <Footer />
                    </div>
                )}
            </ScrollContext.Provider>
        </LanguageContext.Provider>
    );
}
