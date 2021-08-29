import React, {useState} from 'react';

import Header from './Header'
import Main from './Main'
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    const [selectedCard, setSelectedCard] = useState({});
    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({});
    }

    function handlePopupClose(event) {
        if (event.target.classList.contains('popup_open') || event.target.classList.contains('popup__button-close')) {
            closeAllPopups();
        }
    }

    return (
        <>
            <Header/>
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
            <ImagePopup card={selectedCard} onClose={handlePopupClose}/>
            <PopupWithForm isOpen={isEditProfilePopupOpen} title='Редактировать профиль' buttonText='Сохранить' onClose={handlePopupClose}>
                <input className="popup__input popup__input_type_name" placeholder="Имя" type="text" name="authorName"
                       id="name" minLength="2" maxLength="40" required/>
                <span className="popup__input-error name-error"></span>
                <input className="popup__input popup__input_type_description" placeholder="О себе" type="text"
                       name="authorDescription" id="description" minLength="2" maxLength="200" required/>
                <span className="popup__input-error description-error"></span>
            </PopupWithForm>

            <PopupWithForm isOpen={isAddPlacePopupOpen} title='Новое место' buttonText='Создать' onClose={handlePopupClose}>
                <input className="popup__input popup__input_type_title" placeholder="Название" type="text" name="name"
                       id="place" minLength="2" maxLength="30" required/>
                <span className="popup__input-error place-error"></span>
                <input className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" type="url"
                       name="link" id="link" required/>
                <span className="popup__input-error link-error"></span>
            </PopupWithForm>

            <PopupWithForm isOpen={isEditAvatarPopupOpen} title='Обновить аватар' buttonText='Создать' onClose={handlePopupClose}>
                <input className="popup__input popup__input_type_avatar" id="avatar" type="url" name="avatar"
                       placeholder="Ссылка на новую аватарку" required/>
                <span className="popup__input-error avatar-error"></span>
            </PopupWithForm>
            <Footer/>
        </>
)
}


export default App;