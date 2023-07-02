import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [array, setarray] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [input, setinput] = useState("");
  const name = ["T", "A", "S", "K", "S"];
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(array));
  }, [array]);

  const handle = (e) => {
    setinput(e.target.value);
  };
  const addinput = (e) => {
    e.preventDefault();
    if (input != "") {
      const task = {
        key: array.length === 0 ? 1 : array[array.length - 1].key + 1,
        name: input,
      };
      setarray([...array, task]);
    }
    setinput("");
  };
  const remove = (value) => {
    setarray(
      array.filter((val) => {
        return val.key != value.key;
      })
    );
  };
  return (
    <>
      <div className="king">
        <div id="header">
          {name.map((word) => {
            return <div className="title">{word}</div>;
          })}
        </div>
        <div id="right-section">
          <div className="input-area">
            <form onSubmit={addinput}>
              <input id="in-box" onChange={handle} value={input}></input>
              <button id="add-but" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="output-area">
            {array?.map((value) => {
              return (
                <div id="list">
                  <div>{value.name}</div>
                  <div className="buttons">
                    <button
                      id="d"
                      onClick={() => {
                        remove(value);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
