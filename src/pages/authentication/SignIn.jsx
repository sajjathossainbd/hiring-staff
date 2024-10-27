import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/shared/PrimaryButton";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { BsBuildingFillLock } from "react-icons/bs";
import PrimaryBtnWhite from "../../components/ui/PrimaryBtnWhite";
import { IoIosLogIn } from "react-icons/io";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate(location.state || "/dashboard/dashboard-main");
    }
  }, [location.state, navigate, user]);


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
        navigate(
          location?.state ? location.state : "/dashboard/dashboard-main"
        );
      })
      .catch(() => {
        toast.error("User not found. Please check your password");
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
      case "recruiter":
        email = "recruiter@gmail.com";
        break;
      case "candidate":
        email = "candidate@gmail.com";
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
          <h3>Welcome Back!</h3>
          <p>Access your account by signing in</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-7">
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
              <p className="text-red-500 text-sm mt-1 text-left">{errors.email.message}</p>
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
              <p className="text-red-500 text-sm mt-1 text-left">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-end">
            <Link to="/reset-password" className="text-blue underline text-sm">
              Forgot password?
            </Link>
          </div>

          <PrimaryButton formSubmit={true} title={"Login"} icon={<IoIosLogIn />} />

          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/register" className="text-blue underline">
              Register
            </Link>
          </p>
        </form>

        {/* Login Credentials */}
        <div className="px-10 py-5 rounded-md bg-bgDeepBlue mt-6">
          <h5 className="dark:text-black">Login Credentials</h5>
          <div className="mt-5 flex flex-col gap-5 items-center justify-center">
            <div className="flex gap-5 items-center">
              <button className="" onClick={() => handleRoleLogin("admin")}>
                <PrimaryBtnWhite
                  icon={<MdOutlineAdminPanelSettings />}
                  title="Admin Login"
                />
              </button>
              <button className="" onClick={() => handleRoleLogin("recruiter")}>
                <PrimaryBtnWhite
                  icon={<BsBuildingFillLock />}
                  title="Recruiter Login"
                />
              </button>
            </div>
            <button className="" onClick={() => handleRoleLogin("candidate")}>
              <PrimaryBtnWhite
                icon={<RiAdminLine />}
                title="Candidates Login"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
