import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "4276a7e69d2d4e45b35bff7b43660b16";

export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("pizza");

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        fetchFood();
    }, [query]);
    return (
        <div className={styles.searchContainer}>
            <input
              className={styles.input}
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
              type="text"
            />
        </div>
    )
}