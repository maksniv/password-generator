import styles from './InputRange.module.scss';

const InputRange = ({ length, onChange }) => {
  return (
    <>
      <label className={styles.inputRange__label} htmlFor="slider">
        Character Length
        <span className={styles.inputRange__label_text}>{length}</span>
      </label>
      <input
        className={styles.inputRange}
        type="range"
        name="slider"
        id="slider"
        min="5"
        max="20"
        onChange={onChange}
        value={length}
      ></input>
    </>
  );
};

export default InputRange;
