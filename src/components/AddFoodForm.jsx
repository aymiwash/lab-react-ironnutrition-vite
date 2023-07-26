import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function AddFoodForm(addFunction) {
    const [foodData, setFoodData] = useState({})
    const handleSubmit = (event)=>{
        event.preventDefault()
        setFoodData(previousData =>{
            const newData = previousData
            newData.id = uuidv4()
            return newData
        })
        addFunction(foodData)
        setFoodData({})
    }

    return (
    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection : "column", alignItems: "center"}}>
        <label>Name:
            <input type="text" name="name" onChange={(event)=>setFoodData({ ...foodData, name: event.target.value })}/>
        </label>
        <label>Image:
            <input type="text" name="image" onChange={(event)=>setFoodData({ ...foodData, image: event.target.value })} />
        </label>
        <label>Calories:
            <input type="number" name="calories" onChange={(event)=>setFoodData({ ...foodData, calories: event.target.value })} />
        </label>
        <label>Servings:
            <input type="number" name="servings" onChange={(event)=>setFoodData({ ...foodData, servings: event.target.value })} />
        </label>
        <button type="submit">Create</button>
    </form>
    )
}

export default AddFoodForm