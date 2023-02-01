import styled from 'styled-components'
import logo from '../../img/logo.jpg'

const Fixedmenu = styled.div`
position: fixed;
display: flex;
background-color: ${props => props.theme.colors.color1};
justify-content: space-between;
align-text: center;
height: 56px;
padding: 10px;
width: 100vw;
`
const Logo = styled.img`
height: 50px;
border-radius: 30%;
margin: auto 10px;
`
const Center = styled.div`
width 60vw;
position: relative;
`

const Serchtext = styled.input`
color: ${props => props.theme.colors.color2};
width: calc(100% - 100px);
height: 26px;
margin-top: 12px;
display: block;
border: none;
outline: none;
position: absolute;
top: 0;
left: 20px;
`
const Buttonimg = styled.div`
height: 40px;
width: 64px;
`
const End = styled.div`
background-color: "#dd0000";
height: 50px;
width: 100px;
`
const Radiustext = styled.div`
border: 1px solid ${props => props.theme.colors.color2};
border-right: none;
border-radius: 40px 0 0 40px;
width: 15%;
height: 50px;
position: absolute;
top: 0;
left: 0;
`

const Serchdiv = styled.div`
border: 1px solid ${props => props.theme.colors.color2};
border-right: none;
border-left: none;
width: calc(100% - 15% - 80px);
height: 50px;
position: absolute;
top: 0;
left: 15%;
`

const Radiusbutton = styled.div`
border: 1px solid ${props => props.theme.colors.color2};
border-left: none;
border-radius: 0 40px 40px 0;
width: 80px;
height: 50px;
position: absolute;
top: 0;
right: 0;
`

function fixedmenu() {
 return (
  <Fixedmenu>
    <Logo src={logo}/>
    <Center>
      <Radiustext />
      <Serchtext type="text"/>
      <Serchdiv>
      </Serchdiv>
      <Radiusbutton>
        <Buttonimg />
      </Radiusbutton>
    </Center>
    <End></End>
  </Fixedmenu>
  )
}

export default fixedmenu
