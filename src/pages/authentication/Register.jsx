import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/shared/PrimaryButton";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import axiosInstance from "../../utils/axios";

const Register = () => {
  const { registerUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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
    const email = data.email;
    const password = data.password;
    const name = data.fullName;

    const userInfo = {
      name: name,
      email: email,
      image: imageUrl,
    };

    try {
      const result = await registerUser(email, password);
      await updateProfile(result.user, {
        displayName: name,
        photoURL: imageUrl,
      })
        .then(() => {
          axiosInstance.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              toast.success("Successfully registered!");
              navigate(location?.state ? location.state : "/");
            }
          });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Sign in with Google authentication
  const handleGoogleRegister = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photo: result.user?.photoURL,
        };
        axiosInstance.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            toast.success("Successfully Google Login");
            navigate(location?.state ? location.state : "/");
          }
        });
      })
      .catch(() => {
        toast.error("Google Sign-In failed");
      });
  };

  return (
    <div className="container">
      <div className="max-w-md mx-auto text-center">
        <div className="space-y-3">
          <p className="text-blue">Register</p>
          <h3>Start For Free Today</h3>
          <p>Access to all features, no credit card required</p>
          <button
            onClick={handleGoogleRegister}
            type="button"
            className="flex items-center gap-2 justify-center font-medium py-2 w-full border rounded-lg hover:scale-95 transition-all duration-500 dark:text-white"
          >
            <span className="text-xl">
              <FcGoogle />
            </span>{" "}
            Sign up with Google
          </button>
        </div>

        <div className="divider my-7 dark:text-white">Or continue with</div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              {...register("fullName", { required: "Full name is required" })}
              className="input input-bordered w-full"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

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
              <img
                src={imageUrl}
                alt="Uploaded"
                className="mt-2 w-20 rounded"
              />
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
              className="absolute text-18 top-11 right-5"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Add role selection and other fields here as per your existing form */}

          <PrimaryButton formSubmit={true} title={"Register"} />

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
