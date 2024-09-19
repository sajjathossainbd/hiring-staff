import SectionTitle from "../shared/SectionTitle";
import companyAbout from "./../../assets/About-us/company.svg";
const AboutOurCommunity = () => {
  return (
    <div className="py-14 container">
      <div>
        <SectionTitle
          title={"About Our Company"}
          subTitle={
            "Discover more about our company and learn what sets us apart. Explore our mission, values, and the dedicated team that works tirelessly to deliver exceptional results and drive innovation in our industry."
          }
          subHeading={"Our Company"}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10  mt-10 lg:mt-0">
        <img src={companyAbout} className="w-10/12 lg:w-5/12 " />
        <div className="w-10/12  lg:w-5/12 py-4">
          <h1 className="text-2xl font-bold">What we can do?</h1>
          <p className="py-6">
            Our community is built on the foundation of trust, respect, and
            shared success. We pride ourselves on cultivating a network of
            professionals who are not only skilled but also committed to
            uplifting one another. By joining us, you’re becoming part of a
            supportive ecosystem where collaboration and mentorship are key
            values. We offer a platform where job seekers can discover career
            paths tailored to their aspirations, and employers can find the
            perfect fit for their teams. Through continuous engagement,
            workshops, and networking events, we empower our members to grow,
            learn, and thrive. Together, we’re not just shaping careers — we’re
            building a stronger, more connected workforce for the future.
          </p>
          <button className="btn bg-darkBlue hover:bg-blue text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutOurCommunity;
