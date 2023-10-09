import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import swal from "sweetalert";
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";


const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);


    const provider = new GoogleAuthProvider();


    const handleGoogleLogin = () => {
        // console.log("google is comming");

        signInWithPopup(auth,provider)
        .then(result =>{
            console.log(result.user);
            swal("LogIn successful", "You clicked the button!", "success");
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.error(error);
            swal("an error occurs", "You clicked the button!", "error");
        })

    }
    const handleLogin = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email,password);

        login(email, password)
            .then(result => {
                console.log(result.user);
                swal("LogIn successful", "You clicked the button!", "success");
                // navigate after login

                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.error(error);
                swal("an error occurs", "You clicked the button!", "error");
            })

    }
    return (
        <div>
            <h1 className="text-3xl text-center">Please Login</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <button onClick={handleGoogleLogin} className="btn border my-3"><FcGoogle></FcGoogle> Google</button>
                            <p>Do not have an account please <Link className="text-blue-500 font-bold" to='/register'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;