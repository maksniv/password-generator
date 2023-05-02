import styles from './InputRange.module.scss';
import { useState } from 'react';

const InputRange = () => {
  const [length, setLength] = useState(0);

  const changeLength = (event) => {
    setLength(event.target.value);
  };

  return (
    <>
      <label className={styles.inputRange__label} for="slider">
        Character Length
        <span className={styles.inputRange__label_text}>{length}</span>
      </label>
      <input
        className={styles.inputRange}
        type="range"
        name="slider"
        min="5"
        max="20"
        onChange={changeLength}
        value={length}
      ></input>
    </>
  );
};

export default InputRange;
