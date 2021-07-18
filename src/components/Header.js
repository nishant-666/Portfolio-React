import React from 'react'

export default function Header({theme}) {
    return (
        <div className="header-main">
            <h1 className={theme === 'light' ? "name-header" : "name-header-dark"}>
                Hi, I am Nishant Kumar
            </h1>
        </div>
    )
}
