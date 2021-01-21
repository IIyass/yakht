import styled from 'styled-components';
import hero from '../../illustartions/hero.svg';
import media from '../../Device';

export const HeroContainer = styled.div`
    height:90vh;
    width:100%;
    background-image: ${({ toggle }) => toggle ? null : `url(${hero})`}  ;
    background-repeat: no-repeat;
    background-size: cover;
    position:relative;
    background-color: ${({ toggle }) => toggle ? '#02456A' : null}  ;  
    
    #content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width:100%;
        height:100%;
        top:50%;
        left:50%; 
        transform:translate(-50%,-50%);
        position:absolute;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 100px;
        text-align: center;
        color: #FFFFFF;
         input{
            width:500px;
            height:48px;
        }
        >div{
            margin:0 auto ;
        }
        h1{
            width:80%;
            margin:0 auto; 
        }
        
    }

    ${media.tablet`
    #content{
        input{
            width:300px;
        }
        h1{
            font-size: 30px;
            line-height: 50px;
        }
    }
  `};

    ${media.mobile`
      #content{
      input{
          width:250px;
          :placeholder{
              font-size:20px;
          }
      }
      h1{
          font-size: 20px;
          line-height: 30px;
      }
  }
`};
        ${media.mobileX`
        #content{
           input{
            width:200px;
        } 
    }
`};

`;

export const MobileToggle = styled.div`
   height:100%;
   width:100%;
   background-color:#02456A  ; 
   ul{
      height:60vh;
      width:100%;
      list-style:none;
      margin:0;
      padding:0;
      display:flex;
      flex-direction:column;
      border: 1px solid rgba(255, 255, 255, .2);
      justify-content: space-around;
    li{
      font-family:IBM Plex Sans;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      text-transform: uppercase;
      color:#fff;
      cursor:pointer;
      :hover{
          color:#0096EA;
      }
      
      :last-child{
         display:flex;
         flex-direction:row;
         justify-content:center;
         a{
             margin : 0px 20px;
             cursor:pointer;
         }
      }

      }
}
 
     #downoald{
        height:25vh;
         padding:12px 0px;
       
         h1{
            font-family: IBM Plex Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;   
            margin-bottom:12px;
    
         }
         >div{
             display:flex;
             flex-direction:row;
             justify-content:center;
             line-height:0px;
             >div{
                width: 236px;
                height: 80px;
                margin-right:15px;
             }
           
         }
     }
 
  
 
     ${media.mobile`
     #downoald{
        >div{
            >div{
                width: 106px;
                height: 50px;
                margin-right:15px;
             }
        }
    }
 `};
         ${media.mobileX`
    
 `};
 
`;

export const Wrapper = styled.div`

    width:100%;
    max-width:1200px;
    margin:0 auto;
    height:100vh;
 


`;