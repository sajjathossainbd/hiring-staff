import { useRef } from "react"; // Import useRef
import PrimaryButton from "../../components/shared/PrimaryButton";
import SocialIconButton from "./SocialIconButton";
import { FaSquareFacebook } from "react-icons/fa6";
import { PiGiftLight } from "react-icons/pi";
import CompanyDetailsCard from "./CompanyDetailsCard";
import ContactInfoCard from "./ContactInfoCard";
import { GiWorld } from "react-icons/gi";
import Map from "../../components/shared/Map";
import SocialIcon from "./SocialIcon";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import OpenPosition from "./OpenPosition";

const RecruiterDetails = () => {
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

  return (
    <>
      <div className="container">
        <h4 className="mb-6">Company Details</h4>
        <div className="relative">
          <img
            className="w-full h-72 object-cover rounded-xl"
            src="https://www.reliancedigital.in/wp-content/uploads/2017/11/prgramming_banner.jpg"
            alt=""
          />
          <div className="lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:top-full lg:-translate-y-1/2 border border-lightGray flex lg:flex-row flex-col items-center justify-between  lg:w-4/5 py-3 px-6 bg-white rounded-xl lg:mt-0 mt-6">
            <div className="flex lg:flex-row flex-col items-center justify-center">
              <img
                className="h-28 w-28"
                src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
                alt=""
              />
              <div className="flex flex-col items-center lg:items-baseline lg:mb-0 mb-3">
                <h3 className="lg:pb-2 md:pb-4 pb-1">Company Name</h3>
                <h4>Agro Based Industry</h4>
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
            <h4 className="lg:mb-6 mb-2">Company Description</h4>
            <p>
              Nerdware was founded in 2004, and we have accomplished so much
              over the years. To create a world where the tasks will created by
              software and manage by software, so we can easily save our time.
              Our Founder and CEO Mr. Khobish was inspired to start this company
              by one or two sources of inspiration. At Digital Point, we
              encourage our community to achieve great technical skills and
              experience.
            </p>
            <div className="lg:mt-10 mt-6 lg:mb-0 mb-6">
              <div className="flex lg:flex-row flex-col items-center gap-4">
                <p className="font-semibold">Share This Profile: </p>
                <div className="flex lg:flex-row flex-col gap-3 items-center">
                  <SocialIconButton
                    icon={<FaSquareFacebook className="h-6 w-6" />}
                    media={"Facebook"}
                  />
                  <SocialIconButton
                    icon={<FaSquareFacebook className="h-6 w-6" />}
                    media={"Instagram"}
                  />
                  <SocialIconButton
                    icon={<FaSquareFacebook className="h-6 w-6" />}
                    media={"Twitter"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6 border border-lightGray p-4 rounded-xl">
              <CompanyDetailsCard
                icon={<PiGiftLight />}
                title="FOUNDED IN"
                titleAnswer={"10 October 1990"}
              />
              <CompanyDetailsCard
                icon={<PiGiftLight />}
                title="FOUNDED IN"
                titleAnswer={"10 October 1990"}
              />
              <CompanyDetailsCard
                icon={<PiGiftLight />}
                title="FOUNDED IN"
                titleAnswer={"10 October 1990"}
              />
            </div>
            <div className="border border-lightGray p-4 rounded-xl">
              <h5 className="mb-6">Contact Information</h5>
              <div className="flex flex-col gap-6">
                <ContactInfoCard
                  icon={<GiWorld />}
                  title="WEBSITE"
                  titleAnswer="www.khobish.com"
                  link="https://www.khobish.com"
                />
                <hr />
                <ContactInfoCard
                  icon={<GiWorld />}
                  title="LOCATION"
                  titleAnswer="Noakhali"
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
            <div className="border border-lightGray rounded-xl p-4">
              <h5 className="mb-4">Follow us on :</h5>
              <div className="flex gap-3">
                <SocialIcon link="" mediaName={<FaFacebookF />} />
                <SocialIcon link="" mediaName={<FaTwitter />} />
                <SocialIcon link="" mediaName={<IoLogoInstagram />} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-lightGray" />
      <OpenPosition ref={openPositionRef} />{" "}
      {/* Pass the ref to OpenPosition */}
    </>
  );
};

export default RecruiterDetails;
