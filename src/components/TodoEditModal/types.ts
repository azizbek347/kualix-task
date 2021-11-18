import { SyntheticEvent, FormEvent } from 'react';

export interface TodoEditModalProps extends MainPageState {
  toggleModalVisibility: editTodoHandler;
  saveTodo: saveTodoHandler;
}

export type onChangeHandler = (e: SyntheticEvent) => void;
export type onSubmitHandler = (e: FormEvent<HTMLFormElement>) => void;
export type onCloseHandler = () => void;
