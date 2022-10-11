import React, {useRef, useState} from "react";
import {useSpring, animated} from "react-spring";
import s from './FirstPage.module.css'
import cn from 'classnames';
import {AiFillGithub, AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdManageAccounts} from 'react-icons/md'

import {FaTelegramPlane} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaVk} from 'react-icons/fa'

import avatar from '../assets/76DC15A9-40B1-483B-8EAB-08F80949.png'

const FirstPage = () => {
    const props = useSpring({to: {opacity: 1}, from: {opacity: 0}, delay: 500})
    const footerProps = useSpring({to: {y: 0}, from: {y: -100}, delay: 100})
    const translate = useSpring({to: {y: 0}, from: {y: -100}, delay: 100})
    const boom = useSpring({to: {scale: 100}, from: {scale: 0}, delay: 100})

    const [gitClick, setGitClick] = useState(true);
    const {x} = useSpring({
        from: {x: 0},
        x: gitClick ? 1 : 0,
        config: {duration: 800},
    })

    const [projectClick, setProjectClick] = useState(true);
    const {wX} = useSpring({
        from: {wX: 0},
        wX: projectClick ? 1 : 0,
        config: {duration: 1000},
    })

    const [aboutMeCkick, setAboutMeClick] = useState(false);
    const {tX} = useSpring({
        from: {tX: 0},
        tX: aboutMeCkick ? 0 : 1,
        config: {duration: 800},
    })

    const returnTitlePage = () => {
        if (aboutMeCkick === true) {
            setAboutMeClick(!aboutMeCkick);
        }
    }


    const vhToPixel = (value) => `${(window.innerHeight * value) / 100}px`;
    const mainAnimateProps = useSpring({
        height: aboutMeCkick ? "100px" : vhToPixel(100),
        opacity: aboutMeCkick ? 0.6 : 1,
        cursor: aboutMeCkick ? 'pointer' : 'default',
        from: {
            height: vhToPixel(100),
            opacity: 1,
            cursor: 'default',
        }
    })

    const containerRef = useRef(null);
    const containerProps = useSpring({
        opacity: aboutMeCkick ? 0 : 1,
        transform: aboutMeCkick ? "translateY(-200%)" : "translateY(0%)",
        from: {
            transform: "translateY(0%)",
        }
    })

    const aboutMeContainer = useSpring({
        display: aboutMeCkick ? 'block' : 'none',
        from: {
            height: 'none',
        }
    })

    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <animated.div
                    style={mainAnimateProps}
                    className={cn('w-full', s.bgColor)}
                    onClick={returnTitlePage}
                >
                    {/*header*/}
                    <animated.p
                        style={translate}
                        className='pt-4 px-4'
                    >
                        САЙТ&#8209;ПОРТФОЛИО ФРОНТЕНД&#8209;РАЗРАБОТЧИКА
                    </animated.p>

                    {/*main*/}
                    <animated.div
                        style={containerProps}
                    >
                        {/*title*/}
                        <animated.div style={props}>
                            <div className='flex flex-col items-center pt-10 pb-10 md:pt-10 md:pb-10'>
                                <div className={cn('border-2 border-green-800 w-fit md:px-6 px-2 pt-1 pb-2', s.half)}>
                                    <h1 className='font-bold text-center text-3xl text-black'>Константин Колесник</h1>
                                </div>
                                <div className='flex flex-col pt-2'>
                                    <p>JAVASCRIPT / REACT / NEXT JS</p>
                                    <p>CSS / SCSS / HTML5</p>
                                </div>
                            </div>
                        </animated.div>
                        {/*buttons*/}
                        <div className='flex flex-col items-center justify-center'>
                            <animated.button
                                onClick={() => setGitClick(!gitClick)}
                                style={{
                                    scale: x.to({
                                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                                    }),
                                }}
                                className='flex flex-row border items-center bg-gray-300 px-4 py-2 pb-3 rounded mb-8'>
                                <AiFillGithub size={22}/>
                                <a href="https://github.com/coldbloom">
                                    <p className='underline text-xl pl-1 leading-10'>
                                        Мой GitHub
                                    </p>
                                </a>
                            </animated.button>
                            <animated.button
                                onClick={() => setProjectClick(!projectClick)}
                                style={{
                                    scale: wX.to({
                                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                                    }),
                                }}
                                className='flex flex-row border items-center bg-gray-300 px-4 pt-2 pb-3 rounded mb-8'>
                                <AiOutlineFundProjectionScreen size={22}/>
                                <a href="https://versel-hqe2.vercel.app/">
                                    <p className='underline text-xl pl-1 leading-10'>
                                        Показательный проект
                                    </p>
                                </a>
                            </animated.button>
                            <animated.button
                                onClick={() => setAboutMeClick(!aboutMeCkick)}
                                style={{
                                    scale: tX.to({
                                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                                    }),
                                }}
                                className='flex flex-row border items-center bg-gray-300 px-4 pt-2 pb-3 rounded mb-4'
                            >
                                <MdManageAccounts size={22}/>
                                <p className='underline text-xl pl-1 leading-10'>Подробнее обо мне</p>
                            </animated.button>
                        </div>
                    </animated.div>
                </animated.div>


                {/*About Me container*/}
                <animated.div
                    style={aboutMeContainer}
                    className={'h-fit'}
                >
                    <div className='px-4 pb-28'>
                        <h1 className='font-bold text-3xl py-8'>Информация обо мне!</h1>
                        <div className='flex flex-col md:flex-row justify-center'>
                            <div className='pb-0 flex justify-center'>
                                <img src={avatar} alt="аватар" />
                            </div>
                            <div>
                                <div className='pb-10'>
                                    <h1 className='font-bold text-2xl'>Константин, 22 года</h1>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                            eu nulla lectus.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                            eu nulla lectus.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                            eu nulla lectus.</p>
                                    </div>
                                </div>
                                <div className='pb-10 flex flex-col items-center'>
                                    <h3 className='font-bold text-xl'>Навыки:</h3>
                                    <ul className='text-left w-fit md:pl-0'>
                                        <li className={s.wLi}>&mdash; работа с фреймворком React, Next</li>
                                        <li className={s.wLi}>&mdash; знание JavaScript ES6 ES7</li>
                                        <li className={s.wLi}>&mdash; навыки верстки: HTML, CSS, SASS</li>
                                        <li className={s.wLi}>&mdash; опыт работы с Git</li>
                                        <li className={s.wLi}>&mdash; фундаментальные знания академического программирования</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bold text-xl'>Образование:</h3>
                                    <p className='text-center'>ДГТУ, программная инженерия, бакалавр, выпуск 2021 года</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>


            {/*footer*/}
            <animated.div
                style={footerProps}
                className={cn('w-full text-white flex flex-col md:flex-row items-center pt-2 justify-center', s.footer)}
            >
                <div className='flex flex-row mt-1 md:mt-0'>
                    <a href="https://api.whatsapp.com/send?phone=89895052785&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83...">
                        <FaWhatsapp size={28} className='mr-2' />
                    </a>
                    <a href="https://t.me/kostyabloo">
                        <FaTelegramPlane size={28} className='mr-4' />
                    </a>
                    <div className='hidden md:flex'>
                        <a href="coldbloom22@gmail.com">
                            <strong className='pb-1 mr-4 text-lg'>coldbloom22@gmail.com</strong>
                        </a>
                    </div>
                    <a href="https://vk.com/kostyabloom">
                        <FaVk size={28} className='mr-2'/>
                    </a>
                    <FaInstagram size={28}/>
                </div>
                <div className='flex md:hidden mt-2'>
                    <strong className='pb-1 mr-4 text-xl md:text-lg'>@coldbloom22@gmail.com</strong>
                </div>
            </animated.div>
        </div>
    )
}

export default FirstPage