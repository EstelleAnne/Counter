import React from 'react'
import {createStore} from 'redux'
import reducers from './reducers'
import Counter from './components/Counter'
import ReactDOM from 'react-dom'

const rootE1 = document.getElementById('root')
const store = createStore(reducers)
const render = () => ReactDOM.render(
	<Counter
		value={store.getState()}
		addNum={()=>store.dispatch({"type":"ADDNUM"})}
		delNum={()=> store.dispatch({"type":"DELNUM"})}
		add2={()=>store.dispatch({"type":"ADD2"})}
	/>,
	rootE1
)
render()
store.subscribe(render)