import SearchByFilter from "../shared/SearchByFilter";

function JobBanner() {
  return (
    <div className="lg:py-16 lg:px-0 px-3 py-10 bg-bgLightWhite dark:bg-darkBlue flex flex-col items-center rounded-3xl">
      <div className="text-center pb-6">
        <h3>
          <span className="text-blue">225 Jobs</span> Available Now
        </h3>
        <p className="max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          repellendus magni, atque delectus molestias quis
        </p>
      </div>
      {/* search filter */}
      <SearchByFilter />
    </div>
  );
}

export default JobBanner;
