import React from "react";

function Task({handleRemove, itemsToDisplay}) {
  return (
    <div className="task">
       {itemsToDisplay.map((item) => {
        return (
          <div key={item.id}>
            <div className="label" >{item.category}</div>
            <div className="text">{item.text}</div>
            <button type="button" onClick={() => handleRemove(item)} >Remove</button>
          </ div>
        )
      }
      )}
      </div>
)}

export default Task;