import { useState } from "react";
import "./App.css";
import image from "./image.png";

function App() {
  const [array, setarray] = useState([]);
  const [input, setinput] = useState("");

  const handle = (e) => {
    setinput(e.target.value);
  };
  const addinput = () => {
    const task = {
      key: array.length === 0 ? 1 : array[array.length - 1].key + 1,
      name: input,
    };
    setarray([...array, task]);
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
      <div id="header">
        <img src={image} id="logo"></img>
        <div id="title">Tasks List</div>
      </div>
      <div className="input-area">
        <input id="in-box" onChange={handle}></input>
        <button id="add-but" onClick={addinput}>
          Add
        </button>
      </div>
      <div className="output-area">
        {array.map((value) => {
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
    </>
  );
}

export default App;
