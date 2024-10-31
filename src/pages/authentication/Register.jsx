import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/shared/PrimaryButton";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import axios from "axios";
import axiosInstance from "../../utils/axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { BsBuildingFillLock } from "react-icons/bs";
import { IoIosLogIn } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Register = () => {
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [userRole, setUserRole] = useState("candidate");
  const [showPassword, setShowPassword] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");
    formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

    setIsUploading(true);
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        formData
      );
      setImageUrl(response.data.secure_url);
    } catch (error) {
      console.error("Image upload failed", error);
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const recruiterInfo = {
      name: data.companyName,
      email: data.email,
      logo: imageUrl,
      role: userRole,
    };

    const candidateInfo = {
      first_name: data.fullName,
      email: data.email,
      photo_url: imageUrl,
      role: userRole,
    };

    const result = await registerUser(data.email, data.password);
    await updateProfile(result.user, {
      displayName: data.fullName,
      photoURL: imageUrl,
    }).then(async () => {
      if (userRole === "recruiter") {
        await axiosInstance.post("/recruiters", recruiterInfo).then((res) => {
          if (res.data.insertId) {
            toast.success("Successfully recruiters registered!");
            navigate(
              location?.state ? location.state : "/dashboard/dashboard-main"
            );
          }
        });
      }
      if (userRole === "candidate") {
        await axiosInstance.post("/candidates", candidateInfo).then((res) => {
          if (res.data.insertId) {
            toast.success("Successfully candidates registered!");
            navigate(
              location?.state ? location.state : "/dashboard/dashboard-main"
            );
          }
        });
      }
    });
  };

  return (
    <div className="container max-w-3xl text-center">
      <div className="space-y-3">
        <h3>Start For Free Today</h3>
        <p>
          Choose your path - register as a{" "}
          <span className="text-blue">Candidate</span> or a{" "}
          <span className="text-blue">Recruiter</span> to get started!
        </p>
      </div>

      <div className="flex items-center justify-center select-none gap-4 mt-5 mb-5">
        <button
          onClick={() => setUserRole("candidate")}
          className={`flex items-center justify-center gap-3 px-5 py-3 rounded-md font-medium transition-all duration-500 ease-in-out ${
            userRole === "candidate"
              ? "bg-blue text-white"
              : "bg-white text-blue border border-blue dark:text-gray"
          }`}
        >
          <p
            className={`text-12 ${
              userRole === "candidate"
                ? "text-white"
                : "text-blue dark:text-gray"
            }`}
          >
            Candidate Sign-up
          </p>
          <div className="text-xl">
            <RiAdminLine />
          </div>
        </button>
        <button
          onClick={() => setUserRole("recruiter")}
          className={`flex items-center justify-center gap-3 px-5 py-3 rounded-md font-medium transition-all duration-500 ease-in-out ${
            userRole === "recruiter"
              ? "bg-blue text-white"
              : "bg-white text-blue border border-blue dark:text-gray"
          }`}
        >
          <p
            className={`text-12 ${
              userRole === "recruiter"
                ? "text-white"
                : "text-blue dark:text-gray"
            }`}
          >
            Recruiter Sign-up
          </p>
          <div className="text-xl">
            <BsBuildingFillLock />
          </div>
        </button>
      </div>

      <div className="flex-col items-center overflow-hidden p-4 space-y-3">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {userRole === "candidate" ? (
            <>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-left font-medium pb-1"
                >
                  Full Name*
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="input input-bordered w-full"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
            </>
          ) : (
            <div>
              <label
                htmlFor="fullName"
                className="block text-left font-medium pb-1"
              >
                Company Name*
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Company Name"
                {...register("companyName", {
                  required: "Company name is required",
                })}
                className="input input-bordered w-full"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.companyName.message}
                </p>
              )}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-left font-medium pb-1">
              Email*
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-left font-medium pb-1"
            >
              Password*
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                  message:
                    "Password must be at least 6 characters, contain letters and numbers",
                },
              })}
              className="input input-bordered w-full"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-18 top-11 right-5 cursor-pointer"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-left font-medium pb-1"
            >
              Confirm Password*
            </label>
            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
              className="input input-bordered w-full"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-18 top-11 right-5 cursor-pointer"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Image Upload Field */}
          <div>
            <label htmlFor="photo" className="block text-left font-medium pb-1">
              Upload Photo*
            </label>
            <input
              type="file"
              id="photo"
              onChange={(e) => handleImageUpload(e.target.files[0])}
              className="file-input w-full"
            />
            {isUploading && <p>Uploading...</p>}
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Uploaded"
                className="mt-2 w-28 rounded"
              />
            )}
          </div>

          <PrimaryButton
            formSubmit={true}
            title={isSubmitting ? "Registering" : "Register"}
            icon={isSubmitting ? <AiOutlineLoading3Quarters /> : <IoIosLogIn />}
            disabled={isSubmitting}
          />

          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-blue underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
