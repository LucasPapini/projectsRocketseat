import styles from "./Header.module.css";

//Images
import logoSvg from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoSvg} alt="Logotipo Ignite" />
    </header>
  );
}
