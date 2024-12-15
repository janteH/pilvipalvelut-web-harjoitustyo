import { useEffect, useState } from "react";
import styles from './details.module.css'

export default function Details({foodId}) {
    const [isLoading, setIsLoading] = useState(true);
    const [food, setFood] = useState({});
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "4276a7e69d2d4e45b35bff7b43660b16";

    useEffect(() => {
        async function fetchDetails() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json()
            setFood(data);
            setIsLoading(false);
        }
        fetchDetails();
    }, [foodId]);

    return (
        <div className={styles.recipeCard}>
            <div>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt="" />
            </div>
            <div className={styles.recipeDetails}>
                <span>
                    <strong>{food.readyInMinutes} minutes</strong>
                </span>
                <span>
                    {food.vegetarian ? "Vegetarian":"Non-Vegetarian"}
                </span>
            </div>

            <h2>Instructions</h2>

            <div className={styles.recipeInstructions}>
                <ol>
                    {isLoading ? (
                        <p>Select Food...</p>
                    ) : (
                    food.analyzedInstructions[0].steps.map((step)=> (<li>{step.step}</li>))
                    )}
                </ol>
            </div>
        </div>
    );
}