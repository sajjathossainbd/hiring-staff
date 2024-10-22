import SectionTitle from "../shared/SectionTitle";
import companyAbout from "./../../assets/About-us/company.svg";
import { Trans, useTranslation } from "react-i18next";
const AboutOurCommunity = () => {
  const {t} = useTranslation();
  return (
    <div className="py-14 container">
      <div>
        <SectionTitle
          title={<Trans i18nKey={"aboutUsTitle"}/>}
          subTitle={
           <Trans i18nKey={"aboutUsSubTitle"}/>
          }
          subHeading={"Our Company"}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10  mt-10 lg:mt-0">
        <img src={companyAbout} className="w-10/12 lg:w-5/12 " />
        <div className="w-10/12  lg:w-5/12 py-4">
          <h1 className="text-2xl font-bold"><Trans i18nKey={"companyAbout"}/></h1>
          <p className="py-6">
            <Trans i18nKey={"companyAboutDescription"}/>
          </p>
          <button className="btn bg-darkBlue hover:bg-blue text-white">
          <Trans i18nKey={"readMore"}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutOurCommunity;
