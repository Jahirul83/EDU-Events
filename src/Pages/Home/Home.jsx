import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <h2 className="text-2xl">This is home</h2>
            {/* banner */}
            <Banner></Banner>
            <h2 className="text-3xl">services</h2>

        </div>
    );
};

export default Home;