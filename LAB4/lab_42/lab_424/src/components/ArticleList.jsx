import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles, onClickRemove }) => {
    return (
        <ul className="article-list">
            {articles.map((article) => (
                <ArticleItem
                    key={article.id}
                    article={article}
                    onClickRemove={onClickRemove}
                />
            ))}
        </ul>
    );
};

export default ArticleList;