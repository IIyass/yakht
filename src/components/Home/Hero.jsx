import React from 'react';
import { HeroContainer, MobileToggle } from './style';
import SearchInput from '../UI/input';
import Facebook from '../../illustartions/facebook.svg';
import Linkdin from '../../illustartions/linkdin.svg';
import Twitter from '../../illustartions/twitter.svg';
import DeviceButton from '../UI/SocialIconButton';
import ToggleContext from '../../context/ToggleContext';

const Hero = () => {
    return <ToggleContext.Consumer>
        {toggle => (
            <HeroContainer toggle={toggle.toggle}>
                <div id="content">
                    {!toggle.toggle ?
                        <>
                            <h1>
                                Connecting adventure
                                seekers with great boats
                            </h1>
                            <SearchInput
                                placeholder="Book your vacation on yacht"
                            />
                        </> :
                        <MobileToggle>
                            <ul>
                                <li>  Home</li>
                                <li>HOW IT WORKS</li>
                                <li>FAQ</li>
                                <li>CONTACT US</li>
                                <li>
                                    <a
                                        href="https://www.facebook.com">
                                        <img alt="facebook" src={Facebook} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com">
                                        <img alt="linkdin" src={Linkdin} />
                                    </a>
                                    <a
                                        href="https://www.twitter.com">
                                        <img alt="twitter" src={Twitter} />
                                    </a>
                                </li>
                            </ul>
                            <div id="downoald">
                                <h1>Downoald The App</h1>
                                <div>
                                    <DeviceButton>
                                        <span>  Download on the  </span>
                                        <div className="ButtonMark">
                                            App Store
                                </div>
                                    </DeviceButton>
                                    <DeviceButton type='IOS'>
                                        <span>GET IT ON </span>
                                        <div className="ButtonMark">
                                            Google Play
                                </div>

                                    </DeviceButton>

                                </div>
                            </div>
                        </MobileToggle>
                    }
                </div>
            </HeroContainer>
        )}
    </ToggleContext.Consumer >
}
export default Hero;