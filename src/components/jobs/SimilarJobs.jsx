import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

function SimilarJobs() {
  const arr = {
    brandImage:
      "https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg",
    position: "Frontend Developer",
    type: "Fulltime",
    posted: "10/10/23",
  };
  return (
    <div className="border rounded-xl border-bgDeepBlue p-4">
      <div className="flex justify-end font-medium text-[13px]">2 days ago</div>
      <div>
        <div className="flex gap-5 items-start">
          <img
            className="h-14 w-auto object-cover"
            src={arr.brandImage}
            alt=""
          />
          <div>
            <h5 className="pb-1">{arr.position}</h5>
            <div className="flex items-center gap-x-2 text-14">
              <span className="text-blue font-medium">Company Name</span>
              <GoDotFill className="text-[8px] text-gray" />
              <div className="flex items-center gap-x-1">
                <CiLocationOn />
                <span>Dhaka , Bangladesh</span>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <span className="px-2 py-1 bg-bgLightWhite text-14 font-medium rounded-md">
                Fulltime
              </span>
              <span className="px-2 py-1 bg-bgLightWhite text-14 font-medium rounded-md">
                Remote
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimilarJobs;
