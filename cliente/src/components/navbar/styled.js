import styled from 'styled-components';

export const Containner = styled.div`
margin-top: -2.2vw;
position: absolute;
width: 84%;
margin-left: 16%;
height: 120px;
span{
    color: blue;
}
ul{
    list-style-type: none;
    font-size: 22px;
    margin: 40px;
    padding: 0;
    margin-top: 2vw;
    text-align: right;
}
li{
   margin-top:20px;
    display: inline-block;
    margin-left: 40px;
    
}
a{
    font-family:"Raleway";
    text-decoration: none;
}
a:link{
    color:black;
}
a:visited{
    color: black;
}
a:hover{
    color:#0f1a2c;
    
}
a:focus{
    color: black;
}
a:active{
    color: black;
}
/* button{
    display: inline-block;
    margin-left: 40px;
    font-size: 22px;
    background-color: transparent;
    border-width: 1.5px;
}
button:hover { 
    color:#720F9E;
 } */

button{
  align-items: center;
  background-color: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  letter-spacing: -.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 40px;
}

button:focus {
    border-color: #0f1a2c;
    color: #0f1a2c;
    fill: #0f1a2c;
}

button:hover {
  border-color: #0f1a2c;
  color: #0f1a2c;
  fill: #0f1a2c;
  
}

button:active {
  border-color: #0f1a2c;
  color: #0f1a2c;
  fill: #0f1a2c;
}

@media (min-width: 768px) {
  button {
    min-width: 170px;
  }
}
img{

}
h3{
    font-size: 25px;
    font-family: 'Raleway';
font-style: normal;
font-weight: 1000;
    color: #0f1a2c;
  position:fixed;
    margin-top: 10px;
  margin-left:3%;
}
`