import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("");
  const [note, setNote] = useState("");

  const [noteArray, setNoteArray] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (heading === "" || note === "") {
      alert("please first fill all the text areas then click to add note");
    } else {
      const newNoteArray = [...noteArray];

      newNoteArray.push({ heading, note });

      setNoteArray(newNoteArray);

      setHeading("");
      setNote("");
    }
  };

  const deleteNote = (idx) => {
    const newNoteArray = [...noteArray];
    newNoteArray.splice(idx, 1);
    setNoteArray(newNoteArray);
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
          placeholder="write note..."
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
          className="flex gap-8 pl-8 items-start justify-start flex-nowrap lg:flex-wrap h-[95%] overflow-auto lg:border-l-2 "
        >
          {noteArray.map((el, idx) => {
            return (
              <div
                key={idx}
                className="relative flex flex-col gap-3 text-black px-6 pt-6 pb-4 h-52 min-w-40 lg:max-h-52 lg:max-w-40 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover"
              >
                <h3 className="leading-tight font-bold text-xl">
                  {el.heading}
                </h3>
                <p
                  id="noteText"
                  className="h-[60%] overflow-auto leading-tight font-medium text-gray-500"
                >
                  {el.note}
                </p>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="bg-red-500 text-sm text-white py-1 w-full rounded-full cursor-pointer active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
