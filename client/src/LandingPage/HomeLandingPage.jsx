
const HomeLandingPage = ()=>{
    return(
        <>
             {/* Landing Page */}
          <div className="relative w-full h-screen" id='index-sections'>
            {/* Video Background */}
            <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Color Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

            {/* Content Over the Video */}
            <div className="relative z-20 text-white flex justify-center px-8 md:px-16 lg:px-32 items-center h-full">
              <div className="text-center font-bold -mt-3">
                {/* Title */}
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl my-3 text-green-400 animate-bounce">
                  <h1 className="animate-slidein [animation-delay:0s]">Capstone Connect</h1>
                </div>
                
                {/* Subtitle */}
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  <h2 className="animate-slidein [animation-delay:0.5s]">
                    A Collaborative Student Platform for Project Sharing and Feedback
                  </h2>
                </div>

                {/* Tagline and Button */}
                <div className="my-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl animate-slidein [animation-delay:1s]">
                    "Share, Learn, and Grow Together"
                  </h3>
                  <button className="
                    bg-orange-500 
                    hover:bg-orange-600 
                    rounded-full 
                    py-2 px-4 
                    sm:py-3 sm:px-6 
                    md:py-4 md:px-8 
                    lg:py-2 lg:px-4 lg:text-sm 
                    xl:py-1 xl:px-3 xl:text-base 
                    my-5 
                    text-sm 
                    sm:text-base 
                    md:text-lg 
                    animate-slidein 
                    [animation-delay:1.5s]">
                    Join the Community
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default HomeLandingPage;