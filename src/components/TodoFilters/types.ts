export interface FilterProps {
  filter: Filter;
  changeFilter: changeFilterHandler;
}

export interface FilterState {
  options: string[][];
}
