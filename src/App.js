import React from 'react';
import {Counter} from './features/counter/Counter';
import './App.css';
import {Display} from "./features/counter/Display";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="mb-10 mt-20"
                >Maka Counter App</h1>
                <Counter/>
                <Display/>
            </header>
        </div>
    );
}

export default App;
