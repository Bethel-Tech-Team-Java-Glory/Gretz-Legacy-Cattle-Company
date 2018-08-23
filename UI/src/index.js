import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Home } from './screens';
import './index.css';

import { createStore }  from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers/reducer';

const Index = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <div>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                    <li><NavLink to="/login">Log In</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    
                </div>
                
            </div>
        </HashRouter>
    </Provider>
);

ReactDOM.render(
    <Index store={createStore(reducer)} />, 
    document.getElementById('root')
);
