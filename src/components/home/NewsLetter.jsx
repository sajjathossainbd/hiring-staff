import bg from "../../assets/News Letter/newsletter2.avif";
import email from "../../assets/News Letter/email.svg";
import right from "../../assets/News Letter/undraw_newsletter_re_wrob.svg";
import left from "../../assets/News Letter/undraw_connecting_teams_re_hno7.svg";
function NewsLetter() {
  return (
    <div className="container mx-auto rounded-2xl mt-12 ">
      <section className="w-[97%] mx-auto bg-blue rounded-2xl py-16 px-4 md:px-8">
        <div className=" mx-auto text-center px-0 md:px-8 lg:py-12 flex items-center justify-around">
          <div>
            <img src={left} alt="img" className="w-52 hidden lg:block" />
          </div>
          <div>
            <h3 className=" text-white mb-4">New Things Will Always</h3>
            <h3 className=" text-white mb-8">Update Regularly</h3>

            <form className="flex relative flex-col sm:flex-row items-center justify-center w-full gap-4 bg-white px-4 rounded-md">
              <img src={email} alt="" className="hidden md:block" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-1 py-5 md:py-8 rounded-md focus:outline-none "
              />
              <button className="w-32 absolute right-4 sm:w-auto bg-blue hover:bg-darkBlue text-white  px-6 py-3 md:py-4 rounded-md hover:bg-blue-700 hover:text-white transition">
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <img src={right} alt="img" className="w-52 hidden lg:block" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsLetter;
