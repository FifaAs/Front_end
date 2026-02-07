import React from 'react';


const AddArticle = ({ name, title, summary, onChangeTitle, onChangeSummary, onClickAdd }) => {
    return (
        <section>
            <h2>{name}</h2>
            <div>
                <input
                    type="text"
                    placeholder="Name State"
                    value={title}
                    onChange={onChangeTitle}
                />
            </div>
            <div>
                <textarea
                    placeholder="Short Summary"
                    value={summary}
                    onChange={onChangeSummary}
                />
            </div>
            <button onClick={onClickAdd}>Add</button>
        </section>
    );
};

export default AddArticle;