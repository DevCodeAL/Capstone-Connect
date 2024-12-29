
const CarouselContainer = ()=>{
    return(
        <>
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
        </>
    )
}

export default CarouselContainer;