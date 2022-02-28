import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const { token, isLoggedIn, setIsLoggedIn } = props; //CHANGE WHEN WE START REDUX

  // useEffect(() => {
  //   token !== null ? setIsLoggedIn(true) : setIsLoggedIn(false);
  // }, [token, setIsLoggedIn]);

  return (
    <header className="header-container">
      <div className="cookbook">
        <Link className="link" to="/">F.CB</Link>
      </div>
      <nav className="nav-links">
        {<Link className="link" to="/about">About Us</Link>}
        {<Link className="link" to="/categories">Categories</Link>}
        {<Link className="link" to="/account">My Account</Link>}
        {<Link className="link" to="/logout">Logout</Link>}
      </nav>
    </header>
  );
};

export default Navbar;


{/* <nav className="nav-links">
{isLoggedIn && <Link className="link" to="/about">About Us</Link>}
{isLoggedIn && <Link className="link" to="/categories">Categories</Link>}
{!isLoggedIn && <Link className="link" to="/account">My Account</Link>}
{!isLoggedIn && <Link className="link" to="/logout">Logout</Link>}
</nav> */}