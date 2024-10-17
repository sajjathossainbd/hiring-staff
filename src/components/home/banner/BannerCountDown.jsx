import BannerCountDownCard from "./BannerCountDownCard";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BiBuildings } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { AiOutlineNotification } from "react-icons/ai";

function BannerCountDown() {
  const bannerCountDownData = [
    {
      id: 1,
      icon: <HiOutlineBriefcase />,
      title: "Live Jobs",
      number: 3232,
    },
    {
      id: 2,
      icon: <BiBuildings />,
      title: "Recruiters",
      number: 232,
    },
    {
      id: 3,
      icon: <MdGroups />,
      title: "Candidates",
      number: 2532,
    },
    {
      id: 4,
      icon: <AiOutlineNotification />,
      title: "Today New Jobs",
      number: 1265,
    },
  ];
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
      {bannerCountDownData.map((data) => (
        <BannerCountDownCard key={data.id} data={data} />
      ))}
    </div>
  );
}

export default BannerCountDown;
