import { Component } from 'react';
import { Row, Col, Form, Button, FloatingLabel, Modal } from 'react-bootstrap';
import {
  TodoEditModalProps,
  onChangeHandler,
  onSubmitHandler,
  onCloseHandler,
} from './types';
import { generateNewTodo } from '../../utility';

export default class TodoEditModal extends Component<TodoEditModalProps> {
  state: Todo = { ...this.props.todo };

  onChange: onChangeHandler = (e) => {
    const element = e.target as HTMLElementWithNameValue;
    const { name, value } = element;
    this.setState(() => ({ [name]: value }));
  };

  onSubmit: onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.saveTodo(this.state.addedDate, this.state);
    this.props.toggleModalVisibility(generateNewTodo({}));
  };

  onClose: onCloseHandler = () =>
    this.props.toggleModalVisibility(generateNewTodo({}));

  render() {
    const { isModalOpened } = this.props;
    const { label, color, description } = this.state;
    return (
      <Modal
        centered
        show={isModalOpened}
        onHide={this.onClose}
        aria-labelledby='Форма редактирования задачи'
      >
        <Modal.Header closeButton>
          <Modal.Title>Форма редактирование задачи</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.onSubmit}>
            <Row className='mb-3 align-items-center'>
              <Col sm='7' className='mb-3 mb-sm-0'>
                <Form.Group controlId='nameInput'>
                  <FloatingLabel controlId='nameInput' label='Введите название'>
                    <Form.Control
                      name='label'
                      type='text'
                      placeholder='Введите название'
                      value={label}
                      onChange={this.onChange}
                      autoComplete='off'
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Form.Group as={Col}>
                <Row className='align-items-center'>
                  <Form.Label
                    htmlFor='colorInput'
                    className='custom-col col-sm-8'
                  >
                    Выберите цвет
                  </Form.Label>
                  <Form.Control
                    type='color'
                    id='colorInput'
                    value={color}
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
                value={description}
                onChange={this.onChange}
                style={{}}
                required
              />
            </FloatingLabel>
            <Row>
              <Col className='d-flex justify-content-end'>
                <Button
                  variant='secondary'
                  type='button'
                  onClick={this.onClose}
                >
                  Отменить
                </Button>
                <Button type='submit' className='ms-3'>
                  Сохранить
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}
