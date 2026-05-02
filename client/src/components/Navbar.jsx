import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-red-100 p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/products">Product</Link>
    </nav>
  );
};

export default Navbar;
