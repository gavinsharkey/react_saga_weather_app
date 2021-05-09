import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <a className="navbar-item" href="/current">
          <img src={Logo} alt="logo" />
          <h3 className="ml-2 has-text-weight-bold">Weather</h3>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
