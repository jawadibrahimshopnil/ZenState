import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../router/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const [showPass, setShowPass] = useState(false);

    const { createUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const onSubmit = (data) => {
        const {name, photoUrl, email, password} = data;

        createUser(email, password)
        .then(res=>{
            res.user.displayName = name;
            res.user.photoURL = photoUrl;

            updateProfile(res.user, {
                displayName: name,
                photoURL: photoUrl,
            })

            toast.success("Register Successful");
            navigate("/")
        })
        .catch(err=>console.log(err))
        console.log(data)
    }

    return (
        <section className="grid place-items-center m-6">
            <Helmet>
                <title>ZenState | Register</title>
            </Helmet>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 border">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1">
                        <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                        <input {...register("name", { required: true })} type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="photoUrl" className="block dark:text-gray-600">Photo URL</label>
                        <input {...register("photoUrl", { required: true })} type="text" name="photoUrl" id="photoUrl" placeholder="Photo URL" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                    </div>
                    <div className="space-y-1 relative">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input {...register("password", {
                            required: true,
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/
                            }
                        })}
                            aria-invalid={errors.password ? "true" : "false"}
                            type={showPass ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                            <span onClick={()=>setShowPass(!showPass)} className="absolute right-2 top-10">
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
                    <button className="block w-full p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600">Register</button>
                </form>
                
                <p className=" text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to='/login' rel="noopener noreferrer" href="#" className="underline text-blue-600"> Login</Link>
                </p>
            </div>
        </section>
    );
};

export default Register;