// import React, { useState } from 'react';
// import { images } from '../assets/asset';

// const techDetails = {
//     html: {
//         name: 'HTML',
//         reason: 'I use HTML to structure the content of websites semantically and cleanly.',
//     },
//     css: {
//         name: 'CSS',
//         reason: 'CSS lets me style components beautifully with full control over layouts and animations.',
//     },
//     javascript: {
//         name: 'JavaScript',
//         reason: 'JavaScript brings interactivity and logic to my web applications.',
//     },
//     tailwindcss: {
//         name: 'Tailwind CSS',
//         reason: 'Tailwind helps me design fast using utility classes and ensures consistency.',
//     },
//     react: {
//         name: 'React',
//         reason: 'React allows me to build reusable UI components and manage frontend state efficiently.',
//     },
//     express: {
//         name: 'Express.js',
//         reason: 'Express simplifies backend development and API creation in Node.js.',
//     },
//     mongo: {
//         name: 'MongoDB',
//         reason: 'MongoDB lets me store flexible data structures and scale applications easily.',
//     },
//     firebase: {
//         name: 'Firebase',
//         reason: 'I use Firebase for authentication, hosting, and real-time database support.',
//     },
// };

// const Skills = () => {
//     const [selectedTech, setSelectedTech] = useState('react');

//     return (
//         <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 pt-20">
//             <h2 className="text-4xl font-bold mb-4 text-white">My Skills</h2>
//             <p className="max-w-2xl text-center text-gray-400 mb-10">
//                 I work with modern web technologies to build fast, responsive, and scalable web applications.
//                 Click on any technology below to learn more about what I use and how I use it.
//             </p>

//             {/* Circular Layout */}
//             <div className="relative w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full border border-gray-600 flex items-center justify-center">
//                 {[
//                     { key: 'html', image: images.html, angle: 0 },
//                     { key: 'css', image: images.css, angle: 45 },
//                     { key: 'javascript', image: images.javascript, angle: 90 },
//                     { key: 'tailwindcss', image: images.tailwindcss, angle: 135 },
//                     { key: 'react', image: images.react, angle: 180 },
//                     { key: 'express', image: images.express, angle: 225 },
//                     { key: 'mongo', image: images.mongo, angle: 270 },
//                     { key: 'firebase', image: images.firebase, angle: 315 },
//                 ].map(({ key, image, angle }) => {
//                     const radius = 200;
//                     const rad = (angle * Math.PI) / 180;
//                     const x = radius * Math.cos(rad);
//                     const y = radius * Math.sin(rad);
//                     return (
//                         <img
//                             key={key}
//                             src={image}
//                             alt={key}
//                             onClick={() => setSelectedTech(key)}
//                             className={`w-12 h-12 md:w-16 md:h-16 absolute transition-all duration-300 transform hover:scale-110 cursor-pointer ${selectedTech === key ? 'scale-150' : ''
//                                 }`}
//                             style={{ top: `calc(50% + ${y}px - 2rem)`, left: `calc(50% + ${x}px - 2rem)` }}
//                         />
//                     );
//                 })}

//                 {/* Info Box */}
//                 <div className="mt-10 text-center max-w-3xs px-4">
//                     <h3 className="text-2xl text-blue-400 font-bold mb-2">
//                         {techDetails[selectedTech].name}
//                     </h3>
//                     <p className="text-gray-300 text-sm md:text-base">{techDetails[selectedTech].reason}</p>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Skills;
import React, { useEffect, useState } from 'react';
import { images } from '../assets/asset';

const techDetails = {
  html: { name: 'HTML', reason: 'I use HTML to structure the content of websites semantically and cleanly.' },
  css: { name: 'CSS', reason: 'CSS lets me style components beautifully with full control over layouts and animations.' },
  javascript: { name: 'JavaScript', reason: 'JavaScript brings interactivity and logic to my web applications.' },
  tailwindcss: { name: 'Tailwind CSS', reason: 'Tailwind helps me design fast using utility classes and ensures consistency.' },
  react: { name: 'React', reason: 'React allows me to build reusable UI components and manage frontend state efficiently.' },
  express: { name: 'Express.js', reason: 'Express simplifies backend development and API creation in Node.js.' },
  mongo: { name: 'MongoDB', reason: 'MongoDB lets me store flexible data structures and scale applications easily.' },
  firebase: { name: 'Firebase', reason: 'I use Firebase for authentication, hosting, and real-time database support.' },
};

const Skills = () => {
  const [selectedTech, setSelectedTech] = useState('react');
  const [radius, setRadius] = useState(200);

  // Responsive radius
  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 768 ? 130 : 200); // 130 for mobile, 200 for desktop
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div id='skill' className=" text-white flex flex-col items-center px-4 pl-8 md:pl-0">
      <h2 data-aos-duration='500' className="text-4xl font-extrabold mb-4 text-blue-600 lg:mb-10">My Skills</h2>
      <p  className="max-w-2xl text-center mb-10  text-sm lg:text-xl font-semibold">
        I work with modern web technologies to build fast, responsive, and scalable web applications.
        Click on any technology below to learn more about what I use and how I use it.
      </p>

      {/* Circle Layout */}
      <div className="relative w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full flex items-center justify-center">
        {[
          { key: 'html', image: images.html, angle: 0 },
          { key: 'css', image: images.css, angle: 45 },
          { key: 'javascript', image: images.javascript, angle: 90 },
          { key: 'tailwindcss', image: images.tailwindcss, angle: 135 },
          { key: 'react', image: images.react, angle: 180 },
          { key: 'express', image: images.express, angle: 225 },
          { key: 'mongo', image: images.mongo, angle: 270 },
          { key: 'firebase', image: images.firebase, angle: 315 },
        ].map(({ key, image, angle }) => {
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);
          return (
            <img

              key={key}
              src={image}
              alt={key}
              onClick={() => setSelectedTech(key)}
              className={`w-12 h-12 md:w-16 md:h-16 absolute transition-all duration-300 transform hover:scale-110 cursor-pointer ${selectedTech === key ? 'scale-150 shadow-2xl' : ''
                }`}
              style={{
                top: `calc(50% + ${y}px - 2rem)`,
                left: `calc(50% + ${x}px - 2rem)`,
              }}
            />
          );
        })}

        {/* Center Info */}
        <div className="absolute text-center px-4 max-w-[200px] md:max-w-[250px] text-xs sm:text-sm md:text-base">
          <h3 className="text-xl md:text-2xl text-blue-400 font-bold mb-2">
            {techDetails[selectedTech].name}
          </h3>
          <p className="text-gray-300 leading-snug">{techDetails[selectedTech].reason}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
