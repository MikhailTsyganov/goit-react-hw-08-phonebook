import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import Login from './Login/Login';
import Register from './Register/Register';
import Contacts from './Contacts/Contacts';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { getIsFetchingCurrentUser } from 'redux/auth/auth-selectors';

function App() {
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Routes>
          <Route element={<PublicRoute restricted />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Contacts />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>

        <ToastContainer />
      </Container>
    )
  );
}

export default App;
