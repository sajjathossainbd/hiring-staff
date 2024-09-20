import imageLeft from "/src/assets/logo/growthSection/Card_1.png";
import imageRight from "/src/assets/logo/growthSection/Card_2.png";
import CounterSection from "./CounterSection";
import PrimaryButton from "../shared/PrimaryButton";
import perfectMatch from "./../../assets/home/perfect-match.svg";

const GrowthSection = () => {
  return (
    <div>
      <div className="container">
        <div className=" hero-content flex flex-col lg:flex-row">
          <div className="relative  mx-auto py-12 px-4 lg:px-8 lg:w-5/12">
            <div className="relative">
              <img
                src={perfectMatch}
                alt="Main Background"
                className="rounded-xl lg:w-[482px] lg:h-[435px] w-80 h-56"
              />

              <div className="absolute -top-28 -left-44 hidden md:block">
                <img
                  src={imageLeft}
                  alt="Overlay 1"
                  className="w-[390px] h-[324px] rounded-lg "
                />
              </div>

              <div className="absolute -bottom-44 -right-36 hidden md:block ">
                <img
                  src={imageRight}
                  alt="Overlay 2"
                  className="w-[335px] h-[366px] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-5/12">
            <h1 className="text-2xl lg:text-4xl font-bold text-lightGray">
              Million&apos;s Of Jobs.
            </h1>
            <h1 className="text-3xl lg:text-5xl font-bold w-full text-darkBlue py-2">
              Choose the <span className="text-blue">Perfect Match </span>for
              You
            </h1>
            <p className="py-6">
              Explore all available job openings online. Receive a customized
              salary estimate just for you. Access reviews on more than 600,000
              companies globally. Your ideal job is waiting for you.
            </p>
            <div className="flex items-center gap-3">
              <PrimaryButton title={"Search Jobs"} />
              <a className="ml-2 lg:ml-4 cursor-pointer hover:underline">
                Learn more
              </a>
            </div>
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
