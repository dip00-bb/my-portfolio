import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const SocialLink = () => {
    return (
        <div className="flex gap-2.5 items-center">
            {/* GitHub */}
            <a
                href="https://github.com/dip00-bb"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full border-2 border-gray-800 group-hover:border-blue-400 flex justify-center items-center p-1 transition-all duration-300 hover:shadow-md hover:shadow-blue-400"
            >
                <Github
                    size={30}
                    className="text-white transition-colors duration-300 group-hover:text-blue-500 group-hover:border-blue-400"
                />
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/dip-chondo-2b871b360/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full border-2 border-gray-800 flex justify-center items-center p-1 transition-all duration-300 hover:shadow-md hover:shadow-blue-400"
            >
                <Linkedin
                    size={30}
                    className="text-white transition-colors duration-300 group-hover:text-blue-500"
                />
            </a>

            {/* Twitter (X) */}
            <a
                href="https://x.com/MovieLover23667"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full border-2 border-gray-800 flex justify-center items-center p-1 transition-all duration-300 hover:shadow-md hover:shadow-blue-400"
            >
                <Twitter
                    size={30}
                    className="text-white transition-colors duration-300 group-hover:text-blue-500"
                />
            </a>
        </div>
    );
};

export default SocialLink;