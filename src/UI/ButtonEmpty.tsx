import { Link } from "react-router-dom";
import styles from "./Styles.module.scss";

export const ButtonEmpty: React.FC = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <button className={styles.button}>На главную</button>
    </Link>
  );
};
