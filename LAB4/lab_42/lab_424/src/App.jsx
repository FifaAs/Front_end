import React from 'react';
import './App.css';
import ArticleManager from './components/ArticleManager';
import AddArticle from './components/AddArticle';
import ArticleList from './components/ArticleList';

function App() {
    return (
        <div className="App">
            <h1>Week 4 Lab: Article System Task 4</h1>

            <ArticleManager
                renderAddArticle={(props) => (
                    <AddArticle {...props} />
                )}
                renderArticleList={(props) => (
                    <ArticleList {...props} />
                )}
            />
        </div>
    );
}

export default App;