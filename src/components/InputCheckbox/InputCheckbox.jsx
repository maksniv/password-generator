import styles from './InputCheckbox.module.scss';

const InputCheckbox = ({ label, checked, onChange }) => {
  

  return (
    <>
      <label className={styles.checkbox__label}>
        <input
          type="checkbox"
          className={styles.checkbox__input}
          checked={checked}
          onChange={onChange}
        />
        <span className={styles.checkbox__span}></span>
        {label}
      </label>
    </>
  );
};

export default InputCheckbox;
