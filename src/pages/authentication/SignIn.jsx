import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/shared/PrimaryButton";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container">
            <div className="max-w-md mx-auto text-center">
                <div className="space-y-3">
                    <p className="text-blue">Login</p>
                    <h3>Welcome Back!</h3>
                    <p>Access your account by signing in</p>
                    <button className="flex items-center gap-2 justify-center font-medium py-2 w-full border rounded-lg hover:scale-95 transition-all duration-500">
                        <span className="text-xl">
                            <FcGoogle />
                        </span>{" "}
                        Sign in with Google
                    </button>
                </div>

                <div className="divider my-7">Or continue with</div>

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
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    <PrimaryButton formSubmit={true} title={"Login"} />

                    <p className="mt-4 text-sm">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-blue underline">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
