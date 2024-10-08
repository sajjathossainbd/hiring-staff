import { BsFillSendFill } from "react-icons/bs";
import PrimaryButton from "./../../components/shared/PrimaryButton";
import useCurrentUser from "../../hooks/useCurrentUser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import axiosInstance from "../../utils/axios";

const MyProfile = () => {
  const { currentUser, refetch } = useCurrentUser();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const updatedData = {
      name: data.name || currentUser?.name,
      image: data.imageUrl || currentUser?.photo,
      role: data.role || currentUser?.role,
      about: data.about || currentUser?.about,
      phone: data.phone || currentUser?.phone,
      website: data.website || currentUser?.website,
      country: data.country || currentUser?.country,
      city: data.city || currentUser?.city,
      facebook: data.facebook || currentUser?.facebook,
      linkedin: data.linkedin || currentUser?.linkedin,
      twitter: data.twitter || currentUser?.twitter,
      github: data.github || currentUser?.github,
    };

    try {
      const res = await axiosInstance.patch(
        `/users/profile/${currentUser.email}`,
        updatedData
      );
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("Your data has been updated");
        refetch();
      } else {
        toast.error("No changes made");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div>
      <h3>My Profile</h3>

      <div className="mt-6">
        {/* Profile photo */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div>
            <img
              src={currentUser?.photo || user?.photoURL}
              alt="Profile Photo"
              className="rounded-md xl:size-96 size-72 object-cover"
            />
          </div>
        </div>
        {/* Profile form */}
        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Candidate/Recruiter Select */}
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray font-bold mb-2">
                I am a:
              </label>
              <select
                defaultValue={currentUser?.role || ""}
                disabled={currentUser?.role === "admin"}
                id="role"
                {...register("role")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              >
                <option>Select role</option>
                <option value="candidate">Candidate</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>
            {/* Name and Email */}
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
                  placeholder={currentUser?.name}
                  {...register("name")}
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
                  disabled
                  id="email"
                  type="email"
                  placeholder={currentUser?.email}
                  {...register("email")}
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
            </div>
            {/* Image URL Field */}
            <div className="mb-4">
              <label
                htmlFor="imageUrl"
                className="block text-gray font-bold mb-2"
              >
                Image URL
              </label>
              <input
                id="imageUrl"
                type="url"
                placeholder={currentUser?.photo || user?.photoURL}
                {...register("imageUrl")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>
            {/* Additional fields (phone, website, etc.) */}
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
                  type="number"
                  placeholder={currentUser?.phone}
                  {...register("phone")}
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
                  type="url"
                  placeholder={currentUser?.website}
                  {...register("website")}
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
            </div>
            {/* Bio */}
            <div className="mb-4">
              <label htmlFor="about" className="block text-gray font-bold mb-2">
                About Yourself
              </label>
              <textarea
                id="about"
                rows="5"
                placeholder={currentUser?.about}
                {...register("about")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>
            {/* Address */}
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
                  placeholder={currentUser?.country}
                  {...register("country")}
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
                  placeholder={currentUser?.city}
                  {...register("city")}
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
            </div>
            {/* Social Media Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="fb" className="block text-gray font-bold mb-2">
                  Facebook URL
                </label>
                <input
                  id="fb"
                  type="url"
                  placeholder={currentUser?.facebook}
                  {...register("facebook")}
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
                  type="url"
                  placeholder={currentUser?.twitter}
                  {...register("twitter")}
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="linkedin"
                  className="block text-gray font-bold mb-2"
                >
                  LinkedIn URL
                </label>
                <input
                  id="linkedin"
                  type="url"
                  placeholder={currentUser?.linkedin}
                  {...register("linkedin")}
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
                  type="url"
                  placeholder={currentUser?.github}
                  {...register("github")}
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
            </div>
            {/* Submit Button */}
            <PrimaryButton title={"Update Now"} icon={<BsFillSendFill />} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
