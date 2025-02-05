
import Navbar from './Navbar';


const HomeLayout = ({ loggedIn, setLoggedIn }) => {
    
    return (
        <div>
            <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            
        </div>
    );
};

export default HomeLayout;