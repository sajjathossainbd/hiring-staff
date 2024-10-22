import GetInTouchImg from "../../assets/contact-us/get-in-touch.svg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { MdOutlineMail } from "react-icons/md";
import toast from "react-hot-toast";
import PrimaryBtn from "../ui/PrimaryBtn";
import { Trans, useTranslation } from "react-i18next";
function GetInTouch() {
  const {t} = useTranslation();
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z81qoi8", "template_4hkjcri", form.current, {
        publicKey: "028PSjl2WRnGl2zgy",
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
        },
        () => {
          toast.error("Failed to send email. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="container bg-red-0">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className=" mx-auto p-4 space-y-3">
            <p className="text-16 text-blue"><Trans i18nKey={"contactUs"}/></p>
            <h2><Trans i18nKey={"getInTouch"}/></h2>
            <p className="text-16">
            <Trans i18nKey={"getInTouchDescrip"}/>
            </p>
          </div>
          <div>
          <form className="mx-auto p-4" ref={form} onSubmit={sendEmail}>
              {/* Name and Company fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder={t('enterYourName')}
                    name="user_name"
                    className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={t('company')}
                    className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-sm"
                  />
                </div>
              </div>

              {/* Email and Phone fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="email"
                    placeholder={t('yourEmail')}
                    name="user_email"
                    className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={t('phoneNumber')}
                    className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-sm"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="mb-4">
                <textarea
                  placeholder={t('tellAboutYourself')}
                  rows="10"
                  name="message"
                  className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-md"
                ></textarea>
              </div>

              {/* Checkbox and Submit Button */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-16 dark:text-lightText">
                    {t('termsAndPolicy')}
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button type="submit">
                  <PrimaryBtn title={t('sendMessages')} icon={<MdOutlineMail />} />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:col-span-1 flex items-center justify-center">
          <img src={GetInTouchImg} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
