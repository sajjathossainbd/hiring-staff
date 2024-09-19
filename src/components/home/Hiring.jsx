import left from "../../assets/Hiring/bg-left-hiring.svg";
import right from "../../assets/Hiring/bg-right-hiring.svg";
import btn from "../../assets/Hiring/apply.svg";
function Hiring() {
  return (
    <div className="container mx-auto flex justify-center items-center mt-12">
      <div className="flex w-[90%] justify-evenly items-center border border-lightGray rounded-md flex-col lg:flex-row p-5 space-y-3 shadow-md lg:gap-3">
        <div className="hidden lg:block">
          <img src={left} alt="left img" />
        </div>
        <div className="flex lg:flex-col gap-2 lg:gap-0   ">
          <p className="text-16 text-lightGray font-bold flex items-end ">
            WE ARE
          </p>
          <h2 className="lg:mb-10">HIRING</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-12">
          <div className="text-center">
            <p className="text-18  text-lightGray">
              Let’s Work Together & Explore Opportunities
            </p>
          </div>
          <div className="lg:mt-10">
            <button className="bg-blue hover:bg-darkBlue text-14 text-white border-none rounded-sm md:rounded-md lg:py-3 h-10 lg:h-14 w-32 lg:w-24">
              <div className="flex  items-center lg:items-start justify-center">
                <img src={btn} alt="icon" />
                <div className="flex text-14 lg:flex-col">
                  <span className="ml-2 "> Apply</span>
                  <span className="ml-1 md:ml-0"> Now</span>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={right} alt="right img" />
        </div>
      </div>
    </div>
  );
}

export default Hiring;
