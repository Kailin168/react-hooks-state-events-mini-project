import React, { useState } from "react";

function TaskList({itemsToDisplay}) {



  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {itemsToDisplay.map((item) => {
        return (
          <div key={item.id}>
            To Do: {item.text} <br /> Category: {item.category}  <br />  <br /> 
            </ div>
        )
      }
      )}
    </div>
  );
}

export default TaskList;
