import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className="navigation__name"
        activeClassName="navigation__name--active"
      >
        Registration
      </NavLink>

      <NavLink
        to="/login"
        className="navigation__name"
        activeClassName="navigation__name--active"
      >
        Sign in
      </NavLink>
    </div>
  );
}
