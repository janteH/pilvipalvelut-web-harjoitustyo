import Item from "./Item";

export default function ItemList({foodData, setFoodId}) {
    return (
        <div>
            {foodData.map((food) => (
                <Item setFoodId={setFoodId} key={food.id} food={food} />
            ))}
        </div>
    );
}