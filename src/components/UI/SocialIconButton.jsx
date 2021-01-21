import styled from 'styled-components';
import React from 'react';
import Ios from '../../images/ios.svg';
import Android from '../../images/android.svg'
import media from '../../Device';

export const DeviceButton = styled.div`
position:relative;
width: inherit;
height: inherit;
 
#mark{
  width: 100%;
  height: inherit;
  background: #000000;
  border-radius: 9.6px;
  font-family:Roboto;
  font-size:16px;
  font-weight:400;
  color: #fff;
  cursor: pointer;
  margin:0;
 
#buttonContent{
   
    position:absolute;
    left:60px;
    top:10px;
    width:200px;
    height:100%;
 
    
}
.ButtonMark{
    color:#fff;
    font-size:25px;
    width:max-content;
    margin:0;
    text-align:left;
    font-family:Roboto;
    font-weight:500;
 
  }
span{
    color:#fff;
    width:auto;
    display:inline-block;
    font-size:16px;
    font-family:Roboto;
    font-weight:400;
 
}

#childreen{
    text-align: start;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);

}
}
  #icon{
   position:absolute;
   margin:0;
   top:50%;
   left:25px;
   transform: translateY(-50%);
   width: 36.96px;
   height: 45.3px;
  }

  ${media.mobileY`
  #mark{
    span{
     font-size:13px;
}
   .ButtonMark{
     font-size:17px;
  }
 
}

#icon{
    width: 28.96px;
    height: 28.3px;
    left:9px;
   }
 
`};


  ${media.mobile`
  #mark{
    span{
     font-size:8px;
}
   .ButtonMark{
     font-size:12px;
  }
  #childreen{
    right:4px;
    text-align:center;
}

}

#icon{
    width: 20.96px;
    height: 20.3px;
    left:9px;
   }
`};

  ${media.mobileX`
  #mark{
    span{
     font-size:7px;
}
   .ButtonMark{
     font-size:10px;
  }
 
}
 
`};
  `;

const DeviceButtonContainer = ({ type, children }) => (

  <DeviceButton>
    <button id="mark">
      <div id="childreen">
        {children}
      </div>
    </button>
    {type === 'IOS' ? <img alt="icon" id="icon" src={Ios} /> :
      <img id="icon" alt="icon" src={Android} />}
  </DeviceButton>

);

export default DeviceButtonContainer;

