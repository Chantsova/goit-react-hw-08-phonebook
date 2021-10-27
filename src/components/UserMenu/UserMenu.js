import "./UserMenu.css";
import { useDispatch, useSelector } from "react-redux";
import * as authOperations from "../redux/auth/auth-operations";
import * as authSelectors from "../redux/auth/auth-selectors";
import defaultAvatar from "../../defaultAvatar.png";

export default function AuthNav() {
  const name = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);

  const avatar = defaultAvatar;

  const dispatch = useDispatch();

  return (
    <div className="userMenu">
      <img
        className="userMenu__avatar"
        src={avatar}
        alt="avatar"
        width="35"
      ></img>
      <div className="userMenu__content">
        <span className=" userMenu__item">
          Welcome, <span className="userMenu__item--accent">{name}</span>{" "}
        </span>
        <span className="userMenu__item">({email})</span>
        <button
          className="userMenu__item userMenu__btn"
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
