import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState();

  useEffect(()=>{
    const fetchMeals = async() =>{
    
    const response = await fetch('https://the-nasty-burger-default-rtdb.firebaseio.com/meals.json');

    if (!response.ok){
      throw new Error ('Something is broken :(')
    }
    const responseData = await response.json();
    const loadedMeals = []
   

    for (const key in responseData){
      loadedMeals.push({
        id:key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price
      })
    }

    setMeals(loadedMeals);
    setIsLoading(false);  
  };

  
    fetchMeals().catch(error=>{
      setIsLoading(false);
      setHttpError(error.message)

     })
    
  },[]);

  
  if(isLoading){
    return(
      <section className={classes.MealsLoading}>
       <p>Loading...</p>
      </section>
    )
  }

  if (httpError){
    return(
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }


  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id} // this is new!
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
