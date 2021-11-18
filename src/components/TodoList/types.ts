export interface TodoListProps extends GlobalState, TodoManipulationProps {
  filterTodos: filterTodosHandler;
}
