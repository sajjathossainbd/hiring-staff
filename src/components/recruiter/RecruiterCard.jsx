function RecruiterCard(recruiter) {
  const { brandImage, brandName, ratings, location, openJobs } = recruiter;
  return (
    <div className="boxBorderHoverBlue w-5/6 p-4 border-[#B4C0E0] hover:-translate-y-1 hover:bg-[white] bg-[#F8FAFF] shadow-sm rounded-lg">
      <img
        src={brandImage}
        alt={brandName}
        className="w-20 h-20 mx-auto mb-4 pt-8"
      />
      <h3 className="text-xl font-semibold text-center text-darkBlue hover:text-blue">
        {brandName}
      </h3>
      <div className="flex justify-center items-center mt-2">
        <div className="text-yellow-500">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`text-xl ${
                index < ratings / 10 ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <span className="ml-2 ">({ratings})</span>
      </div>
      <p className=" text-center text-gray-600 mt-2">{location}</p>
      <div className="mt-8 flex justify-center mb-8">
        <button className="bg-[#E0E6F7] hover:text-blue p-3 rounded-md text-darkBlue font-medium transition-all duration-500 text-14">
          {openJobs > 0 ? `${openJobs} Open Jobs` : "No Open Job"}
        </button>
      </div>
    </div>
  );
}

export default RecruiterCard;
