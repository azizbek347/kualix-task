import { Component } from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { FilterProps, FilterState } from './types';

export default class TodoFilters extends Component<FilterProps, FilterState> {
  state: FilterState = {
    options: [
      ['All', 'Все'],
      ['Done', 'Выполненные'],
      ['Important', 'Важные'],
    ],
  };
  
  render() {
    const { filter, changeFilter } = this.props;
    const { options } = this.state;
    return (
      <Row>
        <Col>
          <ButtonGroup>
            {options.map(([internalValue, textValue]) => (
              <Button
                variant={filter === internalValue ? 'primary' : 'secondary'}
                onClick={() => changeFilter(internalValue)}
                key={internalValue}
                title={`Отфильтровать по категории ${textValue}`}
              >
                {textValue}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
    );
  }
}
