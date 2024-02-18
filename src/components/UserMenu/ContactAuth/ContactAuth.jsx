import { NavLink } from 'react-router-dom';

export const Movies = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>|
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};
