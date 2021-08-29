function PopupWithForm({name, title, children, buttonText, isOpen, onClose}) {
    return(
        <div className={`popup ${isOpen ? 'popup_open' : ''}`} onClick={onClose}>
            <form className="popup__container" method="post" name={name}>
                <button className="popup__button-close" type="button"></button>
                <h3 className="popup__title">{title}</h3>
                {children}
                <button className="popup__submit" type="submit">{buttonText}</button>
            </form>
        </div>
    )
}

export default PopupWithForm;