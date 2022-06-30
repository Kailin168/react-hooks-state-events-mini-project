import React, { useState } from "react";

function TaskList({itemsToDisplay}) {



  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {itemsToDisplay.map((item) => {
        return (
          <div key={item.id}>
            {item.text} {item.category}
            </ div>
        )
      }
      )}
    </div>
  );
}

export default TaskList;
