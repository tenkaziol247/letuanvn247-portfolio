import React from 'react';
import Title from '../../components/Title';

import './index.scss';
import NameColumn from './NameColumn';
import ResumeItem from './ResumeItem';

export default function Resume(props) {
    return (
        <section id='resume'>
            <div className='resume__container'>
                <Title sup='My Journey'>Resume</Title>
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
                        <NameColumn>My Education</NameColumn>
                        <ResumeItem
                            timeline='2014 - 2018'
                            title='Vietnam National University of Forestry'
                        >
                            <span>
                                <b>Bachelor of Forest Resources Management.</b>
                            </span>
                            <span>Grade: Good.</span>
                            <span>GPA: 2.99/4.</span>
                        </ResumeItem>
                        <ResumeItem
                            timeline='2020 - Present'
                            title='CyberSoft - Programmer Training Center'
                        >
                            <span>
                                <b>Basic Programming course: </b>
                                Thinking programming, Java language, algorithms,
                                OOP.
                            </span>
                            <span>
                                <b>Front-end Foundation course: </b>
                                Front-end orientation, HTML5, CSS3, Bootstrap 4,
                                SASS/SCSS, Javascript &#40;ES5/ES6&#41;, AJAX,
                                JQuery, Git.
                            </span>
                        </ResumeItem>
                        <ResumeItem
                            timeline='2020 - Present'
                            title='Udemy - Learn Anything, On Your Schedule'
                        >
                            <span>
                                <b>Reactjs course: </b>
                                Created by Maximilian Schwarzmüller. Learn
                                Reactjs, Hooks, Redux, React Routing,
                                Animations.
                            </span>
                            <span>
                                <b>Typescript course: </b>
                                Created by Stephen Grider. Basic Typescript,
                                integrate Typescript into React/Redux or Express
                                projects.
                            </span>
                            <span>
                                <b>Nodejs course: </b>
                                Created by Andrew Mead, Rob Percival. Learn
                                Nodejs, Express, MongoDB, Jest.
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
                        <NameColumn>My Experience</NameColumn>
                        <ResumeItem
                            timeline='2018 - 2020'
                            title='Freelance Business'
                        >
                            <span>Sale staff of Vinmart.</span>
                            <span>Selling online on facebook platform.</span>
                        </ResumeItem>
                        <ResumeItem
                            timeline='2020 - Present'
                            title='Personal Web Project'
                        >
                            <span>
                                Learning and practicing with many web projects.
                            </span>
                            <span>
                                Build e-commerce, task manager, cv portfolio web
                                projects.
                            </span>
                        </ResumeItem>
                        <NameColumn>My Skill</NameColumn>
                        <ResumeItem title='Knowledge Basic'>
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
                                <b>Other Libraries: </b>Material UI, Formik,
                                Yup, Multer,...
                            </span>
                            <span>
                                <b>Git: </b>Git basic, Github.
                            </span>
                            <span>
                                <b>Programming Basic: </b>Comment, OOP, Data
                                structure and Algorithms.
                            </span>
                            <span>
                                <b>Soft skills: </b>Self study, Teamwork.
                            </span>
                        </ResumeItem>
                    </div>
                </div>
            </div>
        </section>
    );
}
