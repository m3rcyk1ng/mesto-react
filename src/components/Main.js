import React from 'react';

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__titles">
                    <img className="profile__avatar" title="" src="#" alt="Аватарка"/>
                    <div className="profile__overlay"></div>
                    <div className="profile__titles-box">
                        <div className="profile__title-box">
                            <h1 className="profile__name"></h1>
                            <button className="profile__button-edit" type="button" aria-label="Отредактировать профиль"></button>
                        </div>
                        <p className="profile__description"></p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить новую карточку"></button>
            </section>
            <section className="elements"></section>
        </main>
    )}

export default Main;