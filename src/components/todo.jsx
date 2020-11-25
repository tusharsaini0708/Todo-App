import React, { useState } from "react";

const ToDo = () => {
  const [todoItem, setTodo] = useState("");
  const [todoList, setList] = useState([]);
  const [styleList, setStyle] = useState([]);
  const addTodo = () => {
    let bgColor = "white";
    if (todoList.length % 2 === 0) bgColor = "#f7f7f7";

    if (todoItem !== "") {
      setList([...todoList, todoItem]);
      setTodo("");
      setStyle([...styleList, bgColor]);
    }
    //console.log(todoList);
  };

  const deleteItem = (item, index) => {
    const temp = todoList.filter((each) => each !== item);
    const tempstyle = [...styleList];
    let bgColor = "white";
    if (index % 2 === 0) bgColor = "#f7f7f7";
    tempstyle[index] = bgColor;
    setStyle(tempstyle);
    setList(temp);
  };

  const handleCheck = (check, item) => {
    const index = todoList.indexOf(item);
    const temp = [...styleList];
    if (check) {
      temp[index] = "#b8ffab";
    } else {
      if (index % 2 === 0) temp[index] = "#f7f7f7";
      else temp[index] = "white";
    }
    setStyle(temp);
  };

  const editItem = (index) => {
    const temp = [...todoList];
    temp[index] = prompt("Please Enter the Item", temp[index]);
    setList(temp);
  };

  return (
    <div className="container">
      <h2>Todos({todoList.length})</h2>
      <div className="todo">
        <input
          type="text"
          className="form-control mb-3"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter todo here"
        />
        <button className="btn btn-primary " onClick={addTodo}>
          Add
        </button>
        {todoList.map((item, index) => (
          <li
            className="py-1 list-group-item d-flex justify-content-between "
            key={item}
            style={{ backgroundColor: styleList[index] }}
          >
            <span style={{ fontSize: 20 }}>
              <input
                className="checkbox "
                type="checkbox"
                onChange={(e) => handleCheck(e.target.checked, item)}
              ></input>
              {item}
            </span>
            <span>
              {/* <i class="fa fa-check-circle mr-4" aria-hidden="true"></i> */}
              <button
                onClick={() => editItem(index)}
                title="Edit"
                className="bg-success text-center iconBtn"
              >
                <i
                  className="fa fa-pencil-square-o fa-lg"
                  aria-hidden="true"
                ></i>
              </button>
              <button
                onClick={() => deleteItem(item, index)}
                title="Delete"
                className="bg-danger iconBtn"
              >
                <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
              </button>
            </span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
