import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App';
import './App.css'




import createStore from './store';
 
const store = createStore();

/*setTimeout(function(){
    store.dispatch({
        type: 'SET_BOOKS',
        payload: [
            {
            id:0,
            title:'Простая книга'
            }
        ]
    });
}, 2000)
 */
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
 document.getElementById('root'));

