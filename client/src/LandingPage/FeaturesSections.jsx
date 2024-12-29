
const FeatureSection = ()=>{
    return(
        <>
<section className="bg-white py-16">
  {/* <!-- Container --> */}
  <div className="max-w-7xl mx-auto px-6">
    {/* <!-- Title --> */}
    <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">Why Choose Capstone Connect?</h2>

    {/* <!-- Features Grid --> */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* <!-- Feature 1: Upload Projects --> */}
      <div className="text-center bg-gray-50 shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 10h11M9 21V3M17 16l4-4m0 0l-4-4m4 4H10" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Upload Projects</h3>
        <p className="text-gray-600 text-sm">
          Share your work with detailed descriptions, visuals, and source code.
        </p>
      </div>

      {/* <!-- Feature 2: Collaborate & Discuss --> */}
      <div className="text-center bg-gray-50 shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M8 10h8m-4-4v8m-5.223 6.092a8.978 8.978 0 01-2.147-1.481A8.977 8.977 0 015 13c0-4.963 4.037-9 9-9s9 4.037 9 9a8.977 8.977 0 01-1.63 5.068 8.978 8.978 0 01-5.147 2.923" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Collaborate & Discuss</h3>
        <p className="text-gray-600 text-sm">
          Comment and provide valuable feedback on shared projects.
        </p>
      </div>

      {/* <!-- Feature 3: Learn & Improve --> */}
      <div className="text-center bg-gray-50 shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M12 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.21 0-4 1.79-4 4v5h8v-5c0-2.21-1.79-4-4-4zm-2 8h4v1H10v-1z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Learn & Improve</h3>
        <p className="text-gray-600 text-sm">
          Access resources and tutorials to enhance your project design.
        </p>
      </div>

      {/* <!-- Feature 4: Search Projects --> */}
      <div className="text-center bg-gray-50 shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.952 7.952 0 0116 11c0-4.418-3.582-8-8-8S0 6.582 0 11s3.582 8 8 8a7.952 7.952 0 005.65-2.35z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Search Projects</h3>
        <p className="text-gray-600 text-sm">
          Find inspiration by exploring projects shared by others.
        </p>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default FeatureSection;