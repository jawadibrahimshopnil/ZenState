import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../router/AuthProvider";

const Navbar = () => {
    const navLinks = <>
        <li><NavLink className="text-base font-medium" to='/'>Home</NavLink></li>
        <li><NavLink className="text-base font-medium" to='/update-profile'>Update Profile</NavLink></li>
        <li><NavLink className="text-base font-medium" to='/user-profile'>User Profile</NavLink></li>
        <li><NavLink className="text-base font-medium" to='/favorite'>Favorites</NavLink></li>
    </>

    const { user, logOutUser } = useContext(AuthContext);
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log('user logout');
                console.log(user);
            })
    }

    return (
        <div className="navbar bg-gray-100 rounded-xl mt-4 px-4 md:px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-extrabold pl-0 gap-0">Zen<span className="text-green-600">State</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                        <div className="w-12 mr-1 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                }
                {
                    user ?
                        <a onClick={handleLogOut} className="btn bg-green-500 text-white">Logout</a>
                        :
                        <Link to='/login' className="btn bg-green-500 text-white">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;