import React from 'react';
import { images } from '../assets/asset';
import { motion } from 'framer-motion';
import { TypingEffect } from '../AnimationComponent/TypingEffect';
import SocialLink from './SocialLink';
import Button from '../Shared/Button';





const Banner = () => {
    return (
        <div id='home' className="overflow-hidden md:h-[50vh] lg:h-[70vh] flex justify-center flex-col py-8 md:p-0" style={{ backgroundImage: `url(${images.bannerBG})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}  >


            <div className='max-w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-center w-full gap-8'>

                <div className='w-full md:w-1/2'>
                    <div className='space-y-4'>
                        <p className='text-2xl lg:text-3xl font-bold'>Hello, I am Dip Chondo Partho</p>
                        <TypingEffect text='MERN STACK DEVELOPER' text_position='text-left' />

                        <p className='font-semibold text-sm lg:text-xl'>Hi, I’m a passionate Web Developer focused on building clean and user-friendly digital experiences.
                            I specialize in React, Tailwind CSS, and modern web technologies.
                            Let’s turn ideas into interactive websites.
                        </p>

                        <div className="flex gap-2.5 items-center">
                            <SocialLink />
                        </div>

                        <div>

                            <Button text_value={'Download CV'}/>

                        </div>

                    </div>

                </div>

                <div className="relative w-48 h-48 md:w-70 md:h-70 lg:w-100 lg:h-100 rounded-full">
                    {/* Animated Wave Ring */}
                    {[0, 0.5, 1].map((delay) => (
                        <motion.div
                            key={delay}
                            className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-blue-50 z-10"
                            initial={{ scale: 1, opacity: 0.1 }}
                            animate={{ scale: 0.5, opacity: 0 }}
                            transition={{
                                duration: 3,
                                repeat: 1,
                                ease: 'easeInOut',
                                delay,
                            }}
                        />
                    ))}

                    {/* Profile Image */}
                    <img
                        src={images.myimg1}
                        alt="Profile"
                        className="rounded-full w-full h-full object-cover  z-10 relative"
                    />
                </div>
            </div>


        </div>
    );
};

export default Banner;
