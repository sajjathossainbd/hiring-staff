import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/shared/PrimaryButton";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axiosInstance from "../../utils/axios";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, googleSignIn, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signInUser(email, password)
      .then(() => {
        toast.success("Successfully Login !");
        navigate(location?.state ? location.state : "/dashboard/dashboard-main");
      })
      .catch(() => {
        toast.error("User not found. Please check your password");
      });
  };

  // Sign in with Google authentication
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photo: result.user?.photoURL,
        role: "candidate"
      };

      axiosInstance.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
          toast.success("Successfully Google Login");
          navigate(
            location?.state ? location.state : "/dashboard/dashboard-main"
          );
        }
      });
    });
  };

  useEffect(() => {
    if (user) {
      navigate(location.state || "/dashboard/dashboard-main");
    }
  }, [location.state, navigate, user]);

  // Auto-fill function
  const handleRoleLogin = (role) => {
    let email = "";
    const password = "aaaaa1";

    switch (role) {
      case "admin":
        email = "admin@gmail.com";
        break;
      case "Programming Hero":
        email = "support@programming-hero.com";
        break;
      case "Jake":
        email = "jake.wilson@example.com";
        break;
      default:
        break;
    }

    setValue("email", email);
    setValue("password", password);
  };

  return (
    <div className="container">
      <div className="max-w-md mx-auto text-center">
        <div className="space-y-3">
          <p className="text-blue">Login</p>
          <h3>Welcome Back!</h3>
          <p>Access your account by signing in</p>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 justify-center font-medium py-2 w-full border rounded-lg hover:scale-95 transition-all duration-500 dark:text-white"
          >
            <span className="text-xl">
              <FcGoogle />
            </span>{" "}
            Sign in with Google
          </button>
        </div>

        <div className="divider my-7 dark:text-white">Or continue with</div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          <div className="flex justify-end">
            <Link to="/reset-password" className="text-blue underline text-sm">
              Forgot password?
            </Link>
          </div>

          <PrimaryButton formSubmit={true} title={"Login"} />

          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/register" className="text-blue underline">
              Register
            </Link>
          </p>
        </form>

        <div className="px-10 py-5 rounded-md">
          <p className="dark:text-black">Login Credentials</p>
          <div className="mt-5 flex flex-col gap-5 items-center justify-center">
            <div className="flex gap-5 items-center">
              <button
                className="border-2 border-blue text-blue font-semibold py-1 px-4"
                onClick={() => handleRoleLogin("admin")}
              >
                Admin Login
              </button>
              <button
                className="border-2 border-blue text-blue font-semibold py-1 px-4"
                onClick={() => handleRoleLogin("Programming Hero")}
              >
                Recruiter Login
              </button>
            </div>
            <button
              className="border-2 border-blue text-blue font-semibold py-1 px-4"
              onClick={() => handleRoleLogin("Jake")}
            >
              Candidates Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
