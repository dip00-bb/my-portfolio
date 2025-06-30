// import React from 'react';
// import ProjectDetails from './ProjectDetails';
// import { images } from '../assets/asset';

// const Project = () => {

//     const {subbox1,subbox2,subbox3,recipesc1,recipesc2,recipesc3,blogsc1,blogsc2,blogsc3}=images

//     const subBoxImages=[subbox1,subbox2,subbox3];
//     const recipeBook=[recipesc1,recipesc2,recipesc3];
//     const devBlogs=[blogsc1,blogsc2,blogsc3]

//     const techs=['React', 'Tailwindcss', 'MongoDB','Express','Firebase']


//     return (
//         <div>
//             <ProjectDetails />
//         </div>
//     );
// };

// export default Project;

import React from 'react';
import ProjectDetails from './ProjectDetails';
import { images } from '../assets/asset';


const Project = () => {
  const { subbox1, subbox2, subbox3, recipesc1, recipesc2, recipesc3, blogsc1, blogsc2, blogsc3 } = images;

  console.log(subbox1, subbox2, subbox3, recipesc1, recipesc2, recipesc3, blogsc1, blogsc2, blogsc3)


  // key feature
  const sub_features = [
    "🛒 Users can buy subscriptions",
    "👍 Users can like recipes",
    "💬 Users can comment on recipes",
    "📊 Users can monitor their activity on the dashboard",
    "🔐 Firebase Authentication for secure login/signup"
  ];


  const recipe_features = [
    "👨‍🍳 Users can add their own recipes",
    "✏️ Users can update their recipes",
    "🗑️ Users can delete their recipes",
    "🔐 Firebase Authentication for user login/signup",
    "🛡️ JWT Authorization to protect private routes"
  ];

const blog_features = [
  "✍️ Users can add their own blogs",
  "✏️ Users can update their blogs",
  "🗑️ Users can delete their blogs",
  "💬 Users can comment on blogs",
  "🔐 Firebase Authentication for user login/signup",
  "🛡️ JWT Authorization to protect private routes"
];




  const subBoxImages = [subbox1, subbox2, subbox3];
  const recipeBook = [recipesc1, recipesc2, recipesc3];
  const devBlogs = [blogsc1, blogsc2, blogsc3];

  const techs = ['React', 'Tailwindcss', 'MongoDB', 'Express', 'Firebase'];

  return (
    <div id='project' className="space-y-12 md:max-w-9/12 mx-auto">
      <p className='text-4xl font-extrabold mb-4 text-blue-600 text-center lg:mb-10'>My Projects</p>
      <ProjectDetails
        images={subBoxImages}
        title="Sub Box"
        description="
LavaRox is an OTT subscription platform that lets users conveniently purchase subscriptions to popular streaming services. Unlike traditional platforms, LavaRox allows users to pay using local payment methods like bKash, Nagad, and Rocket—no debit or credit card required. Users can also easily track their daily watch time and manage their subscriptions through a simple and user-friendly interface."
        techUses={techs}
        problemFaced={[
          'Handling subscription renewals in backend',
          'Stripe integration challenges',
          'User role management for admins and users',
        ]}
        liveLink='https://subscription-box-1eb8d.web.app/'
        frontendRepo='https://github.com/dip00-bb/react-authentication'
      // aos='fade-right'
      // aos_duration='500'
      key_feature={sub_features}
      />

      <ProjectDetails
        images={recipeBook}
        title="Recipe Book"
        description="Goodie Foodie is a vibrant recipe-sharing platform where users from around the world can showcase their culinary creations. It serves as a global community for chefs—both professional and home cooks—to connect and inspire each other. Users can easily upload their own recipes, complete with ingredients and cooking steps, and receive feedback from the community. The platform also features a rating system so users can see how delicious and popular their recipes are among others."
        techUses={techs}
        problemFaced={[
          'Image upload optimization',
          'Authorization protection for private routes',
          'Managing state across multiple filters',
        ]}
        liveLink='https://recipe-book-ddad9.web.app/'
        frontendRepo='https://github.com/dip00-bb/goodie-foodie'
        backendRepo='https://github.com/dip00-bb/goodie-foodie-server'
        // aos='fade-left'
        // aos_duration='500'
        key_feature={recipe_features}
      />

      <ProjectDetails
        images={devBlogs}
        title="Dev Blogs"
        description="
Dev Blog is a global platform where developers from around the world share their knowledge and experiences through blogs. It fosters a supportive tech community by allowing readers to comment and engage with writers, providing motivation and valuable feedback. Our platform is dedicated to delivering the latest technology blogs faster than any other, keeping developers up-to-date with current trends. Whether you're a beginner or an expert, Dev Blog is your go-to source for learning and sharing in the tech world."
        techUses={techs}
        problemFaced={[
          'Rich text editor integration',
          'Pagination and infinite scroll setup',
          'SEO and performance tuning',
        ]}
        liveLink='https://blog-website-724fe.web.app/'
        frontendRepo='https://github.com/dip00-bb/Dev-Blog'
      // aos='fade-right'
      // aos_duration='500'
      key_feature={blog_features}
      />


    </div>

    // <div>
    //     {
    //         subBoxImages.map(img=> <img src={img} alt="" /> )
    //     }
    // </div>
  );
};

export default Project;
