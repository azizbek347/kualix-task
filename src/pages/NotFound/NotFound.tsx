import { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div className='d-flex align-items-center justify-content-center flex-grow-1'>
        <div className='text-center'>
          <h2 className='text-danger'>Ошибка 404!</h2>
          <h3>Перейдите на главную страницу</h3>
        </div>
      </div>
    );
  }
}
