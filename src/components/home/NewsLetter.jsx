import email from "../../assets/home/news-letter/email.svg";
import right from "../../assets/home/news-letter/undraw_newsletter_re_wrob.svg";
import left from "../../assets/home/news-letter/undraw_connecting_teams_re_hno7.svg";
import PrimaryBtn from "../ui/PrimaryBtn";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
import { Trans } from "react-i18next";

function NewsLetter() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z81qoi8", "template_4hkjcri", form.current, {
        publicKey: "028PSjl2WRnGl2zgy",
      })
      .then(
        () => {
          toast.success("Subscription successful!");
        },
        () => {
          toast.error("Failed to subscribe. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="container rounded-2xl">
      <section className="w-full mx-auto bg-blue rounded-2xl py-16 px-4 md:px-8">
        <div className="mx-auto text-center px-0 md:px-8 lg:py-12 flex items-center justify-around">
          <div>
            <img src={left} alt="img" className="w-52 hidden lg:block" />
          </div>
          <div>
            <h3 className="text-white mb-4"><Trans i18nKey={"newsLetter"}/></h3>
            

            <form
              className="flex relative flex-col sm:flex-row items-center justify-center w-full gap-4 bg-white rounded-md"
              ref={form}
              onSubmit={sendEmail}
            >
              <img
                src={email}
                alt="email box"
                className="hidden md:block md:pl-4"
              />
              <input
                type="email"
                placeholder="Enter your email"
                name="user_email"
                className="pl-3 md:pl-0 w-full py-5 md:py-6 rounded-md focus:outline-none dark:bg-white"
                required
              />
              <div className="absolute right-2 md:right-4">
                <PrimaryBtn title={<Trans i18nKey={"subscribe"}/>} />
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
