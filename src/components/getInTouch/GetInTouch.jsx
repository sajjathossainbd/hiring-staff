import contact from "../../assets/Get in Touch/contact-image.png";
function GetInTouch() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="max-w-4xl mx-auto p-4">
            <p className="text-16 text-blue">Contact Us</p>
            <h2>Get in Touch</h2>
            <p className="text-16">
              The right move at the right time saves your investment. live{" "}
              <br />
              the dream of expanding your business.
            </p>
          </div>
          <div>
            <form className="max-w-4xl mx-auto p-4">
              {/* Name and Company fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enter your name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 bg-gray-100 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    className="w-full px-4 py-2 bg-gray-100 rounded-md"
                  />
                </div>
              </div>

              {/* Email and Phone fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your email
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 bg-gray-100 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full px-4 py-2 bg-gray-100 rounded-md"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about yourself
                </label>
                <textarea
                  placeholder="Tell us about yourself"
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-100 rounded-md"
                ></textarea>
              </div>

              {/* Checkbox and Submit Button */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">
                    By clicking contact us button, you agree to our terms and
                    policy
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <span className="mr-2">📧</span>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:col-span-1">
          <img src={contact} alt="" />
        </div>
      </div>
    </>
  );
}

export default GetInTouch;
