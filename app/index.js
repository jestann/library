import React from 'react'
import ReactDOM from 'react-dom'
// import 'bootstrap/dist/css/bootstrap.css';
// import registerServiceWorker from './tools/registerServiceWorker'

import 'main.css'
import App from './components/app'

ReactDOM.render(<App />, document.getElementById('root'))

// registerServiceWorker()

/* add redux

import { createStore } from 'redux';
import myApp from './reducers';
let store = createStore(myApp);
function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store}/>
      <hr />
      <Results store={store}/>
    </div>,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();

*/