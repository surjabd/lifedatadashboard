import React from 'react';
import './App.css';
import MainLayout from './components/MainLayoutComponent.js'
import 'antd/dist/antd.css'
import {BrowserRouter as Router} from 'react-router-dom';
import history from './history';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <MainLayout/>
            </Router>
        </div>
    );
}

export default App;
