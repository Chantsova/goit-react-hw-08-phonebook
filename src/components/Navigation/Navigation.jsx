import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation">
    <NavLink exact to="/" className="navigation__logo">
      Phonebook
    </NavLink>

    <div className="navigation__menu">
      <NavLink
        exact
        to="/"
        className="navigation__name"
        activeClassName="navigation__name--active"
      >
        Home
      </NavLink>

      <NavLink
        exact
        to="/phonebook"
        className="navigation__name"
        activeClassName="navigation__name--active"
      >
        Contacts
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
