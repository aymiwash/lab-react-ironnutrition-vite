import AddFoodForm from "./AddFoodForm"
import FoodBox from "./FoodBox"
import foodsJson from "../foods.json";
import { useState, useEffect } from "react"
import Search from "antd/es/input/Search";

function FoodList() {
    const [foods, setFoods] = useState(foodsJson)
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [isResult, setIsResult] = useState(true)

    const deleteFoodFunction = (currentFoodId) => {
        const updatedFoods = [...foods].filter(food => food.id !== currentFoodId)
        setFoods(updatedFoods)
    }

    const addNewFood = (data) => {
        setFoods(previousFoods => {
            const newFoods = [...previousFoods]
            newFoods.unshift(data)
            return newFoods
        })
    }

    const searching = (event) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        if (search !== "") {
            const searchResult = foods.filter((food) => food.name.toLowerCase().includes(search.toLowerCase()));
            if (searchResult.length === 0) {
                setIsResult(false)
            }
            else{
                setIsResult(true)
                setSearchResult(searchResult);
            }

        }
    }, [search]);


    return (
        <>
            <h1>LAB | React IronNutrition</h1>
            <AddFoodForm addFunction={addNewFood} />

            <Search placeholder="input search text" onChange={searching} style={{ width: 200 }} />

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {isResult ? (search !== "" ? searchResult : foods).map(oneFood => {
                    return (
                        <FoodBox key={oneFood.id} foodObj={oneFood} deleteFoodFunction={() => { deleteFoodFunction(oneFood.id) }} />
                    )
                }
                )
                : "Oops, no result for this !"} 
            </div>
        </>
    )
}

export default FoodList