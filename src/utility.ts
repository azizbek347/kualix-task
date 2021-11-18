export const generateNewTodo = ({
  label = '',
  color = '#000000',
  description = '',
} = {}): Todo => ({
  label,
  color,
  description,
  important: false,
  done: false,
  addedDate: new Date(),
});
