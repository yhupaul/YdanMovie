import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  const onChange = (event) => setKeyword(event.target.value);
// it only render one time
  useEffect(() => {
  console.log("CALL THE API...");
}, []);
// it render when keyword is changed
  useEffect(() => {
    if  (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
// it render when counter is changed
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
