import { createStore } from 'redux';
import reducers from './reducer';

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed - ", store.getState());
});

export default store;

