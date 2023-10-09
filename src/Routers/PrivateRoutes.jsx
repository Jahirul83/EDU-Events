import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return children;
    }
    return <Link to='/login'></Link>;
};

export default PrivateRoutes;