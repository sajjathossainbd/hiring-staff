import { BsFillSendFill } from "react-icons/bs";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";

const MyProfile = () => {
  const { user } = useAuth();

  const { data: currentCandidate, refetch } = useQuery({
    queryKey: ['currentCandidate', user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/candidates/currentCandidate/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });


  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {

    const updatedData = {

      first_name: data.first_name || currentCandidate?.first_name,
      last_name: data.last_name || currentCandidate?.last_name,
      email: currentCandidate?.email,
      special_profession: data.special_profession || currentCandidate?.special_profession,
      experience_year: parseInt(data.experience_year) || currentCandidate?.experience_year,
      phone_number: data.phone_number || currentCandidate?.phone_number,
      image: data.image || currentCandidate?.photo_url,
      resume: data.resume || currentCandidate?.resume,
      cover_letter: data.cover_letter || currentCandidate?.cover_letter,
      skills: data.skills.split(",").map(skill => skill.trim()) || currentCandidate?.skills,
      location: {
        city: data.city || currentCandidate?.location?.city,
        state: data.state || currentCandidate?.location?.state,
        country: data.country || currentCandidate?.location?.country,
      },
      about_me: data.about_me || currentCandidate?.about_me,
      job_type: data.job_type || currentCandidate?.job_type,

    };

    try {
      const res = await axiosInstance.patch(`/candidates/profile/${currentCandidate?.email}`, updatedData);
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

  if (!currentCandidate) return <div>Loading...</div>;

  return (
    <div>
      <h3>Candidate Profile</h3>
      <div className="mt-6">
        <div className="flex flex-col items-center">
          <div
            className="relative w-full h-36 md:h-44 lg:h-60 xl:h-72 bg-cover bg-center border-[7px] border-white rounded-xl"
            style={{ backgroundImage: `url(${currentCandidate?.coverImage || 'https://i.ibb.co.com/mBcjQj6/download-1.jpg'})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
          </div>

          <div className="mt-[-40px] lg:mt-[-100px] md:mt-[-70px] -left-20 z-50">
            <img
              src={currentCandidate?.photo_url || user?.photoURL}
              alt="Profile Photo"
              className="rounded-full xl:h-52 lg:h-44 md:h-32 h-20 xl:w-52 lg:w-44 md:w-32 w-20 object-cover border-[7px] border-white"
            />
          </div>
        </div>

        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-center font-semibold my-7">Candidate Profile Update</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="role" className="block text-gray-700 font-bold mb-2">My Role:</label>
                <input
                  id="first_name"
                  type="text"
                  disabled
                  placeholder={"Candidate"}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="job_type" className="block text-gray-700 font-bold mb-2">Job Type</label>
                <select
                  defaultValue={currentCandidate?.job_type || "remote"}
                  id="job_type"
                  {...register("job_type")}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                >
                  <option value="remote">Remote</option>
                  <option value="onsite">Onsite</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="first_name" className="block text-gray-700 font-bold mb-2">First Name</label>
                <input
                  id="first_name"
                  type="text"
                  placeholder={currentCandidate?.first_name}
                  {...register("first_name")}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="last_name" className="block text-gray-700 font-bold mb-2">Last Name</label>
                <input
                  id="last_name"
                  type="text"
                  placeholder={currentCandidate?.last_name}
                  {...register("last_name")}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  disabled
                  id="email"
                  type="email"
                  placeholder={currentCandidate?.email}
                  className="w-full px-4 py-3 border border-gray-300 bg-gray-100 text-gray-500 text-md rounded-md shadow-sm"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="special_profession" className="block text-gray-700 font-bold mb-2">Special Profession</label>
                <input
                  id="special_profession"
                  type="text"
                  placeholder={currentCandidate?.special_profession}
                  {...register("special_profession")}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="experience_year" className="block text-gray-700 font-bold mb-2">Years of Experience</label>
                <input
                  id="experience_year"
                  type="number"
                  placeholder={currentCandidate?.experience_year}
                  {...register("experience_year")}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone_number" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                <input
                  id="phone_number"
                  type="tel"
                  placeholder={currentCandidate?.phone_number}
                  {...register("phone_number")}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="photo_url" className="block text-gray-700 font-bold mb-2">Profile Photo URL</label>
                <input
                  id="photo_url"
                  type="url"
                  placeholder={currentCandidate?.photo_url}
                  {...register("image")}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-gray-700 font-bold mb-2">Cover Image URL</label>
                <input
                  id="imageUrl"
                  type="url"
                  disabled
                  placeholder={"https://i.ibb.co.com/mBcjQj6/download-1.jpg"}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">Resume URL</label>
                <input
                  id="resume"
                  type="url"
                  placeholder={currentCandidate?.resume}
                  {...register("resume")}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="cover_letter" className="block text-gray-700 font-bold mb-2">Cover Letter URL</label>
                <input
                  id="cover_letter"
                  type="url"
                  placeholder={currentCandidate?.cover_letter}
                  {...register("cover_letter")}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="skills" className="block text-gray-700 font-bold mb-2">Skills (comma-separated)</label>
              <input
                id="skills"
                type="text"
                placeholder={currentCandidate?.skills?.join(", ")}
                {...register("skills")}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="about_me" className="block text-gray-700 font-bold mb-2">About Me</label>
              <textarea
                id="about_me"
                rows="4"
                placeholder={currentCandidate?.about_me}
                {...register("about_me")}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
              />
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City</label>
                <input
                  id="city"
                  type="text"
                  placeholder={currentCandidate?.location?.city}
                  {...register("city")}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700 font-bold mb-2">State</label>
                <input
                  id="state"
                  type="text"
                  placeholder={currentCandidate?.location?.state}
                  {...register("state")}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Country</label>
                <input
                  id="country"
                  type="text"
                  placeholder={currentCandidate?.location?.country}
                  {...register("country")}
                  className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 text-md rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-lightText focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <PrimaryButton title={"Update Now"} icon={<BsFillSendFill />} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
