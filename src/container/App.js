import React from 'react';
import style from './App.css';
import Title from '../components/title.js'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
}
    render() {
    return (
        <div className={style.TodoApp}>
            <Title title= "todo app"/>
            <ul>lista</ul>
            <li>1.</li>
            <li>2.</li>
        </div>
    );
}
}




export default App;