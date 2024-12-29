
const HowItWorks = ()=>{
    return(
        <>
             {/* How it Works Section */}
            <section className="bg-gray-50 py-16">
            {/* <!-- Container --> */}
            <div className="max-w-7xl mx-auto px-6">
                {/* <!-- Title --> */}
                <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">Getting Started with Capstone Connect</h2>

                {/* <!-- Steps --> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Step 1: Sign Up --> */}
                <div className="text-center bg-white shadow-lg rounded-lg p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M16 12A4 4 0 0112 8a4 4 0 11-4 4m8 0a4 4 0 11-4 4m4-4h6m-6 0H4" />
                    </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Sign Up</h3>
                    <p className="text-gray-600 text-sm">
                    Create your profile to join the Capstone Connect community.
                    </p>
                </div>

                {/* <!-- Step 2: Upload Your Project --> */}
                <div className="text-center bg-white shadow-lg rounded-lg p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 4v16h16V4H4zm4 8h8M8 12V8m8 4v4" />
                    </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Upload Your Project</h3>
                    <p className="text-gray-600 text-sm">
                    Add descriptions, images, and source code to showcase your work.
                    </p>
                </div>

                {/* <!-- Step 3: Engage with Others --> */}
                <div className="text-center bg-white shadow-lg rounded-lg p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Engage with Others</h3>
                    <p className="text-gray-600 text-sm">
                    Comment, collaborate, and receive valuable feedback on your projects.
                    </p>
                </div>
                </div>
                
                {/* <!-- Visual/Call-to-Action --> */}
                <div className="text-center mt-12">
                <a href="#signup" className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600">
                    Get Started Now
                </a>
                </div>
            </div>
            </section>
        </>
    )
}

export default HowItWorks;