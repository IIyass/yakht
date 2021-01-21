import React from 'react';
import { NavWrapper, Toggle } from './style';
import Logo from '../../images/logo.svg';
import ToggleContext from '../../context/ToggleContext';

const Hero = () => {

    return <ToggleContext.Consumer>
        {toggle => (
            <NavWrapper>
                <div
                    role="button"
                    tabIndex="0"
                    onKeyDown={() => toggle.ClickToggle()}
                    onClick={() => toggle.ClickToggle()}>
                    <Toggle toggle={toggle.toggle} >
                        <div />
                        <div />
                        <div />
                    </Toggle>
                </div>
                <div id="logo">
                    <img src={Logo} alt="logo" />
                    <h1>Download the App</h1>
                </div>
            </NavWrapper>
        )}
    </ToggleContext.Consumer>

}
export default Hero;