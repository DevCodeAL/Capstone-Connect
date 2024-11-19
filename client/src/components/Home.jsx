
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
  <h1 className="text-4xl font-bold text-center -mt-48">
    Capstone Connect: A Collaborative Student Platform for Project Sharing
    <br />
    <span className="text-2xl">"Share Learn and Grow Together"</span>
  </h1>
</div>

</div>

   
    </>
   
    
  );
};

export default Home;
