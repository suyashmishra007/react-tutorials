const redux = require("redux");

const conterReducer = (state = { counter: 0 }, actions) => {
  if (actions.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (actions.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(conterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
