import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <>
      <NavLink className={s.link} to="/login">
        Login
      </NavLink>
      <NavLink className={s.link} to="/register">
        Register
      </NavLink>
    </>
  );
}
