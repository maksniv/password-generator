import styles from './InputCheckbox.module.scss';

const InputCheckbox = ({ label }) => {
  return (
    <>
      <label>
        <input type="checkbox" />
        <span></span>
        {label}
      </label>
    </>
  );
};

export default InputCheckbox;
