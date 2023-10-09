import event from '../../assets/event.png'

const Events = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={event} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Discover, Learn, Connect</h1>
                        <p className="py-6">Join us for a transformative educational event where innovation meets inspiration. Explore new teaching methodologies, network with experts, and enhance your educational toolkit</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;