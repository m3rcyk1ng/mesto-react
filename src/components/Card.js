import React from 'react';
function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <article className="element">
            <img className="element__photo" src={card.link} alt={card.name}/>
            <div className="element__overlay" onClick={handleClick}></div>
            <button className="element__delete-icon" type="button" aria-label="Удалить"></button>
            <div className="element__description">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-container">
                    <button className="element__like" type="button" aria-label="Нравиться"></button>
                    <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;