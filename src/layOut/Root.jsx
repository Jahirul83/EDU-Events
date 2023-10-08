import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;