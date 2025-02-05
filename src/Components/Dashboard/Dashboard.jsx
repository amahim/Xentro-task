
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div className=' flex flex-col md:flex-row '>
            <div className=" md:fixed"> 
           <Sidebar />
            </div>
            <div className="w-full md:ml-52"> 
            <MainContent />
            </div>
        </div>
    );
};

export default Dashboard;