import ReviewForm from "./ReviewForm";


const reviews = () => {
    return (
        <div>
            <section className="container rounded-xl">
                <div className="bg-blue text-white rounded-xl">
                    <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row justify-around">
                        <div className="flex flex-col w-full p-8">
                            <h5 className="ml-6 text-lg uppercase tracking-loose text-white">REVIEW</h5>
                            <h2 className="text-3xl text-white md:text-5xl my-4 leading-relaxed md:leading-snug">Leave us a feedback!</h2>
                            <p className="text-white leading-snug">
                                Please provide your valuable feedback and something something ...
                            </p>
                        </div>
                        <div className="flex flex-col w-full justify-center">
                            <div className="container w-full px-4">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full px-4">
                                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                                            <ReviewForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default reviews;