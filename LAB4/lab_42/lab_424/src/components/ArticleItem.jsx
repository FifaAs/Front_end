import React, { useState } from 'react';

const ArticleItem = ({ article, onClickRemove }) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <li className="article-item">
            <button className="remove-btn" onClick={() => onClickRemove(article.id)}>×</button>
            <span
                className="article-title"
                onClick={() => setIsOpened(!isOpened)}
            >
                {article.title}
            </span>

            {isOpened && (
                <p className="article-summary">{article.summary}</p>
            )}
        </li>
    );
};

export default ArticleItem;