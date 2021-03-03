import React, { useContext } from 'react';

import { LanguageContext } from '../../../App';
import { ScrollContext } from '../../../App';
import Button from '../../../components/Button';
import WordTyping from '../../../components/WordTyping';

import './index.scss';

export default function HomeContent(props) {
    const { language } = useContext(LanguageContext);
    const { handleScrollToSection } = useContext(ScrollContext);

    const choiceText = (engText, vieText) => {
        if (language === 'eng') {
            return engText;
        } else {
            return vieText;
        }
    };

    return (
        <div className='home__content'>
            <h4 className='home__supplement'>
                {choiceText('Hello,', 'Xin chào,')}
            </h4>
            <div className='home__title'>
                <h2>
                    <span>{choiceText('I am ', 'Tôi là ')}</span>
                    <span className='home__title__wordsTyping'>
                        <WordTyping />
                    </span>
                </h2>
            </div>
            <p className='home__introduce'>
                {choiceText(
                    "I'm a newbie web developer specializing in front-end development. I enjoy solving problems, finding solutions and interested in learning new technologies. I'm very passionate and dedicated to my task. If you feel my qualifications are a good fit for the position, I hope to have the opportunity to work with you in the future.",
                    'Tôi là một người mới trong lĩnh vực phát triển web, tập trung phát triển chủ yếu mảng front-end. Tôi thích giải quyết các vấn đề, tìm ra giải pháp và hứng thú trong việc học các công nghệ mới. Tôi rất đam mê và tận tụy với nhiệm vụ được giao. Nếu bạn cảm thấy trình độ của tôi phù hợp với vị trí này, tôi rất mong có được cơ hội được làm việc với quý công ty trong tương lai.',
                )}
            </p>
            <ul className='home__action'>
                <li>
                    <Button
                        variant='contained'
                        color='primary'
                        light
                        handleClick={() => handleScrollToSection('aboutMe')}
                    >
                        {choiceText('ABOUT ME', 'CHI TIẾT')}
                        <span>
                            <i className='fa fa-user-circle'></i>
                        </span>
                    </Button>
                </li>
                <li>
                    <Button
                        variant='outlined'
                        color='primary'
                        handleClick={() => handleScrollToSection('contact')}
                    >
                        {choiceText('CONTACT ME', 'LIÊN HỆ')}
                        <span>
                            <i className='fa fa-envelope'></i>
                        </span>
                    </Button>
                </li>
            </ul>
        </div>
    );
}
