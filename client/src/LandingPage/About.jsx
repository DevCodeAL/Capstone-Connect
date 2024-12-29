import React from "react";

const About = () =>{
    //Logic here
    return(
        <>
            {/* About Section */}
            <section className="bg-gray-50 py-16" id='about-section'>
            {/* <!-- Container --> */}
            <div className="max-w-7xl mx-auto px-6">
                {/* <!-- Title --> */}
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Capstone Connect</h2>

                {/* <!-- Content Wrapper --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* <!-- Left Column: Explanation and Benefits --> */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission & Vision</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                    Capstone Connect is a platform designed to empower students by providing a space to share
                    their capstone projects, collaborate with peers, and gain valuable insights through
                    community feedback.
                    </p>
                    <ul className="space-y-4">
                    <li className="flex items-center">
                        <span className="w-8 h-8 flex justify-center items-center bg-blue-500 text-white rounded-full mr-3">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        </span>
                        <p className="text-gray-700">Foster collaboration among students.</p>
                    </li>
                    <li className="flex items-center">
                        <span className="w-8 h-8 flex justify-center items-center bg-blue-500 text-white rounded-full mr-3">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        </span>
                        <p className="text-gray-700">Build networks and expand professional connections.</p>
                    </li>
                    <li className="flex items-center">
                        <span className="w-8 h-8 flex justify-center items-center bg-blue-500 text-white rounded-full mr-3">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        </span>
                        <p className="text-gray-700">Learn through feedback and community insights.</p>
                    </li>
                    </ul>
                </div>

                {/* <!-- Right Column: Metrics and Infographics --> */}
                <div className="grid grid-cols-2 gap-6">
                    {/* <!-- Metric 1 --> */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <span className="text-3xl font-bold text-blue-500">10K+</span>
                    <p className="text-gray-600 mt-2">Students</p>
                    </div>
                    {/* <!-- Metric 2 --> */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <span className="text-3xl font-bold text-blue-500">5K+</span>
                    <p className="text-gray-600 mt-2">Projects Shared</p>
                    </div>
                    {/* <!-- Metric 3 --> */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <span className="text-3xl font-bold text-blue-500">15K+</span>
                    <p className="text-gray-600 mt-2">Comments</p>
                    </div>
                    {/* <!-- Infographic Icon --> */}
                    <div className="flex items-center justify-center bg-blue-500 text-white rounded-lg p-6">
                    <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9.75 6.75a3 3 0 11-3 3 3 3 0 013-3zm6 0a3 3 0 11-3 3 3 3 0 013-3zm-6 6a3 3 0 11-3 3 3 3 0 013-3zm6 0a3 3 0 11-3 3 3 3 0 013-3z" />
                    </svg>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default About;