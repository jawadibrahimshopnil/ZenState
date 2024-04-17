import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../router/AuthProvider";
import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { name, photoUrl } = data;
        if ((name !== user.displayName) && name !== "") {
            updateProfile(user, {
                displayName: name
            })
            .then(()=>toast.success("Updated Name"))
            .catch(err=>toast.error(err?.code))
        }

        if ((photoUrl !== user.photoURL) && photoUrl !== "") {
            updateProfile(user, {
                photoURL: photoUrl
            })
            .then(()=>toast.success("Updated PhotoURL"))
            .catch(err=>toast.error(err?.code))
        }
    };

    const { user } = useContext(AuthContext);
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900 rounded-lg lg:my-4">
            <Helmet>
                <title>ZenState | UpdateProfile</title>
            </Helmet>
            <h1 className="font-bold text-2xl text-center mb-4">Update User Data</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <div>
                            <div className="avatar">
                                <div className="w-24 rounded-xl">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <p className="font-medium text-xl">User: {user.displayName}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-lg">Username</label>
                            <input
                                defaultValue={user.displayName} {...register("name", {
                                    required: true,
                                })}
                                id="username" type="text" placeholder="Username" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                                {errors.name && <p className="text-red-600">required!</p>}
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-lg">Email</label>
                            <input
                                defaultValue={user.email}
                                id="email" type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-md border-gray-400" readOnly/>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-lg">Photo</label>
                            <input
                                defaultValue={user.photoURL} {...register("photoUrl", {
                                    required: true,
                                })}
                                id="photo" placeholder="Change Photo URL" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                                {errors.photoUrl && <p className="text-red-600">required</p>}
                        </div>
                    </div>
                </div>
                <button className="btn btn-wide col-span-full bg-green-600 text-white font-medium mt-4">Save Change</button>
            </form>
        </section>
    );
};

export default UpdateProfile;