import PropTyoes from "prop-types";
import styles from "./Button.module.css";

function Button ({text}) {
  return <button className={styles.btn}>{text}</button>;
}

Button.PropTyoes = {
  text: PropTyoes.string.isRequired,
};

export default Button;