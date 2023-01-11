import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import { env } from 'process'
import { idiomReducer } from './idiom'
import { logosReducer } from './logos'

const root = combineReducers({
    idiom: idiomReducer,
    logos: logosReducer
})

const configPersist = {
    key: env.STORE_PASS || 'eltato',
    storage
}

const compostEnhacers = composeWithDevTools(
    applyMiddleware(thunk)
)

const persistState = persistReducer(configPersist, root)

export default function generateStore() {
    const store = createStore(persistState, compostEnhacers)
  const persist = persistStore(store)
  return { store, persist }
}
