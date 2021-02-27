import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../App';

export default function WordTyping() {
    const [texts, setTexts] = useState(['Le Anh Tuan.', 'a Web Developer.']);
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    const { language } = useContext(LanguageContext);

    useEffect(() => {
        if (language === 'vie') {
            setTexts(['Lê Anh Tuấn.', 'Người phát triển trang web.']);
        } else {
            setTexts(['Le Anh Tuan.', 'a Web Developer.']);
        }
        setIndex(0);
        setSubIndex(0);
        setReverse(false);
        setBlink(true);
    }, [language]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout);
    }, [blink]);

    useEffect(() => {
        if (index === texts.length) {
            setIndex(0);
            return;
        }

        if (subIndex === texts[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            if (index >= texts.length - 1) {
                setIndex(0);
            } else {
                setIndex((prev) => prev + 1);
            }
            return;
        }

        const period = reverse
            ? 75
            : subIndex === texts[index].length
            ? 5000
            : 150;
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, period);

        return () => clearTimeout(timeout);
    }, [index, subIndex, reverse, texts]);

    return <>{`${texts[index].substring(0, subIndex)}${blink ? '|' : ' '}`}</>;
}
