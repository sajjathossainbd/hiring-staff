import aboutImage from "/src/assets/About-us/about-image.png"
const AboutOurCommunity = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center mt-10 -mb-16 ">
        <h4 className="uppercase text-lightGray">Our Company</h4>
        <h3 className="mt-3 mb-2">About Our Company</h3>
        <p className="text-14">
          Uniquely leverage others seamless leadership skills through 24/365
          methods <br /> of empowerment. Conveniently target high-quality action
          items <br />
          with professional alignments.
        </p>
      </div>
      <div className=" min-h-screen flex justify-center">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={aboutImage}
            className="rounded-lg shadow-2xl w-1/2"
          />
          <div className="w-1/2">
            <h1 className="text-2xl font-bold">What we can do?</h1>
            <p className="py-6">
            Our community is built on the foundation of trust, respect, and shared success. We pride ourselves on cultivating a network of professionals who are not only skilled but also committed to uplifting one another. By joining us, you’re becoming part of a supportive ecosystem where collaboration and mentorship are key values. We offer a platform where job seekers can discover career paths tailored to their aspirations, and employers can find the perfect fit for their teams. Through continuous engagement, workshops, and networking events, we empower our members to grow, learn, and thrive. Together, we’re not just shaping careers — we’re building a stronger, more connected workforce for the future.
            </p>
            <button
             
              className="btn bg-darkBlue hover:bg-blue text-white"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurCommunity;
