import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data" // this is to export just the tasks from the data.js file

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [categoriesName, setCategoriesName] = useState('All')

  function handleCatergoryChange (event) {
    setCategoriesName(event.target.value);
  }
  const itemsToDisplay = TASKS.filter((item) => {
    if (categoriesName === "All") { return true }
    else { return item.category === categoriesName }
  })




  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  onCategoryChange={handleCatergoryChange} />
      <NewTaskForm />
      <TaskList itemsToDisplay={itemsToDisplay}/>
    </div>
  );
}

export default App;