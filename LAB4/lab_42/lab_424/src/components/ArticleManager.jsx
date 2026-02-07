import React, { useState } from 'react';

const ArticleManager = ({ renderAddArticle, renderArticleList }) => {
    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');

    const handleAdd = () => {
        if (title.trim() && summary.trim()) {
            const newArticle = { id: Date.now(), title, summary };
            setArticles([...articles, newArticle]);
            setTitle('');
            setSummary('');
        }
    };

    const handleRemove = (id) => {
        setArticles(articles.filter(art => art.id !== id));
    };

    return (
        <div className="manager-container">
            {renderAddArticle({
                name: "Create New Article",
                title,
                summary,
                onChangeTitle: (e) => setTitle(e.target.value),
                onChangeSummary: (e) => setSummary(e.target.value),
                onClickAdd: handleAdd
            })}

            <hr />

            {renderArticleList({
                articles,
                onClickRemove: handleRemove
            })}
        </div>
    );
};

export default ArticleManager;