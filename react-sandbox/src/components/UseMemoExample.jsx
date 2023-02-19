import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const render = useRef(1);

  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    render.current = render.current + 1;
  }, []);

  const handleClick = () => {
    setInc((prevNumber) => {
      console.log(prevNumber);
      return prevNumber + 1;
    });
  };
  return (
    <div>
      <h3>Renders:{render.current}</h3>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control"
      />
      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Rerender
      </button>
    </div>
  );
}
function getSqrt(sqrt) {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
  console.log("Expensive Function called");
  return Math.sqrt(sqrt);
}

export default UseMemoExample;
