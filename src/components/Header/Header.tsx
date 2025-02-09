import styles from "./Header.module.scss";

interface Props {
  header: string;
}

function Header({ header }: Props) {
  return (
    <header>
      <h1 className={styles.h1}>{header.toUpperCase()}</h1>
    </header>
  );
}

export default Header;
