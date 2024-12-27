import Header from "./Header";

const Dashboard = ()=>{
    return(
        <>
         <div>
            <Header />
            <main>
                <div className="flex justify-center items-center min-h-screen">
                <div>
                    <h1 className="font-bold text-3xl">Welcome to Dashboard!</h1>
                </div>
                </div>
            </main>
            </div>
        </>
    )
}

export default Dashboard;

