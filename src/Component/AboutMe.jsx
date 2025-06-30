import React, { useState } from 'react';
import { images } from '../assets/asset';
import Button from '../Shared/Button';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('journey'); // 'journey' or 'goal'

    return (
        <div id='about_me' className='flex flex-col md:flex-row justify-between items-end gap-8'>
            {/* Image */}
            <div className='flex-1 flex justify-start items-center'>
                <img src={images.myimg2} alt="myimage" />
            </div>

            {/* Content */}
            <div className='flex-1 flex flex-col gap-6'>
                <div>
                    <span className='text-4xl font-extrabold mb-4 text-blue-600'>ABOUT ME</span>
                    <hr className='w-1/2' />
                </div>

                <p className='text-4xl lg:text-6xl font-extrabold'>
                    Transforming Vision <br /> Into Real Project
                </p>

                {/* Tabs */}
                <ul className='list-none flex gap-4'>
                    <li
                        className={`text-xl cursor-pointer ${activeTab === 'journey' ? 'text-blue-600 font-bold' : ''}`}
                        onClick={() => setActiveTab('journey')}
                    >
                        My Journey
                    </li>
                    <li
                        className={`text-xl cursor-pointer ${activeTab === 'goal' ? 'text-blue-600 font-bold' : ''}`}
                        onClick={() => setActiveTab('goal')}
                    >
                        My Goal
                    </li>
                </ul>

                {/* Conditionally Render Paragraphs */}
                {activeTab === 'journey' && (
                    <p className='text-sm lg:text-xl font-semibold'>
                        I started my web development journey with the Programming Hero course, beginning with basic projects using HTML, CSS, and JavaScript. Later, I advanced to building frontend applications with React, and then learned Node.js and Express for backend development. I also gained experience in handling data with MongoDB.
                        Now, I feel confident in my skills and truly enjoy learning and building real-world projects.
                    </p>
                )}

                {activeTab === 'goal' && (
                    <p className='text-sm lg:text-xl font-semibold'>
                        Hi, I’m Dip Chondo — a Web Developer passionate about building clean and modern web experiences. I specialize in
                        <span className="text-blue-600 font-extrabold text-xl mx-1">React</span> and
                        <span className="text-blue-600 font-extrabold text-xl mx-1">Tailwind CSS</span>, turning ideas into responsive and user-friendly interfaces. I believe in simplicity, performance, and writing clean, scalable code.
                    </p>
                )}

                {/* Button */}
                <div>
                    <Button text_value={'Contact Me'}  navigate='contact_me' />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
