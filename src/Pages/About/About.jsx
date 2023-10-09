import { NavLink } from 'react-router-dom';
import career from '../../assets/career.png'

const About = () => {
    return (
        <div className='bg-base-200'>
            <h2 className='text-3xl font-bold text-center pt-6'>About us</h2>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={career} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to our Educational Event Website</h1>
                        <p className="py-6">

                            Discover a world of knowledge and learning opportunities at our educational event website. We are dedicated to bringing you the latest and most informative events in a wide range of fields, from technology and science to arts and humanities.</p>
                        <NavLink to="/about"><button className="btn bg-orange-400 text-white">read more</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;