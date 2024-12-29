
const CommunitySection = ()=>{
    return(
<>
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
            <h3 className="font-semibold text-lg">Leomar Abad</h3>
            <p className="text-sm text-gray-500">IT Student</p>
          </div>
        </div>
        <p className="text-gray-700">
          "I found the perfect partner for my next project through Capstone Connect. Collaboration
          has never been this easy."
        </p>
      </div>
    </div>


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
    <video className="w-auto h-auto mx-auto rounded-lg shadow-lg" autoPlay loop muted>
        <source src="/technology.mp4" type="video/mp4" />
    </video>
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="px-6 py-4 bg-white text-gray-600">
          Yes, we take your privacy seriously. All your data is encrypted and shared only with your consent.
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</div>
</>
    )
}

export default CommunitySection;