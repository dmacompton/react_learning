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
        componentDidMount: function () {
            var data = app.retrieveData();
            this.setState({
                todos: data
            });
        },
        clearCompleted: function () {
            var newTodos = this.state.todos.filter(function (elem, index) {
                return !elem.completed;
            });
            this.setState({todos: newTodos})
        },
        createNewTodo: function (newValue) {
            var state = this.state;
            state.todos.unshift({val: newValue, completed: false});
            this.setState(state);
        },
        updateVal: function (val, index) {
            var state = this.state;
            state.todos[index].val = val;
            this.setState(state);
        },
        toggleCompleted: function (index) {
            var state = this.state;
            state.todos[index].completed = !state.todos[index].completed;
            this.setState(state);
        },
        deleteTodo: function (index) {
            var state = this.state;
            state.todos.splice(index, 1);
            this.setState(state);
        },
        render: function () {
            return (
                <div className="outer-container">
                    <NewTodo
                        createNewTodo={this.createNewTodo}
                    />
                    <TodoList
                        todos={this.state.todos}
                        updateVal={this.updateVal}
                        toggleCompleted={this.toggleCompleted}
                        deleteTodo={this.deleteTodo}
                    />
                    <ClearCompleted
                        clearCompleted={this.clearCompleted}
                    />
                </div>
            );
        }
    });

    var NewTodo = app.components.NewTodo = React.createClass({
        mixins: [React.addons.LinkedStateMixin],
        getInitialState: function () {
            return {
                newValue: ''
            };
        },
        handleNewTodo: function (e) {
            this.props.createNewTodo(this.state.newValue);
            this.setState({newValue: ''});
        },
        render: function () {
            return (
                <div className="add-todo-group input-group input-group-lg">
                    <span className="input-group-addon">
                        <i className="glyphicon glyphicon-list-alt"></i>
                    </span>
                    <input valueLink={this.linkState('newValue')} placeholder="New Todo" className="form-control" type="text" />
                    <span className="input-group-btn">
                        <button onClick={this.handleNewTodo} className="btn btn-success" type="button">
                            <i className="glyphicon glyphicon-plus"></i>
                        </button>
                    </span>
                </div>
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
                                toggleCompleted={this.props.toggleCompleted}
                                deleteTodo={this.props.deleteTodo}
                            />
                        )
                    }.bind(this))}
                </div>
            ); /* привязываем окружение, можно было реализовать через var _this=this; и в updateVal передеать _this */
        }
    });

    var TodoItem = app.components.TodoItem = React.createClass({
        handleVal: function (e) {
            this.props.updateVal(e.target.value, this.props.index);
        },
        handleToggle: function (e) {
            this.props.toggleCompleted(this.props.index);
        },
        handleDelete: function (e) {
            this.props.deleteTodo(this.props.index);
        },
        render: function() {
            var inputClassName = 'form-control';
            if (this.props.todo.completed) {
                inputClassName += ' finished';
            }

            return (
                <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                        <input onChange={this.handleToggle} checked={this.props.todo.completed} type="checkbox" />
                    </span>
                    <input onChange={this.handleVal} className={inputClassName} type="text" value={this.props.todo.val} />
                    <span className="input-group-btn">
                        <button onClick={this.handleDelete} className="btn btn-danger" type="button">
                            <i className="glyphicon glyphicon-remove"></i>
                        </button>
                    </span>
                </div>
            );
        }
    });

    var ClearCompleted = app.components.ClearCompleted = React.createClass({
        handleClick: function (e) {
            this.props.clearCompleted();
        },
        render: function () {
            return (
                <div className="btn-clear-group">
                    <button onClick={this.handleClick} className="btn btn-primary btn-clear">Clear Completed</button>
                </div>
            );
        }
    });

})();