import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

// export const SharedLayout = () => {
//   return (
//     <div>
//       <header>
//         <nav>
//           <NavLink to="/">HomePage</NavLink>
//           <NavLink to="/login">Login</NavLink>
//           <NavLink to="/register">Register</NavLink>
//         </nav>
//       </header>
//       <Suspense fallback={<p>...Loading</p>}>
//         <Outlet />
//       </Suspense>
//     </div>
//   );
// };

export const SharedLayout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
