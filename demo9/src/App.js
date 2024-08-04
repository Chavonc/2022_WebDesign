import React from 'react';
import Todo from './ToDo.js';
class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      todos: [
        {id: 1, text: '點文字兩下可以編輯', completed: false},
        {id: 2, text: '呵呵呵~已完成HW9', completed: true},
        {id: 3, text: '期末搞定收工!!!!', completed: false},
      ],
      newId: 4,
      newText: '',
    }
  }
  //取Todo的內容
  getNewValue (e){
    const newText = e.target.value;  
    this.setState({
      newText: newText,
    });
  }
  //新增(40分)
  addTodo (e) {
    const {todos, newText, newId} = this.state;
    if (!newText) {
      e.preventDefault();
      return;
    }
        
    this.setState({
      todos: [...todos,{id: newId, text: newText, completed: false}],
      newId: newId +1,
      newText: '',
    });
  }
  //刪除(60分)
  deleteTodo (id) {
    const {todos} = this.state;   
    let newTodos = todos.filter((item) => item.id !== id);
    this.setState({todos: newTodos,});        
  }
  //完成(20分)
  checkTodoToggle (id) {
    const {todos} = this.state;
    let newTodos = todos.map((item) => {
      if(item.id === id){
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({
      todos: newTodos,
    })
  }
  //編輯(extra)
  saveEditedValue(id, value) {
    const {todos} = this.state;
    let newTodos = todos.map((item) => {
      if(item.id === id){
        item.text = value;
      }
      return item;
    });
    this.setState({
      todos: newTodos,
    })
  }
  render () {
    let {todos} = this.state;
    return (
    <div className="container">
      <header className="header__container">
        <h1 className="header__site-title">CGU Todo list</h1>
        <p className="header__site-description">快記錄下要做的事吧!</p>
      </header>
      <center>
      <input type="text" className="form-control" id="input-add" placeholder="add a new todo..."
        value={this.state.newText}
        onChange={(e) => this.getNewValue(e)} 
      />
      <button 
        className="btn btn-outline-secondary"
        onClick={(e) => this.addTodo(e)}
      >Add</button>
      </center>
      <ul className="list-group list-group-flush">
        {todos.map((todo) =>
          <Todo
            key={todo.id}
            todo={todo}
            remove={(id) => this.deleteTodo(id)}
            checkToggle={(id) => this.checkTodoToggle(id)}
            saveEditedValue={(id, value) => this.saveEditedValue(id, value)}
          />
        )}
      </ul>
    </div>
    );
  }
}
export default App;