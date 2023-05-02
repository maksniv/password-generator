import styles from './App.module.scss';
import InputCheckbox from './components/InputCheckbox/InputCheckbox';
import InputRange from './components/InputRange/InputRange';

function App() {
  return (
    <>
      <h1 className={styles.title}>Password generator</h1>
      <div className={styles.field}>
        <p className={styles.field__text}>P4$5W0rD!</p>
        <div className={styles.field__copy}>
          <svg className={styles.field__copy_svg}>
            <path
              className={styles.field__copy_path}
              d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
            />
          </svg>
        </div>
      </div>
      <form className={styles.container}>
        <InputRange />
        <InputCheckbox
          label={'Include Uppercase Letters'}
          id="checkboxUppercase"
          name="checkboxUppercase"
        />
        <InputCheckbox
          label={'Include Lowercase Letters'}
          id="checkboxLowercase"
          name="checkboxLowercase"
        />
        <InputCheckbox
          label={'Include Numbers'}
          id="checkboxNumbers"
          name="checkboxNumbers"
        />
        <InputCheckbox
          label={'Include Symbols'}
          id="checkboxSymbols"
          name="checkboxSymbols"
        />

        <div className={styles.strength}>
          <h2 className={styles.strength__title}>Strength</h2>
          <div className={styles.strength__level}>
            <p className={styles.strength__description}>weak</p>
            <div
              className={`${styles.strength__division} ${styles.strength__division1}`}
            ></div>
            <div
              className={`${styles.strength__division} ${styles.strength__division1}`}
            ></div>
            <div
              className={`${styles.strength__division} ${styles.strength__division1}`}
            ></div>
            <div
              className={`${styles.strength__division} ${styles.strength__division1}`}
            ></div>
          </div>
        </div>

        <button className={styles.button} type="submit">
          GENERATE
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#24232C"
              d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
            />
          </svg>
        </button>
      </form>
    </>
  );
}

export default App;
