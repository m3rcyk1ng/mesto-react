import React from 'react';
import {api} from "../utils/Api";
import {useEffect, useState} from "react";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')

    // Данные для профиля
    useEffect(() => {
        api
            .getUserInfo()
            .then((profileInfo) => {
                setUserName(profileInfo.name)
                setUserDescription(profileInfo.about)
                setUserAvatar(profileInfo.avatar)
            })
            .catch((rej) => console.log(rej))
    }, []);

    const [cards, setCards] = useState([])
    // Данные для рендера
    useEffect(() => {
        api
            .getInitialCards()
            .then((res) => {
                setCards(res)
            })
            .catch((rej) => console.log(rej));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__titles">
                    <img className="profile__avatar" title="" src={userAvatar} alt="Аватарка"/>
                    <div className="profile__overlay" onClick={onEditAvatar}></div>
                    <div className="profile__titles-box">
                        <div className="profile__title-box">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__button-edit" type="button" aria-label="Отредактировать профиль" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить новую карточку" onClick={onAddPlace}></button>
            </section>
            <section className="elements">{cards.map((card) => <Card key={card._id} card={card} onCardClick={onCardClick}/>)}</section>
        </main>
    )}

export default Main;