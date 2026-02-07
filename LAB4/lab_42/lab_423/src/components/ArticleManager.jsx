import React, { useState } from 'react';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

const ArticleManager = () => {
    const [articles, setArticles] = useState([
        { id: 1, title: "Firt state", summary: "summary for the 1rst state" }
    ]);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');

    const handleAdd = () => {
        if (title && summary) {
            setArticles([...articles, { id: Date.now(), title, summary }]);
            setTitle('');
            setSummary('');
        }
    };

    const handleRemove = (id) => {
        setArticles(articles.filter(a => a.id !== id));
    };

    return (
        <div>
            <AddArticle
                name="Article Editor"
                title={title}
                summary={summary}
                onChangeTitle={(e) => setTitle(e.target.value)}
                onChangeSummary={(e) => setSummary(e.target.value)}
                onClickAdd={handleAdd}
            />

            <h3>State list</h3>
            <ArticleList articles={articles} onClickRemove={handleRemove} />
        </div>
    );
};

export default ArticleManager;