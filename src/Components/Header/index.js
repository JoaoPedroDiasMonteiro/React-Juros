import React from 'react'
import './style.css'

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <span className="brand">Calcula Juros</span>
            </header>
        )
    }
}