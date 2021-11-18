import { Component } from 'react';
import { Stack } from 'react-bootstrap';
import { TodoFilters } from '../../components/TodoFilters';
import { TodoList } from '../../components/TodoList';
import { TodoEditModal } from '../../components/TodoEditModal';
import { generateNewTodo } from '../../utility';

export default class Main extends Component<PageProps, MainPageState> {
  state: MainPageState = {
    isModalOpened: false,
    todo: generateNewTodo({}),
  };

  toggleProperty: togglePropertyHandler = (id, propName) => {
    this.props.updateGlobalState((prevState: GlobalState) => {
      const { todos } = prevState;
      const index: number = todos.findIndex((item) => item.addedDate === id);
      const value = !todos[index][propName];
      const todo: Todo = { ...todos[index], [propName]: value };
      return {
        todos: [...todos.slice(0, index), todo, ...todos.slice(index + 1)],
      };
    });
  };

  deleteTodo: deleteTodoHandler = (id) => {
    this.props.updateGlobalState((prevState: GlobalState) => {
      const { todos } = prevState;
      const newTodos = todos.filter(
        (item: Todo): boolean => item.addedDate !== id
      );
      return { todos: newTodos };
    });
  };

  saveTodo: saveTodoHandler = (id, newTodo) => {
    this.props.updateGlobalState((prevState: GlobalState) => {
      const { todos } = prevState;
      const index: number = todos.findIndex((item) => item.addedDate === id);
      return {
        todos: [...todos.slice(0, index), newTodo, ...todos.slice(index + 1)],
      };
    });
  };

  filterTodos: filterTodosHandler = (todos, filter) => {
    switch (filter) {
      case 'Done':
        return todos.filter((item: Todo): boolean => item.done);
      case 'Important':
        return todos.filter((item: Todo): boolean => item.important);
      case 'All':
      default:
        return todos;
    }
  };

  changeFilter: changeFilterHandler = (filter) => {
    this.props.updateGlobalState(() => ({ filter }));
  };

  toggleModal: editTodoHandler = (todo) => {
    this.setState((prevState: MainPageState) => ({
      todo,
      isModalOpened: !prevState.isModalOpened,
    }));
  };

  render() {
    const { todo, isModalOpened } = this.state;
    const { saveTodo, toggleModal } = this;
    return (
      <Stack className='py-3'>
        <TodoFilters
          changeFilter={this.changeFilter}
          filter={this.props.filter}
        />
        <TodoList
          {...this.props}
          toggleProperty={this.toggleProperty}
          filterTodos={this.filterTodos}
          deleteTodo={this.deleteTodo}
          editTodo={this.toggleModal}
        />
        {isModalOpened && (
          <TodoEditModal
            todo={todo}
            isModalOpened={isModalOpened}
            saveTodo={saveTodo}
            toggleModalVisibility={toggleModal}
          />
        )}
      </Stack>
    );
  }
}
