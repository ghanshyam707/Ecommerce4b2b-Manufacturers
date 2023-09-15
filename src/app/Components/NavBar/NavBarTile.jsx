import styles from './navbar.module.scss'

export default function NavbarTile({ children }) {
    return (
      <>
        <div className={`${styles["navbartile"]} p-2 m-4`}>{children}</div>
      </>
    );
}