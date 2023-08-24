import { useEffect, useRef } from "react";
import styles from "./Input.module.scss";

export default function InputComponent({
  name,
  type = "text",
  placeholder,
  className,
  onChange,
}: commonInput) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div
      className={`grid w-full max-w-sm items-center gap-1.5 ${styles.container}`}
    >
      <input
        ref={inputRef}
        type={type}
        name={name}
        onChange={onChange}
        className={`${className} ${styles.input}`}
        placeholder={placeholder}
      />
    </div>
  );
}
