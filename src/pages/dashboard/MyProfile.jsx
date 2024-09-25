import { BsFillSendFill, BsUpload } from "react-icons/bs";
import PrimaryButton from "./../../components/shared/PrimaryButton";
const MyProfile = () => {
  return (
    <div>
      <h3>My Profile</h3>

      <div className="mt-6">
        {/* profile photo */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="relative">
            <img
              src="https://via.placeholder.com/450x450.jpg
"
              alt="Profile Photo"
              className="rounded-md"
            />
            <div className="absolute bottom-4 left-3">
              <PrimaryButton title={"Uplode Image"} icon={<BsUpload />} />
            </div>
          </div>
          <p>
            Max file size is 1MB, Minimum dimension: 450x450 And Suitable files
            are .jpg & .png
          </p>
        </div>
        {/* profile form */}
        <div className="mt-6">
          <form>
            {/* name and emal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray font-bold mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray font-bold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
            </div>
            {/* phone and website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray font-bold mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="phone"
                  placeholder="+880-"
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="site"
                  className="block text-gray font-bold mb-2"
                >
                  Website
                </label>
                <input
                  id="site"
                  type="text"
                  placeholder="Website link"
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
            </div>
            {/* bio */}
            <div className="mb-4">
              <label htmlFor="about" className="block text-gray font-bold mb-2">
                About Yourself
              </label>

              <textarea
                id="about"
                type="text"
                rows="5"
                placeholder="About Yourself"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>
            {/* address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-gray font-bold mb-2"
                >
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Country name"
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-gray font-bold mb-2"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="City name"
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
            </div>
            {/* social */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="fb" className="block text-gray font-bold mb-2">
                  Facebook URL
                </label>
                <input
                  id="fb"
                  type="text"
                  placeholder="Facebook URL"
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="twitter"
                  className="block text-gray font-bold mb-2"
                >
                  Twitter URL
                </label>
                <input
                  id="twitter"
                  type="text"
                  placeholder="Twitter URL"
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="fb" className="block text-gray font-bold mb-2">
                  Linkedin URL
                </label>
                <input
                  id="linkedin"
                  type="text"
                  placeholder="Linkedin URL"
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="github"
                  className="block text-gray font-bold mb-2"
                >
                  GitHub URL
                </label>
                <input
                  id="github"
                  type="text"
                  placeholder="GItHub URL"
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
            </div>
            <PrimaryButton title={"Submit Now"} icon={<BsFillSendFill />}></PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
