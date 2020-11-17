import React, { useState } from "react";
import './ToDoList.css';

function ToDoList() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  function handleChange(e) {
    setCurrentItem(e.target.value);
  }

  function handleSubmit(e) {
    let newitems = items.slice();
    newitems.push({toDo:currentItem, isDone:false});
    setItems(newitems);
    e.preventDefault();
  }

  function removeItem(i) {
    let newitems = items.slice();
    newitems.splice(i, 1);
    setItems(newitems);
  }

  function checker(i){
    let newitems = items.slice();
    newitems[i].isDone = !newitems[i].isDone;
    setItems(newitems);
  }
  const ListedElement = items.map((el, i) => {
    return (<div style={{display:'flex'}}>
      <li className={items[i].isDone? 'todolistelement checked':'todolistelement'} key={el} onClick={() => {
            checker(i);
          }}>
        {el.toDo}
       
      </li> <button
          onClick={(i) => {
            removeItem(i);
          }}
        >
          X
        </button></div>
    );
  });

  return (
    <div className="todoListMain">
      <div className="header">
        <form>
          <input placeholder="enter task" onChange={handleChange}></input>
          <button className='closeButton' type="submit" onClick={handleSubmit}>
            add
          </button>
        </form>
      </div>
      <ol>{ListedElement}</ol>
    </div>
  );
}

export default ToDoList;
