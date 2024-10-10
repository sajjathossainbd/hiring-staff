import ReviewForm from "./ReviewForm";

const reviews = () => {
  return (
    <section className="container rounded-xl">
      <div className=" text-white rounded-xl">
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row justify-around items-center">
          <div className="flex flex-col w-full p-8">
            <h5 className="text-lg uppercase tracking-loose">
              REVIEW
            </h5>
            <h2 className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
              Leave us a feedback!
            </h2>
            <p className=" leading-snug">
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
  );
};

export default reviews;
