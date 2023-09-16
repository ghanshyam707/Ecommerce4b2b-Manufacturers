import styles from './pressedtile.module.scss'

export default function PressedTile({ children, active,handleClick }) {
    return <div className={`${styles["tile"]} m-1 ${active ? styles['active'] : ''}`} onClick={handleClick}>
        {children}
    </div>
}