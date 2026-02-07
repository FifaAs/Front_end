import React from 'react';

const AddArticle = ({ name, title, summary, onChangeTitle, onChangeSummary, onClickAdd }) => {
    return (
        <div className="add-article">
            <h2>{name}</h2>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={onChangeTitle}
                />
            </div>
            <div>
                <textarea
                    placeholder="Summary"
                    value={summary}
                    onChange={onChangeSummary}
                />
            </div>
            <button onClick={onClickAdd}>Add</button>
        </div>
    );
};

export default AddArticle;