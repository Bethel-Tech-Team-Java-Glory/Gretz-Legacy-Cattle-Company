import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Home, ServiceList } from './screens';
import './index.css';

// import { createStore }  from 'redux';
import { Provider } from 'react-redux';
import store from './store/index';

const Index = () => (
    <Provider store={store}>
        <HashRouter>
            <div>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><a href="http://localhost:8080/login">Log In</a></li>
                    <li><a href="http://localhost:8080/signup">Sign Up</a></li>
                    <li><NavLink to="/service">Services</NavLink></li>
                </ul>
                <div className="content">
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route path="/service" component={ServiceList} />
                </div>
                
            </div>
        </HashRouter>
    </Provider>
);

ReactDOM.render(
    <Index />, 
    document.getElementById('root')
);
