import React from "react";
import { useRef } from "react";

function useRefExample1() {
  const inputRef = useRef();
  const textRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.value =
      "useRef hook can change value and styles of inputs";
    inputRef.current.style.backgroundColor = "blue";
    inputRef.current.style.color = "white";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p
          ref={textRef}
          onClick={() => {
            textRef.current.innerText =
              "useRef can also change inner html of elements";
            inputRef.current.focus();
          }}
        >
          Hello
        </p>
      </form>
    </div>
  );
}

export default useRefExample1;
