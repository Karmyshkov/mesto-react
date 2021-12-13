import React from 'react';
import './App.css';
import logo from '../../images/logo.svg';
import avatar from '../../images/avatar.jpg';

const App = () => {
    return (
        <div className="body">
            <div className="page">
                <header className="header page__header">
                    <a href="#">
                        <img
                            className="header__logo"
                            src={logo}
                            alt="Логотип веб-сайта Место"
                        />
                    </a>
                </header>

                <main className="content">

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

                    <section className="places page__places">
                        <ul className="places__cards"></ul>
                    </section>
                </main>

                <footer className="footer">
                    <p className="footer__copyright">2021 Mesto Russia</p>
                </footer>
            </div>
        </div>
    )
}

export default App;
