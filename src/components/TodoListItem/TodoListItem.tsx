import { Component } from 'react';
import { Row, Col, Button, ButtonGroup, ListGroupItem } from 'react-bootstrap';
import { TodoListItemProps } from './types';

export default class TodoListItem extends Component<TodoListItemProps> {
  render() {
    const { todo, toggleProperty, deleteTodo, editTodo } = this.props;
    const { color, description, addedDate, label } = todo;
    return (
      <ListGroupItem>
        <Row>
          <Col sm={7} md={9}>
            <p className='font-weight-bold' style={{ color }}>
              Название: {label}
            </p>
            <p>Описание: {description}</p>
          </Col>
          <Col
            sm={5}
            md={3}
            className='d-flex align-items-end justify-content-end'
          >
            <ButtonGroup aria-label='Todo item buttons'>
              <Button
                variant='secondary'
                title='Отметить как выполненное задание'
                onClick={() => toggleProperty(addedDate, 'done')}
              >
                <i className='bi bi-check' />
              </Button>
              <Button
                variant='secondary'
                title='Поменять приоритет'
                onClick={() => toggleProperty(addedDate, 'important')}
              >
                <i className='bi bi-exclamation' />
              </Button>
              <Button
                variant='secondary'
                title='Изменить'
                onClick={() => editTodo(todo)}
              >
                <i className='bi bi-pencil' />
              </Button>
              <Button
                variant='secondary'
                title='Удалить'
                onClick={() => deleteTodo(addedDate)}
              >
                <i className='bi bi-trash' />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}
