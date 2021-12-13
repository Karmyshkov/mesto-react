import React from "react";
import avatar from "../../images/avatar.jpg";

const Profile = () => {
    return (
        <section className="profile page__profile">
            <div className="profile__wrap">
                <div className="profile__inner-edit">
                    <img
                        className="profile__avatar"
                        src={avatar}
                        alt="Аватар пользователя"
                    />
                    <button className="profile__btn-avatar" type="button"></button>
                </div>
                <div className="profile__inner">
                    <div className="profile__row">
                        <h1 className="profile__name"></h1>
                        <button
                            className="profile__edit"
                            type="button"
                            aria-label="Изменить">
                        </button>
                    </div>
                    <p className="profile__description"></p>
                </div>
            </div>
            <button className="profile__btn" type="button" aria-label="Добавить"></button>
        </section>
    );
};

export default Profile;