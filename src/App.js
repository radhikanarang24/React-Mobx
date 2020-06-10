import React from "react";
import "./styles.css";
import { observable, computed } from "mobx";
//import {observer} from 'mobx-react';
class ObservableTodoStore {
  @observable todos = [];
  @observable pendingRequests = 0;

  @computed get completedTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

  @computed get report() {
    if (this.todos.length === 0) return "<none>";
    const nextTodo = this.todos.find(todo => todo.completed === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    });
  }
}

const observableTodoStore = new ObservableTodoStore();

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
   <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
