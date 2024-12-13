
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <img
                        src="/banner1.jpg"
                        className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 shadow-2xl" />
                </div>
                <div className="flex-1">
                    <h1 className="text-5xl font-bold">Latest Jobs For You!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;