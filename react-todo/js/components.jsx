/** @jsx React.DOM */

var app = app || {};
app.components = app.components || {};

(function () {
    'use strict';

    var TodoApp = app.components.TodoApp = React.createClass({
        getInitialState: function () {
            return {
                todos: []
            }
        },
        updateVal: function (val, index) {
            var state = this.state;
            state.todos[index].val = val;
            this.setState(state);
        },
        componentDidMount: function () {
            var data = app.retrieveData();
            this.setState({
                todos: data
            });
            console.log(this.state);
        },
        render: function () {
            return (
                <div className="outer-container">
                    <NewTodo />
                    <TodoList
                        todos={this.state.todos}
                        updateVal={this.updateVal}
                    />
                    <ClearCompleted />
                </div>
            );
        }
    });

    var NewTodo = app.components.NewTodo = React.createClass({
        render: function () {
            return (
                <h1>New Todo</h1>
            );
        }
    });

    var TodoList = app.components.TodoList = React.createClass({
        render: function () {
            return (
                <div className="todos">
                    {this.props.todos.map( function(element, index) {
                        return (
                            <TodoItem
                                todo={element}
                                index={index}
                                updateVal={this.props.updateVal}
                            />
                        )
                    }.bind(this))}
                    /* привязываем окружение, можно было реализовать через var _this=this; и в updateVal передеать _this */
                </div>
            );
        }
    });

    var TodoItem = app.components.TodoItem = React.createClass({
        handleVal: function (e) {
            this.props.updateVal(e.target.value, this.props.index);
        },
        render: function() {
            var inputClassName = 'form-control';
            if (this.props.todo.completed) {
                inputClassName += ' finished';
            }

            return (
                <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                        <input checked={this.props.todo.completed} type="checkbox" />
                    </span>
                    <input onChange={this.handleVal} className={inputClassName} type="text" value={this.props.todo.val} />
                    <span className="input-group-btn">
                        <button className="btn btn-danger" type="button">
                            <i className="glyphicon glyphicon-remove"></i>
                        </button>
                    </span>
                </div>
            );
        }
    });

    var ClearCompleted = app.components.ClearCompleted = React.createClass({
        render: function () {
            return (
                <h1>Clear Completed</h1>
            );
        }
    });

})();