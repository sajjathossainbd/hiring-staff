/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
import SocialIcon from "./SocialIcon";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import OpenPosition from "./OpenPosition";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaCookieBite } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
function RecruiterDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  // for navigate on open jobs
  const openPositionRef = useRef(null); // Create a reference for OpenPosition

  // Scroll to OpenPosition function
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

  // data destructuring
  const {
    _id,
    name,
    logo,
    industry,
    website,
    phone,
    email,
    map,
    location,
    ceo,
    businessType,
    annualRevenue,
    foundedYear,
    companySizeCategory,
    numberOfEmployees,
    certifications,
    awards,
    socialProfiles,
  } = recruiter || {};

  useEffect(() => {
    dispatch(fetchRecruiterDetails(id));
  }, [dispatch, id]);

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
        <div className="relative">
          <img
            className="w-full h-72 object-cover rounded-xl"
            src="https://www.reliancedigital.in/wp-content/uploads/2017/11/prgramming_banner.jpg"
            alt="banner"
          />
          <div className="lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:top-full lg:-translate-y-1/2 border border-lightGray flex lg:flex-row flex-col items-center justify-between  lg:w-4/5 py-3 px-6 bg-white dark:bg-darkBlue rounded-xl lg:mt-0 mt-6">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-6">
              <img className="h-28 w-28" src={logo} alt={name} />
              <div className="flex flex-col items-center lg:items-baseline lg:mb-0 mb-3">
                <h3 className="lg:pb-2 md:pb-4 pb-1">{name}</h3>
                <h4>{industry}</h4>
              </div>
            </div>
            <PrimaryButton
              title="Open Position"
              onClickBtn={scrollToOpenPosition}
            />{" "}
            {/* Call scroll function */}
          </div>
        </div>
        <div className="lg:flex gap-10">
          <div className="lg:w-3/5 mt-6 lg:mt-0">
            <h4 className="lg:mb-6 mb-2">Description</h4>
            <p>
              {` ${name} was founded in 2004, and we have accomplished so much
                over the years. To create a world where the tasks will created
                by software and manage by software, so we can easily save our
                time. Our Founder and CEO ${ceo} was inspired to start this
                company by one or two sources of inspiration.At ${name},
                we encourage our community to achieve great technical skills and
                experience.`}
            </p>
            <div className="lg:mt-10 mt-6 lg:mb-0 mb-6">
              <h5 className="mb-4">Follow us on :</h5>
              <div className="flex gap-3">
                <SocialIcon
                  link={socialProfiles.linkedin}
                  mediaName={<FaLinkedin />}
                />
                <SocialIcon
                  link={socialProfiles.twitter}
                  mediaName={<FaTwitter />}
                />
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
                  titleAnswer={`${location.address}, ${location.country}`}
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
        <OpenPosition ref={openPositionRef} />{" "}
        {/* Pass the ref to OpenPosition */}
      </>
    );
  }
  return (
    <div className="container">
      <h3 className="mb-10">Company Details</h3>

      {/* Recruiter Details Content */}
      {content}
    </div>
  );
}

export default RecruiterDetails;
