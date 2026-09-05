function App() {
  let count = 0;

  const increaseCount = function () {
    count++;
    const heading = document.querySelector("h1");
    heading.textContent = `Count : ${count}`;
    console.log(count);
  };
  return (
    <>
      <h1> Count : {count} </h1>
      <button onClick={increaseCount}> increase count</button>
    </>
  );
}

export default App;
