import React from "react";

const FormHandling = () => {
  const submit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form>
        <input type="text" />
        <button
          type="submit"
          onClick={(event) => {
            submit(event);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandling;
