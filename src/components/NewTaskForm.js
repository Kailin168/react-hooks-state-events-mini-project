import React, { useState } from "react";

function NewTaskForm({ onCategoryChange, addToAllItems }) {

  const [inputName, setInputName] = useState('')

  function handleInputName(event) {
    setInputName(event.target.value);
  }

  const [selectedCategory, setSelectedCategory] = useState('Code')

  function handleSelectedCategoryName(event) {
    setSelectedCategory(event.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={(e) => { e.preventDefault() }} >
      <label>
        Details
        <input type="text" name="text" value={inputName} onChange={handleInputName} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelectedCategoryName}>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" onClick={(() => {
        addToAllItems({
          text: inputName ,
          category: selectedCategory ,
        })
        setInputName('');
        setSelectedCategory('Code')
      })} />
      {/* this is from the app, so whenever there is a click, it will use that callback function to add new items.  */}
    </form>
  );
}

export default NewTaskForm;