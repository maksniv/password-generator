import styles from './InputRange.module.scss';

const InputRange = () => {
  return (
    <>
      <label className={styles.inputRange__label}>
        Character Length <span class={styles.inputRange__label_text}>8</span>
      </label>
      <input
        className={styles.inputRange}
        type="range"
        min="5"
        max="15"
        value="8"
      ></input>
    </>
  );
};

export default InputRange;
