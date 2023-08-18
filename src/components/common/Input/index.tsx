import styles from "./Input.module.scss";

export default function InputComponent({
  name,
  type = "text",
  placeholder,
  onChange,
}: commonInput) {
  return (
    <div
      className={`grid w-full max-w-sm items-center gap-1.5 ${styles.container}`}
    >
      <input
        type={type}
        name={name}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
}
