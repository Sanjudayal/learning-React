import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("");
  const [note, setNote] = useState("");

  const [noteArray, setNoteArray] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newNoteArray = [...noteArray];

    newNoteArray.push({ heading, note });
    
    setNoteArray(newNoteArray);
    console.log(noteArray);

    setHeading("");
    setNote("");
  };

  return (
    <div className="bg-black text-white min-h-screen lg:max-h-screen p-10 flex flex-col lg:flex-row   ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-5 min-w-full lg:min-w-[45%]"
      >
        <h1 className="font-bold text-3xl">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Heading"
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value);
          }}
          className="border-2 px-5 py-4 text-xl outline-none rounded"
        />
        <textarea
          placeholder="write note"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
          className="border-2 h-40 px-5 py-4 text-lg outline-none rounded"
        ></textarea>
        <button className="bg-white text-black py-4 text-xl cursor-pointer rounded active:scale-95">
          Add Note
        </button>
      </form>

      <div className="pt-10 lg:pt-0 lg:pl-10">
        <h1 className="text-center lg:text-start font-bold text-3xl mb-6">
          Recent Notes
        </h1>
        <div
          id="notesContainer"
          className="flex gap-8 pl-8  justify-evenly flex-nowrap lg:flex-wrap h-full overflow-auto lg:border-l-2"
        >
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
          <div className="min-h-52 min-w-40 bg-white rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
