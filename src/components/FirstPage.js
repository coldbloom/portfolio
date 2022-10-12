import React, {useState} from "react";
import {useSpring, animated} from "react-spring";
import s from './FirstPage.module.css'
import cn from 'classnames';
import {AiFillGithub, AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdManageAccounts} from 'react-icons/md'

import Info from "./ChildComponent/Info";

import Footer from "./ChildComponent/Footer";

const FirstPage = () => {
    const props = useSpring({to: {opacity: 1}, from: {opacity: 0}, delay: 500})
    const translate = useSpring({to: {y: 0}, from: {y: -100}, delay: 100})

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

    const [aboutMeClick, setAboutMeClick] = useState(false);
    const {tX} = useSpring({
        from: {tX: 0},
        tX: aboutMeClick ? 0 : 1,
        config: {duration: 800},
    })

    const returnTitlePage = () => {
        if (aboutMeClick === true) {
            setAboutMeClick(!aboutMeClick);
        }
    }


    const vhToPixel = (value) => `${(window.innerHeight * value) / 100}px`;
    const mainAnimateProps = useSpring({
        height: aboutMeClick ? "100px" : vhToPixel(100),
        opacity: aboutMeClick ? 0.6 : 1,
        cursor: aboutMeClick ? 'pointer' : 'default',
        from: {
            height: vhToPixel(100),
            opacity: 1,
            cursor: 'default',
        }
    })

    const containerProps = useSpring({
        opacity: aboutMeClick ? 0 : 1,
        transform: aboutMeClick ? "translateY(-200%)" : "translateY(0%)",
        from: {
            transform: "translateY(0%)",
        }
    })

    console.log(document.documentElement.clientHeight)

    return (
        <div>
            <div>
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
                                className={cn('flex flex-row border items-center bg-gray-300 px-4 pt-2 pb-3 rounded mb-8', s.btnOne)}>
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
                                className={cn('flex flex-row border items-center bg-gray-300 px-4 pt-2 pb-3 rounded mb-8', s.btnTwo)}>
                                <AiOutlineFundProjectionScreen size={22}/>
                                <a href="https://versel-hqe2.vercel.app/">
                                    <p className='underline text-xl pl-1 leading-10'>
                                        Показательный проект
                                    </p>
                                </a>
                            </animated.button>
                            <animated.button
                                onClick={() => setAboutMeClick(!aboutMeClick)}
                                style={{
                                    scale: tX.to({
                                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                                    }),
                                }}
                                className={cn('flex flex-row border items-center bg-gray-300 px-4 pt-2 pb-3 rounded', s.btnThird)}
                            >
                                <MdManageAccounts size={22}/>
                                <p className='underline text-xl pl-1 leading-10'>Подробнее обо мне</p>
                            </animated.button>
                        </div>
                    </animated.div>
                </animated.div>


                {/*About Me container*/}
                <Info aboutMeClick={aboutMeClick}/>
            </div>


            {/*footer*/}
            <Footer />
        </div>
    )
}

export default FirstPage