import email from "../../assets/home/news-letter/email.svg";
import right from "../../assets/home/news-letter/undraw_newsletter_re_wrob.svg";
import left from "../../assets/home/news-letter/undraw_connecting_teams_re_hno7.svg";
import PrimaryBtn from "../ui/PrimaryBtn";

function NewsLetter() {
  return (
    <div className="container rounded-2xl">
      <section className="w-full mx-auto bg-blue rounded-2xl py-16 px-4 md:px-8">
        <div className="mx-auto text-center px-0 md:px-8 lg:py-12 flex items-center justify-around">
          <div>
            <img src={left} alt="img" className="w-52 hidden lg:block" />
          </div>
          <div>
            <h3 className="text-white mb-4">New Things Will Always</h3>
            <h3 className="text-white  mb-8">Update Regularly</h3>

            <form className="flex relative flex-col sm:flex-row items-center justify-center w-full gap-4 bg-white rounded-md ">
              <img
                src={email}
                alt="email box"
                className="hidden md:block md:pl-4"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-3 md:pl-0 w-full py-5 md:py-6 rounded-md focus:outline-none dark:bg-white"
              />

              <div className="absolute right-2 md:right-4">
                <PrimaryBtn title={"Subscribe"} />
                
              </div>
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
