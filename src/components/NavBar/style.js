import styled from 'styled-components';



export const NavWrapper = styled.div`
    width:100%;
    height:58px;
    max-width:1200px;
    margin:0 auto;
    background-color:#02456A;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
   

    #logo{
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-right:20px;
    }

    h1{
        margin:0;
        margin-left:22px;
        margin-bottom:5px;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 20px;
        color:#fff;
        cursor:pointer;
    }
`;
export const Toggle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    cursor:pointer;
    margin-left:20px;
      >div {
          width:27px;
          height:4px;
          background-color:#fff;
          :not(:last-child){
              margin-bottom:5px;
          }
          ${({ toggle }) => toggle && `
             :nth-child(1){
               margin-bottom:0px;
               transform: rotate(-45deg) translateY( 3px);
             }
              :nth-child(2){
                  display:none;
              }
              :nth-child(3){
                margin-bottom:0px;
                transform: rotate(45deg) translateY( -3px);
              }
              `
  }}
  
      }

`;