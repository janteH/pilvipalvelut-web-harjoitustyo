import styles from "./nav.module.css"

export default function Nav({children}) {
    return (
        <div className={styles.nav}>
            FoodApp
            <span className={styles.loginForm}>
                {children}
            </span>
        </div>

        
    );
}