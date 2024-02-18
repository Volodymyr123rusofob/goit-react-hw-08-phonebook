// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';

// import { SharedLayout } from './SharedLayout/SharedLayout';

// const HomePage = lazy(() => import('pages/HomePage'));
// const Contacts = lazy(() => import('pages/ContactsPage'));
// const Login = lazy(() => import('pages/LoginPage'));
// const Register = lazy(() => import('pages/RegisterPage'));
// const NotFound = lazy(() => import('pages/NotFoundPage'));
// // const CastPage = lazy(() => import('components/Cast/Cast'));
// // const ReviewsPage = lazy(() => import('components/Reviews/Reviews'));

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<HomePage />} />
//         <Route path="register" element={<Register />} />
//         <Route path="login" element={<Login />} />
//         <Route path="contacts" element={<Contacts />}>
//           {/* <Route path="cast" element={<CastPage />} /> */}
//           {/* <Route path="reviews" element={<ReviewsPage />} /> */}
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';

const HomePage = lazy(() => import('pages/HomePage'));
const Register = lazy(() => import('pages/RegisterPage'));
const Login = lazy(() => import('pages/LoginPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<Login />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
