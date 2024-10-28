/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import { fetchRecruiterDetails } from "../../features/recruiters/recruiterDetails/recruiterDetailsSlice";
import { useRef } from "react"; // Import useRef
import PrimaryButton from "../../components/shared/PrimaryButton";
import { PiGiftLight } from "react-icons/pi";
import CompanyDetailsCard from "./CompanyDetailsCard";
import ContactInfoCard from "./ContactInfoCard";
import { GiWorld } from "react-icons/gi";
import Map from "../../components/shared/Map";
import OpenPosition from "./OpenPosition";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaCookieBite } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { fetchRecruiterOpenJobs } from "../../features/recruiters/recruiterDetails/OpenJobsSlice";
import TitleIcon from "../../components/ui/TitleIcon";
import MiniBtn from "../../components/ui/MiniBtn";
import { CiLocationOn } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";
import MiniRoundBtn from "../../components/ui/MiniRoundBtn";
import { TbAward, TbColorSwatch } from "react-icons/tb";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function RecruiterDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const openPositionRef = useRef(null); // Create a reference for

  const scrollToOpenPosition = () => {
    if (openPositionRef.current) {
      openPositionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const {
    recruiterDetails: recruiter,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.recruiterDetails);
  const {
    recruiterOpenJobs: openJobs,
    isLoading: openJobsLoading,
    isError: openJobsError,
    error: openJobsErrorMessage,
  } = useSelector((state) => state.recruiterOpenJobs);

  // data destructuring
  const {
    _id,
    name,
    logo,
    industry,
    website,
    phone,
    email,
    location,
    ceo,
    businessType,
    annualRevenue,
    foundedYear,
    companySizeCategory,
    numberOfEmployees,
    technology,
    certifications,
    awards,
    socialProfiles,
  } = recruiter || {};
  useEffect(() => {
    dispatch(fetchRecruiterDetails(id));
    dispatch(fetchRecruiterOpenJobs(id));
  }, [dispatch, id]);

  const platformIconMap = {
    youtube: {
      icon: <FaYoutube />,
      colorClass: "text-white",
      bgClass: "bg-red-600",
    },
    facebook: {
      icon: <FaFacebook />,
      colorClass: "text-white",
      bgClass: "bg-blue",
    },
    instagram: {
      icon: <FaInstagram />,
      colorClass: "text-white",
      bgClass: "bg-pink-500",
    },
    linkedin: {
      icon: <FaLinkedin />,
      colorClass: "text-white",
      bgClass: "bg-blue",
    },
    twitter: {
      icon: <FaTwitter />,
      colorClass: "text-white",
      bgClass: "bg-blue",
    },
  };

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !recruiter?._id) {
    content = <NoFoundData title={"No Recruiter Found!"} />;
  }

  if (!isLoading && !isError && recruiter?._id) {
    content = (
      <>
        {/* Banner Section  */}
        <div className="relative">
          <img
            className="w-full h-72 object-cover rounded-xl"
            src="https://www.reliancedigital.in/wp-content/uploads/2017/11/prgramming_banner.jpg"
            alt="banner"
          />

          <div className="lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:top-full lg:-translate-y-1/2 border border-lightGray flex lg:flex-row flex-col items-center justify-between  lg:w-4/5 py-3 px-6 bg-white dark:bg-darkBlue rounded-xl lg:mt-0 mt-6">
            {/* Logo, Title, Industy */}
            <div className="flex lg:flex-row flex-col items-center justify-center gap-6 py-2">
              <img className="h-28 w-28 rounded-lg" src={logo} alt={name} />
              <div className="flex flex-col items-center lg:items-baseline lg:mb-0 mb-3">
                <h3 className="lg:pb-2 md:pb-4 pb-1">{name}</h3>
                <h4>{industry}</h4>
              </div>
            </div>
            {/* Apply Button */}
            <PrimaryButton
              title="Open Position"
              onClickBtn={scrollToOpenPosition}
            />{" "}
          </div>
        </div>
        {/* Company Infor */}
        <div className="lg:flex gap-10">
          <div className="lg:w-3/5 mt-6 lg:mt-0">
            {/* Company Descripton */}
            <TitleIcon icon={<CgNotes />} title={"Company Description"} />
            <p className="text-18 leading-6">
              {` ${name} was founded in 2004, and we have accomplished so much
                over the years. To create a world where the tasks will created
                by software and manage by software, so we can easily save our
                time. Our Founder and CEO ${ceo} was inspired to start this
                company by one or two sources of inspiration.At ${name},
                we encourage our community to achieve great technical skills and
                experience.`}
            </p>

            {/* Company Skills */}
            <div className="mt-8 md:mt-10 lg:mt-14">
              <TitleIcon icon={<TbColorSwatch />} title={"Skills"} />

              <div className="flex flex-wrap items-center gap-4">
                {technology.map((skill, index) => {
                  const colorClass =
                    skill === "Full Stack Development"
                      ? "bg-blue text-white"
                      : skill === "Full-stack development"
                      ? "bg-blue text-white"
                      : skill === "PHP"
                      ? "bg-blue text-white"
                      : skill === "Microsoft .NET"
                      ? "bg-blue text-white"
                      : skill === "Node.js"
                      ? "bg-greenLight text-white"
                      : skill === "Swift"
                      ? "bg-greenLight text-white"
                      : skill === "Android"
                      ? "bg-greenLight text-white"
                      : skill === "JavaScript"
                      ? "bg-green text-white"
                      : skill === "Ruby on Rails"
                      ? "bg-orange text-white"
                      : skill === "MySQL"
                      ? "bg-orange text-white"
                      : skill === "Ionic"
                      ? "bg-orange text-white"
                      : skill === "React Native"
                      ? "bg-orange text-white"
                      : skill === "Angular"
                      ? "bg-orange text-white"
                      : skill === "C++"
                      ? "bg-orange text-white"
                      : "bg-softGreen text-green";

                  return (
                    <div key={index}>
                      <MiniRoundBtn
                        value={skill}
                        icon={<CiLocationOn />}
                        style="text-green"
                        colorClass={colorClass}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8 md:mt-10 lg:mt-14">
              <TitleIcon
                icon={<IoLocationOutline />}
                title={"Certifications"}
              />
              <div className="">
                {certifications.map((certification, index) => (
                  <div className="flex items-center gap-2 text-xl" key={index}>
                    🌟
                    <p> {certification}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="mt-8 md:mt-10 lg:mt-14">
              <TitleIcon icon={<TbAward />} title={"Awards"} />
              <div className="">
                {awards.map((award, index) => (
                  <div className="flex items-center gap-2 text-xl" key={index}>
                    🎯
                    <p> {award}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* sdfadsf */}
            <div className="lg:mt-10 mt-6 lg:mb-0 mb-6">
              <h5 className="mb-4">Follow us on :</h5>
              <div className="flex gap-4">
                {Object.entries(socialProfiles).map(
                  ([platform, url], index) => {
                    const { icon, colorClass, bgClass } =
                      platformIconMap[platform];
                    return (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full ${bgClass} ${colorClass} flex items-center justify-center`}
                      >
                        {icon}
                      </a>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 flex flex-col gap-6">
            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-0 md:gap-x-2 gap-y-5 border border-lightGray p-4 rounded-xl">
              <CompanyDetailsCard
                icon={<PiGiftLight />}
                title="Founded Year"
                titleAnswer={foundedYear}
              />
              <CompanyDetailsCard
                icon={<MdOutlinePeopleAlt />}
                title="Total Employees"
                titleAnswer={numberOfEmployees}
              />
              <CompanyDetailsCard
                icon={<IoIosCall />}
                title="Phone"
                titleAnswer={phone}
              />
              <CompanyDetailsCard
                icon={<MdOutlineMailOutline />}
                title="Email"
                titleAnswer={email}
              />
              <CompanyDetailsCard
                icon={<FaCookieBite />}
                title="Business Type"
                titleAnswer={businessType}
              />
              <CompanyDetailsCard
                icon={<FaSackDollar />}
                title="Annual Revenue"
                titleAnswer={annualRevenue}
              />
              <CompanyDetailsCard
                icon={<BiCategory />}
                title="Company Category,"
                titleAnswer={companySizeCategory}
              />
            </div>
            <div className="border border-lightGray p-4 rounded-xl">
              <h5 className="mb-6">Contact Information</h5>
              <div className="flex flex-col gap-6">
                <ContactInfoCard
                  icon={<GiWorld />}
                  title="WEBSITE"
                  titleAnswer={website}
                  link={website}
                />
                <hr />
                <ContactInfoCard
                  icon={<IoLocationOutline />}
                  title="LOCATION"
                  titleAnswer={location}
                />
              </div>
            </div>
            <div className="border border-lightGray pt-4 rounded-xl h-[400px] z-0">
              <h5 className="mb-5 pl-4">Map Location</h5>
              {/* this is for map */}
              <Map
                center={[23.8103, 90.4125]} // Dhaka coordinates
                zoom={10}
                markers={[[[23.8103, 90.4125], "Evara"]]}
              />
            </div>
          </div>
        </div>
        <hr className="text-lightGray my-10" />
        <OpenPosition
          recruiterName={name}
          recruiterImg={logo}
          openJobs={openJobs}
          ref={openPositionRef}
        />{" "}
      </>
    );
  }

  return (
    <div className="container">
      <h3 className="mb-10">Company Details</h3>

      {/* Recruiter Details Content */}
      {content}
      <ScrollRestoration />
    </div>
  );
}

export default RecruiterDetails;
