import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../router/AuthProvider";
import { toast } from "react-toastify";
import { FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showPass, setShowPass] = useState(false);

    const { signInUser, setUser, signInWithGoogle, signInWithGithub, signInWithFacebook } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = (data) => {
        const { email, password } = data;

        signInUser(email, password)
            .then((res) => {
                setUser(res.user);
                toast.success("Login Successful");
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                toast.error(`${err?.code}`);
            })
    }
    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then(res => {
                setUser(res.user);
                toast.success("Login Successful");
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => toast.error(err.code))
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(res => {
                setUser(res.user);
                toast.success("Login Successful");
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => toast.error(err.code))
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user);
                toast.success("Login Successful");
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => toast.error(err.code))
    }

    return (
        <section className="grid place-items-center m-6">
            <Helmet>
                <title>ZenState | Login</title>
            </Helmet>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 border">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                    </div>
                    <div className="space-y-1 relative">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input {...register("password", {
                            required: true
                        })}
                            aria-invalid={errors.password ? "true" : "false"}
                            type={showPass ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                            <span onClick={()=>setShowPass(!showPass)} className="absolute right-2 top-[40%]">
                            {
                                showPass ? <FaEyeSlash className="w-5 h-5"/>
                                : <FaEye className="w-5 h-5"/>
                            }
                            </span>
                            
                        {errors.password && <p className="text-red-600">The password must have an uppercase, lowercase and atleast 6 character</p>}
                        <div className="flex justify-end text-sm dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600">Login</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                    <button onClick={handleFacebookSignIn} aria-label="Login with Facebook" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <FaFacebook className="w-5 h-5"/>
                        <p>Login with Facebook</p>
                    </button>
                    <button onClick={handleGithubSignIn} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                        <p>Login with GitHub</p>
                    </button>
                    
                </div>
                <p className=" text-center sm:px-6 dark:text-gray-600">Don&apos;t have an account?
                    <Link to='/register' rel="noopener noreferrer" href="#" className="underline text-blue-600"> Register</Link>
                </p>
            </div>
        </section>
    );
};

export default Login;