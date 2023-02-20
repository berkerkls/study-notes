import React, { useState, useCallback } from "react";

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);

  // In here we use useCallback hook because we want the function run when its dependency changes.
  // The function runs but our component not rerender it only updated the state.
  const handleTask = useCallback(() => {
    setTasks((prevState) => [...prevState, "some task"]);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={handleTask} />
      {tasks.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log("rendered");
  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
});
export default UseCallbackExample;
