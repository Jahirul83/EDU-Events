import { useState } from "react";
import EventCard from "../eventCard/eventCard";


const Services = () => {
    const [allEvent,setAlleEvent] = useState([]);

    fetch('event.json')
      .then(response => response.json())
      .then(json => setAlleEvent(json))



    return (
        <div>
            <h2 className="text-3xl text-center">Our services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allEvent.map(event =><EventCard
                    key={event.event_id}
                    event={event}
                    ></EventCard>)
                }
            </div>

        </div>
    );
};

export default Services;