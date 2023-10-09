import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import EventCard from "./eventCard/eventCard";
import Reviews from "../Reviews/Reviews";
import About from "../About/About";


const Home = () => {
    const events = useLoaderData();
    // console.log(events);
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            <div className="border">
                <h2 className="text-3xl text-center font-bold">Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                    {
                        events.slice(0, 3).map(event => <EventCard
                            key={event.event_id}
                            event={event}
                        ></EventCard>)
                    }
                </div>
                <div className="text-center mb-2">
                    <Link to='/services'><button className="btn bg-orange-500 text-white">Show ALL</button></Link>
                </div>
            </div>
            <div className="py-12 bg-slate-200 px-3">
                <h2 className="text-3xl text-center font-bold">Reviews</h2>
                <Reviews></Reviews>
            </div>
            <div className="py-12 bg-slate-200 px-3">
               {/* about us */}
                <About></About>
            </div>

        </div>
    );
};

export default Home;