import styles from './InputCheckbox.module.scss';

const InputCheckbox = ({ label }) => {
  return (
    <>
      <label className={styles.checkbox__label}>
        <input type="checkbox" className={styles.checkbox__input} />
        <span className={styles.checkbox__span}>
          {/* <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="#18171F"
              stroke-width="3"
              fill="none"
              d="M1 5.607 4.393 9l8-8"
            />
          </svg> */}
        </span>
        {label}
      </label>
    </>
  );
};

export default InputCheckbox;
