import React, { Component } from 'react';
import BtnBotcamp from './components/BtnBotcamp/';
import LogoBotcamp from './components/Logo';
import './reset.css';

class App extends Component{
    render() {
        return <div>
            <LogoBotcamp />
            <BtnBotcamp />
        </div>
    }

}

export default App