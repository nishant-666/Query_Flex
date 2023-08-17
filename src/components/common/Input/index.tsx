import { Input } from "@/components/ui/input";
import styles from "./Input.module.scss";

export function InputComponent({ placeholder }: commonInput) {
  return (
    <div
      className={`grid w-full max-w-sm items-center gap-1.5 ${styles.container}`}
    >
      <input className={styles.input} type="text" placeholder={placeholder} />
    </div>
  );
}
