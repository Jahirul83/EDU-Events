import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import EventCard from "./eventCard/eventCard";


const Home = () => {
    const events = useLoaderData();
    // console.log(events);
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            <div className="border">
                <h2 className="text-3xl text-center">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                    {
                        events.slice(0, 3).map(event => <EventCard
                            key={event.event_id}
                            event={event}
                        ></EventCard>)
                    }
                </div>
                <div className="text-center mb-2">
                    <Link to='/services'><button className="btn">Show ALL</button></Link>
                </div>
            </div>
            <div>
                <h2 className="text-3xl text-center">Career</h2>
            </div>
            <div>
                <h2 className="text-3xl text-center">Reviews</h2>
            </div>

        </div>
    );
};

export default Home;