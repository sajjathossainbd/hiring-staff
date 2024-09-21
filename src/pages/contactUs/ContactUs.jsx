import { Helmet } from "react-helmet-async";
import TinnyBanner from "../../components/shared/TinnyBanner";
import GetInTouch from "../../components/contactUs/GetInTouch";

function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Hiring Staff - Contact Us</title>
      </Helmet>
      <TinnyBanner
        title={"Contact Us"}
        subTitle={"Get the latest news, updates and tips"}
        currentPath={"Contact Us"}
      />
      <div className="container">
        <div className="lg:p-8 p-5 flex lg:flex-row flex-col lg:items-center lg:gap-0 justify-between bg-bgLightWhite rounded gap-7">
          <div className="space-y-2 mr-16 ">
            <div className="flex items-center gap-2">
              <img
                className="w-32"
                src="https://i.ibb.co/0rKvK9v/Hiring-Staff-Logo.png"
                alt="Hiring Stuff"
              />
            </div>
            <p>
              205 North Michigan Avenue <br /> Chicago, 60601, USA
            </p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@jobbox.com</p>
            <p className="text-blue text-14 tracking-widest uppercase">
              View map
            </p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
            <div>
              <h5>London</h5>
              <p className="max-w-[200px] text-14 mt-1 text-14">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
            </div>
            <div>
              <h5>Chicago</h5>
              <p className="max-w-[200px] text-14 mt-1">
                3891 Ranchview Dr. Richardson, California 62639
              </p>
            </div>
            <div>
              <h5>Sydney</h5>
              <p className="max-w-[200px] text-14 mt-1">
                3891 Ranchview Dr. Richardson, California 62639
              </p>
            </div>
            <div>
              <h5>New York</h5>
              <p className="max-w-[200px] text-14 mt-1">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
            <div>
              <h5>San Francisco</h5>
              <p className="max-w-[200px] text-14 mt-1">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>
            </div>
            <div>
              <h5>Singapore</h5>
              <p className="max-w-xs text-14 mt-1">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </>
  );
}

export default ContactUs;
