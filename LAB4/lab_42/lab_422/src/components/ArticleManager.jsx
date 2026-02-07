import React, { useState } from 'react';
import AddArticle from "./AddArticle";

const ArticleManager = () => {
    // Состояние для полей ввода
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    // Состояние для списка статей
    const [articles, setArticles] = useState([]);

    // Функции изменения текста
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleSummaryChange = (e) => setSummary(e.target.value);

    // Функция добавления
    const handleAddClick = () => {
        if (title.trim() && summary.trim()) {
            const newArticle = { id: Date.now(), title, summary };
            setArticles([...articles, newArticle]);

            // Очищаем поля после добавления
            setTitle('');
            setSummary('');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>State Manager</h1>

            {/* Вызов вынесенного компонента */}
            <AddArticle
                name="Add new state"
                title={title}
                summary={summary}
                onChangeTitle={handleTitleChange}
                onChangeSummary={handleSummaryChange}
                onClickAdd={handleAddClick}
            />

            <hr />

            {/* Вывод списка (просто для проверки работы) */}
            <div>
                {articles.map(item => (
                    <div key={item.id} style={{ borderBottom: '1px solid #ccc' }}>
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleManager;