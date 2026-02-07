import React from 'react';

const AddArticle = ({ name, title, summary, onChangeTitle, onChangeSummary, onClickAdd }) => {
    return (
        <div className="add-article">
            <h2>{name}</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={onChangeTitle}
            />
            <textarea
                placeholder="Summary"
                value={summary}
                onChange={onChangeSummary}
            />
            <button onClick={onClickAdd}>Add Article</button>
        </div>
    );
};

export default AddArticle;