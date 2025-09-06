

import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails';




const Project = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/projectDetails.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json); 
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);



  return (
    <div id='project' className="space-y-12 md:max-w-9/12 mx-auto">
      <p className='text-4xl font-extrabold mb-4 text-[var(--primary-color)] text-center lg:mb-10'>My Projects</p>


      {
        data?.map(projectDetails =>
          (

          <ProjectDetails key={projectDetails.id}

            id={projectDetails.id}
            images={projectDetails.images}
            title={projectDetails.title}
            description={projectDetails.details}
            techUses={projectDetails.tec_used}
            problemFaced={projectDetails.challenges}
            liveLink={projectDetails.live_link}
            frontendRepo={projectDetails.frontend_repo}
            backendRepo={projectDetails.backend_repo}

          // aos='fade-right'
          // aos_duration='500'
          key_feature={projectDetails.features}
          />
        ))


      }



    </div>

  );
};

export default Project;
