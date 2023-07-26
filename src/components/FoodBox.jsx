import { Button, Card } from "antd"

function FoodBox({foodObj, deleteFoodFunction}) {

    return (
        <Card style={{ width: 250, margin: 10 }}>
            <p>{foodObj.name}</p>
            <img src={foodObj.image} alt={foodObj.name} style={{height : "100px"}} />
            <p>Calories: {foodObj.calories}</p>
            <p>Servings {foodObj.servings}</p>
            <p>
                <b>Total Calories: {foodObj.servings * foodObj.calories}</b> kcal
            </p>
            <Button onClick={deleteFoodFunction} type="primary" style={{backgroundColor : "red", fontWeight: "bold"}}>Delete</Button>
        </Card>
    )
}

export default FoodBox