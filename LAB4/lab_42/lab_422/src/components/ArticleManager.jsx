import React, { useState } from 'react';
import AddArticle from "./AddArticle";

const ArticleManager = () => {
    // ��������� ��� ����� �����
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    // ��������� ��� ������ ������
    const [articles, setArticles] = useState([]);

    // ������� ��������� ������
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleSummaryChange = (e) => setSummary(e.target.value);

    // ������� ����������
    const handleAddClick = () => {
        if (title.trim() && summary.trim()) {
            const newArticle = { id: Date.now(), title, summary };
            setArticles([...articles, newArticle]);

            // ������� ���� ����� ����������
            setTitle('');
            setSummary('');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>State Manager</h1>

            {/* ����� ����������� ���������� */}
            <AddArticle
                name="Add new state"
                title={title}
                summary={summary}
                onChangeTitle={handleTitleChange}
                onChangeSummary={handleSummaryChange}
                onClickAdd={handleAddClick}
            />

            <hr />

            {/* ����� ������ (������ ��� �������� ������) */}
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