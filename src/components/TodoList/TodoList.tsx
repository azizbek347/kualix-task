import { Component } from 'react';
import { Stack, ListGroup } from 'react-bootstrap';
import { TodoListProps } from './types';
import { TodoListItem } from '../TodoListItem';

export default class TodoList extends Component<TodoListProps> {
  render() {
    const {
      filterTodos,
      filter,
      todos,
      toggleProperty,
      deleteTodo,
      editTodo,
    } = this.props;
    const filteredTodos = filterTodos(todos, filter);
    const itemExists: boolean = filteredTodos.length === 0;
    return (
      <Stack className='py-3' gap={3}>
        <ListGroup>
          {itemExists ? (
            <h2 className='text-center mt-3'>
              По выбранному фильтру нет дел!!!
            </h2>
          ) : (
            filteredTodos.map((todo: Todo) => (
              <div key={todo.addedDate.valueOf()}>
                <TodoListItem
                  todo={todo}
                  editTodo={editTodo}
                  toggleProperty={toggleProperty}
                  deleteTodo={deleteTodo}
                ></TodoListItem>
              </div>
            ))
          )}
        </ListGroup>
      </Stack>
    );
  }
}
