import React from "react";

const Navbar = () => {
  const { token, isLoggedIn, setIsLoggedIn } = props; //CHANGE WHEN WE START REDUX

  useEffect(() => {
    token !== null ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [token, setIsLoggedIn]);

  return (
    <header className="header-container">
      <div className="cookbook">
        <Link className="link" to="/">F.CB</Link>
      </div>
      <nav className="nav-links">
        {isLoggedIn && <Link className="link" to="/about">About Us</Link>}
        {isLoggedIn && <Link className="link" to="/categories">Categories</Link>}
        {!isLoggedIn && <Link className="link" to="/account">My Account</Link>}
        {!isLoggedIn && <Link className="link" to="/logout">Logout</Link>}
      </nav>
    </header>
  );
};

export default Navbar;
