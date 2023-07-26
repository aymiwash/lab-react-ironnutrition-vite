import { Button } from "antd";
import Form from "antd/es/form/Form";

import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function AddFoodForm({ addFunction }) {
    const initialFoodData = {
        name: "",
        image: "",
        calories: "",
        servings: ""
    };

    const [foodData, setFoodData] = useState(initialFoodData)
    const handleSubmit = (event) => {
        event.preventDefault()
        setFoodData(previousData => {
            const newData = previousData
            newData.id = uuidv4()
            return newData
        })
        addFunction(foodData)
        setFoodData(initialFoodData)
    }

    return (
        <Form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", color:"white", gap:"15px", margin: "30px"}}>
            <label>Name: 
                <input type="text" name="name" value={foodData.name} onChange={(event) => setFoodData({ ...foodData, name: event.target.value })} />
            </label>
            <label>Image: 
                <input type="text" name="image" value={foodData.image} onChange={(event) => setFoodData({ ...foodData, image: event.target.value })} />
            </label>
            <label>Calories: 
                <input type="number" name="calories" value={foodData.calories} onChange={(event) => setFoodData({ ...foodData, calories: event.target.value })} />
            </label>
            <label>Servings: 
                <input type="number" name="servings" value={foodData.servings} onChange={(event) => setFoodData({ ...foodData, servings: event.target.value })} />
            </label>
            <Button type="primary" htmlType="submit" style={{backgroundColor: "green", fontWeight: "bold"}}>Create</Button>
        </Form>
    )
}

export default AddFoodForm