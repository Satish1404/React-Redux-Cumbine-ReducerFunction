
import {legacy_createStore as createStore} from 'redux'

import rootReducer from '../_reducers/CumbReducers'



export const storeValue = createStore(rootReducer)