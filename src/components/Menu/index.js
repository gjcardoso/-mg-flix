import React from 'react';
import Logo from '../../assets/img/Logo.png'
//import ButtonLink from './components/ButtonLink'
import Button from '../Button'
import './Menu.css'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="<mg/>flix logo"/>
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}
export default Menu;