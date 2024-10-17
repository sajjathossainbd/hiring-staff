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
      role: data.role || currentUser?.role,
      first_name: data.first_name || currentUser?.first_name,
      last_name: data.last_name || currentUser?.last_name,
      email: currentUser?.email, // Email should be fetched from currentUser
      special_profession: data.special_profession || currentUser?.special_profession,
      experience_year: data.experience_year || currentUser?.experience_year,
      coverImage: data.coverImageUrl || currentUser?.coverImage,
      phone_number: data.phone_number || currentUser?.phone_number,
      image: data.image || currentUser?.photo_url,
      resume: data.resume || currentUser?.resume,
      cover_letter: data.cover_letter || currentUser?.cover_letter,
      skills: data.skills.split(",").map(skill => skill.trim()) || currentUser?.skills,
      education: currentUser?.education, // Assuming education remains unchanged
      company_experience: currentUser?.company_experience, // Assuming company experience remains unchanged
      certifications: currentUser?.certifications, // Assuming certifications remain unchanged
      location: {
        city: data.city || currentUser?.location?.city,
        state: data.state || currentUser?.location?.state,
        country: data.country || currentUser?.location?.country,
      },
      about_me: data.about_me || currentUser?.about_me,
      job_type: data.job_type || currentUser?.job_type,
    };

    try {
      const res = await axiosInstance.patch(
        `/users/profile/${currentUser.email}`,
        updatedData
      );
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
        <div className="flex flex-col items-center">
          <div className="relative w-full h-36 md:h-44 lg:h-60 xl:h-72 bg-cover bg-center border-4 border-bgDeepBlue rounded-xl" style={{ backgroundImage: `url(${currentUser?.coverImage || 'https://i.ibb.co.com/mBcjQj6/download-1.jpg'})` }}>
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
          </div>

          <div className="mt-[-40px] lg:mt-[-100px] md:mt-[-70px] -left-20 z-50">
            <img
              src={currentUser?.image || user?.photoURL}
              alt="Profile Photo"
              className="rounded-full xl:h-52 lg:h-44 md:h-32 h-20 xl:w-52 lg:w-44 md:w-32 w-20 object-cover border-4 border-bgDeepBlue"
            />
          </div>
        </div>

        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray font-bold mb-2">
                I am a:
              </label>
              <select
                defaultValue={currentUser?.role}
                disabled={currentUser?.role === "admin"}
                id="role"
                {...register("role")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              >
                <option disabled >Select role</option>
                <option disabled >Admin</option>
                <option value="candidate">Candidate</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>
            {/* First and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="first_name" className="block text-gray font-bold mb-2">First Name</label>
                <input
                  id="first_name"
                  type="text"
                  placeholder={currentUser?.first_name}
                  {...register("first_name")}
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="last_name" className="block text-gray font-bold mb-2">Last Name</label>
                <input
                  id="last_name"
                  type="text"
                  placeholder={currentUser?.last_name}
                  {...register("last_name")}
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray font-bold mb-2">Email</label>
              <input
                disabled
                id="email"
                type="email"
                value={currentUser?.email}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>

            {/* Special Profession */}
            <div className="mb-4">
              <label htmlFor="special_profession" className="block text-gray font-bold mb-2">Special Profession</label>
              <input
                id="special_profession"
                type="text"
                placeholder={currentUser?.special_profession}
                {...register("special_profession")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>

            {/* Experience Years */}
            <div className="mb-4">
              <label htmlFor="experience_year" className="block text-gray font-bold mb-2">Years of Experience</label>
              <input
                id="experience_year"
                type="number"
                placeholder={currentUser?.experience_year}
                {...register("experience_year")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label htmlFor="phone_number" className="block text-gray font-bold mb-2">Phone Number</label>
              <input
                id="phone_number"
                type="tel"
                placeholder={currentUser?.phone_number}
                {...register("phone_number")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>

            {/* Photo URL */}
            <div className="mb-4">
              <label htmlFor="photo_url" className="block text-gray font-bold mb-2">Profile Photo URL</label>
              <input
                id="photo_url"
                type="url"
                placeholder={currentUser?.image}
                {...register("image")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>

            {/* Cover Image URL */}
            <div className="mb-4">
              <label
                htmlFor="imageUrl"
                className="block text-gray font-bold mb-2"
              >
                Cover Image URL
              </label>
              <input
                id="imageUrl"
                type="url"
                placeholder={currentUser?.coverImage}
                {...register("coverImageUrl")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>

            {/* Resume URL */}
            <div className="mb-4">
              <label htmlFor="resume" className="block text-gray font-bold mb-2">Resume URL</label>
              <input
                id="resume"
                type="url"
                placeholder={currentUser?.resume}
                {...register("resume")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>

            {/* Cover Letter URL */}
            <div className="mb-4">
              <label htmlFor="cover_letter" className="block text-gray font-bold mb-2">Cover Letter URL</label>
              <input
                id="cover_letter"
                type="url"
                placeholder={currentUser?.cover_letter}
                {...register("cover_letter")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>

            {/* Skills */}
            <div className="mb-4">
              <label htmlFor="skills" className="block text-gray font-bold mb-2">Skills (comma-separated)</label>
              <input
                id="skills"
                type="text"
                placeholder={currentUser?.skills?.join(", ")}
                {...register("skills")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray font-bold mb-2">City</label>
                <input
                  id="city"
                  type="text"
                  placeholder={currentUser?.location?.city}
                  {...register("city")}
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="state" className="block text-gray font-bold mb-2">State</label>
                <input
                  id="state"
                  type="text"
                  placeholder={currentUser?.location?.state}
                  {...register("state")}
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="block text-gray font-bold mb-2">Country</label>
                <input
                  id="country"
                  type="text"
                  placeholder={currentUser?.location?.country}
                  {...register("country")}
                  className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                />
              </div>
            </div>

            {/* About Me */}
            <div className="mb-4">
              <label htmlFor="about_me" className="block text-gray font-bold mb-2">About Me</label>
              <textarea
                id="about_me"
                rows="4"
                placeholder={currentUser?.about_me}
                {...register("about_me")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              />
            </div>

            {/* Job Type */}
            <div className="mb-4">
              <label htmlFor="job_type" className="block text-gray font-bold mb-2">Job Type</label>
              <select
                defaultValue={currentUser?.job_type || "remote"}
                id="job_type"
                {...register("job_type")}
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              >
                <option value="remote">Remote</option>
                <option value="onsite">Onsite</option>
                <option value="hybrid">Hybrid</option>
              </select>
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
