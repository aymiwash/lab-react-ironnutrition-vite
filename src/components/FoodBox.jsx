function FoodBox({foodObj, deleteFood}) {

    return (
        <div >
            <p>{foodObj.name}</p>
            <img src={foodObj.image} alt={foodObj.name} style={{height : "100px"}} />
            <p>Calories: {foodObj.calories}</p>
            <p>Servings {foodObj.servings}</p>
            <p>
                <b>Total Calories: {foodObj.servings * foodObj.calories}</b> kcal
            </p>
            <button onClick={deleteFood}>Delete</button>
        </div>
    )
}

export default FoodBox