import React from "react";
import Task from "./Task"

function TaskList({ itemsToDisplay, handleRemove }) {
  return (
    <div className="tasks">
     <Task handleRemove={handleRemove} itemsToDisplay={itemsToDisplay}/>
    </div>
  );
}

export default TaskList;
