import React, { forwardRef, useContext } from 'react';
import Title from '../../components/Title';

import './index.scss';
import NameColumn from './NameColumn';
import ResumeItem from './ResumeItem';
import { LanguageContext } from '../../App';

const Resume = forwardRef((props, ref) => {
    const { language } = useContext(LanguageContext);

    const choiceText = (engText, vieText) => {
        if (language === 'eng') {
            return engText;
        } else {
            return vieText;
        }
    };

    return (
        <section id='resume' ref={ref}>
            <div className='resume__container'>
                <Title sup={choiceText('My journey', 'Hành trình của tôi')}>
                    {choiceText('Resume', 'Lý Lịch')}
                </Title>
                <div className='resume__content'>
                    <div className='resume__left'>
                        <div
                            className='resume__post'
                            data-aos='fade-down'
                            data-aos-delay='0'
                            data-aos-duration='1000'
                            data-aos-easing='ease'
                            data-aos-once='true'
                        ></div>
                        <NameColumn>
                            {choiceText('My Education', 'Học Vấn')}
                        </NameColumn>
                        <ResumeItem
                            timeline='2014 - 2018'
                            title={choiceText(
                                'Vietnam National University of Forestry',
                                'Đại học Lâm nghiệp Việt Nam',
                            )}
                        >
                            <span>
                                <b>
                                    {choiceText(
                                        'Bachelor of Forest Resources Management.',
                                        'Cử nhân Quản lý tài nguyên rừng',
                                    )}
                                </b>
                            </span>
                            <span>
                                {choiceText('Grade: Good.', 'Loại: Khá')}
                            </span>
                            <span>
                                {choiceText('GPA: ', 'Điểm trung bình: ')}
                                2.99/4.
                            </span>
                        </ResumeItem>
                        <ResumeItem
                            timeline={choiceText(
                                '2020 - Present',
                                '2020 - Hiện tại',
                            )}
                            title={choiceText(
                                'CyberSoft - Programmer Training Center',
                                'CyberSoft - Đào Tạo Chuyên Gia Lập Trình',
                            )}
                        >
                            <span>
                                <b>
                                    {choiceText(
                                        'Basic Programming course: ',
                                        'Khóa Tư duy lập trình: ',
                                    )}
                                </b>

                                {choiceText(
                                    'Thinking programming, Java language, algorithms, OOP.',
                                    'Nghĩ về lập trình, ngôn ngữ Java, giải thuật, lập trình hướng đối tượng.',
                                )}
                            </span>
                            <span>
                                <b>
                                    {choiceText(
                                        'Front-end Foundation course: ',
                                        'Khóa Nền tảng Front-end: ',
                                    )}
                                </b>

                                {choiceText(
                                    `Front-end orientation, HTML5, CSS3, Bootstrap 4,
                                    SASS/SCSS, Javascript (ES5/ES6), AJAX,
                                    JQuery, Git.`,
                                    `Định hướng Front-end, HTML5, CSS3, Bootstrap 4,
                                    SASS/SCSS, Javascript (ES5/ES6), AJAX,
                                    JQuery, Git.`,
                                )}
                            </span>
                        </ResumeItem>
                        <ResumeItem
                            timeline={choiceText(
                                '2020 - Present',
                                '2020 - Hiện tại',
                            )}
                            title={choiceText(
                                'Udemy - Learn Anything, On Your Schedule',
                                'Udemy - Học Mọi Thứ, Theo Cách Của Bạn',
                            )}
                        >
                            <span>
                                <b>
                                    {choiceText(
                                        'Reactjs course: ',
                                        'Khóa Reactjs:',
                                    )}
                                </b>
                                {choiceText(
                                    `Created by Maximilian Schwarzmüller. Learn
                                    Reactjs, Hooks, Redux, React Routing,
                                    Animations.`,
                                    `Được tạo bởi Maximilian Schwarzmüller. Học Reactjs, 
                                    Hooks, Redux, React Routing, Animations.`,
                                )}
                            </span>
                            <span>
                                <b>
                                    {choiceText(
                                        'Typescript course: ',
                                        'Khóa Typescript: ',
                                    )}
                                </b>
                                {choiceText(
                                    `Created by Stephen Grider. Basic Typescript,
                                    integrate Typescript into React/Redux or Expressjs
                                    projects.`,
                                    `Được tạo bởi Stephen Grider. Typescript cơ bản,
                                    tích hợp Typescript trong React/Redux hoặc các dự án Expressjs.`,
                                )}
                            </span>
                            <span>
                                <b>
                                    {choiceText(
                                        'Nodejs course: ',
                                        'Khóa Nodejs: ',
                                    )}
                                </b>
                                {choiceText(
                                    `Created by Andrew Mead, Rob Percival. Learn
                                    Nodejs, Expressjs, MongoDB, Jest.`,
                                    `Được tạo bởi Andrew Mead, Rob Percival.
                                    Học Nodejs, Expressjs, MongoDB, Mongoose, Jest.`,
                                )}
                            </span>
                        </ResumeItem>
                    </div>
                    <div className='resume__right'>
                        <div
                            className='resume__post'
                            data-aos='fade-down'
                            data-aos-delay='0'
                            data-aos-duration='1000'
                            data-aos-easing='ease'
                            data-aos-once='true'
                        ></div>
                        <NameColumn>
                            {choiceText('My Experience', 'Kinh Nghiệm')}
                        </NameColumn>
                        <ResumeItem
                            timeline='2018 - 2020'
                            title={choiceText(
                                'Freelance Business',
                                'Kinh Doanh Tự Do',
                            )}
                        >
                            <span>
                                {choiceText(
                                    'Sale staff of Vinmart.',
                                    'Nhân viên bán hàng tại Vinmart.',
                                )}
                            </span>
                            <span>
                                {choiceText(
                                    'Selling online on facebook platform.',
                                    'Kinh doanh trực tuyến trên nền tảng facebook.',
                                )}
                            </span>
                        </ResumeItem>
                        <ResumeItem
                            timeline={choiceText(
                                '2020 - Present',
                                '2020 - Hiện tại',
                            )}
                            title={choiceText(
                                'Personal Web Project',
                                'Dự Án Web Cá Nhân',
                            )}
                        >
                            <span>
                                {choiceText(
                                    'Learning and practicing with many web projects.',
                                    'Học và thực hành với nhiều dự án web.',
                                )}
                            </span>
                            <span>
                                {choiceText(
                                    'Build e-commerce, task manager, CV portfolio web projects.',
                                    'Xây dựng các web về thương mại điện tử, quản lý công việc, CV.',
                                )}
                            </span>
                        </ResumeItem>
                        <NameColumn>
                            {choiceText('My Skill', 'Kỹ Năng')}
                        </NameColumn>
                        <ResumeItem
                            title={choiceText(
                                'Knowledge Basic',
                                'Hiểu Biết Cơ Bản',
                            )}
                        >
                            <span>
                                <b>HTML/CSS: </b>HTML5, CSS3, Bootstrap 4, SASS.
                            </span>
                            <span>
                                <b>{'Javascript'}: </b>
                                VanillaJS, ES6, Axios, AJAX, RESTful API.
                            </span>
                            <span>
                                <b>Typescript: </b>Type, Interface, Enum,...
                            </span>
                            <span>
                                <b>ReactJS: </b>React basic, Hooks, Redux, React
                                Route.
                            </span>
                            <span>
                                <b>Nodejs: </b>Nodejs basic, Express, MongoDB,
                                Mongoose.
                            </span>
                            <span>
                                <b>
                                    {choiceText(
                                        'Other Libraries: ',
                                        'Các thư viện khác: ',
                                    )}
                                </b>
                                Material UI, Formik, Yup,...
                            </span>
                            <span>
                                <b>Git: </b>Git basic, Github.
                            </span>
                            <span>
                                <b>
                                    {choiceText(
                                        'Programming Basic: ',
                                        'Lập trình cơ bản: ',
                                    )}
                                </b>
                                {choiceText(
                                    'Comment, OOP, Data structure and Algorithms.',
                                    'Bình luận, hướng đối tượng, cấu trúc dữ liệu và giải thuật.',
                                )}
                            </span>
                            <span>
                                <b>
                                    {choiceText(
                                        'Soft skills: ',
                                        'Các kỹ năng mềm: ',
                                    )}
                                </b>
                                {choiceText(
                                    'Self study, teamwork.',
                                    'Tự học, làm việc nhóm',
                                )}
                            </span>
                        </ResumeItem>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Resume;
