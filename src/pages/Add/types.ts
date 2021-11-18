import { SyntheticEvent, FormEvent } from 'react';

export type onChangeHanlder = (e: SyntheticEvent) => void;
export type createTodoFunction = (todoCopy: Todo) => void;
export type onSubmitHandler = (e: FormEvent<HTMLFormElement>) => void;
