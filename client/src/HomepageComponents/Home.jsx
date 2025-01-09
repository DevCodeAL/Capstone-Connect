import NewFeed from "./PostFeedComponents/Feed";

const Home = ()=>{
    return(
        <>
           <main className="animate-fade-right">
              {/* Reusable Component Content Post */}
                <div className="flex justify-center items-center mx-7 relative top-24 rounded-xl bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 shadow-xl">
                    <div className="flex flex-col p-8">
                        <div className="text-2xl font-bold text-center text-[#374151] pb-6">Post Feed</div>
                          <NewFeed/>
                    </div>
                </div>
           </main>
        </>
    )
}

export default Home;