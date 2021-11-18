import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navigation } from './components/Navigation';
import { Add } from './pages/Add';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';

export default class App extends Component {
  state: GlobalState = {
    todos: [],
    filter: 'All',
  };

  componentDidMount() {
    const todos: nullOrString = localStorage.getItem('todos');
    if (todos !== null) {
      this.setState({ todos: JSON.parse(todos) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <BrowserRouter>
        <Container className='min-vh-100 d-flex flex-column'>
          <Navigation />
          <Routes>
            <Route
              path='/'
              element={
                <Main
                  {...this.state}
                  updateGlobalState={this.setState.bind(this)}
                />
              }
            />
            <Route
              path='/add'
              element={
                <Add
                  {...this.state}
                  updateGlobalState={this.setState.bind(this)}
                />
              }
            />
            <Route />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    );
  }
}
