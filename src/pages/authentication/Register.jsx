import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/shared/PrimaryButton";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import axios from "axios";
import axiosInstance from "../../utils/axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { registerUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [userRole, setUserRole] = useState("candidate");
  const [showPassword, setShowPassword] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");
    formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

    setIsUploading(true);
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
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
    const userInfo = {
      name: data.fullName,
      companyName: data.companyName,
      email: data.email,
      image: imageUrl,
      role: userRole,
    };

    const result = await registerUser(data.email, data.password);
    await updateProfile(result.user, {
      displayName: data.fullName,
      photoURL: imageUrl,
    }).then(async () => {

      if (userRole === "recruiter") {
        await axiosInstance.post("/recruiters", userInfo).then((res) => {
          if (res.data.insertId) {
            toast.success("Successfully recruiters registered!");
            navigate(location?.state ? location.state : "/dashboard/recruiter-profile");
          }
        });
      }
      if (userRole === "candidate") {

        await axiosInstance.post("/candidates", userInfo).then((res) => {
          if (res.data.insertId) {
            toast.success("Successfully candidates registered!");
            navigate(location?.state ? location.state : "/dashboard/my-profile");
          }
        })
      }
    })

  };

  const handleGoogleRegister = () => {
    googleSignIn()
      .then(async (result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photo: result.user?.photoURL,
          role: userRole,
        };

        if (userRole === "recruiter") {
          await axiosInstance.post("/recruiters", userInfo).then((res) => {
            if (res.data.insertId) {
              toast.success("Successfully recruiters registered!");
              navigate(location?.state ? location.state : "/dashboard/recruiter-profile");
            }
          });
        }
        if (userRole === "candidate") {

          await axiosInstance.post("/users/candidates", userInfo).then((res) => {
            if (res.data.insertId) {
              toast.success("Successfully candidates registered!");
              navigate(location?.state ? location.state : "/dashboard/my-profile");
            }
          })
        };

      })
      .catch(() => {
        toast.error("Google Sign-In failed");
      });
  };

  return (
    <div className="container max-w-3xl text-center">
      <div className="space-y-3">
        <p className="text-blue">Register</p>
        <h3>Start For Free Today</h3>
        <p>Choose your path: register as a <span className="border-b-2 pb-[1px] border-blue">Candidate</span> or a <span className="border-b-2 pb-[1px] border-blue">Recruiter</span> to get started!</p>
      </div>
      <div className="flex select-none gap-2 border-b p-2.5 mt-5">
        <button
          onClick={() => setUserRole("candidate")}
          className={userRole === "candidate" ? 'font-bold text-lg' : ''}
        >
          Candidate
        </button>
        <button
          onClick={() => setUserRole("recruiter")}
          className={userRole === "recruiter" ? 'font-bold text-lg' : ''}
        >
          Recruiter
        </button>
      </div>

      <div className="flex-col items-center overflow-hidden p-4 space-y-3">
        <h1 className="mb-6 uppercase backdrop-blur-sm sm:text-2xl">
          {userRole === "candidate" ? "Candidate" : "Recruiter"} Registration
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {userRole === "candidate"
            ?
            <>
              <div>
                <label htmlFor="fullName" className="block text-left font-medium pb-1">
                  Full Name*
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", { required: "Full name is required" })}
                  className="input input-bordered w-full"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                )}
              </div>
            </>
            :
            <div>
              <label htmlFor="fullName" className="block text-left font-medium pb-1">
                Company Name*
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Company Name"
                {...register("companyName", { required: "Company name is required" })}
                className="input input-bordered w-full"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.companyName.message}</p>
              )}
            </div>
          }

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
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-left font-medium pb-1">
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
              className="absolute text-18 top-11 right-5"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
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
              className="input input-bordered w-full"
            />
            {isUploading && <p>Uploading...</p>}
            {imageUrl && (
              <img src={imageUrl} alt="Uploaded" className="mt-2 w-28 rounded" />
            )}
          </div>

          <PrimaryButton formSubmit={true} title={"Register"} />

          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-blue underline">
              Sign In
            </Link>
          </p>
        </form>

        <div className="mt-3 space-y-3">
          <hr className="border-zinc-700" />
          <button
            onClick={handleGoogleRegister}
            className="flex items-center gap-2 justify-center font-medium py-2 w-full border rounded-lg hover:scale-95 transition-all duration-500 dark:text-white"
          >
            <span className="text-xl">
              <FcGoogle />
            </span>{" "}
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
