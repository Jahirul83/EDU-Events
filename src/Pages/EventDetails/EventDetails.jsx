import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const EventDetails = () => {
    const [cardDetails, setCardDetails] = useState({});


    // finding card for details

    const serviceData = useLoaderData();
    const { id } = useParams();
    // console.log(serviceData);

    useEffect(() => {
        const findCardDetails = serviceData.find(service => service.event_id === id);
        setCardDetails(findCardDetails);
    }, [id, serviceData]);

    const { event_id, event_name, date, location, description, organizer, registration_link, image_url } = cardDetails;
    console.log(cardDetails);

    return (
        <div>
            <div className="mb-20">
                <div className="relative min-h-screen my-14">
                    <img className="w-screen h-screen" src={image_url} alt="" />
                    <div className="absolute bottom-2 -mt-10 bg-opacity-50 bg-slate-900 p-6 w-full">
                        <button className="btn bg-orange-500 text-white">Date: {date}</button>
                    </div>
                </div>
                <div className="my-12">
                    <h2 className="text-3xl">{event_name}</h2>
                    <p className="my-3">{description}</p>
                    <p className="my-3">date: {date}</p>
                    <p className="my-3">location: {location}</p>
                    <p className="my-3">organizer: {organizer}</p>
                </div>
            </div>

        </div>
    );
};

export default EventDetails;