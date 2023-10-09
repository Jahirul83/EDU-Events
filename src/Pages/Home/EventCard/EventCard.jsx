import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const EventCard = ({ event }) => {
    const { event_id, event_name, date, location, description, organizer, registration_link, image_url } = event;
    return (
        <div>
            <div className="card bg-base-100 h-96 shadow-xl">
                <figure><img className="w-full h-60" src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{event_name}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link to={`/services/${event_id}`}><button className="btn btn-primary w-full">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
EventCard.propTypes = {
    event: PropTypes.object
}