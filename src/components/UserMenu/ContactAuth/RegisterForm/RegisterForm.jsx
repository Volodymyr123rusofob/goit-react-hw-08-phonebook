import { useDispatch } from 'react-redux';
import { register } from '../../../../redux/auth/operations';
import css from './registerForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.box}>
      <div className={css.boxdiv}>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.label}>
            Username
            <input type="text" name="name" />
          </label>
          <label className={css.label}>
            Email
            <input type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <input type="password" name="password" />
          </label>
          <button className={css.btn} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
