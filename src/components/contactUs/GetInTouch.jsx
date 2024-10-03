import box from "../../assets/home/get-in-touch/icon-email.svg";
import GetInTouchImg from "../../assets/contact-us/get-in-touch.svg";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { send } from "emailjs-com";
import toast from "react-hot-toast";


function GetInTouch() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z81qoi8', 'template_4hkjcri', form.current, {
        publicKey: '028PSjl2WRnGl2zgy',
      })
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send email. Please try again.');
        }
      );

    e.target.reset();
  };

  return (
    <div className="container bg-red-0">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className=" mx-auto p-4 space-y-3">
            <p className="text-16 text-blue">Contact Us</p>
            <h2>Get in Touch</h2>
            <p className="text-16">
              The right move at the right time saves your investment. live{" "}
              <br />
              the dream of expanding your business.
            </p>
          </div>
          <div>
            <form className=" mx-auto p-4" ref={form} onSubmit={sendEmail}>
              {/* Name and Company fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="user_name"
                    className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-sm"
                  />
                </div>
              </div>

              {/* Email and Phone fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    name="user_email"
                    className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-sm"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="mb-4">
                <textarea
                  placeholder="Tell us about yourself"
                  rows="10"
                  name="massage"
                  className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-md"
                ></textarea>
              </div>

              {/* Checkbox and Submit Button */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-16 dark:text-lightText">
                    By clicking contact us button, you agree to our terms and
                    policy
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  value={send}
                  className="flex items-center justify-center px-6 py-4 text-16 font-bold tracking-wider bg-blue text-white rounded-md hover:bg-darkBlue"
                >
                  <span className="mr-2">
                    <img src={box} alt="box" />
                  </span>
                  Send Message
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
