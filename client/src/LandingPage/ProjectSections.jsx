 
 const ProjectSection = ()=> {
    //Logic Here
    return(
        <>
            {/* Project Sections */}
            <section className="bg-gray-50 py-16" id='project-section'>
            {/* <!-- Container --> */}
            <div className="max-w-7xl mx-auto px-6">
                {/* <!-- Title --> */}
                <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">Explore Inspiring Projects</h2>

                {/* <!-- Filters --> */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">All</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Web Development</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Mobile Apps</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">AI & Machine Learning</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Data Science</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Other</button>
                </div>

                {/* <!-- Projects Grid --> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Project Card --> */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://via.placeholder.com/300" alt="Project Thumbnail" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Title</h3>
                    <p className="text-gray-600 text-sm mb-4">Short description of the project goes here. Highlight its purpose and features.</p>
                    <span className="text-blue-500 text-sm font-medium">#WebDevelopment</span>
                    </div>
                </div>

                {/* <!-- Repeat Project Card --> */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://via.placeholder.com/300" alt="Project Thumbnail" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Title</h3>
                    <p className="text-gray-600 text-sm mb-4">Short description of the project goes here. Highlight its purpose and features.</p>
                    <span className="text-blue-500 text-sm font-medium">#AI</span>
                    </div>
                </div>

                {/* <!-- Add more project cards as needed --> */}
                {/* <!-- Sample Project Card --> */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://via.placeholder.com/300" alt="Project Thumbnail" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Title</h3>
                    <p className="text-gray-600 text-sm mb-4">Short description of the project goes here. Highlight its purpose and features.</p>
                    <span className="text-blue-500 text-sm font-medium">#DataScience</span>
                    </div>
                </div>
                </div>

                {/* <!-- Call-to-Action --> */}
                <div className="text-center mt-12">
                <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600">
                    View All Projects
                </a>
                </div>
            </div>
            </section>
        </>
    )
 }

 export default ProjectSection;