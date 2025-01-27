import { NavLink } from "react-router-dom";

function Navigation() {
return (
    <nav>
        <div className="flex justify-between p-6 px-40 w-full bg-zinc-900 text-white font-bold text-2xl">
            <ul >
                <li>
                    <NavLink to="/">Bishesh</NavLink>
                </li>
            </ul>
            <ul className="flex gap-10">
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);
}

export default Navigation;
