import { useQuery } from "@tanstack/react-query";
import InfoCard from "../../../components/ui/InfoCard";
import { GoPerson } from "react-icons/go";
import useAuth from "../../../hooks/useAuth";
import axiosInstance from "../../../utils/axios";

function CandidatesProfileUI() {
  const { user } = useAuth();
  const { data: currentCandidate } = useQuery({
    queryKey: ["currentCandidate", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/candidates/currentCandidate/${user?.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  const {
    first_name,
    last_name,
    email,
    phone_number,
    special_profession,
    experience_year,
    job_type,
    resume,
    cover_letter,
    location = {},
  } = currentCandidate || {};

  return (
    <div className="bg-white p-10 rounded-lg mt-10 ">
      <div className="flex flex-col items-center">
        <div
          className="relative w-full h-36 md:h-44 lg:h-60 xl:h-72 bg-cover bg-center border-[7px] border-white rounded-xl"
          style={{
            backgroundImage: `url(${
              currentCandidate?.coverImage ||
              "https://i.ibb.co.com/mBcjQj6/download-1.jpg"
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
        </div>

        <div className="mt-[-40px] lg:mt-[-100px] md:mt-[-70px] -left-20 z-50">
          <img
            src={currentCandidate?.photo_url || user?.photoURL}
            alt="Profile Photo"
            className="rounded-full xl:h-52 lg:h-44 md:h-32 h-20 xl:w-52 lg:w-44 md:w-32 w-20 object-cover border-[7px] border-white"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-y-8 mt-10">
        <InfoCard icon={<GoPerson />} label={"First Name"} name={first_name} />
        <InfoCard icon={<GoPerson />} label={"Last Name"} name={last_name} />
        <InfoCard icon={<GoPerson />} label={"Email"} name={email} />
        <InfoCard
          icon={<GoPerson />}
          label={"Phone Number"}
          name={phone_number}
        />
        <InfoCard
          icon={<GoPerson />}
          label={"Profession"}
          name={special_profession}
        />
        <InfoCard
          icon={<GoPerson />}
          label={"Experience Year"}
          name={experience_year}
        />
        <InfoCard icon={<GoPerson />} label={"Job Type"} name={job_type} />
        <InfoCard
          icon={<GoPerson />}
          label={"Location"}
          name={`${location.city}, ${location.country}`}
        />
        <InfoCard icon={<GoPerson />} label={"Resume"} link={resume} />
        <InfoCard
          icon={<GoPerson />}
          label={"Cover Letter"}
          link={cover_letter}
        />
      </div>
    </div>
  );
}

export default CandidatesProfileUI;
