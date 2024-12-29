
const FooterSection = ()=>{

return(
<>
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
    )
}

export default FooterSection;