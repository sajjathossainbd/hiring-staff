import imageLeft from "/src/assets/logo/growthSection/Card_1.png";
import imageCenter from "/src/assets/logo/growthSection/Card-center.png";
import imageRight from "/src/assets/logo/growthSection/Card_2.png";
import CounterSection from "./CounterSection";
const GrowthSection = () => {
  return (
    <div>
      <div className="hero  min-h-screen ">
        <div className=" hero-content flex-col lg:flex-row w-full">
          <div className="relative  mx-auto py-12 px-4 lg:px-8">
            {/* Background Image */}
            <div className="relative">
              <img
                src={imageCenter}
                alt="Main Background"
                className="rounded-xl lg:w-[482px] lg:h-[435px] w-80 h-56"
              />

              {/* First Overlapping Image */}
              <div className="absolute -top-28 -left-44 hidden md:block">
                <img
                  src={imageLeft}
                  alt="Overlay 1"
                  className="w-[390px] h-[324px] rounded-lg "
                />
              </div>

              {/* Second Overlapping Image */}
              <div className="absolute -bottom-44 -right-36 hidden md:block ">
                <img
                  src={imageRight}
                  alt="Overlay 2"
                  className="w-[335px] h-[366px] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className=" w-full md:w-1/2 px-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-lightGray">
              Million&apos;s Of Jobs.
            </h1>
            <h1 className="text-3xl lg:text-5xl font-bold w-full text-darkBlue py-2">
              Find The One That’s <span className="text-blue">Right</span> For
              You
            </h1>
            <p className="py-6">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide. The right job is out there.
            </p>
            <button
              style={{ color: "white" }}
              className="btn bg-blue hover:bg-darkBlue "
            >
              Search Jobs
            </button>
            <a className="ml-2 lg:ml-4 cursor-pointer">Learn more</a>
          </div>
        </div>
      </div>
      <div>
        <CounterSection></CounterSection>
      </div>
    </div>
  );
};

export default GrowthSection;
