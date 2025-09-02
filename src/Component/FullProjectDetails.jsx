import React from "react";
import { useLoaderData, useParams } from "react-router";
import { Link } from "react-router";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const FullProjectDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const matchedProject = data.find((item) => item.id == id);

    if (!matchedProject) {
        return <p className="text-center text-red-500 mt-10">Project not found!</p>;
    }

    const {
        title,
        details,
        tec_used,
        live_link,
        frontend_repo,
        backend_repo,
        features,
        images,
        challenges,
        improvement
    } = matchedProject;

    return (
        <div className="min-h-screen bg-black text-white px-4 lg:px-24 py-8 space-y-8">
            <h1 className="text-4xl font-bold text-blue-500 text-center">{title}</h1>

            {/* Images */}
            <div className="grid md:grid-cols-3 gap-4">
                {images.map((img, idx) => (
                    <div className="h-full">
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Project screenshot ${idx + 1}`}
                                    className="rounded-xl shadow-lg border border-gray-700 h-full"
                                />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                ))}
            </div>

            {/* Description */}
            <div>
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">Project Overview</h2>
                <p className="text-gray-200 leading-relaxed">{details}</p>
            </div>

            {/* Tech Used */}
            <div>
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                    {tec_used.map((tech, i) => (
                        <span
                            key={i}
                            className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Features */}
            <div>
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">Key Features</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-200">
                    {features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            </div>

            {/* Links */}
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">Project Links</h2>
                <div className="flex flex-wrap gap-3">
                    <a
                        href={live_link}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold"
                    >
                        🌐 Live Site
                    </a>
                    {frontend_repo && (
                        <a
                            href={frontend_repo}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold"
                        >
                            💻 Frontend Code
                        </a>
                    )}
                    {backend_repo && (
                        <a
                            href={backend_repo}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold hidden"
                        >
                            🖥️ Backend Code
                        </a>
                    )}
                </div>
            </div>

            {/* Challenges */}
            <div>
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">Challenges</h2>
                <p className="text-gray-200 leading-relaxed">{challenges}</p>
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">Feature Improvement</h2>
                <p className="text-gray-200 leading-relaxed">{improvement}</p>
            </div>

            <div className="text-center">
                <Link
                    to="/"
                    className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default FullProjectDetails;
