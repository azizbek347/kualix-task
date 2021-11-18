import { Component } from 'react';
import { Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import { onChangeHanlder, createTodoFunction, onSubmitHandler } from './types';
import { generateNewTodo } from '../../utility';

export default class AddForm extends Component<PageProps> {
  state = generateNewTodo({});
  onChange: onChangeHanlder = (e) => {
    const element = e.target as HTMLElementWithNameValue;
    const { name, value } = element;
    this.setState(() => ({ [name]: value }));
  };

  componentDidMount() {
    const state: nullOrString = localStorage.getItem('draftTodo');
    if (state !== null) {
      this.setState((prev) => JSON.parse(state));
    }
  }

  componentWillUnmount() {
    localStorage.setItem('draftTodo', JSON.stringify(this.state));
  }

  createTodo: createTodoFunction = (todoCopy) => {
    const newTodo: Todo = generateNewTodo(todoCopy);
    this.props.updateGlobalState(
      (prevState: GlobalState) => ({
        todos: [...prevState.todos, newTodo],
      }),
      (): void => {
        alert('Задание добавлено!');
      }
    );
  };

  onSubmit: onSubmitHandler = (e) => {
    e.preventDefault();
    const todoCopy: any = { ...this.state };
    this.setState(() => generateNewTodo({}));
    this.createTodo(todoCopy);
  };

  render() {
    return (
      <Form className='py-3' onSubmit={this.onSubmit}>
        <Row className='mb-3 align-items-center'>
          <Col sm='7' md='8' lg='10' className='mb-3 mb-sm-0'>
            <Form.Group controlId='nameInput'>
              <FloatingLabel controlId='nameInput' label='Введите название'>
                <Form.Control
                  name='label'
                  type='text'
                  placeholder='Введите название'
                  value={this.state.label}
                  onChange={this.onChange}
                  autoComplete='off'
                  required
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Form.Group as={Col}>
            <Row>
              <Form.Label
                htmlFor='colorInput'
                className='d-flex align-items-center custom-col col-sm-8'
              >
                Выберите цвет
              </Form.Label>
              <Form.Control
                type='color'
                id='colorInput'
                value={this.state.color}
                title='Выберите цвет'
                name='color'
                onChange={this.onChange}
                className='custom-col'
              />
            </Row>
          </Form.Group>
        </Row>
        <FloatingLabel
          className='flex-grow-1 d-flex flex-column mb-3'
          controlId='descriptionTextarea'
          label='Дайте описание'
        >
          <Form.Control
            as='textarea'
            placeholder='Дайте описание'
            className='flex-grow-1 no-resize'
            name='description'
            value={this.state.description}
            onChange={this.onChange}
            required
          />
        </FloatingLabel>
        <Row>
          <Col>
            <Button type='submit'>Сохранить</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
