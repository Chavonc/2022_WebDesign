import React from 'react';

class Todo extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
          newText: props.todo.text,
          editing: false,
        }
    }
    //刪除
    deleteTodo () {
        this.props.remove(this.props.todo.id);
    }

    //完成
    checkTodoToggle () {
        this.props.checkToggle(this.props.todo.id);
    }

    //顯示編輯表單
    showEditForm() {
        const {editing} = this.state;
        this.setState({
            newText: this.props.todo.text,
            editing: !editing,
        });
    }

    //取表單輸入內容
    getNewText(e) {
        const newText = e.target.value;
        this.setState({
            newText: newText,
        });
        
    }
    //儲存編輯資料
    saveEditedValue() {
        const {newText} = this.state;
        this.props.saveEditedValue(this.props.todo.id, newText);
        this.setState({
            newText: this.props.todo.text,
            editing: false,
        });
    }
    render () {
        const {editing} = this.state;
        const {todo} = this.props;
        //console.log(this.state)
        return (
            <li className={ "list-group-item list-row " + (todo.completed ? "done" : "") }>
                <div className="btn-circle checkbox" onClick={() => this.checkTodoToggle()} >✓</div>
                <div className="list-text__container" onDoubleClick={() => this.showEditForm()}>
                    { 
                        !editing && <span className="list-text">{ todo.text }</span> 
                    }
                    {
                        editing && 
                        <div className={"input-group"}>
                            <input type="text" className="form-control" placeholder={todo.text} value={this.state.newText} onChange={(e) => this.getNewText(e)}/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" onClick={() => this.showEditForm()}>取消</button>
                                <button className="btn btn-outline-secondary" type="button" onClick={() => this.saveEditedValue()}>完成編輯</button>
                            </div>
                        </div>
                    }                 
                </div>
                <div className="btn-circle delete" onClick={() => this.deleteTodo()} >✕</div>
            </li>
        );
    }
}
export default Todo;