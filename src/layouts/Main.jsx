import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <Outlet></Outlet>
        </div>
    );
};

export default Main;