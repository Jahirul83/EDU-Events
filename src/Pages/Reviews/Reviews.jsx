import person1 from '../../assets/person.jpg'
import person2 from '../../assets/person2.jpg'
import person3 from '../../assets/person3.jpg'

const Reviews = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* card */}
            <div className="card bg-base-100 shadow-xl py-5">
                <figure><img className='w-60 h-60 bg-white border-2 border-blue-500 rounded-full' src={person1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">John Smith!</h2>
                    <p>Attending the Tech Symposium was an enlightening experience! The speakers were top-notch, and I gained valuable insights into the latest trends in technology. The workshops were hands-on and helped me enhance my skills.</p>
                    <div className="card-actions">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
            {/* card */}
            <div className="card bg-base-100 shadow-xl py-5">
                <figure><img className='w-60 h-60 bg-white border-2 border-blue-500 rounded-full' src={person2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Michael Johnson</h2>
                    <p>The STEM Education Conference exceeded my expectations. The presenters were knowledgeable and passionate about their subjects. I left the event feeling inspired and armed with practical ideas to implement in my classroom.</p>
                    <div className="card-actions">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
            {/* card */}
            <div className="card bg-base-100 shadow-xl py-5">
                <figure><img className='w-60 h-60 bg-white border-2 border-blue-500 rounded-full' src={person3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">David Williams</h2>
                    <p>I recently attended the Financial Literacy Workshop, and it was a game-changer for me. I learned how to manage my finances, invest wisely, and plan for the future. This workshop is a must for anyone looking to improve their financial literacy.</p>
                    <div className="card-actions">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Reviews;