import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="bg-white">
            <div className="flex items-center justify-between p-4 container1">
                <h1 className="text-[35px]">Timer and Magazine</h1>
                <ul className="flex actived ">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                    >
                        Time
                    </NavLink>
                    <NavLink
                        to="/magazine"
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                    >
                        Magazine
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Header;
