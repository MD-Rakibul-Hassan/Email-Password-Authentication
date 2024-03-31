import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-emerald-500 p-4 ">
            <div className="container mx-auto flex justify-between px-5">
                <div>
                    <h1 className="text-orange-500 text-xl font-bold">Logo</h1>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li>
                            <NavLink
                                to='/'
                                className={({isActive}) => isActive ? 'text-lg font-bold text-gray-500': "text-lg "}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/login'
                                className={({isActive}) => isActive ? 'text-lg font-bold text-gray-500': "text-lg "}
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/signup'
                                className={({isActive}) => isActive ? 'text-lg font-bold text-gray-500': "text-lg "}
                            >
                                Sign Up
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar