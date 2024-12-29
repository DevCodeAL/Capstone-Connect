
const ContactUs = ()=> {

return(
<>
{/* Contact Us Section */}
<section className="bg-white py-16" id="contact">
  {/* <!-- Container --> */}
  <div className="max-w-7xl mx-auto px-6">
    {/* <!-- Title --> */}
    <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">Need Assistance?</h2>

    {/* <!-- Contact Form --> */}
    <div className="lg:grid lg:grid-cols-2 gap-12">
      {/* <!-- Form Section --> */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
        <form>
          <div className="space-y-4">
            {/* <!-- Name Field --> */}
            <div>
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required/>
            </div>

            {/* <!-- Email Field --> */}
            <div>
              <label htmlFor="email" className="block text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required/>
            </div>

            {/* <!-- Message Field --> */}
            <div>
              <label htmlFor="message" className="block text-gray-700">Your Message</label>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zM12 18a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 2h-3.24c-.88 0-1.71.54-2.04 1.35l-1.29 2.78-2.81-.01a5.99 5.99 0 00-5.77 4.51l-.06.26-.22-.03a3.23 3.23 0 00-3.25 3.24v5.7c0 1.56 1.26 2.83 2.83 2.83h10.6a2.83 2.83 0 002.83-2.83v-5.7a3.23 3.23 0 00-3.25-3.24l-.22.03-.06-.26a5.99 5.99 0 00-5.77-4.51l-2.81.01-1.29-2.78a2.88 2.88 0 00-2.04-1.35h-.05z" />
            </svg>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.59 4.59a2 2 0 010 2.83l-3 3a2 2 0 010 2.83l3 3a2 2 0 012.83 0l6 6a2 2 0 012.83-2.83l-6-6a2 2 0 010-2.83l3-3a2 2 0 010-2.83l-3-3a2 2 0 00-2.83 0l-6 6a2 2 0 00-2.83 2.83l3 3z" />
            </svg>
          </a>
        </div>

        {/* <!-- Dedicated Email --> */}
        <p className="text-gray-600">Or email us directly at <a href="mailto:contact@capstoneconnect.com" className="text-blue-600 hover:text-blue-800">contact@capstoneconnect.com</a></p>
      </div>
    </div>
  </div>
</section>
</>)
}

export default ContactUs;