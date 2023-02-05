import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Root from './reducers/Root';

const middleware = [thunk];
const Store = createStore(
	Root,
	composeWithDevTools(
		applyMiddleware(...middleware),
		// other store enhancers if any
	  )
	
);
export default Store;