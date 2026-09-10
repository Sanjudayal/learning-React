import React, { useState } from "react";

const TwoWayBinding = () => {
  const [title, setTitle] = useState("");
  const submit = (event) => {};
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submited by", title);
          setTitle("");
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TwoWayBinding;
