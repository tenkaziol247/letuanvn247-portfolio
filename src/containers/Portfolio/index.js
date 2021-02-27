import React, { useState } from 'react';
import Slider from 'react-slick';

import './index.scss';
import Title from '../../components/Title';
import PortfolioItem from './PortfolioItem';
import Modal from '../../components/Modal';

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

export default function Portfolio(props) {
    const [open, setOpen] = useState(false);

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleOpenModal = () => {
        setOpen(true);
    };

    return (
        <section id='portfolio'>
            <div className='portfolio__container'>
                <Title sup='My Works'>Portfolio</Title>
                <div
                    className='portfolio__content'
                    data-aos='fade'
                    data-aos-delay='100'
                    data-aos-duration='1000'
                    data-aos-easing='ease-in-out'
                    data-aos-once='true'
                >
                    <Slider {...settings}>
                        <PortfolioItem
                            handleOpenModal={handleOpenModal}
                            imageBackground='ecommerce-img-1'
                            imageVideo='ecommerce-img-2'
                            linkDemo='https://tenj-ecommerce-mui.web.app/'
                            linkGithub='https://github.com/tenkaziol247/tenj-ecommerce-Mui'
                        >
                            <h4>Tenj E-Commerce</h4>
                            <h5>October 2020 - November 2020</h5>
                            <p>
                                <b>Topic: </b>E-commerce.
                            </p>
                            <p>
                                <b>Description: </b>Built-in shopping cart
                                functionality, checkout, user authentication,
                                account information, orders placed, list of
                                products.
                            </p>
                            <p>
                                <b>Technology: </b>Reactjs, Redux, React Router,
                                Material UI, SASS, Firebase, Formik, Notistack.
                            </p>
                        </PortfolioItem>
                        <PortfolioItem
                            handleOpenModal={handleOpenModal}
                            imageBackground='todolist-img-1'
                            imageVideo='todolist-img-2'
                            linkDemo='https://tenj-task-manager.firebaseapp.com/'
                            linkGithub='https://github.com/tenkaziol247/tenj-task-manager-fe'
                            linkGithubBE='https://github.com/tenkaziol247/tenj-task-manager-be'
                        >
                            <h4>Tenj Task Manager</h4>
                            <h5>January 2021 - February 2021</h5>
                            <p>
                                <b>Topic: </b>To do list - Calendar.
                            </p>
                            <p>
                                <b>Description: </b> Features like adding tasks,
                                fixing tasks, deleting tasks, arranging tasks.
                                Calendar displays tasks by day. Manage with
                                personal account, update user information.
                            </p>
                            <p>
                                <b>Technology: </b>Reactjs, Redux, React Router,
                                Material UI, Formik, Moment, Typescript.
                                Express, MongoDB, Mongoose, Multer, Jest...
                            </p>
                        </PortfolioItem>
                    </Slider>
                </div>
            </div>
            <Modal show={open} closeModal={handleCloseModal}>
                <p>video youtube</p>
            </Modal>
        </section>
    );
}
