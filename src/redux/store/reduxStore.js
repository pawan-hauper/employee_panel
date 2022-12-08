import { legacy_createStore as createStore} from 'redux'
import contactReducer from '../reducers/contactReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(contactReducer, composeWithDevTools())
