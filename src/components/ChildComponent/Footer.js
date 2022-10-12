import React from "react";
import cn from "classnames";
import s from "../FirstPage.module.css";
import {FaInstagram, FaTelegramPlane, FaVk, FaWhatsapp} from "react-icons/fa";
import {animated, useSpring} from "react-spring";

const Footer = () => {

    const footerProps = useSpring({to: {y: 0}, from: {y: -100}, delay: 100})

    return (
        <animated.div
            style={footerProps}
            className={cn('w-full text-white flex flex-col md:flex-row items-center pt-2 justify-center', s.footer)}
        >
            <div className='flex flex-row mt-1 md:mt-0'>
                <a href="https://api.whatsapp.com/send?phone=89895052785&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83...">
                    <FaWhatsapp size={28} className='mr-2'/>
                </a>
                <a href="https://t.me/kostyabloo">
                    <FaTelegramPlane size={28} className='mr-4'/>
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
    )
}

export default Footer