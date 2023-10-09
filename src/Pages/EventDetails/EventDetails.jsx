import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {
    const [cardDetails, setCardDetails] = useState({});


    // finding card for details

    const { id } = useParams();
    const serviceData = useLoaderData();
    useEffect(() => {
        const findCardDetails = serviceData.find(service => service.event_id === id);
        setCardDetails(findCardDetails);
    }, [id, serviceData]);

    const { event_id, event_name, date, location, description, organizer, registration_link, image_url } = cardDetails;

    return (
        <div>
            <div className="mb-20">
                <div className="relative min-h-screen my-14">
                    <img className="w-screen h-screen" src={image_url} alt="" />
                    <div className="absolute bottom-2 -mt-10 bg-opacity-50 bg-slate-900 p-6 w-full">
                        <button className="btn btn-primary">Date: {date}</button>
                    </div>
                </div>
                <div className="my-12">
                    <h2 className="text-3xl">{event_name}</h2>
                    <p className="my-3">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;