import React, { useState } from 'react';

export default function IntroCard({ changeTheme, theme }) {
    return (
        <div className={theme === 'light' ? "intro-card" : "intro-card-dark"}>
            <div className={theme === 'light' ? "card-wrapper" : "card-wrapper-dark"}>
                <div className="three-dots">
                    <div className="dot-1"></div>
                    <div className="dot-2"></div>
                    <div className="dot-3"></div>
                </div>
                <div className={theme === 'light' ? "email-wrapper" : "email-wrapper-dark"}>
                    Nishants440@gmail.com
                </div>
            </div>

            <div className={theme === 'light' ? "main-section" : "main-section-dark"}>
                <div className="image-wrapper">
                    <img className="user-image"
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" />
                    <p
                        className={theme === 'light' ? "theme-header" : "theme-header-dark"}>
                        Change Theme</p>
                    <div className="theme-buttons">
                        <div
                            onClick={() => changeTheme('light')}
                            className="light-theme"></div>
                        <div
                            onClick={() => changeTheme('dark')}
                            className="dark-theme"></div>
                    </div>
                </div>
                <div className={theme === 'light' ? "whoamI-wrapper" : "whoamI-wrapper-dark"}>
                    <div className="small-dot-1"></div>
                    <div className="small-dot-2"></div>
                    <div className="small-dot-3"></div>
                    <div className="small-dot-4"></div>
                    <div className={theme === 'light' ? "blue-card" : "blue-card-dark"}>
                        <div className="blue-card-content">
                            <h3 className={theme === 'light' ? "" : "blue-card-header-dark"}>Who am I</h3>
                            <p className={theme === 'light' ? "" : "blue-card-desc-dark"} >An enthusiastic
                                developer with a knack for
                                building products with good
                                UI and UX.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
