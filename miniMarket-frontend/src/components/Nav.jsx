import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Mini Market</Link>
            <ul className="flex gap-6">
                <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link to="/cart" className="hover:text-gray-300">Cart</Link></li>
                <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
                <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
            </ul>
        </nav>
    );
}