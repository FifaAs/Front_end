import { useState } from "react";

function AddArticle({ name }) {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [articles, setArticles] = useState([]);

    const handleAdd = () => {
        if (!title || !summary) {
            alert("Пожалуйста, введите и заголовок, и описание!");
            return;
        }

        // Создаем объект статьи
        const newArticle = { title, summary };

        // Добавляем статью в список
        setArticles([...articles, newArticle]);

        // Очищаем поля ввода
        setTitle("");
        setSummary("");
    };

    return (
        <section>
            <h1>{name}</h1>

            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                placeholder="Summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
            />

            <button onClick={handleAdd}>Add</button>

            <h2>Articles</h2>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <strong>{article.title}</strong>: {article.summary}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default AddArticle;
