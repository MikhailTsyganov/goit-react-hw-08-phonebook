import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav/AuthNav';
import s from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <header className={s.header}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
