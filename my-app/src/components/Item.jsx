import styles from "./Item.module.css";

export default function Item({food, setFoodId}) {
    return (
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={food.image} alt="" />
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={() => {
                    setFoodId(food.id)
                }} >View recipe</button>
            </div>
        </div>
    );
}