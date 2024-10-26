import { Helmet } from "react-helmet-async";
import TinnyBanner from "../../components/shared/TinnyBanner";
import GetInTouch from "../../components/contactUs/GetInTouch";
import { Trans, useTranslation } from "react-i18next";
import { ScrollRestoration } from "react-router-dom";
function ContactUs() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Hiring Staff - Contact Us</title>
      </Helmet>
      <TinnyBanner
        title={<Trans i18nKey={"contactUs"} />}
        subTitle={<Trans i18nKey={"contactUsSubtitle"} />}
        currentPath={"Contact Us"}
      />
      <div className="container">
        <div className="lg:p-8 p-5 flex lg:flex-row flex-col lg:items-center lg:gap-0 justify-between bg-bgLightWhite dark:bg-darkBlue rounded gap-7">
          <div className="space-y-2 mr-16 ">
            <p>
              205 North Michigan Avenue <br /> Chicago, 60601, USA
            </p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@jobbox.com</p>
            <p className="text-blue text-14 tracking-widest uppercase hover:underline">
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
      <ScrollRestoration />
    </>
  );
}

export default ContactUs;
