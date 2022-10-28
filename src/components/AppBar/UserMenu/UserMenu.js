import { getUsername } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={s.wrapper}>
      <p>Добро пожаловать, {name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
