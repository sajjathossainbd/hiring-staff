import box from "../../assets/Get in Touch/icon-email.svg";
import GetInTouchImg from "../../assets/contact-us/get-in-touch.svg";

function GetInTouch() {
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
            <form className=" mx-auto p-4">
              {/* Name and Company fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
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
                  className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-md"
                ></textarea>
              </div>

              {/* Checkbox and Submit Button */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-16 ">
                    By clicking contact us button, you agree to our terms and
                    policy
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
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
