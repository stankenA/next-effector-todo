import { createEvent, createStore, sample } from "effector";

const $todos = createStore(["Initial todo"]);

const addNewTodo = createEvent<string>();

sample({
  clock: addNewTodo,
  source: $todos,
  fn: (todo) => todo,
  target: $todos,
});

$todos.watch((state) => console.log(state));

export { $todos, addNewTodo };
