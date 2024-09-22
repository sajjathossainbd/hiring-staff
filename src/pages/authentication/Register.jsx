import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/shared/PrimaryButton";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {

  const { registerUser, googleSignIn } = useAuth()
  const navigate = useNavigate();
  const location = useLocation();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    const email = data.email
    const password = data.password
    const userName = data.userName
    const photoUrl = data.photoUrl

    const userInfo = {

      email: email,
      name: userName,
      photo: photoUrl

    }
    console.log(userInfo);

    // Sign up with email, password authentication 
    registerUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: userName,
          photoURL: photoUrl,
        })
          .then(() => {
            toast.success("Successfully register !")
            navigate(location?.state ? location.state : '/')
          })
          .catch()
      })
      .catch(err => {
        toast.error(err.message)
      })

  };



  // Sign in with google authentication 
  const handleGoogleRegister = () => {

    googleSignIn()
      .then((result) => {

        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photo: result.user?.photoURL
        }

        console.log(userInfo);

        toast.success("Successfully google register!")
        navigate(location?.state ? location.state : '/')

      })
  }


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
            className="flex items-center gap-2 justify-center font-medium py-2 w-full border rounded-lg hover:scale-95 transition-all duration-500">
            <span className="text-xl">
              <FcGoogle />
            </span>{" "}
            Sign up with Google
          </button>
        </div>

        <div className="divider my-7">Or continue with</div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              Photo URL*
            </label>
            <input
              type="url"
              id="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              {...register("photoUrl", { required: "Photo link is required" })} />
            {errors.username && (
              <p className="text-red-500 text-sm">
                {errors.username.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="username" className="block text-left font-medium pb-1">
              Username*
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
              className="input input-bordered w-full"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-left font-medium pb-1">
              Password*
            </label>
            <input
              id="password"
              type="password"
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
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Recruiter"
                  {...register("role", { required: "Role is required" })}
                  className="radio"
                />
                <span>Recruiter</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Publisher"
                  {...register("role", { required: "Role is required" })}
                  className="radio"
                />
                <span>Publisher</span>
              </label>
            </div>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                required
              />
              <span className="text-14">I agree to all terms and conditions</span>
            </label>
          </div>

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
