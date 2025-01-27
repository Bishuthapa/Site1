import { Link } from "react-router-dom";

function Navigation() {
return (
    <nav>
        <div className="flex justify-between p-6 px-40 w-full bg-zinc-900 text-white font-bold text-2xl">
            <ul >
                <li>
                    <Link to="/">Bishesh</Link>
                </li>
            </ul>
            <ul className="flex gap-10">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    </nav>
);
}

export default Navigation;
