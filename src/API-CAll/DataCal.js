import React from "react";

function DataCal() {
  const tasks = [
    {
      taskId: 1,
      taskName: "Clean the bathroom",
      taskStatus: "Complete",
    },
    {
      taskId: 2,
      taskName: "Learn filtering data in React",
      taskStatus: "To do",
    },
    {
      taskId: 3,
      taskName: "Fix the bug on React project",
      taskStatus: "To do",
    },
    {
      taskId: 4,
      taskName: "Fix the car",
      taskStatus: "Complete",
    },
  ];
  return (
    <div>
      <ul style= {{color: "white"}} > To-do list:
          {
              tasks
              .filter(task => task.taskStatus == 'To do')
              .map(task => <li key={task.taskId}> {task.taskName} </li> )
          }
      </ul>
    </div>
  );
}
export default DataCal;
