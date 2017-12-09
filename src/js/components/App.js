import React, {Component} from 'react';
import '../../css/App.css';
import Navbar from "./Navbar";
import TodoAddForm from "./TodoAddForm";
import TodoList from "./TodoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            valid: true
        }
    }

    _onSubmit = (e) => {
        e.preventDefault();

        let val = e.target.todo.value;
        let todos = this.state.todos;

        if (val === '' || val.includes('[done]') || todos.indexOf(val) > -1) {
            this.setState({valid: false});
            return;
        }
        todos.push(val);
        this.setState({todos, valid: true});

        e.target.todo.value = '';
    };

    _onListItemClicked = (todo) => {
        let todos = this.state.todos;
        let index = todos.findIndex(i => i === todo.value);

        if (!todo.value.includes('[done]'))
            todos[index] = '[done] ' + todo.value;

        this.setState({todos});
    };

    _onDeleteItemClicked = (todo) => {
        let todos = this.state.todos;

        let index = todos.findIndex(i => i === todo.value);
        todos.splice(index, 1);

        this.setState({todos});
    };

    render() {
        return (
            <div className='container'>
                <Navbar/>
                <div className='row'>
                    <div className='col-sm'>
                        <TodoAddForm onSubmit={this._onSubmit.bind(this)} valid={this.state.valid}/>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <div className="col-sm">
                        <div className="list-group">
                            {
                                this.state.todos.map((value, key) => {
                                    return <TodoList
                                        value={value}
                                        key={key}
                                        _onListItemClicked={this._onListItemClicked.bind(this, {value, key})}
                                        _onDeleteItemClicked={this._onDeleteItemClicked.bind(this, {value, key})}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
