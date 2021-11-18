type HTMLElementWithNameValue = HTMLInputElement | HTMLTextAreaElement;
type nullOrString = null | string;
type Filter = 'All' | 'Done' | 'Important';

type changeFilterHandler = (filter: string) => void;
type togglePropertyHandler = (id: Date, propName: keyof Todo) => void;
type deleteTodoHandler = (id: Date) => void;
type editTodoHandler = (todo: Todo) => void;
type saveTodoHandler = (id: Date, newTodo: Todo) => void;
type filterTodosHandler = (todos: Todo[], filter: Filter) => Todo[];

type Todo = {
  label: string;
  color: string;
  description: string;
  addedDate: Date;
  important: boolean;
  done: boolean;
};

interface GlobalState {
  todos: Todo[];
  filter: Filter;
}

// не смог подобрать не судите строго пишу на TS впервые)

interface PageProps extends GlobalState {
  updateGlobalState: any;
}

interface MainPageState {
  isModalOpened: boolean;
  todo: Todo;
}

interface TodoManipulationProps {
  toggleProperty: togglePropertyHandler;
  deleteTodo: deleteTodoHandler;
  editTodo: editTodoHandler;
}
