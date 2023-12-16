import { createEvent, createStore, sample } from "effector";

const $todos = createStore(["Initial todo", "kekw"]);

const addNewTodo = createEvent<string>();
const removeTodo = createEvent<string>();

sample({
  clock: addNewTodo,
  source: $todos,
  fn: (todos, newTodo) => [...todos, newTodo],
  target: $todos,
});

sample({
  clock: removeTodo,
  source: $todos,
  fn: (todos, todo) => todos.filter((item) => item !== todo),
  target: $todos,
});

$todos.watch((state) => console.log(state));

export { $todos, addNewTodo, removeTodo };
