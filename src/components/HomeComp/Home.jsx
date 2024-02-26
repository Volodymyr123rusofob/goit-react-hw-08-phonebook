import style from './home.module.css';

export const HomePage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};
