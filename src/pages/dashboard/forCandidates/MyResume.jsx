import { BsFillSendFill } from "react-icons/bs";
import PrimaryButton from "../../../components/shared/PrimaryButton";

const MyResume = () => {
  return (
    <div>
      <h3>My Resume</h3>

      {/* Resume */}
      <div className="mt-8">
        <form>
          <h4>Basic Information</h4>
          {/* name and emal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray font-bold mb-2">
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
              <label htmlFor="email" className="block text-gray font-bold mb-2">
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
          {/* phone and birth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label htmlFor="birth" className="block text-gray font-bold mb-2">
                Date of Birth
              </label>
              <input
                id="birth"
                type="number"
                placeholder="Date of Birth"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray font-bold mb-2">
                Phone
              </label>
              <input
                id="phone"
                type="phone"
                placeholder="+880-"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>
          </div>
          {/* address and gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray font-bold mb-2"
              >
                Adress
              </label>
              <input
                id="address"
                type="text"
                placeholder="Date of Birth"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-gray font-bold mb-2"
              >
                Gender
              </label>
              <select
                id="gender"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              >
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          {/* description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray font-bold mb-2"
            >
              Description
            </label>

            <textarea
              id="description"
              type="text"
              rows="5"
              placeholder="Short description about you.."
              className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
            />
          </div>

          <h4>Education</h4>
          {/* title and degree */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray font-bold mb-2">
                Title
              </label>
              <input
                id="Title"
                type="text"
                placeholder="Education title"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="degree"
                className="block text-gray font-bold mb-2"
              >
                Degree
              </label>
              <input
                id="degree"
                type="text"
                placeholder="Degree"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>
          </div>
          {/* institute and year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label
                htmlFor="institute"
                className="block text-gray font-bold mb-2"
              >
                Institute
              </label>
              <input
                id="institute"
                type="text"
                placeholder="Institute"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="year" className="block text-gray font-bold mb-2">
                Year
              </label>
              <input
                id="year"
                type="text"
                placeholder="Year"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>
          </div>

          <h4>Skill</h4>
          {/* title and exprrience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray font-bold mb-2">
                Title
              </label>
              <input
                id="Title"
                type="text"
                placeholder="Title"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="experience"
                className="block text-gray font-bold mb-2"
              >
                Experience
              </label>
              <input
                id="experience"
                type="text"
                placeholder="Experience"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>
          </div>
          <h4>Social Links</h4>
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

          <PrimaryButton
            title={"Submit Now"}
            icon={<BsFillSendFill />}
          ></PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default MyResume;
