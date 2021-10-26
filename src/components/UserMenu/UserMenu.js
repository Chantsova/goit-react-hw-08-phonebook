import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../redux/auth/auth-operations';
import * as authSelectors from '../redux/auth/auth-selectors';
import defaultAvatar from '../../defaultAvatar.png';

export default function AuthNav() {
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  const dispatch = useDispatch();

  return (
    <div>
      <img src={avatar} alt="avatar"></img>
      <span>Welcome, {name}!</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
}
