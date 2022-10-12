import React from 'react'
import {useSpring, animated} from "react-spring";
import s from './../FirstPage.module.css'
import avatar from '../../assets/76DC15A9-40B1-483B-8EAB-08F80949.png'

const Info = ({aboutMeClick}) => {
    const aboutMeContainer = useSpring({
        display: aboutMeClick ? 'block' : 'none',
        from: {
            height: 'none',
        }
    })

    return(
        <animated.div
            style={aboutMeContainer}
            className={'h-fit'}
        >
            <div className='px-4 pb-28'>
                <h1 className='font-bold text-3xl py-8'>Информация обо мне!</h1>
                <div className='flex flex-col md:flex-row justify-center'>
                    <div className='pb-0 flex justify-center'>
                        <img
                            src={avatar}
                            alt="аватар"
                            className={s.myPhoto}
                        />
                    </div>
                    <div>
                        <div className='pb-10'>
                            <h1 className='font-bold text-2xl'>Константин, 22 года</h1>
                            <div>
                                <p>Имею огромное желание попасть в крутую команду разработчиков
                                    с достойной заработной платой,
                                    чтобы развивать ваш продукт и развиваться как специалист
                                    вместе с вами! Ищу работу в городе Ростов-на-Дону,
                                    однако рассмотрю варианты с переездом в города
                                    центральной части России.
                                    Буду рад быть вам полезным и попасть в вашу команду,
                                    рассмотрю все варианты, предпочтительно для связи со мной
                                    использовать мессенджеры.</p>

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
    )
}

export default Info