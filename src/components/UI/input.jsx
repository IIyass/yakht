import styled from 'styled-components';
import React from 'react';
import Union from '../../illustartions/Union.svg'
import media from '../../Device';

const Input = styled.input.attrs(props => ({
    type: props.type,
}))`
      background: rgba(255, 255, 255, 0.2);   
      border-radius: 300px;
      width:auto;
      height:auto;
      positon:absolute;
      right:0;
      padding-left:10px;
      color:#fff;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;    
      opacity:1;  
      ::placeholder{
        color: #fff;
        opacity:1;
      }

  ${media.mobile`
  ::placeholder{
    font-size: 12px;
      line-height: 45px; 
}
`};

   ${media.mobileX`
   ::placeholder{
    font-size: 10px;
    line-height: 45px; 
}
`};
  `;

const Container = styled.div`
  width:min-content;
  height:auto;
  position:relative;
    
  
  img{
      position:absolute;
      right:20px;
      top:48%;
  }
  `;

const SearchInput = (props) => {
    return (
        <Container>
            <Input
                {...props}
            />
            <img src={Union} alt="union" />
        </Container>
    )
}

export default SearchInput;