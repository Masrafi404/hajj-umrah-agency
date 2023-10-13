import React, { useState } from "react";
import controlImage from "../../assets/control.png"
import logoImage from "../../assets/logo.png"
import userImage from "../../assets/user.png"
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-20"} bg-[#301934] h-auto p-5 pt-8 duration-300`}
            >
                <img
                    src={controlImage}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src={logoImage}
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                    />
                    <h1 className={`text-white origin-left font-medium text-xl duration-200`}>
                        Dashboard
                    </h1>
                </div>
                <ul className="pt-6">
                    {/* Manual menu items */}
                    <li className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
                        <Link to="/dashboard/users">
                            <img src={userImage} />
                        </Link>
                        <Link to="/dashboard/users">
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Users
                            </span>
                        </Link>
                    </li>
                    <li className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2`}>
                        <Link to="/dashboard/dynamic-content">
                            <img src={userImage} />
                        </Link>
                        <Link to="/dashboard/dynamic-content">
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Dynamic Content
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="h-auto flex-1 p-7">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
