import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
      <Navbar expand='md'>
        <Navbar.Brand>Список дел</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar'>
          <Nav>
            <div className='mx-md-3'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `text-decoration-none ${
                    isActive ? 'text-primary d-inline' : 'text-secondary'
                  }`
                }
                title='Перейти на главную'
              >
                Главная
              </NavLink>
            </div>
            <div className='my-2 my-sm-0'>
              <NavLink
                to='/add'
                className={({ isActive }) =>
                  `text-decoration-none ${
                    isActive ? 'text-primary d-inline' : 'text-body'
                  }`
                }
                title='Перейти на форму на добавления'
              >
                Добавить дело
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
