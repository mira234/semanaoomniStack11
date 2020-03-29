import React from 'react';

export default function Header({ children }) {
    return (
        /*
        <header>
            //Declarar recebendo a props na fuction
            <h1>{props.title}</h1>
        </header>
        */

        <header>
            <h1>{children}</h1>
        </header>

    )
}