/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (0<= indexOfTodo && indexOfTodo<this.todos.length) {
      this.todos.splice(indexOfTodo,1);
    }

  }

  update(index, updatedTodo) {
    if (0<= index && index<this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (0<=indexOfTodo && indexOfTodo<this.todos.length) {
      return this.todos[indexOfTodo];
    } 
    return null;
  }

  clear() {
    this.todos = [];
  }

}

module.exports = Todo;
