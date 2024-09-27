import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/shared/PrimaryButton";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const ResetPassword = () => {

  const { resetPassword } = useAuth()


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    const email = (data.email)

    resetPassword(email)
      .then(() => {

        toast.success("Please check you email for reset password")
        reset()

      })

  };

  return (
    <div className="container relative">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-2xl mb-6">Reset Your Password</h3>
        <p className="text-gray-600 mb-6">
          Enter the email associated with your account, and we’ll send you a link to reset your password.
        </p>

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

          <PrimaryButton formSubmit={true} title={"Send Reset Link"} />

          <p className="mt-4 text-sm">
            Remember your password?{" "}
            <Link to="/sign-in" className="text-blue underline">
              Sign In
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
