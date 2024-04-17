import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900 rounded-lg lg:my-4">
            <Helmet>
                <title>ZenState | UpdateProfile</title>
            </Helmet>
            <h1 className="font-bold text-2xl text-center mb-4">Update User Data</h1>
            <form>
                <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <div>
                            <div className="avatar">
                                <div className="w-24 rounded-xl">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <p className="font-medium text-xl">User: </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-lg">Username</label>
                            <input id="username" type="text" placeholder="Username" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-lg">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-lg">Photo</label>
                            <input id="photo" placeholder="Change Photo URL" className="w-full px-4 py-3 border rounded-md border-gray-400"></input>
                        </div>
                    </div>
                </div>
                <button className="btn btn-wide col-span-full bg-green-600 text-white font-medium mt-4">Save</button>
            </form>
        </section>
    );
};

export default UpdateProfile;