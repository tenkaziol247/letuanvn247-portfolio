import React, { useContext } from 'react';

import { LanguageContext } from '../../../App';
import Button from '../../../components/Button';
import WordTyping from '../../../components/WordTyping';

import './index.scss';

export default function HomeContent(props) {
    const { language } = useContext(LanguageContext);

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
                    "I'm Le Anh Tuan. Newbie web developer specializing in front-end development. I enjoy solving problems, interested in learning new technologies. I'm very passionate and dedicated to my task, I would be very grateful if you give me a chance to join your company.",
                    'Tôi là Lê Anh Tuấn. Một người mới trong lĩnh vực phát triển web, tập trung phát triển chủ yếu mảng front-end. Tôi thích giải quyết các vấn đề, hứng thú trong việc học các công nghệ mới. Tôi rất đam mê và tận tụy với nhiệm vụ được giao, rất biết ơn nếu anh chị cho tôi một cơ hội được làm việc cùng quý công ty.',
                )}
            </p>
            <ul className='home__action'>
                <li>
                    <Button
                        component='a'
                        link='#aboutMe'
                        variant='contained'
                        color='primary'
                        light
                    >
                        {choiceText('ABOUT ME', 'CHI TIẾT')}
                        <span>
                            <i className='fa fa-user-circle'></i>
                        </span>
                    </Button>
                </li>
                <li>
                    <Button
                        component='a'
                        link='#contactMe'
                        variant='outlined'
                        color='primary'
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
