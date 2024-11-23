
const Home = () => {

  return (
      <>
          <div className="relative w-full h-screen">
          {/* Video Background */}
          <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Color Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

          {/* Content Over the Video */}
          <div className="relative z-20 text-white flex justify-center px-48 items-center h-full">
            <div className="text-center font-bold -mt-3">
              <div className="text-5xl my-3 text-green-400 animate-bounce">
                <h1 className="animate-slidein [animation-delay:0s]">Capstone Connect</h1>
              </div> 
              <div className="text-4xl">
                <h2 className="animate-slidein [animation-delay:0.5s]">A Collaborative Student Platform for Project Sharing</h2>
              </div>
              <div className="my-10">
                <h3 className="text-2xl animate-slidein [animation-delay:1s]">"Share Learn and Grow Together"</h3>
                <button className="bg-orange-500 hover:bg-orange-600 rounded-full py-2 px-4 my-5 animate-slidein [animation-delay:1.5s]">
                  Join the Community
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
  {/* <!-- Animated Background --> */}
  <div className="absolute inset-0">
    <div className="absolute top-10 left-20 w-40 h-40 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
    <div className="absolute bottom-20 right-32 w-32 h-32 bg-red-300 rounded-full opacity-30 animate-pulse"></div>
    <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
  </div>

  {/* <!-- Carousel Container --> */}
  <div className="relative w-11/12 max-w-6xl overflow-hidden">
    <h1 className="text-white text-4xl font-bold mb-8 text-center">Dynamic Project Showcase</h1>

    {/* <!-- Cards --> */}
    <div className="flex space-x-4 animate-marquee">
      {/* <!-- Card 1 --> */}
      <div className="bg-white shadow-md rounded-lg p-6 w-64 flex-shrink-0">
        <h2 className="text-xl font-semibold mb-3">Project 1</h2>
        <p className="text-gray-600">An amazing capstone project that solves real-world problems.</p>
      </div>

      {/* <!-- Card 2 --> */}
      <div className="bg-white shadow-md rounded-lg p-6 w-64 flex-shrink-0">
        <h2 className="text-xl font-semibold mb-3">Project 2</h2>
        <p className="text-gray-600">Collaborative ideas turned into practical solutions.</p>
      </div>

      {/* <!-- Card 3 --> */}
      <div className="bg-white shadow-md rounded-lg p-6 w-64 flex-shrink-0">
        <h2 className="text-xl font-semibold mb-3">Project 3</h2>
        <p className="text-gray-600">Innovative designs with great potential.</p>
      </div>

      {/* <!-- Card 4 --> */}
      <div className="bg-white shadow-md rounded-lg p-6 w-64 flex-shrink-0">
        <h2 className="text-xl font-semibold mb-3">Project 4</h2>
        <p className="text-gray-600">Explore creative problem-solving in this project.</p>
      </div>

      {/* <!-- Card 5 --> */}
      <div className="bg-white shadow-md rounded-lg p-6 w-64 flex-shrink-0">
        <h2 className="text-xl font-semibold mb-3">Project 5</h2>
        <p className="text-gray-600">This project demonstrates advanced skills in design.</p>
      </div>

      {/* <!-- Card 6 --> */}
      <div className="bg-white shadow-md rounded-lg p-6 w-64 flex-shrink-0">
        <h2 className="text-xl font-semibold mb-3">Project 6</h2>
        <p className="text-gray-600">Discover unique insights with this capstone project.</p>
      </div>

      {/* <!-- Card 7 --> */}
      <div className="bg-white shadow-md rounded-lg p-6 w-64 flex-shrink-0">
        <h2 className="text-xl font-semibold mb-3">Project 7</h2>
        <p className="text-gray-600">See teamwork and creativity at its best.</p>
      </div>

      {/* <!-- Card 8 --> */}
      <div className="bg-white shadow-md rounded-lg p-6 w-64 flex-shrink-0">
        <h2 className="text-xl font-semibold mb-3">Project 8</h2>
        <p className="text-gray-600">A project focused on innovation and impact.</p>
      </div>
    </div>
  </div>
</div>


{/* About Section */}
<section className="bg-gray-50 py-16">
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className="text-gray-700">Foster collaboration among students.</p>
          </li>
          <li className="flex items-center">
            <span className="w-8 h-8 flex justify-center items-center bg-blue-500 text-white rounded-full mr-3">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className="text-gray-700">Build networks and expand professional connections.</p>
          </li>
          <li className="flex items-center">
            <span className="w-8 h-8 flex justify-center items-center bg-blue-500 text-white rounded-full mr-3">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9.75 6.75a3 3 0 11-3 3 3 3 0 013-3zm6 0a3 3 0 11-3 3 3 3 0 013-3zm-6 6a3 3 0 11-3 3 3 3 0 013-3zm6 0a3 3 0 11-3 3 3 3 0 013-3z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  Features Section */}
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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

{/* Project Sections */}
<section className="bg-gray-50 py-16">
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

{/*  */}

{/* Community Section */}
<div className="bg-gray-100 py-16">
  {/* <!-- Title --> */}
  <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">Our Thriving Community</h2>

  {/* <!-- Content Wrapper --> */}
  <div className="max-w-7xl mx-auto px-6">
    {/* <!-- Testimonials --> */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* <!-- Testimonial 1 --> */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://via.placeholder.com/64"
            alt="Student Avatar"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-lg">Alex Johnson</h3>
            <p className="text-sm text-gray-500">Computer Science Student</p>
          </div>
        </div>
        <p className="text-gray-700">
          "Capstone Connect helped me collaborate with like-minded peers and improve my project by
          gaining valuable feedback. The community is amazing!"
        </p>
      </div>

      {/* <!-- Testimonial 2 --> */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://via.placeholder.com/64"
            alt="Student Avatar"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-lg">Sophia Lee</h3>
            <p className="text-sm text-gray-500">Engineering Student</p>
          </div>
        </div>
        <p className="text-gray-700">
          "This platform provided me the exposure I needed to share my work. I’ve connected with so
          many talented individuals!"
        </p>
      </div>

      {/* <!-- Testimonial 3 --> */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://via.placeholder.com/64"
            alt="Student Avatar"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-lg">Michael Brown</h3>
            <p className="text-sm text-gray-500">IT Student</p>
          </div>
        </div>
        <p className="text-gray-700">
          "I found the perfect partner for my next project through Capstone Connect. Collaboration
          has never been this easy."
        </p>
      </div>
    </div>


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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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

{/* Call-to-Action Section */}
<section className="bg-blue-600 text-white py-16">
  {/* <!-- Container --> */}
  <div className="max-w-7xl mx-auto px-6">
    {/* <!-- Content Wrapper --> */}
    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      {/* <!-- Headline --> */}
      <div className="mb-8 md:mb-0">
        <h2 className="text-4xl font-bold leading-tight">
          Ready to Share Your Next Big Idea?
        </h2>
        <p className="mt-4 text-lg">
          Join our thriving community of innovators, collaborators, and learners today.
        </p>
      </div>

      {/* <!-- Buttons --> */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <a href="#join" 
           className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
          Join Now
        </a>
        <a href="#upload" 
           className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800">
          Upload Your First Project
        </a>
      </div>
    </div>

    {/* <!-- Visual --> */}
    <div className="mt-12">
      <img src="https://via.placeholder.com/800x400" 
           alt="Motivational Illustration" 
           className="mx-auto rounded-lg shadow-lg"/>
    </div>
  </div>
</section>

{/* FAQ Sections */}

<section className="bg-gray-50 py-16">
  {/* <!-- Container --> */}
  <div className="max-w-5xl mx-auto px-6">
    {/* <!-- Title --> */}
    <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">Got Questions?</h2>

    {/* <!-- FAQ Accordion --> */}
    <div className="space-y-4">
      {/* <!-- Question 1 --> */}
      <div className="border rounded-lg overflow-hidden">
        <button className="w-full text-left px-6 py-4 bg-gray-100 text-gray-800 font-medium flex items-center justify-between">
          <span>How do I create an account?</span>
          <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="px-6 py-4 bg-white text-gray-600">
          Creating an account is easy! Click the "Join Now" button, fill in your details, and start sharing projects right away.
        </div>
      </div>

      {/* <!-- Question 2 --> */}
      <div className="border rounded-lg overflow-hidden">
        <button className="w-full text-left px-6 py-4 bg-gray-100 text-gray-800 font-medium flex items-center justify-between">
          <span>What project types and file formats are supported?</span>
          <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="px-6 py-4 bg-white text-gray-600">
          You can upload projects in formats like PDFs, images, and ZIP files containing your source code. We also support categories like web development, mobile apps, and data science.
        </div>
      </div>

      {/* <!-- Question 3 --> */}
      <div className="border rounded-lg overflow-hidden">
        <button className="w-full text-left px-6 py-4 bg-gray-100 text-gray-800 font-medium flex items-center justify-between">
          <span>Is my data private and secure?</span>
          <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="px-6 py-4 bg-white text-gray-600">
          Yes, we take your privacy seriously. All your data is encrypted and shared only with your consent.
        </div>
      </div>
    </div>
  </div>
</section>

{/* Contact Us Section */}

<section className="bg-white py-16">
  {/* <!-- Container --> */}
  <div className="max-w-7xl mx-auto px-6">
    {/* <!-- Title --> */}
    <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">Need Assistance?</h2>

    {/* <!-- Contact Form --> */}
    <div className="lg:grid lg:grid-cols-2 gap-12">
      {/* <!-- Form Section --> */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
        <form action="#" method="POST">
          <div className="space-y-4">
            {/* <!-- Name Field --> */}
            <div>
              <label for="name" className="block text-gray-700">Full Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required/>
            </div>

            {/* <!-- Email Field --> */}
            <div>
              <label for="email" className="block text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required/>
            </div>

            {/* <!-- Message Field --> */}
            <div>
              <label for="message" className="block text-gray-700">Your Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required></textarea>
            </div>

            {/* <!-- Submit Button --> */}
            <div>
              <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* <!-- Social Media Section --> */}
      <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800">Follow Us</h3>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zM12 18a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 2h-3.24c-.88 0-1.71.54-2.04 1.35l-1.29 2.78-2.81-.01a5.99 5.99 0 00-5.77 4.51l-.06.26-.22-.03a3.23 3.23 0 00-3.25 3.24v5.7c0 1.56 1.26 2.83 2.83 2.83h10.6a2.83 2.83 0 002.83-2.83v-5.7a3.23 3.23 0 00-3.25-3.24l-.22.03-.06-.26a5.99 5.99 0 00-5.77-4.51l-2.81.01-1.29-2.78a2.88 2.88 0 00-2.04-1.35h-.05z" />
            </svg>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.59 4.59a2 2 0 010 2.83l-3 3a2 2 0 010 2.83l3 3a2 2 0 012.83 0l6 6a2 2 0 012.83-2.83l-6-6a2 2 0 010-2.83l3-3a2 2 0 010-2.83l-3-3a2 2 0 00-2.83 0l-6 6a2 2 0 00-2.83 2.83l3 3z" />
            </svg>
          </a>
        </div>

        {/* <!-- Dedicated Email --> */}
        <p className="text-gray-600">Or email us directly at <a href="mailto:contact@capstoneconnect.com" className="text-blue-600 hover:text-blue-800">contact@capstoneconnect.com</a></p>
      </div>
    </div>
  </div>
</section>
  </div>
</div>

{/* Footer Section */}
<footer className="bg-gray-800 text-white py-8">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* <!-- Footer Links --> */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Features</a></li>
          <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
      
      {/* <!-- Social Media --> */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M22 12l-4-4v3H8v2h10v3l4-4z"/></svg>
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M9 11.1V6H7V3h5v8l3-3 3 3V3h2v3l-3 3z"/></svg>
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12 12c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/></svg>
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12 4c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0-2c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"/></svg>
          </a>
        </div>
      </div>

      {/* <!-- Copyright --> */}
      <div className="text-center sm:text-right">
        <p className="text-sm">© 2024 Capstone Connect. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

    </>
   
    
  );
};

export default Home;
