import styles from './App.module.scss';
import { useState } from 'react';
import InputCheckbox from './components/InputCheckbox/InputCheckbox';
import InputRange from './components/InputRange/InputRange';
import {
  passwordGenerator,
  passwordStrengthGenerator,
} from './passwordGenerator';

function App() {
  const [password, setPassword] = useState('');
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [length, setLength] = useState(5);
  const [passwordStrength, setPasswordStrength] = useState('too weak!');

  const getCopyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  const changeLength = (event) => {
    setLength(event.target.value);
    setPasswordStrength(passwordStrengthGenerator(length));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setPassword(
      passwordGenerator({
        length: length,
        uppercase: uppercase,
        lowercase: lowercase,
        numbers: numbers,
        symbols: symbols,
      })
    );
  };

  return (
    <>
      <div className={styles.field}>
        <input
          className={styles.field__input}
          type="text"
          value={password}
          inputMode="none"
          placeholder={'P4$5W0rD!'}
          readOnly
        />
        <svg className={styles.field__copy_svg} onClick={getCopyPassword}>
          <path
            className={styles.field__copy_path}
            d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
          />
        </svg>
      </div>

      <form className={styles.container} onSubmit={onSubmit}>
        <InputRange length={length} onChange={changeLength} />
        <InputCheckbox
          label={'Include Uppercase Letters'}
          id="Uppercase"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
        />
        <InputCheckbox
          label={'Include Lowercase Letters'}
          id="Lowercase"
          checked={lowercase}
          onChange={() => setLowercase(!lowercase)}
        />
        <InputCheckbox
          label={'Include Numbers'}
          id="Numbers"
          checked={numbers}
          onChange={() => setNumbers(!numbers)}
        />
        <InputCheckbox
          label={'Include Symbols'}
          id="Symbols"
          checked={symbols}
          onChange={() => setSymbols(!symbols)}
        />

        <div className={styles.strength}>
          <h2 className={styles.strength__title}>Strength</h2>
          <div className={styles.strength__level}>
            <p className={styles.strength__description}>{passwordStrength}</p>
            <div
              className={`${styles.strength__division} ${styles.strength__division1}`}
              data-strength={passwordStrength}
            ></div>
            <div
              className={`${styles.strength__division} ${styles.strength__division2}`}
              data-strength={passwordStrength}
            ></div>
            <div
              className={`${styles.strength__division} ${styles.strength__division3}`}
              data-strength={passwordStrength}
            ></div>
            <div
              className={`${styles.strength__division} ${styles.strength__division4}`}
              data-strength={passwordStrength}
            ></div>
          </div>
        </div>

        <button className={styles.button} type="submit">
          GENERATE
          <svg className={styles.button__svg}>
            <path
              className={styles.button__path}
              d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
            />
          </svg>
        </button>
      </form>
    </>
  );
}

export default App;
