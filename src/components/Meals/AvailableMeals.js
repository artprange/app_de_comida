import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Classic",
    description:
      "250gr of the juicest and finest minced cows, mozarella cheese, baconed to excellence, red onions, thick tomatoes and thin chopped lettuce on a golden brown butter glazed bun.   ",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Danny Trejo",
    description:
      "250gr of the juicest and finest minced cows, monterrey jack cheese, habanero peppers, garlic butter and red onions on a golden brown butter glazed bun. (Crying tissues are available)  ",
    price: 20.5,
  },
  {
    id: "m3",
    name: "Tower of Power",
    description:
      "F-I-V-E 120gr smash burguers stacked in a bacon and cheese havoc topped with red onions, pickles, thick tomatoes thin and chopped lettuce on a golden brown butter glazed bun. ",
    price: 44.99,
  },
  {
    id: "m4",
    name: "Flying Duck",
    description:
      "Fried chicken breast with gouda cheese, coleslaw and caramelized red onions on a golden brown butter glazed bun. (Yes, we did commit a typo.) ",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
