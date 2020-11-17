import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }
  createTasks(item) {
    return <div>
      <li key={item.key}>{item.text}<input type="checkbox" id="myCheck"></input></li>
      <button onClick={() => this.delete(item.key)}>UCCIDIMI</button>
      </div>
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default TodoItems;