// import React, { useState } from 'react';
// import { images } from '../assets/asset';
// import Button from '../Shared/Button';

// const AboutMe = () => {
//     const [activeTab, setActiveTab] = useState('journey'); // 'journey' or 'goal'

//     return (
//         <div id='about_me' className='flex flex-col md:flex-row justify-between items-end gap-8'>
//             {/* Image */}
//             <div className='flex-1 flex justify-start items-center'>
//                 <img src={images.myimg2} alt="myimage" />
//             </div>

//             {/* Content */}
//             <div className='flex-1 flex flex-col gap-6'>
//                 <div>
//                     <span className='text-4xl font-extrabold mb-4 text-blue-600'>ABOUT ME</span>
//                     <hr className='w-1/2' />
//                 </div>

//                 <p className='text-4xl lg:text-6xl font-extrabold'>
//                     Transforming Vision <br /> Into Real Project
//                 </p>

//                 {/* Tabs */}
//                 <ul className='list-none flex gap-4'>
//                     <li
//                         className={`text-xl cursor-pointer ${activeTab === 'journey' ? 'text-blue-600 font-bold' : ''}`}
//                         onClick={() => setActiveTab('journey')}
//                     >
//                         My Journey
//                     </li>
//                     <li
//                         className={`text-xl cursor-pointer ${activeTab === 'goal' ? 'text-blue-600 font-bold' : ''}`}
//                         onClick={() => setActiveTab('goal')}
//                     >
//                         My Goal
//                     </li>
//                 </ul>

//                 {/* Conditionally Render Paragraphs */}
//                 {activeTab === 'journey' && (
//                     <p className='text-sm lg:text-xl font-semibold'>
//                         I started my web development journey with the Programming Hero course, beginning with basic projects using HTML, CSS, and JavaScript. Later, I advanced to building frontend applications with React, and then learned Node.js and Express for backend development. I also gained experience in handling data with MongoDB.
//                         Now, I feel confident in my skills and truly enjoy learning and building real-world projects.
//                     </p>
//                 )}

//                 {activeTab === 'goal' && (
//                     <p className='text-sm lg:text-xl font-semibold'>
//                         Hi, I’m Dip Chondo — a Web Developer passionate about building clean and modern web experiences. I specialize in
//                         <span className="text-blue-600 font-extrabold text-xl mx-1">React</span> and
//                         <span className="text-blue-600 font-extrabold text-xl mx-1">Tailwind CSS</span>, turning ideas into responsive and user-friendly interfaces. I believe in simplicity, performance, and writing clean, scalable code.
//                     </p>
//                 )}

//                 {/* Button */}
//                 <div>
//                     <Button text_value={'Contact Me'}  navigate='contact_me' />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutMe;
import React, { useState } from 'react';
import { images } from '../assets/asset';
import Button from '../Shared/Button';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('journey'); // 'journey', 'work', or 'hobbies'

    return (
        <div id="about_me" className="flex flex-col md:flex-row justify-between items-end gap-8 py-12">
            {/* Image */}
            <div className="flex-1 flex justify-start items-center">
                <img
                    src={images.myimg2}
                    alt="Dip Chondo"
                    className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-6">
                {/* Heading */}
                <div>
                    <span className="text-4xl font-extrabold mb-4 text-blue-600">ABOUT ME</span>
                    <hr className="w-1/2 border-blue-600" />
                </div>

                {/* Intro */}
                <p className="text-4xl lg:text-6xl font-extrabold leading-tight">
                    Coding with Passion,
                    <br /> Living with Purpose
                </p>

                {/* Tabs */}
                <ul className="list-none flex gap-4 flex-wrap">
                    <li
                        className={`text-lg cursor-pointer transition-colors ${activeTab === 'journey' ? 'text-blue-600 font-bold' : 'text-gray-700'
                            }`}
                        onClick={() => setActiveTab('journey')}
                    >
                        My Journey
                    </li>
                    <li
                        className={`text-lg cursor-pointer transition-colors ${activeTab === 'work' ? 'text-blue-600 font-bold' : 'text-gray-700'
                            }`}
                        onClick={() => setActiveTab('work')}
                    >
                        What I Enjoy
                    </li>
                    <li
                        className={`text-lg cursor-pointer transition-colors ${activeTab === 'hobbies' ? 'text-blue-600 font-bold' : 'text-gray-700'
                            }`}
                        onClick={() => setActiveTab('hobbies')}
                    >
                        Beyond Coding
                    </li>
                </ul>

                {/* Tab Content */}
                {activeTab === 'journey' && (
                    <p className="text-sm lg:text-xl font-medium">
                        My programming journey began with curiosity, a hunger to create, and a spark from the
                        <span className="text-blue-600 font-bold mx-1">Programming Hero</span> course.
                        I started by learning HTML, CSS, and JavaScript, building simple but meaningful projects.
                        As I grew, I dived into React for frontend magic, Node.js & Express for backend logic, and MongoDB for data handling.
                        Today, I feel confident crafting full-stack applications that bring ideas to life — and I’m still learning something new every day.
                    </p>
                )}

                {activeTab === 'work' && (
                    <p className="text-sm lg:text-xl font-medium ">
                        I love building clean, responsive, and user-friendly web applications.
                        My favorite part of development is turning ideas into functional, beautiful interfaces using
                        <span className="text-blue-600 font-bold mx-1">React</span> and
                        <span className="text-blue-600 font-bold mx-1">Tailwind CSS</span>.
                        I enjoy problem-solving, optimizing performance, and writing scalable, maintainable code that feels good to work with.
                    </p>
                )}

                {activeTab === 'hobbies' && (
                    <p className="text-sm lg:text-xl font-medium">
                        Outside of programming, I’m an explorer at heart.
                        I enjoy playing cricket, listening to music, and diving into photography to capture everyday beauty.
                        I believe these hobbies fuel my creativity and keep my mind fresh, helping me bring unique perspectives into my coding work.
                    </p>
                )}

                {/* Button */}
                <div>
                    <Button text_value="Contact Me" navigate="contact_me" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
