import email from "../../assets/home/news-letter/email.svg";
import right from "../../assets/home/news-letter/undraw_newsletter_re_wrob.svg";
import left from "../../assets/home/news-letter/undraw_connecting_teams_re_hno7.svg";
import PrimaryBtn from "../ui/PrimaryBtn";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
import { Trans, useTranslation } from "react-i18next";

function NewsLetter() {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_a8p5k2s", "template_uf94t2q", form.current, {
      publicKey: "11__AMamyO91vDWSR",
    })
      .then(
        () => {
          toast.success("Subscription successful!");
          e.target.reset();
        },
        (error) => {
          toast.error("Subscription failed. Please try again.");
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <div className="container rounded-2xl">
      <section className="w-full mx-auto bg-blue rounded-2xl py-16 px-4 md:px-8">
        <div className="mx-auto text-center px-0 md:px-8 lg:py-12 flex items-center justify-around">
          <div>
            <img src={left} alt="img" className="w-52 hidden lg:block" />
          </div>
          <div>
            <h4 className="text-white text-[26px] lg:text-[36px] mb-6">
              <Trans i18nKey={"newsLetter"} />
            </h4>

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
                placeholder="Email"
                name="from_email"
                className="pl-3 md:pl-0 w-full py-5 md:py-5 rounded-md focus:outline-none dark:bg-white"
                required
              />
              <div className="absolute right-2 md:right-4">
                <button type="submit">
                  <PrimaryBtn title={<Trans i18nKey={"subscribe"} />} />
                </button>
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
