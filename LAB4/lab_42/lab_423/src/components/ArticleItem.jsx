import React, { useState } from 'react';

const ArticleItem = ({ article, onClickRemove }) => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleOpen = () => setIsOpened(!isOpened);

    return (
        <li>
            <button onClick={() => onClickRemove(article.id)}>×</button>
            <span onClick={toggleOpen} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                {article.title}
            </span>
            {isOpened && (
                <p style={{ margin: '5px 0 10px 20px', fontStyle: 'italic' }}>
                    {article.summary}
                </p>
            )}
        </li>
    );
};

export default ArticleItem;