import React, { forwardRef, useContext, useRef, useState } from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player/lazy';

import './index.scss';
import Title from '../../components/Title';
import PortfolioItem from './PortfolioItem';
import Modal from '../../components/Modal';
import { LanguageContext } from '../../App';

const settings = {
    className: 'slider',
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
};

const LINK_YOUTUBE = [
    'https://www.youtube.com/watch?v=1G2Ikg9z3sE',
    'https://www.youtube.com/watch?v=q1kYxN0zODQ',
    'https://www.youtube.com/watch?v=f62p_KpkrV4',
];

const Portfolio = forwardRef((props, ref) => {
    const [indexVideo, setIndexVideo] = useState(0);
    const [open, setOpen] = useState(false);

    const sliderRef = useRef(null);

    const sliderPause = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPause();
        }
    };

    const sliderPlay = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
        }
    };

    const handleCloseModal = () => {
        setOpen(false);
        sliderPlay();
    };

    const handleOpenModal = (index) => {
        setIndexVideo(index);
        setOpen(true);
        sliderPause();
    };

    const { language } = useContext(LanguageContext);

    const choiceText = (engText, vieText) => {
        if (language === 'eng') {
            return engText;
        } else {
            return vieText;
        }
    };

    return (
        <section id='portfolio' ref={ref}>
            <div className='portfolio__container'>
                <Title sup={choiceText('My works', 'Những việc đã làm')}>
                    {choiceText('Portfolio', 'Danh Mục')}
                </Title>
                <div
                    className='portfolio__content'
                    data-aos='fade'
                    data-aos-delay='100'
                    data-aos-duration='1000'
                    data-aos-easing='ease-in-out'
                    data-aos-once='true'
                >
                    <Slider {...settings} ref={sliderRef}>
                        <PortfolioItem
                            value={0}
                            handleOpenModal={handleOpenModal}
                            imageBackground='ecommerce-img-1'
                            imageVideo='ecommerce-img-2'
                            linkDemo='https://tenj-ecommerce-mui.web.app/'
                            linkGithub='https://github.com/tenkaziol247/tenj-ecommerce-Mui'
                        >
                            <h4>Tenj E-Commerce</h4>
                            <h5>
                                {choiceText(
                                    'October 2020 - November 2020',
                                    '10/2020 - 11/2020',
                                )}
                            </h5>
                            <p>
                                <b>{choiceText('Topic: ', 'Chủ đề: ')}</b>{' '}
                                {choiceText(
                                    'E-commerce.',
                                    'Thương mại điện tử.',
                                )}
                            </p>
                            <p>
                                <b>{choiceText('Description: ', 'Mô tả: ')}</b>
                                {choiceText(
                                    `Built-in shopping cart functionality, checkout, 
                                    user authentication, account information, orders placed
                                    , list of products.`,
                                    `Xây dựng chức năng cửa hàng, thanh toán, xác thực người dùng,
                                    thông tin tài khoản, các đơn hàng đã đặt, danh sách sản phẩm.`,
                                )}
                            </p>
                            <p>
                                <b>
                                    {choiceText('Technology: ', 'Công nghệ: ')}
                                </b>
                                Reactjs, Redux, React Router, Material UI, SASS,
                                Formik, Notistack, Firebase.
                            </p>
                        </PortfolioItem>
                        <PortfolioItem
                            value={1}
                            handleOpenModal={handleOpenModal}
                            imageBackground='todolist-img-1'
                            imageVideo='todolist-img-2'
                            linkDemo='https://tenj-task-manager.firebaseapp.com/'
                            linkGithub='https://github.com/tenkaziol247/tenj-task-manager-fe'
                            linkGithubBE='https://github.com/tenkaziol247/tenj-task-manager-be'
                        >
                            <h4>Tenj Task Manager</h4>
                            <h5>
                                {choiceText(
                                    'January 2021 - February 2021',
                                    '01/2021 - 02/2021',
                                )}
                            </h5>
                            <p>
                                <b>{choiceText('Topic: ', 'Chủ đề: ')}</b>
                                {choiceText(
                                    'To do list - Calendar.',
                                    'Danh sách việc cần làm - Lịch.',
                                )}
                            </p>
                            <p>
                                <b>{choiceText('Description: ', 'Mô tả: ')}</b>
                                {choiceText(
                                    `Features like adding tasks,
                                    fixing tasks, deleting tasks, arranging tasks.
                                    Calendar displays tasks by day. Manage with
                                    personal account, update user information.
                                    The server side builds APIs and manages the data.`,
                                    `Gồm các tính chất như thêm nhiệm vụ, sửa nhiệm vụ,
                                    xóa nhiệm vụ, sắp xếp nhiệm vụ. Lịch hiện thị các nhiệm vụ theo ngày.
                                    Quản lý với tài khoản cá nhân, cập nhật thông tin người dùng.
                                    Phía server xây dựng các API và quản lý dữ liệu.`,
                                )}
                            </p>
                            <p>
                                <b>
                                    {choiceText('Technology: ', 'Công nghệ: ')}
                                </b>
                                Reactjs, Redux, React Router, Material UI,
                                Formik, Moment, Typescript. Express, MongoDB,
                                Mongoose, Jest...
                            </p>
                        </PortfolioItem>
                        <PortfolioItem
                            value={2}
                            handleOpenModal={handleOpenModal}
                            imageBackground='portfolio-img-1'
                            imageVideo='portfolio-img-2'
                            linkDemo='https://letuanvn247-portfolio.firebaseapp.com/'
                            linkGithub='https://github.com/tenkaziol247/letuanvn247-portfolio'
                        >
                            <h4>Tenj CV Portfolio</h4>
                            <h5>{choiceText('February 2021', '02/2021')}</h5>
                            <p>
                                <b>{choiceText('Topic: ', 'Chủ đề: ')}</b>{' '}
                                {choiceText(
                                    'CV Portfolio.',
                                    'Danh mục phát triển.',
                                )}
                            </p>
                            <p>
                                <b>{choiceText('Description: ', 'Mô tả: ')}</b>
                                {choiceText(
                                    `The project presents my personal information and what projects have done.`,
                                    `Dự án trình bày thông tin cá nhân và các dự án đã làm được của tôi.`,
                                )}
                            </p>
                            <p>
                                <b>
                                    {choiceText('Technology: ', 'Công nghệ: ')}
                                </b>
                                Reactjs, SASS, AOS, Firebase, Formik, React
                                Slick.
                            </p>
                        </PortfolioItem>
                    </Slider>
                </div>
            </div>
            <Modal show={open} closeModal={handleCloseModal}>
                <ReactPlayer url={LINK_YOUTUBE[indexVideo]} controls={true} />
            </Modal>
        </section>
    );
});

export default Portfolio;
