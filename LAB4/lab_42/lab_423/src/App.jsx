import React from 'react';
import './App.css';
import ArticleManager from './components/ArticleManager';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Week 4 Lab 04.Task3</h1>
                <p>Event Handling & Reusable Components</p>
            </header>

            <main>
                <ArticleManager />
            </main>

            <footer>
                <p>© 2026 - React Article App</p>
            </footer>
        </div>
    );
}

export default App;