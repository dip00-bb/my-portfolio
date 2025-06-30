// import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const ProjectDetails = ({ images = [], title = '', description = '', techUses = [], problemFaced = [] }) => {
//     const [activeTab, setActiveTab] = useState('tech');
//     console.log(description)
//     return (
//         <div className="border-4 p-4 md:p-6 rounded-xl max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
//             {/* Image Carousel */}
//             <div className="w-full lg:w-1/2">
//                 <Carousel showThumbs={false} infiniteLoop autoPlay>
//                     {images.map((img, idx) => (
//                         <div key={idx}>
//                             <img src={img} alt={`Slide ${idx + 1}`} className="rounded-lg" />
//                         </div>
//                     ))}
//                 </Carousel>
//             </div>

//             {/* Text Section */}
//             <div className="w-full lg:w-1/2 flex flex-col gap-4">
//                 <h2 className="text-2xl font-bold text-center py-1">{title}</h2>
//                 <div className="p-4 rounded-lg">
//                     <p className="font-semibold">{description}</p>
//                 </div>

//                 {/* Tabs */}
//                 <div className="flex justify-center gap-4 font-bold mt-2">
//                     <button
//                         onClick={() => setActiveTab('tech')}
//                         className={`border-b-2 ${activeTab === 'tech' ? 'border-blue-700' : 'border-transparent'}`}
//                     >
//                         Tech uses
//                     </button>
//                     <button
//                         onClick={() => setActiveTab('challenge')}
//                         className={`border-b-2 ${activeTab === 'challenge' ? 'border-blue-700' : 'border-transparent'}`}
//                     >
//                         Challenge
//                     </button>
//                 </div>

//                 {/* Tab Content */}
//                 <div className="flex flex-wrap gap-3 mt-3">
//                     {(activeTab === 'tech' ? techUses : problemFaced).map((item, idx) => (
//                         <span
//                             key={idx}
//                             className="px-4 py-2 rounded-md text-sm"
//                         >
//                             {item}
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProjectDetails;
// import React, { useState } from 'react';
// import { FaInfo } from 'react-icons/fa';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const ProjectDetails = ({
//   images = [],
//   title = '',
//   description = '',
//   techUses = [],
//   problemFaced = '',
//   liveLink = '',
//   frontendRepo = '',
//   backendRepo = '',
//   aos='',
//   aos_duration='',
//   key_feature=''


// }) => {
//   const [activeTab, setActiveTab] = useState('tech');

//   return (
//     <div data-aos={`${aos}`} data-aos-duration={`${aos_duration}`} className="p-4 md:p-6 rounded-md flex flex-col justify-center items-center lg:flex-row gap-6 shadow-md bg-[#0d1117]">
//       {/* Image Carousel */}
//       <div className="w-full lg:w-1/2">
//         <Carousel
//           showThumbs={false}
//           infiniteLoop
//           autoPlay
//           showStatus={false}
//         >
//           {images.map((img, idx) => (
//             <div key={idx} className="h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg">
//               <img
//                 src={img}
//                 alt={`Slide ${idx + 1}`}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       {/* Text & Tabs Section */}
//       <div className="w-full lg:w-1/2 flex flex-col gap-4">
//         <h2 className="text-blue-500 font-extrabold text-2xl lg:text-3xl text-center">{title}</h2>

//         <div className="p-2">
//           <p className="text-sm lg:text-[1rem] font-semibold">{description}</p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center gap-6 font-semibold text-white mt-2">
//           <button
//             onClick={() => setActiveTab('tech')}
//             className={`pb-1 ${activeTab === 'tech' ? 'border-b-2 border-blue-300' : ''}`}
//           >
//             Tech Uses
//           </button>
//           <button
//             onClick={() => setActiveTab('challenge')}
//             className={`pb-1 ${activeTab === 'challenge' ? 'border-b-2 border-blue-300' : ''}`}
//           >
//             Challenge
//           </button>

//           <button
//             onClick={() => setActiveTab('links')}
//             className={`pb-1 ${activeTab === 'links' ? 'border-b-2 border-blue-300' : ''}`}
//           >
//             Links
//           </button>

//           <button className='flex items-center justify-center border-1 border-blue-600 w-8 h-8 rounded-full'>
//             <FaInfo/>
//           </button>
//         </div>

//         {/* Tab Content */}
//         <div className="mt-3">
//           {activeTab === 'tech' && (
//             <div className="flex flex-wrap gap-3">
//               {techUses.map((item, idx) => (
//                 <span
//                   key={idx}
//                   className="px-3 py-2 rounded-sm text-sm text-gray-800 font-semibold badge badge-accent"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           )}

//           {activeTab === 'challenge' && (
//             <div className="text-sm text-white rounded-md">
//               {problemFaced}
//             </div>
//           )}

//           {activeTab === 'links' && (
//             <div className="flex flex-wrap gap-4">
//               {liveLink && (
//                 <a
//                   href={liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 bg-teal-500 text-gray-800 font-semibold rounded hover:opacity-90 transition"
//                 >
//                   🔗 Live Site
//                 </a>
//               )}
//               {frontendRepo && (
//                 <a
//                   href={frontendRepo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 bg-teal-500 text-gray-800 font-semibold rounded hover:opacity-90 transition"
//                 >
//                   💻 Frontend Repo
//                 </a>
//               )}
//               {backendRepo && (
//                 <a
//                   href={backendRepo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 bg-teal-500 text-gray-800 font-semibold rounded hover:opacity-90 transition"
//                 >
//                   🖥️ Backend Repo
//                 </a>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;


import React, { useState } from 'react';
import { FaInfo } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectDetails = ({
  images = [],
  title = '',
  description = '',
  techUses = [],
  problemFaced = '',
  liveLink = '',
  frontendRepo = '',
  backendRepo = '',
  aos = '',
  aos_duration = '',
  key_feature = ''
}) => {
  const [activeTab, setActiveTab] = useState('tech');
  const [isModalOpen, setIsModalOpen] = useState(false);



  return (
    <>
      {/* Main Component */}
      <div
        data-aos={`${aos}`}
        data-aos-duration={`${aos_duration}`}
        className="p-4 md:p-6 rounded-md flex flex-col justify-center items-center lg:flex-row gap-6 shadow-md bg-[#0d1117]"
      >
        {/* Image Carousel */}
        <div className="w-full lg:w-1/2">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
          >
            {images.map((img, idx) => (
              <div key={idx} className="h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Text & Tabs Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-blue-500 font-extrabold text-2xl lg:text-3xl text-center">{title}</h2>

          <div className="p-2">
            <p className="text-sm lg:text-[1rem] font-semibold">{description}</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-6 font-semibold text-white mt-2">
            <button
              onClick={() => setActiveTab('tech')}
              className={`pb-1 ${activeTab === 'tech' ? 'border-b-2 border-blue-300' : ''}`}
            >
              Tech Uses
            </button>
            <button
              onClick={() => setActiveTab('challenge')}
              className={`pb-1 ${activeTab === 'challenge' ? 'border-b-2 border-blue-300' : ''}`}
            >
              Challenge
            </button>

            <button
              onClick={() => setActiveTab('links')}
              className={`pb-1 ${activeTab === 'links' ? 'border-b-2 border-blue-300' : ''}`}
            >
              Links
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center border-1 border-blue-600 w-8 h-8 rounded-full"
            >
              <FaInfo />
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-3">
            {activeTab === 'tech' && (
              <div className="flex flex-wrap gap-3">
                {techUses.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 rounded-sm text-sm text-gray-800 font-semibold badge badge-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            {activeTab === 'challenge' && (
              <div className="text-sm text-white rounded-md">
                {problemFaced}
              </div>
            )}

            {activeTab === 'links' && (
              <div className="flex flex-wrap gap-4">
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-500 text-gray-800 font-semibold rounded hover:opacity-90 transition"
                  >
                    🔗 Live Site
                  </a>
                )}
                {frontendRepo && (
                  <a
                    href={frontendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-500 text-gray-800 font-semibold rounded hover:opacity-90 transition"
                  >
                    💻 Frontend Repo
                  </a>
                )}
                {backendRepo && (
                  <a
                    href={backendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-500 text-gray-800 font-semibold rounded hover:opacity-90 transition"
                  >
                    🖥️ Backend Repo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#0d1117] rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            <h3 className="text-xl font-bold text-center text-blue-500 mb-4">🔑 Key Features</h3>
            <ul className="pl-5 space-y-2 text-sm list-none">
              {key_feature && key_feature.length > 0 ? (
                key_feature.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))
              ) : (
                <li className='list-none text-white'>No key features provided.</li>
              )}
            </ul>
            <button
              className="absolute top-2 right-2 text-red-500 text-xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
